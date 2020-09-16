<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TeamResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'division' => $this->division,
            'logo' => $this->logo,
            'rank' => $this->userRanks($request->user()->id),
            'avg_rank' => $this->averageRank()
        ];
    }
}
