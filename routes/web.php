<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::view('/dashboard', 'dashboard')->middleware('can:viewAny,App\Rank')
    ->name('dashboard');


Route::resource('teams', TeamController::class);

Route::resource('users', UserController::class);

Route::resource('ranks', RankController::class);


Route::get('/ranks/up/{id}', 'RankController@upvote');

Route::get('/ranks/down/{id}', 'RankController@downvote');
