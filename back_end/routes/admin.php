<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\FeatureController;
use App\Http\Controllers\Backend\ProjectController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\HR_System\AdminHomeController;
use App\Http\Controllers\HR_System\AttendanceController;
use App\Http\Controllers\HR_System\DepartmentsController;
use App\Http\Controllers\HR_System\EmployeesController;
use App\Http\Controllers\HR_System\JobsController;
use App\Http\Controllers\HR_System\SalariesController;
use App\Http\Controllers\HR_System\VacationsController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->name('admin.')->group(function () {
    Route::middleware(['guest:admin'])->group(function () {
        Route::view('/login', 'admin.pages.login')->name('login');
        Route::post('/login_handler', [AdminController::class, 'loginHandler'])->name('login_handler');
    });
    Route::middleware(['auth:admin'])->group(function () {
        Route::get('/home', [AdminHomeController::class, 'index'])->name('home');
        Route::post('/logout_handler', [AdminController::class, 'logoutHandler'])->name('logout_handler');
        Route::resource('users', UserController::class);
        Route::resource('categories', CategoryController::class);
        Route::resource('projects', ProjectController::class);
        Route::get('projects/accept/{id}', [ProjectController::class, 'acceptProject'])->name('project.accept');
        Route::get('projects/reject/{id}', [ProjectController::class, 'rejectProject'])->name('project.reject');
        Route::resource('features', FeatureController::class);
        Route::get('/profile', [AdminController::class, 'adminProfile'])->name('profile');
        Route::post('/profile-update/{id}', [AdminController::class, 'updateProfile'])->name('profile.update');
        Route::get('/profile/change-password', [AdminController::class, 'changePassword'])->name('profile.change-password');
        Route::post('/profile/update-password/{id}', [AdminController::class, 'updatePassword'])->name('profile.update-password');

        // human resource
        Route::resource('employees', EmployeesController::class);
        Route::resource('departments', DepartmentsController::class);
        Route::resource('jobs', JobsController::class);
        Route::resource('salaries', SalariesController::class);
        Route::resource('vacations', VacationsController::class);
        Route::resource('attendance', AttendanceController::class);

    });
});
