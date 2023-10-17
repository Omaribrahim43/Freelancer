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
        Schema::disableForeignKeyConstraints();
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            // $table->bigInteger('user_id');
            $table->foreignId('buyer_id')->constrained('users')->onDelete('RESTRICT')->onUpdate('cascade');

            // $table->bigInteger('category_id');
            // $table->foreign('category_id')->references('id')->on('categories');
            $table->foreignId('category_id')->constrained('categories')->onDelete('RESTRICT')->onUpdate('cascade');
            $table->string('image');
            $table->string('title');
            $table->integer('rating');
            $table->double('price');
            $table->date('deadline');
            $table->integer('buyers');
            $table->enum('status', ['0', '1']);
            $table->timestamps();
        });
        Schema::enableForeignKeyConstraints();

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
