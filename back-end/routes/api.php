<?php

use App\Http\Controllers\CustomerController;
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


Route::prefix('customers')->group(function (){
    Route::get('/',[CustomerController::class,'index']);
    Route::post('/',[CustomerController::class,'store']);
    Route::put('/{id}',[CustomerController::class, 'update']);
    Route::get('/{id}',[CustomerController::class,'show']);
    Route::delete('/{id}',[CustomerController::class,'destroy']);
});
