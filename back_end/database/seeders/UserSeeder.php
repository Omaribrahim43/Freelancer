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

            // Admin
            [
                'image' => 'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg',
                'username' => 'omar.migdady',
                'name' => 'omar',
                // 'last_name' => 'migdady',
                'email' => 'omar.migdady@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ],
            [
                'image' => 'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg',
                'username' => 'hussam.odat',
                'name' => 'hussam',
                // 'last_name' => 'odat',
                'email' => 'hussam.odat@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ],
            [
                'image' => 'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg',
                'username' => 'sereen.qamhia',
                'name' => 'sereen',
                // 'last_name' => 'qamhia',
                'email' => 'sereen.qamhia@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ],
            [
                'image' => 'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg',
                'username' => 'leena.rababah',
                'name' => 'leena',
                // 'last_name' => 'rababah',
                'email' => 'leena.rababah@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ],
            [
                'image' => 'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg',
                'username' => 'ahmad.tamimi',
                'name' => 'ahmad',
                // 'last_name' => 'tamimi',
                'email' => 'ahmad.tamimi@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ],
            [
                'image' => 'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg',
                'username' => 'anfal.dherat',
                'name' => 'anfal',
                // 'last_name' => 'dherat',
                'email' => 'anfal.dherat@gmail.com',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ],
            // Agent
            [
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
