<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [

        'project_id',
        'amount',
        'payment_method',
        'user_id',
        'duration',
       
    ];

    public function payment()
    {
        $this->belongsTo(Payment::class,  'order_id','id');
    }
    public function project()
    {
        return $this->belongsTo(Project::class,  'project_id','id');
    }
    public function user()
    {
        return $this->belongsTo(User::class,  'user_id', 'id');
    }
    public function features()
{
    return $this->belongsToMany(Feature::class);
}
}