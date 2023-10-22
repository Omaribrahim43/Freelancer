<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): Response
    {
        $request->authenticate();

        $request->session()->regenerate();

        return response()->noContent();
    }
    public function User1()
    {
        // Get the authenticated user
        $user = Auth::user();
        
        
        // Load the 'reviews' and 'order' relationships using Eager Loading via a query builder context
        $userWithRelationships = User::with(['reviews', 'order', "projects", 'projects.category',"order.project"])->find($user->id);

        if ($userWithRelationships) {
            return response()->json(['user' => $userWithRelationships]);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }


    public function destroy(Request $request): Response
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
