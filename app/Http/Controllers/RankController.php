<?php

namespace App\Http\Controllers;

use App\Http\Resources\RankResource;
use App\Rank;
use Illuminate\Http\Request;

class RankController extends Controller
{
    public function index()
    {
        return response()->json(
            RankResource::collection(Rank::all())
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
