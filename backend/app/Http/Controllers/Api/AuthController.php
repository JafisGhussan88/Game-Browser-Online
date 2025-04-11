<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Administrator;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Spatie\RouteDiscovery\Attributes\Route;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Exception;

class AuthController extends Controller
{
    #[Route(fullUri: 'auth/register', method: 'POST')]
    public function register(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'username' => 'required|string|min:4|max:60|unique:users,username',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|string|min:5|max:10|confirmed',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Validasi gagal.',
                    'errors' => $validator->errors(),
                ], 422);
            }

            $user = User::create([
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'last_login_at' => now(),
            ]);

            $token = JWTAuth::fromUser($user);

            return response()->json([
                'status' => 'success',
                'message' => 'User registered successfully.',
                'user' => $user,
                'token' => $token,
            ], 201);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Terjadi kesalahan saat registrasi.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    #[Route(fullUri: 'auth/login', method: 'POST')]
    public function login(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'login' => 'required|string',
                'password' => 'required|string',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Validasi gagal.',
                    'errors' => $validator->errors(),
                ], 422);
            }

            $login = $request->input('login');
            $password = $request->input('password');

            // Cari user berdasarkan email atau username
            $user = User::where('email', $login)->orWhere('username', $login)->first();

            if ($user && Hash::check($password, $user->password)) {
                $user->update(['last_login_at' => now()]);
                $token = JWTAuth::fromUser($user);

                return response()->json([
                    'user' => $user,
                    'token' => $token,
                ]);
            }

            // Cek administrator
            $admin = Administrator::where('username', $login)->first();
            if ($admin && Hash::check($password, $admin->password)) {
                $admin->update(['last_login_at' => now()]);
                $token = JWTAuth::fromUser($admin);

                return response()->json([
                    'user' => $admin,
                    'token' => $token,
                ]);
            }

            return response()->json([
                'status' => 'error',
                'message' => 'Username/email atau password salah.',
            ], 401);
        } catch (JWTException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal membuat token.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    #[Route(fullUri: 'auth/logout', method: 'POST')]
    public function logout(Request $request)
    {
        try {
            JWTAuth::invalidate(JWTAuth::getToken());

            return response()->json([
                'status' => 'success',
                'message' => 'Berhasil log out.',
            ]);
        } catch (JWTException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal log out.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
