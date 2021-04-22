<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DateEvent extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dateEvents', function (Blueprint $table) {
            $table->id();
            $table->string('name',150)->notNullable();
            $table->string('description',300)->nullable();
            $table->string('place')->nullable();
            $table->timestamp('date')->nullable();
            $table->string('hour')->nullable();
            $table->string('delay')->nullable();
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
        Schema::dropIfExists('dateEvents');
    }
}
