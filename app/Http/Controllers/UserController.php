<?php

namespace App\Http\Controllers;

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
            new UserResource(User::find($id))
        );
    }

    public function edit(User $user)
    {
        $this->authorize('update', $user);
        return view('users.edit', ['user' => $user]);
    }

    public function update(Request $request, User $user)
    {
        $this->authorize('update', $user);
        $validatedData = $request->validate([
            'name' => ['required', 'between:1,15'],
            'email' => ['required', 'email']
        ]);
        $user->update($validatedData);
        return redirect(route('dashboard'));
    }

    public function delete(User $user)
    {
        $this->authorize('delete', $user);
        $user->delete();
        return redirect(route('rankings'));
    }
}
