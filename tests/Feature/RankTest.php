<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RankTest extends TestCase
{
    public function testGuestCannotGetRankData()
    {
        $this->get('/ranks')->assertStatus(403);
    }

    public function testUserCanGetRankData()
    {
        $this->actingAs(User::find(2))->get('/ranks')
            ->assertStatus(200);
    }

}
