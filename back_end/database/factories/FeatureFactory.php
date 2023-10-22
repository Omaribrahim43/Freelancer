<?php

namespace Database\Factories;

use App\Models\Feature;
use Illuminate\Database\Eloquent\Factories\Factory;

class FeatureFactory extends Factory
{
    protected $model = Feature::class;

    public function definition()
    {
        return [
            'project_id' => $this->faker->numberBetween(1, 100), // Replace with your logic
            'title' => $this->faker->sentence,
            'price' => $this->faker->randomFloat(2, 10, 50),
            'deadline' => $this->faker->numberBetween(1, 10),
        ];
    }
}