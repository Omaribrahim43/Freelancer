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
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('RESTRICT')->onUpdate('cascade');
            // $table->bigInteger('project_id');
            // $table->foreign('project_id')->references('id')->on('project');
            $table->foreignId('project_id')->constrained('projects')->onDelete('RESTRICT')->onUpdate('cascade');
            $table->integer('rating');
            $table->longText('comment');
            $table->date('review_date');
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
        Schema::dropIfExists('reviews');
    }
};
