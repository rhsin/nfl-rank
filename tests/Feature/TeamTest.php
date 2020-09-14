<?php

namespace Tests\Feature;

use App\User;
use App\Team;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TeamTest extends TestCase
{
    public function testCheckTeamTableDatabase()
    {
        $this->assertDatabaseHas('teams', ['name' => 'Buffalo Bills']);
    }

    public function testGuestCannotGetTeamData()
    {
        $this->get('/teams')->assertStatus(403);
    }

    public function testUserCanGetTeamData()
    {
        $this->actingAs(User::find(2))->get('/teams')
            ->assertStatus(200);
    }

    public function testTeamCountIs32()
    {
        $teams = Team::all();
        $this->assertCount(32, $teams, 'There are not 32 teams');
    }
}
