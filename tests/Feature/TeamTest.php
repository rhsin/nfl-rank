<?php

namespace Tests\Feature;

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

    public function testRetrieveAllTeamData()
    {
        $this->get('/teams')->assertStatus(200);
    }

    public function testTeamCountIs32()
    {
        $teams = Team::all();
        $this->assertCount(32, $teams, 'There are not 32 teams');
    }
}
