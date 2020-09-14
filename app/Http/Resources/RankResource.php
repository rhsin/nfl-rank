<?php

namespace App\Http\Resources;

use App\Team;
use App\User;
use Illuminate\Http\Resources\Json\JsonResource;

class RankResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'rank' => $this->rank,
            'week' => $this->week,
            'team' => Team::find($this->team_id)->name,
            'user' => User::find($this->user_id)->name,
            'created' => $this->created_at,
        ];
    }
}
