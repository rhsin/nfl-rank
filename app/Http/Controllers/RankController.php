<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Resources\RankResource;
use App\Rank;
use Illuminate\Http\Request;

class RankController extends Controller
{
    public function index()
    {
        $this->authorize('viewAny', Rank::class);
        return response()->json(
            RankResource::collection(Rank::all())
        );
    }

    public function store(Request $request)
    {
        $this->authorize('create', Rank::class);
        $request->validate([
            'rank' => ['required', 'integer', 'between:1,32'],
            'week' => ['required', 'integer', 'between:1,16'],
            'team_id' => ['required', 'integer', 'between:1,32'],
        ]);
        Rank::create([
            'rank' => $request->rank,
            'week' => $request->week,
            'team_id' => $request->team_id,
            'user_id' => Auth::user()->id
        ]);
        return response()->json('Created!', 200);
    }

    public function upvote(Request $request, $id)
    {
        $this->authorize('update', Rank::find($id));
        $rank = Rank::find($id);
        $rank->rank -= 1;
        $rank->save();
        return response()->json('Upvoted!', 200);
    }

    public function downvote(Request $request, $id)
    {
        $this->authorize('update', Rank::find($id));
        $rank = Rank::find($id);
        $rank->rank += 1;
        $rank->save();
        return response()->json('Downvoted!', 200);
    }

    public function destroy($id)
    {
        //
    }
}
