<?php

use Illuminate\Database\Seeder;

class TeamSeeder extends Seeder
{
    public function run()
    {
        \DB::table('teams')->insert([
            ['name' => 'Buffalo Bills', 'division' => 'AFCE'],
            ['name' => 'Miami Dolphins', 'division' => 'AFCE'],
            ['name' => 'New England Patriots', 'division' => 'AFCE'],
            ['name' => 'New York Jets', 'division' => 'AFCE'],
            ['name' => 'Baltimore Ravens', 'division' => 'AFCN'],
            ['name' => 'Cincinnati Bengals', 'division' => 'AFCN'],
            ['name' => 'Cleveland Browns', 'division' => 'AFCN'],
            ['name' => 'Pittsburgh Steelers', 'division' => 'AFCN'],
            ['name' => 'Houston Texans', 'division' => 'AFCS'],
            ['name' => 'Indianapolis Colts', 'division' => 'AFCS'],
            ['name' => 'Jacksonville Jaguars', 'division' => 'AFCS'],
            ['name' => 'Tennessee Titans', 'division' => 'AFCS'],
            ['name' => 'Denver Broncos', 'division' => 'AFCW'],
            ['name' => 'Kansas City Chiefs', 'division' => 'AFCW'],
            ['name' => 'Las Vegas Raiders', 'division' => 'AFCW'],
            ['name' => 'Los Angeles Chargers', 'division' => 'AFCW'],
            ['name' => 'Dallas Cowboys', 'division' => 'NFCE'],
            ['name' => 'New York Giants', 'division' => 'NFCE'],
            ['name' => 'Philadelphia Eagles', 'division' => 'NFCE'],
            ['name' => 'Washington Football Team', 'division' => 'NFCE'],
            ['name' => 'Chicago Bears', 'division' => 'NFCN'],
            ['name' => 'Detroit Lions', 'division' => 'NFCN'],
            ['name' => 'Green Bay Packers', 'division' => 'NFCN'],
            ['name' => 'Minnesota Vikings', 'division' => 'NFCN'],
            ['name' => 'Atlanta Falcons', 'division' => 'NFCS'],
            ['name' => 'Carolina Panthers', 'division' => 'NFCS'],
            ['name' => 'New Orleans Saints', 'division' => 'NFCS'],
            ['name' => 'Tampa Bay Buccaneers', 'division' => 'NFCS'],
            ['name' => 'Arizona Cardinals', 'division' => 'NFCW'],
            ['name' => 'Los Angeles Rams', 'division' => 'NFCW'],
            ['name' => 'San Francisco 49ers', 'division' => 'NFCW'],
            ['name' => 'Seattle Seahawks', 'division' => 'NFCW']
        ]);
    }
}
