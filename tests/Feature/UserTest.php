<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    public function testCheckUserTableDatabase()
    {
        $this->assertDatabaseHas('users', ['email' => 'ryanhsin.sb@gmail.com']);
    }

    public function testGuestCannotGetUserData()
    {
        $this->get('/users')->assertStatus(403);
    }

    public function testUserCanGetUserData()
    {
        $this->actingAs(User::find(2))->get('/users')
            ->assertStatus(200);
    }

    public function testUserCanGetSingleUserData()
    {
        $this->actingAs(User::find(2))->get('/users/1')
            ->assertStatus(200);
    }

    public function testGuestCannotViewDashboard()
    {
        $this->get('/dashboard')->assertStatus(403);
    }

    public function testUserCanViewDashboard()
    {
        $this->actingAs(User::find(2))->get('/dashboard')
            ->assertStatus(200);
    }

    public function testGuestCannotEditProfile()
    {
        $this->get('/users/2/edit')->assertStatus(403);
    }

    public function testUserCanEditProfile()
    {
        $this->actingAs(User::find(2))->get('/users/2/edit')
            ->assertStatus(200);
    }
}
