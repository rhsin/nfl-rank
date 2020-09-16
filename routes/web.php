<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::view('/dashboard', 'dashboard')->middleware('can:viewAny,App\Rank')
    ->name('dashboard');

Route::view('/rankings', 'rankings')->middleware('can:viewAny,App\User')
    ->name('rankings');


Route::resource('teams', TeamController::class);

Route::resource('users', UserController::class);

Route::resource('ranks', RankController::class);


Route::post('/ranks/up/{id}', 'RankController@upvote');

Route::post('/ranks/down/{id}', 'RankController@downvote');

Route::delete('users/delete/{user}', 'UserController@delete')
    ->middleware('password.confirm')->name('users.delete');
