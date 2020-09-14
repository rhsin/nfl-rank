<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    public function testCheckUserTableDatabase()
    {
        $this->assertDatabaseHas('users', ['name' => 'Ryan']);
    }

    public function testRetrieveAllUserData()
    {
        $this->get('/users')->assertStatus(200);
    }
}
