<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    use HasFactory;

    protected $fillable = [

        'project_id',
        'title',
        'price',
        'deadline',

    ];
    public function project()
    {
        return $this->belongsToMany(Project::class, 'id','project_id');
    }
    public function orders()
{
    return $this->belongsToMany(Order::class);
}
}
