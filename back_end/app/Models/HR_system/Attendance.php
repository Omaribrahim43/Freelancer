<?php

namespace App\Models\HR_system;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;
    protected $fillable = [
        'employee_id',
        'date',
        'clock_in',
        'clock_out',
    ];
    public function employee()
    {
        return $this->belongsTo(Employees::class, 'employee_id');
    }
}
