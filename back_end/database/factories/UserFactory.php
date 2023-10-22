<?php

namespace Database\Factories;

use App\Models\User; // Make sure to import the correct model
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition()
    {
        return [
            'image' => $this->faker->imageUrl(),
            'username' => $this->faker->unique()->userName,
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'password' => Hash::make('password'), // You can change the default password if needed
            'role' => $this->faker->randomElement(['freelancer', 'client']), // Adjust roles as needed
        ];
    }
}
