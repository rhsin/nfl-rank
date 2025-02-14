<?php

namespace App\Http\Resources;

use App\Team;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'joined' => $this->created_at,
            'ranks' => $this->ranksData()
        ];
    }
}
