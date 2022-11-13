<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FrontviewController extends Controller
{
    public function index(){
        return 'Hello frontview';
    }
}
