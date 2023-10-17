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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            // $table->bigInteger('project_id');
            // $table->foreign('project_id')->references('id')->on('project');
            $table->foreignId('project_id')->constrained('projects')->onDelete('cascade')->onUpdate('cascade');
            // $table->bigInteger('client_id');
            // $table->foreign('client_id')->references('id')->on('users');
            $table->foreignId('client_id')->constrained('users')->onDelete('RESTRICT')->onUpdate('cascade');
            $table->date('order_date');
            $table->enum('status', ['0', '1', '2','3']);
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
        Schema::dropIfExists('orders');
    }
};
