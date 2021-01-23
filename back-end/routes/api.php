<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('rooms')->group(function (){
    Route::get('/',[\App\Http\Controllers\RoomController::class,'index']);
    Route::post('/',[\App\Http\Controllers\RoomController::class,'store']);
    Route::put('/{id}',[\App\Http\Controllers\RoomController::class,'update']);
    Route::get('/{id}',[\App\Http\Controllers\RoomController::class,'show']);
    Route::delete('/id',[\App\Http\Controllers\RoomController::class,'destroy']);
});
