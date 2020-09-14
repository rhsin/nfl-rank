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

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
