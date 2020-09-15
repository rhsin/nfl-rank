<?php

namespace App\Http\Resources;

use App\Team;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        $ranks = $this->ranks;
        foreach ($ranks as $rank) {
            $rank['team_id'] = Team::find($rank->team_id)->name;
        }
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'joined' => $this->created_at,
            'ranks' => $ranks
        ];
    }
}
