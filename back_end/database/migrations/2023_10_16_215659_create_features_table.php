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
        Schema::create('features', function (Blueprint $table) {
            $table->id();
            // $table->bigInteger('project_id');
            // $table->foreign('project_id')->references('id')->on('project');
            $table->foreignId('project_id')->constrained('projects')->onDelete('cascade')->onUpdate('cascade');

            $table->string('title');
            $table->string('deadline');
            $table->double('price');
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
        Schema::dropIfExists('features');
    }
};
