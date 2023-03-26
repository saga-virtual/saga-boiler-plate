<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

Route::prefix('v1')->group(function(){

    //Open Routes
    Route::get('/', function(){
        return response()->json(['message' => 'API is running!'], 200);
    });

    Route::post('auth/login', [AuthController::class, 'login']);

    //Authenticated Routes
    Route::middleware('auth:sanctum')->group(function(){
        
        Route::get('/user', function (Request $request) {
            return  response()->json(['user'=>$request->user()]);
        });

        Route::get('/logout', [AuthController::class,'logout']);

    });

});

