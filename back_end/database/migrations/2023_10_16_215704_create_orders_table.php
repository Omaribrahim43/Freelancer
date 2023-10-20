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
            $table->decimal('amount', 10, 2); 
            $table->string('payment_method'); 
            $table->integer('duration'); 
            $table->unsignedBigInteger('project_id'); 
            $table->unsignedBigInteger('user_id'); 

            $table->foreign('project_id')->references('id')->on('projects'); 
            $table->foreign('user_id')->references('id')->on('users'); 

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
