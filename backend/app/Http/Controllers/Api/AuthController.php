<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['register', 'login']]);
        // $this->middleware('auth:role_auth', ['except' => ['register', 'login']]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'=>'required',
            'email'=>'required|email|unique:users',
            'password'=>'required|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['msg'=>$validator->errors(), 'status'=>422]);
        }

        $userModel = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
        ]);

        if ($userModel) {
            return response()->json([
                'msg'=>'User has been created successfully', 
                'status'=>201,
                'user'=>$userModel,
            ]);
        } else {
            return response()->json(['msg'=>'Something went wrong, user not created', 'status'=>404]);
        }
    }

    public function login(Request $request)
    {
        $login_validator = Validator::make($request->all(), [
            'email'=>'required|email',
            'password'=>'required',
        ]);

        if ($login_validator->fails()) {
            return response()->json(['msg'=>$login_validator->errors(), 'status'=>422]);
        }

        if (!$token = auth()->attempt($login_validator->validated())) {
            return response()->json(['msg' => 'Unauthorized', 'status'=>401], 401);
        }

        return $this->createToken($token);
    }

    public function getUser()
    {
        return response()->json(auth()->user());
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['msg' => 'Successfully logged out', 'status'=>200]);
    }

    public function refresh()
    {
        return $this->createToken(auth()->refresh());
    }

    protected function createToken($token)
    {
        return response()->json([
            'status'=>200,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user'=>auth()->user(),
        ]);
    }
}
