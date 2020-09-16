@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div id="rankings" data-user-id={{ Auth::user()->id ?? null }}></div>
    </div>
</div>
@endsection
