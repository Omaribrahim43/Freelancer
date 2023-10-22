<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([

            // Admin
            [
                'image' => 'https://www.shutterstock.com/image-vector/grunge-green-category-word-round-260nw-1794170542.jpg',
                'name' => 'Web Development',
                'description' => "Welcome to the Web Development category on our freelancer marketplace! In this bustling corner of our platform, you'll discover a diverse and skilled community of web developers, designers, and experts ready to bring your online visions to life."
            ],
            [
                'image' => 'https://www.shutterstock.com/image-vector/grunge-green-category-word-round-260nw-1794170542.jpg',
                'name' => 'Degital Marketing',
                'description' => "Welcome to the Web Development category on our freelancer marketplace! In this bustling corner of our platform, you'll discover a diverse and skilled community of web developers, designers, and experts ready to bring your online visions to life."
            ],
            [
                'image' => 'https://www.shutterstock.com/image-vector/grunge-green-category-word-round-260nw-1794170542.jpg',
                'name' => 'Business',
                'description' => "Welcome to the Web Development category on our freelancer marketplace! In this bustling corner of our platform, you'll discover a diverse and skilled community of web developers, designers, and experts ready to bring your online visions to life."
            ],
            [
                'image' => 'https://www.shutterstock.com/image-vector/grunge-green-category-word-round-260nw-1794170542.jpg',
                'name' => 'Business',
                'description' => "Welcome to the Web Development category on our freelancer marketplace! In this bustling corner of our platform, you'll discover a diverse and skilled community of web developers, designers, and experts ready to bring your online visions to life."
            ],
            [
                'image' => 'https://www.shutterstock.com/image-vector/grunge-green-category-word-round-260nw-1794170542.jpg',
                'name' => 'Business',
                'description' => "Welcome to the Web Development category on our freelancer marketplace! In this bustling corner of our platform, you'll discover a diverse and skilled community of web developers, designers, and experts ready to bring your online visions to life."
            ],
        ]);
    }
}
