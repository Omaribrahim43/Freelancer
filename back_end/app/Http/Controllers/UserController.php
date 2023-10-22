<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return response()->json($users, 200);
    }

    public function getuser($id)
    {
        $users = User::find($id);
        if (!$users) {
            return response()->json(['error' => 'User not found'], 404);
        }
        return response()->json($users);
    }


    public function updateUser(Request $request, $id)
    {
        $validator = Validator::make(
            $request->all(),
            [
                // 'image' => 'image|mimes:jpeg,png,gif',
                'username' => 'required|string',
                'name' => 'required|string',
                // 'last_name' => 'string|nullable',
                'email' => 'required|email',
                // 'password' => 'required|min:8',
                // 'number' => 'string|nullable',
                // 'age' => 'integer|nullable',
                // 'gender' => 'string|nullable',
                // 'bio' => 'string|nullable',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        User::where('id', $id)->update([
            'username' => $request->username,
            'name' => $request->name,
            'email' => $request->email,
            'contact_info' => $request->number,
            'age' => $request->age,
            'gender' => $request->gender,
            'Bio' => $request->bio,
        ]);

        // $user = Auth::user();
        // $user = User::find($id);


        // Load the 'reviews' and 'order' relationships using Eager Loading via a query builder context
        // $userWithRelationships = User::with(['reviews', 'order', "projects"])->find($user->id);

        // if ($userWithRelationships) {
        //     return response()->json(['user' => $userWithRelationships]);
        // } else {
        //     return response()->json(['message' => 'User not found'], 404);
        // }

        // if ($user) {
            return response()->json(['suucsees']);
        }


    //This function to add update password info that come from react page as response to API 
    public function updateUserPass(Request $request, $id)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'newPassword' => [
                    'required',
                    'min:8',
                    'regex:/^(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/',
                ],
            ]
        );

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        User::where('id', $id)->update([
            'password' => $request->newPassword,
        ]);

        return response()->json(['message' => 'Password Updated Successfully'], 201);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
