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

    public function testGuestCannotUpvoteRank()
    {
        $this->post('/ranks/up/1')->assertStatus(403);
    }

    public function testGuestCannotViewRankings()
    {
        $this->get('/rankings')->assertStatus(403);
    }

    public function testUserCanViewRankings()
    {
        $this->actingAs(User::find(2))->get('/rankings')
            ->assertStatus(200);
    }

    public function testGuestCannotCreateRank()
    {
        $this->post('/ranks')->assertStatus(403);
    }

    public function testGuestCannotDeleteRank()
    {
        $this->delete('/ranks/1')->assertStatus(403);
    }

}
