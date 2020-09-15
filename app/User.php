<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'name', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function ranks()
    {
        return $this->hasMany('App\Rank');
    }

    public function ranksData()
    {
        $ranks = $this->ranks;
        foreach ($ranks as $rank) {
            $rank['team_id'] = Team::find($rank->team_id)->name;
        }
        return $ranks;
    }
}
