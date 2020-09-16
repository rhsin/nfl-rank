@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card m-2">
                <div class="card-header">Edit Profile</div>
                <div class="card-body">
                    <div class="form-group">
                        <form method='POST' action="{{ route('users.update', $user) }}">
                            @csrf
                            @method('PUT')
                            <div class="form-row">
                                <div class="col">
                                    <label for="name">Name</label>
                                    <input type="text" name="name" class="form-control" value="{{ $user->name }}">
                                    <p>{{ $errors->first('name') }}</p>
                                </div>
                                <div class="col">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" class="form-control" value="{{ $user->email}}">
                                    <p>{{ $errors->first('email') }}</p>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-success">Submit</button>
                        </form>
                    </div>
                    <a href="{{ route('password.request') }}">
                        <strong>Reset Password</strong>
                    </a>
                    <form method="POST" action="{{ route('users.delete', $user) }}">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger mt-2">
                            <strong>Delete Account</strong>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection