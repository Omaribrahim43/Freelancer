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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('seller_id');
            $table->foreign('seller_id')->references('id')->on('users')->onDelete('CASCADE');
            // $table->foreignId('seller_id')->constrained('users')->onDelete('RESTRICT')->onUpdate('cascade');

            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('CASCADE');
            // $table->foreignId('category_id')->constrained('categories')->onDelete('RESTRICT')->onUpdate('cascade');
            $table->string('image')->nullable();
            $table->string('image2')->nullable();
            $table->string('title');
            $table->longText('desc');
            $table->integer('rating')->nullable();
            $table->double('price');
            $table->integer('deadline');
            $table->integer('buyers')->nullable();
            $table->enum('status', ['active', 'inactive'])->default('inactive');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
};
