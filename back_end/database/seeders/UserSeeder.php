<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([

            // Agent
            [
                "id" => 7,

                'image' => 'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg',
                'username' => 'Freelancer',
                'name' => 'freelancer',
                // 'last_name' => 'user',
                'email' => 'freelancer@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'freelancer',
            ],

            // User
            [
                "id" => 8,

                'image' => 'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg',
                'username' => 'Client',
                'name' => 'client',
                // 'last_name' => 'user',
                'email' => 'client@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'client',
            ]
        ]);
    }
}
