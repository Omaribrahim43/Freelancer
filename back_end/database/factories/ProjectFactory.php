<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectFactory extends Factory
{
    protected $model = Project::class;

    public function definition()
    {
        return [
            'seller_id' => $this->faker->numberBetween(1, 10), // Replace with your logic
            'category_id' => $this->faker->numberBetween(1, 3), // Replace with your logic
            'image' => 'https://picsum.photos/id/' . $this->faker->numberBetween(1, 100) . '/640/480',
            'image2' => 'https://picsum.photos/id/' . $this->faker->numberBetween(100, 200) . '/640/480',
            'title' => $this->faker->word,
            'desc' => $this->faker->sentence,
            'rating' => $this->faker->numberBetween(1, 5),
            'price' => $this->faker->randomFloat(2, 10, 100),
            'deadline' => $this->faker->numberBetween(1, 30),
            'buyers' => $this->faker->numberBetween(0, 50000),
            'status' => $this->faker->randomElement(['active', 'inactive']),
        ];
    }
}
