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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            // $table->bigInteger('order_id');
            // $table->foreign('order_id')->references('id')->on('orders');
            $table->foreignId('order_id')->constrained('orders')->onDelete('RESTRICT')->onUpdate('cascade');
            $table->date('payment_date');
            $table->double('amount');
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
        Schema::dropIfExists('payments');
    }
};
