<?php

namespace App\Models\HR_system;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class jobs extends Model
{
    use HasFactory;
    protected $fillable = [
        'job_title',
        'job_desc',
        'salary',
    ];

    public function Salary()
    {
        return $this->hasMany(salaries::class);
    }
}
