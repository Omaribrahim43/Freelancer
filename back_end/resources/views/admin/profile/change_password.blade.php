@extends('admin.layouts.master')
@section('content')
    <div class="content-wrapper">
        <div class="content"><!-- Card Profile -->
            <div class="card card-default card-profile">
                <div class="card-header-bg" style="background-image:url({{ asset('images/user/user-bg-01.jpg') }})">
                </div>
                <div class="card-body card-profile-body">

                    <div class="profile-avata">
                        <img class="rounded-circle" width="150px"
                            src="{{ $profileData->image == '' ? asset('no-image.png') : asset($profileData->image) }}"
                            alt="Avata Image" id="showImage">
                        <a class="h5 d-block mt-3 mb-2" href="">{{ $profileData->username }}</a>
                        <a class="d-block text-color" href="">{{ $profileData->email }}</a>
                    </div>
                    <ul class="nav nav-profile-follow"></ul>
                    <div class="profile-button"></div>
                </div>
            </div>
            <div class="row">
                @include('admin.profile.settings')
                <div class="col-xl-9">
                    <!-- Account Settings -->
                    <div class="card card-default">
                        <div class="card-header">
                            <h2 class="mb-5">Account Settings</h2>
                        </div>
                        <div class="card-body">
                            <form action="{{ route('admin.profile.update-password', $profileData->id) }}" method="POST">
                                @csrf
                                <div class="row mb-2">
                                    <div class="col-xl-12">
                                        <div class="mb-5">
                                            <label class="text-dark font-weight-medium">Old Password</label>
                                            <input type="password" class="form-control" name="old_password">
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-xl-12">
                                        <div class="mb-5">
                                            <label class="text-dark font-weight-medium">New Password</label>
                                            <input type="password" class="form-control" name="new_password">
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-xl-12">
                                        <div class="mb-5">
                                            <label class="text-dark font-weight-medium">Confirm Password</label>
                                            <input type="password" class="form-control" name="new_password_confirmation">
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end mt-6">
                                    <button type="submit" class="btn btn-primary mb-2 btn-pill">Change Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
