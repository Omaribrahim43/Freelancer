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
                        <a class="d-block text-color" href="#">{{ $profileData->email }}</a>
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
                            <form action="{{ route('admin.profile.update', $profileData->id) }}" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="row mb-2">
                                    <div class="col-xl-12">
                                        <div class="mb-5">
                                            <label class="text-dark font-weight-medium" for="">Image</label>
                                            <input type="file" class="form-control" name="image" id="image">
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="firstName">Name</label>
                                            <input type="text" value="{{ $profileData->name }}"
                                                class="form-control" name="name">
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="lastName">Usename</label>
                                            <input type="text" value="{{ $profileData->username }}" class="form-control"
                                                name="username">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mb-4">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" value="{{ $profileData->email }}" class="form-control">
                                </div>
                                <div class="d-flex justify-content-end mt-6">
                                    <button type="submit" class="btn btn-primary mb-2 btn-pill">Update
                                        Profile</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#image').change(function(e) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#showImage').attr('src', e.target.result);
                }
                reader.readAsDataURL(e.target.files[0]);
            })
        });
    </script>
@endsection
