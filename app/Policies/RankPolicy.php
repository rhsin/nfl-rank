<?php

namespace App\Policies;

use App\Rank;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RankPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        return true;
    }

    public function view(User $user, Rank $rank)
    {
        return true;
    }

    public function create(User $user)
    {
        //
    }

    public function update(User $user, Rank $rank)
    {
        //
    }
    
    public function delete(User $user, Rank $rank)
    {
        //
    }
}
