<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
class AuthController extends Controller
{
    public function googleLogin(Request $request)
    {
        $googleId = $request->input('google_Id');
        $email = $request->input('email');
        $name = $request->input('name');
        $imageUrl = $request->input('image');

        // Check if the user with this Google ID already exists in your database.
        $user = User::where('google_id', $googleId)->first();

        if (!$user) {
            // If the user doesn't exist, create a new user.
            $user = new User();
            $user->google_id = $googleId;
            $user->name = $name;
            $user->email = $email;
            $user->image = $imageUrl;
            $user->save();
            

        }

        // Authenticate the user.
        Auth::login($user);
        // Load the 'reviews' and 'order' relationships using Eager Loading via a query builder context
        $user = Auth::user();

        $userWithRelationships = User::with(['reviews', 'order', "projects"])->find($user->id);

        if ($userWithRelationships) {
            return response()->json(['user' => $userWithRelationships]);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
        // Return a response to your React frontend.
        
    }
}

