<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rank extends Model
{
    protected $fillable = [
        'rank', 'week', 'team_id', 'user_id',
    ];
}
