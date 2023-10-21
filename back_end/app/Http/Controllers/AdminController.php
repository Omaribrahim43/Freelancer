<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;
use App\Traits\ImageUploadTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    use ImageUploadTrait;
    public function loginHandler(Request $request)
    {
        $fieldType = filter_var($request->login_id, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        if ($fieldType == 'email') {
            $request->validate([
                'login_id' => 'required|email|exists:admins,email',
                'password' => 'required|min:5|max:45',
            ], [
                'login_id.required' => 'Email or Username is required',
                'login_id.email' => 'Invalid email address',
                'login_id.exists' => 'Email does not exists in the system',
                'password.required' => 'Password is required',
            ]);
        } else {
            $request->validate([
                'login_id' => 'required|email|exists:admins,username',
                'password' => 'required|min:5|max:45',
            ], [
                'login_id.required' => 'Email or Username is required',
                'login_id.email' => 'Invalid email address',
                'login_id.exists' => 'Email does not exists in the system',
                'password.required' => 'Password is required',
            ]);
        }

        $credts = array(
            $fieldType => $request->login_id,
            'password' => $request->password
        );

        if (Auth::guard('admin')->attempt($credts)) {
            return redirect()->route('admin.home');
        } else {

            $notification = array(
                'message' => 'Incorrect credentials!',
                'alert-type' => 'error',
            );
            return redirect()->route('admin.login')->with($notification);
        }
    }

    public function logoutHandler(Request $request)
    {
        Auth::guard('admin')->logout();
        $notification = array(
            'message' => 'You are logged out successfully!',
            'alert-type' => 'success',
        );
        return redirect()->route('admin.login')->with($notification);
    }

    public function adminProfile()
    {
        $id = Auth::user()->id;
        $profileData = Admin::findOrFail($id);
        return view('admin.profile.profile', compact('profileData'));
    }
    public function updateProfile(Request $request, $id)
    {
        $request->validate([
            'image' => ['nullable', 'max:4196', 'image'],
            'username' => ['required', 'max:50'],
            'name' => ['required', 'max:30'],
            'email' => ['required', 'email'],
        ]);

        $admin = Admin::findOrFail($id);

        $imagePath = $this->updateImage($request, 'image', 'uploads', $admin->image);

        $admin->image = empty(!$imagePath) ? $imagePath : $admin->image;
        $admin->username = $request->username;
        $admin->name = $request->name;
        $admin->email = $request->email;
        $admin->save();

        $notification = array(
            'message' => 'User Updated Successfully!!',
            'alert-type' => 'success',
        );

        return redirect()->route('admin.profile')->with($notification);
    }
    public function changePassword()
    {
        $id = Auth::user()->id;
        $profileData = Admin::findOrFail($id);
        return view('admin.profile.change_password', compact('profileData'));
    }
    public function updatePassword(Request $request, $id)
    {
        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|confirmed'
        ]);

        if (!Hash::check($request->old_password, auth::user()->password)) {
            $notification = array(
                'message' => 'Old Password Does Not Match!',
                'alert-type' => 'error',
            );
            return back()->with($notification);
        }

        Admin::whereId(auth()->user()->id)->update([
            'password' => Hash::make($request->new_password)
        ]);
        $notification = array(
            'message' => 'Password Changed Successfully!',
            'alert-type' => 'success',
        );
        return back()->with($notification);
    }
}
