<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\FeatureController;
use App\Http\Controllers\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('users', [UserController::class, 'index']);

Route::get('users/{id}', [UserController::class, 'getuser']);
Route::put('users/update/{id}', [UserController::class, 'updateUser']);
Route::put('users/updatepass/{id}', [UserController::class, 'updateUserPass']);


Route::get('projects', [ProjectController::class, 'index'])->name('show.projects');
Route::get('projects/category/{id}', [ProjectController::class, 'categoryProjects'])->name('show.category.projects');
Route::get('projects/{id}', [ProjectController::class, 'oneProject'])->name('show.one.projects');
Route::post('projects/create', [ProjectController::class, 'store'])->name( 'store.projects');
Route::post('projects/add', [ProjectController::class, 'create'])->name( 'add.projects');
Route::put('projects/update/{id}', [ProjectController::class, 'update'])->name('update.projects');
Route::delete('projects/delete/{id}', [ProjectController::class, 'destroy'])->name('delete.projects');

Route::get('categories', [CategoryController::class, 'index'])->name('show.categories');

Route::get('features', [FeatureController::class, 'index'])->name('show.projects');
Route::get('features/project/{id}', [FeatureController::class, 'projectFeatures'])->name('feature.projects');
Route::post('features/create', [FeatureController::class, 'store'])->name('store.projects');


Route::post('orders/create', [OrderController::class, 'store'])->name( 'store.order');
Route::get('orders/project/{id}', [OrderController::class, 'projectOrders'])->name( 'projectOrders.order');
// Reviews 
// Route::resources(ReviewController::class)
Route::get('reviews', [ReviewController::class, 'index'])->name('show.reviews');
Route::get('review/{id}', [ReviewController::class, 'oneReview'])->name('show.one.review');
Route::get('review/project/{id}', [ReviewController::class, 'projectReviews'])->name('show.one.review');
Route::post('reviews/store', [ReviewController::class, 'store'])->name('store.reviews');
Route::post('reviews/add', [ReviewController::class, 'create'])->name('add.reviews');
Route::put('reviews/update/{id}', [ReviewController::class, 'update'])->name('update.reviews');
Route::delete('reviews/delete/{id}', [ReviewController::class, 'destroy'])->name('delete.reviews');



// login 
Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware(['web', 'guest'])
    ->name('login');
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout');

Route::get('/get-csrf-token', function () {
    return response()->json(['token' => csrf_token()]);
});
Route::get('/user', [AuthenticatedSessionController::class, 'User1'])
    ->middleware('auth');
    
Route::get('/usersss', [AuthenticatedSessionController::class, 'User2']);

Route::post('/register', [RegisteredUserController::class, 'store'])
    ->middleware('guest')
    ->name('register');
Route::post('/googlelogin', [AuthController::class, 'googleLogin']);

