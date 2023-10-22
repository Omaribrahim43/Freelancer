<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable = [

        'seller_id',
        'category_id',
        'image',
        'image2',
        'desc',
        'title',
        'rating',
        'price',
        'deadline',
        'buyers',
        'status',

    ];
    
    public function review()
    {
        return $this->hasMany(Review::class, 'project_id','id' );
    }
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'seller_id', 'id');
    }

    public function order()
    {
        return $this->hasMany(Order::class, 'id', 'project_id');
    }

    public function feature()
    {
        $this->hasMany(Feature::class);
    }
}
