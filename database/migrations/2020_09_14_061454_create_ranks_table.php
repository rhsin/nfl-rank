<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRanksTable extends Migration
{
    public function up()
    {
        Schema::create('ranks', function (Blueprint $table) {
            $table->id();
            $table->integer('rank');
            $table->integer('week');
            $table->foreignId('team_id');
            $table->foreignId('user_id');
            $table->timestamps();

            $table->foreign('team_id')->references('id')
                ->on('teams')->onDelete('cascade');
            $table->foreign('user_id')->references('id')
                ->on('users')->onDelete('cascade');
                
            $table->unique(['rank', 'week', 'user_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('ranks');
    }
}
