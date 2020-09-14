<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RankTest extends TestCase
{
    public function testRetrieveAllRankData()
    {
        $this->get('/ranks')->assertStatus(200);
    }
}
