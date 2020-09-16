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

    public function averageRank()
    {
        $ranks = $this->ranks()->pluck('rank')->all();
        
        if (count($ranks) > 0) {
            $average = array_sum($ranks)/count($ranks);
            return round($average, 1);
        } else {
            return null;
        }
    }
}
