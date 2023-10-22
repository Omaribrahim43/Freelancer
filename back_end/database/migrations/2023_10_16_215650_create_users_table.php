<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::disableForeignKeyConstraints();
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('image')->nullable();
            $table->string('username')->unique()->nullable();
            $table->string('google_id')->unique()->nullable();
            $table->string('name');
            // $table->string('last_name')->nullable();
            $table->string('email')->unique();
            $table->string('password')->nullable();
            $table->string('contact_info')->nullable();
            $table->enum('role', ['freelancer', 'client'])->default('client');
            $table->integer('age')->nullable();
            $table->string('gender')->nullable();
            $table->text('Bio')->nullable();
            $table->timestamps();
        });
        // Schema::enableForeignKeyConstraints();

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
