@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-lg">
            <!-- React Rankings component rendered here.
            Basically a mini-app using Laravel template view for built-in Auth.
            Component can access the current authenticated user from the data attribute.  -->
            <div id="rankings" data-user-id={{ Auth::user()->id ?? null }}></div>
        </div>
    </div>
</div>
@endsection
