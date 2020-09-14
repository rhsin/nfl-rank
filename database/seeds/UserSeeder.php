<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    public function run()
    {
        \DB::table('users')->insert([
            ['name' => 'Ryan', 'email' => 'ryanhsin.sb@gmail.com', 'password' => bcrypt('ryantest'), 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Alice', 'email' => 'alice@test.com', 'password' => bcrypt('alicetest'), 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Dave', 'email' => 'dave@test.com', 'password' => bcrypt('davetest'), 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Jeff', 'email' => 'jeff@test.com', 'password' => bcrypt('jefftest'), 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]
        ]);

        factory(App\User::class, 5)->create();
    }
}
