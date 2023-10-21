<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admins')->insert([
            // Admin
            [
                'image' => 'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg',
                'username' => 'omar.migdady',
                'name' => 'omar',
                'email' => 'omar.migdady@gmail.com',
                'password' => Hash::make('password'),
            ],
            [
                'image' => 'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg',
                'username' => 'hussam.odat',
                'name' => 'hussam',
                'email' => 'hussam.odat@gmail.com',
                'password' => Hash::make('password'),
            ],
            [
                'image' => 'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg',
                'username' => 'sereen.qamhia',
                'name' => 'sereen',
                'email' => 'sereen.qamhia@gmail.com',
                'password' => Hash::make('password'),
            ],
            [
                'image' => 'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg',
                'username' => 'leena.rababah',
                'name' => 'leena',
                'email' => 'leena.rababah@gmail.com',
                'password' => Hash::make('password'),
            ],
            [
                'image' => 'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg',
                'username' => 'ahmad.tamimi',
                'name' => 'ahmad',
                'email' => 'ahmad.tamimi@gmail.com',
                'password' => Hash::make('password'),
            ],
            [
                'image' => 'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg',
                'username' => 'anfal.dherat',
                'name' => 'anfal',
                'email' => 'anfal.dherat@gmail.com',
                'password' => Hash::make('password'),
            ],
        ]);
    }
}
