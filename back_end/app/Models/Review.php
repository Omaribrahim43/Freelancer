<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $fillable = [

        'user_id',
        'project_id',
        'rating',
        'comment',
        'review_date',
    ];

    public function project()
    {
        return $this->hasMany(Project::class, 'id', 'project_id');
    }

    public function user()
    {
        return $this->hasMany(User::class, 'id', 'user_id');
    }
}
