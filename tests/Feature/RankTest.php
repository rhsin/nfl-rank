<?php

namespace Tests\Feature;

use App\User;
use App\Rank;
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

    public function testUserCanCreateRank()
    {
        $this->actingAs(User::find(2))->post('/ranks', [
            'rank' => 32,
            'week' => 2,
            'team_id' => 7,
            'user_id' => 2
        ])->assertStatus(200);
    }

    public function testGuestCannotUpvoteRank()
    {
        $this->post('/ranks/up/1')->assertStatus(403);
    }

    public function testUserCanUpvoteRank()
    {
        $this->actingAs(User::find(2))->post('/ranks/up/' . Rank::latest()->first()->id)
            ->assertStatus(200);
    }

    public function testGuestCannotDownvoteRank()
    {
        $this->post('/ranks/down/1')->assertStatus(403);
    }

    public function testUserCanDownvoteRank()
    {
        $this->actingAs(User::find(2))->post('/ranks/down/' . Rank::latest()->first()->id)
            ->assertStatus(200);
    }

    public function testGuestCannotDeleteRank()
    {
        $this->delete('/ranks/1')->assertStatus(403);
    }

    public function testUserCanDeleteRank()
    {
        $this->actingAs(User::find(2))->delete('/ranks/' . Rank::latest()->first()->id)
            ->assertStatus(200);
    }

}
