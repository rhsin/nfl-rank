<?php

use Illuminate\Database\Seeder;

class TeamSeeder extends Seeder
{
    public function run()
    {
        \DB::table('teams')->insert([
            ['name' => 'Buffalo Bills', 'division' => 'AFCE', 'logo' => 'https://content.sportslogos.net/logos/7/149/thumbs/n0fd1z6xmhigb0eej3323ebwq.gif'],
            ['name' => 'Miami Dolphins', 'division' => 'AFCE', 'logo' => 'https://content.sportslogos.net/logos/7/150/thumbs/15073062018.gif'],
            ['name' => 'New England Patriots', 'division' => 'AFCE', 'logo' => 'https://content.sportslogos.net/logos/7/151/thumbs/y71myf8mlwlk8lbgagh3fd5e0.gif'],
            ['name' => 'New York Jets', 'division' => 'AFCE', 'logo' => 'https://content.sportslogos.net/logos/7/152/thumbs/15291162019.gif'],
            ['name' => 'Baltimore Ravens', 'division' => 'AFCN', 'logo' => 'https://content.sportslogos.net/logos/7/153/thumbs/318.gif'],
            ['name' => 'Cincinnati Bengals', 'division' => 'AFCN', 'logo' => 'https://content.sportslogos.net/logos/7/154/thumbs/403.gif'],
            ['name' => 'Cleveland Browns', 'division' => 'AFCN', 'logo' => 'https://content.sportslogos.net/logos/7/155/thumbs/15578552015.gif'],
            ['name' => 'Pittsburgh Steelers', 'division' => 'AFCN', 'logo' => 'https://content.sportslogos.net/logos/7/156/thumbs/970.gif'],
            ['name' => 'Houston Texans', 'division' => 'AFCS', 'logo' => 'https://content.sportslogos.net/logos/7/157/thumbs/570.gif'],
            ['name' => 'Indianapolis Colts', 'division' => 'AFCS', 'logo' => 'https://content.sportslogos.net/logos/7/158/thumbs/593.gif'],
            ['name' => 'Jacksonville Jaguars', 'division' => 'AFCS', 'logo' => 'https://content.sportslogos.net/logos/7/159/thumbs/15988562013.gif'],
            ['name' => 'Tennessee Titans', 'division' => 'AFCS', 'logo' => 'https://content.sportslogos.net/logos/7/160/thumbs/1053.gif'],
            ['name' => 'Denver Broncos', 'division' => 'AFCW', 'logo' => 'https://content.sportslogos.net/logos/7/161/thumbs/9ebzja2zfeigaziee8y605aqp.gif'],
            ['name' => 'Kansas City Chiefs', 'division' => 'AFCW', 'logo' => 'https://content.sportslogos.net/logos/7/162/thumbs/857.gif'],
            ['name' => 'Las Vegas Raiders', 'division' => 'AFCW', 'logo' => 'https://content.sportslogos.net/logos/7/6708/thumbs/670885212020.gif'],
            ['name' => 'Los Angeles Chargers', 'division' => 'AFCW', 'logo' => 'https://content.sportslogos.net/logos/7/6446/thumbs/644616602020.gif'],
            ['name' => 'Dallas Cowboys', 'division' => 'NFCE', 'logo' => 'https://content.sportslogos.net/logos/7/165/thumbs/406.gif'],
            ['name' => 'New York Giants', 'division' => 'NFCE', 'logo' => 'https://content.sportslogos.net/logos/7/166/thumbs/919.gif'],
            ['name' => 'Philadelphia Eagles', 'division' => 'NFCE', 'logo' => 'https://content.sportslogos.net/logos/7/167/thumbs/960.gif'],
            ['name' => 'Washington Football Team', 'division' => 'NFCE', 'logo' => 'https://content.sportslogos.net/logos/7/6741/thumbs/674188372020.gif'],
            ['name' => 'Chicago Bears', 'division' => 'NFCN', 'logo' => 'https://content.sportslogos.net/logos/7/169/thumbs/364.gif'],
            ['name' => 'Detroit Lions', 'division' => 'NFCN', 'logo' => 'https://content.sportslogos.net/logos/7/170/thumbs/17013982017.gif'],
            ['name' => 'Green Bay Packers', 'division' => 'NFCN', 'logo' => 'https://content.sportslogos.net/logos/7/171/thumbs/dcy03myfhffbki5d7il3.gif'],
            ['name' => 'Minnesota Vikings', 'division' => 'NFCN', 'logo' => 'https://content.sportslogos.net/logos/7/172/thumbs/17227042013.gif'],
            ['name' => 'Atlanta Falcons', 'division' => 'NFCS', 'logo' => 'https://content.sportslogos.net/logos/7/173/thumbs/299.gif'],
            ['name' => 'Carolina Panthers', 'division' => 'NFCS', 'logo' => 'https://content.sportslogos.net/logos/7/174/thumbs/f1wggq2k8ql88fe33jzhw641u.gif'],
            ['name' => 'New Orleans Saints', 'division' => 'NFCS', 'logo' => 'https://content.sportslogos.net/logos/7/175/thumbs/907.gif'],
            ['name' => 'Tampa Bay Buccaneers', 'division' => 'NFCS', 'logo' => 'https://content.sportslogos.net/logos/7/176/thumbs/17683632020.gif'],
            ['name' => 'Arizona Cardinals', 'division' => 'NFCW', 'logo' => 'https://content.sportslogos.net/logos/7/177/thumbs/kwth8f1cfa2sch5xhjjfaof90.gif'],
            ['name' => 'Los Angeles Rams', 'division' => 'NFCW', 'logo' => 'https://content.sportslogos.net/logos/7/5941/thumbs/594183342020.gif'],
            ['name' => 'San Francisco 49ers', 'division' => 'NFCW', 'logo' => 'https://content.sportslogos.net/logos/7/179/thumbs/17994552009.gif'],
            ['name' => 'Seattle Seahawks', 'division' => 'NFCW', 'logo' => 'https://content.sportslogos.net/logos/7/180/thumbs/pfiobtreaq7j0pzvadktsc6jv.gif']
        ]);
    }
}
