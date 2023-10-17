<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [

        'project_id',
        'client_id',
        'order_date',
        'status',
       
    ];

    public function payment()
    {
        $this->belongsTo(Payment::class, 'id', 'order_id');
    }
    public function project()
    {
        return $this->belongsTo(Project::class, 'id', 'project_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'id', 'client_id');
    }
}
