<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $this->authorize('viewAny', User::class);
        return response()->json(
            UserResource::collection(User::all())
        );
    }

    public function show($id)
    {
        $this->authorize('viewAny', User::class);
        return response()->json(
            new UserResource(Auth::user())
        );
    }

    public function store(Request $request)
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
