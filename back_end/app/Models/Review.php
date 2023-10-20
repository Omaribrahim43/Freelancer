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
        'review_datel',
    ];

    public function project()
    {
        return $this->belongsTo(Project::class, 'id', 'project_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'id', 'user_id');
    }
}
