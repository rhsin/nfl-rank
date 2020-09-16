<?php

namespace App\Http\Controllers;

use App\Http\Resources\TeamResource;
use App\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function index()
    {
        $this->authorize('viewAny', Team::class);
        return response()->json(
            TeamResource::collection(Team::all())
        );
    }
}
