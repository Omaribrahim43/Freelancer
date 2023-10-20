<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        
        'image',
        'username',
        // 'first_name',
        'google_id',
        'name',
        'email',
        'password',
        'contact_info',
        'role',
        'age',
        'gender',
        'Bio',
    ];
    public function reviews()
    {
        return $this->hasMany(Review::class, 'user_id', 'id');
    }
    public function projects()
    {
        return $this->hasMany(Project::class, 'seller_id', 'id');
    }

    public function order()
    {
        return $this->hasMany(Order::class, 'id', 'client_id');
    }
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
