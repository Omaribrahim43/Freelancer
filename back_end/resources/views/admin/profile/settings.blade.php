<div class="col-xl-3">
    <!-- Settings -->
    <div class="card card-default">
        <div class="card-header">
            <h2>Settings</h2>
        </div>

        <div class="card-body pt-0">

            <ul class="nav nav-settings">
                <li class="nav-item">
                    <a class="nav-link" href="">
                        <i class="mdi mdi-account-outline mr-1"></i> Profile
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ set_active(['admin.profile']) }}" href="{{ route('admin.profile') }}">
                        <i class="mdi mdi-settings-outline mr-1"></i> Account
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ set_active(['admin.profile.change-password']) }}" href="{{ route('admin.profile.change-password') }}">
                        <i class="mdi mdi-onepassword mr-1"></i> Change Password
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
