<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use DB;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Clear existing records in the 'reviews' table if necessary
        

        // Insert data into the 'reviews' table
        DB::table('reviews')->insert([
            // Admin
            [
                'comment' => 'Web Development',
                'project_id' => 1,
                'rating' => 5, // Insert the numeric rating value here
                'review_date' => '2023-10-19',
                'user_id' => 1,
            ],
            [
                'comment' => 'Web Development',
                'project_id'=>1 ,
                'rating' => 5, // Insert the numeric rating value here
                'review_date' => '2023-10-19',
                'user_id' => 1,
            ],
            [
                'comment' => 'Web Development',
                'project_id' => 1,
                'rating' => 5, // Insert the numeric rating value here
                'review_date' => '2023-10-19',
                'user_id' => 1,
            ],
        ]);
    }
}
