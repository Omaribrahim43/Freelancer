<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\FeatureController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
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

Route::get('projects', [ProjectController::class, 'index'])->name('show.projects');
Route::get('projects/category/{id}', [ProjectController::class, 'categoryProjects'])->name('show.category.projects');
Route::get('projects/{id}', [ProjectController::class, 'oneProject'])->name('show.one.projects');
Route::post('projects/create', [ProjectController::class, 'store'])->name( 'store.projects');
Route::put('projects/update/{id}', [ProjectController::class, 'update'])->name('update.projects');
Route::delete('projects/delete/{id}', [ProjectController::class, 'destroy'])->name('delete.projects');

Route::get('categories', [CategoryController::class, 'index'])->name('show.categories');

Route::get('features', [FeatureController::class, 'index'])->name('show.projects');
Route::get('features/create', [FeatureController::class, 'store'])->name('store.projects');




