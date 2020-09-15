<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name', 'division', 'logo',
    ];

    public function ranks()
    {
        return $this->hasMany('App\Rank')->orderBy('week', 'desc');
    }

    public function userRanks($id)
    {
        $ranks = [];
        foreach ($this->ranks as $rank) {
            if ($rank->user_id == $id) {
                return $rank;
            } 
        }
        return $ranks;
    }
}
