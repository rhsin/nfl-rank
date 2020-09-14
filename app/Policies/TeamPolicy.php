<?php

namespace App\Policies;

use App\Team;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TeamPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        return true;
    }

    public function view(User $user, Team $team)
    {
        return true;
    }

    public function create(User $user)
    {
        //
    }

    public function update(User $user, Team $team)
    {
        //
    }

    public function delete(User $user, Team $team)
    {
        //
    }
}
