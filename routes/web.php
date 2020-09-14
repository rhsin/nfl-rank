<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::view('/dashboard', 'dashboard')->name('dashboard');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::resource('teams', TeamController::class);

Route::resource('users', UserController::class);

Route::resource('ranks', RankController::class);
