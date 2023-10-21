<?php

namespace App\Models\HR_system;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacations extends Model
{
    use HasFactory;
    protected $fillable = [
        'employee_id',
        'vacation_type',
        'start_date',
        'end_date',
        'status',
    ];
    public function employee()
    {
        return $this->belongsTo(Employees::class, 'employee_id');
    }
}
