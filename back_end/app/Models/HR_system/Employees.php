<?php

namespace App\Models\HR_system;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employees extends Model
{
    use HasFactory;
    protected $fillable = [
        'first_name',
        'last_name',
        'username',
        'email',
        'date_of_birth',
        'gender',
        'phone',
    ];

    public function Salary()
    {
        return $this->hasMany(salaries::class);
    }
    public function Vacation()
    {
        return $this->hasMany(Vacations::class);
    }
    public function Attendance()
    {
        return $this->hasMany(Attendance::class);
    }
}
