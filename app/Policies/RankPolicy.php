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

    public function create(User $user)
    {
        return true;
    }

    public function update(User $user, Rank $rank)
    {
        return $user->id == $rank->user_id;
    }
    
    public function delete(User $user, Rank $rank)
    {
        return $user->id == $rank->user_id;
    }
}
