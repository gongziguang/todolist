<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'api/v1'], function() {
  Route::get('todos', function() {
    return App\Todo::all();
  });
  Route::post('todo','\App\Http\Controllers\Api\TodoApiController@saveTodo');
  Route::post('todo-delete','\App\Http\Controllers\Api\TodoApiController@deleteTodo');
  Route::post('todo-status','\App\Http\Controllers\Api\TodoApiController@changeTodoStatus');
});

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});
