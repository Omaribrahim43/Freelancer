<aside class="left-sidebar sidebar-dark" id="left-sidebar">
    <div id="sidebar" class="sidebar sidebar-with-footer">
        <!-- Aplication Brand -->
        <div class="app-brand">
            <a href="">
                <img src="{{ asset('images/logo.png') }}">
                <span class="brand-name">MONO</span>
            </a>
        </div>
        <!-- begin sidebar scrollbar -->
        <div class="sidebar-left" data-simplebar style="height: 100%;">
            <!-- sidebar menu -->
            <ul class="nav sidebar-inner" id="sidebar-menu">
                <li class="{{ set_active(['admin.home']) }}">
                    <a class="sidenav-item-link" href="{{ url('admin/home') }}">
                        <i class="mdi mdi-briefcase-account-outline"></i>
                        <span class="nav-text">Dashboard</span>
                    </a>
                </li>
                <li class="{{ set_active(['admin.users.*']) }}">
                    <a class="sidenav-item-link" href="{{ route('admin.users.index') }}">
                        <i class="mdi mdi-account-group"></i>
                        <span class="nav-text">Users</span>
                    </a>
                </li>
                <li class="{{ set_active(['admin.categories.*']) }}">
                    <a class="sidenav-item-link" href="{{ route('admin.categories.index') }}">
                        <i class="mdi mdi-certificate"></i>
                        <span class="nav-text">Categories</span>
                    </a>
                </li>
                <li class="{{ set_active(['admin.projects.*']) }}">
                    <a class="sidenav-item-link" href="{{ route('admin.projects.index') }}">
                        <i class="mdi mdi-projector"></i>
                        <span class="nav-text">Projects</span>
                    </a>
                </li>
                <li class="{{ set_active(['admin.features.*']) }}">
                    <a class="sidenav-item-link" href="{{ route('admin.features.index') }}">
                        <i class="mdi mdi-feature-search"></i>
                        <span class="nav-text">Features</span>
                    </a>
                </li>
                <li class="section-title">
                    HR System
                </li>
                <li
                    class="has-sub 
                    {{ set_active(['admin.employees.*', 'admin.departments.*', 'admin.jobs.*', 'admin.salaries.*', 'admin.vacations.*', 'admin.attendance.*']) }}">
                    <a class="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse"
                        data-target="#human-resource" aria-expanded="false" aria-controls="human-resource">
                        <i class="mdi mdi-ungroup"></i>
                        <span class="nav-text">Human Resource</span> <b class="caret"></b>
                    </a>
                    <ul class="collapse {{ set_show(['admin.employees.*', 'admin.departments.*', 'admin.jobs.*', 'admin.salaries.*', 'admin.vacations.*', 'admin.attendance.*']) }}"
                        id="human-resource" data-parent="#sidebar-menu">
                        <div class="sub-menu">
                            <li class="{{ set_active(['admin.employees.*']) }}">
                                <a class="sidenav-item-link" href="{{ route('admin.employees.index') }}">
                                    <span class="nav-text">Employees</span>
                                </a>
                            </li>
                            <li class="{{ set_active(['admin.departments.*']) }}">
                                <a class="sidenav-item-link" href="{{ route('admin.departments.index') }}">
                                    <span class="nav-text">Departments</span>
                                </a>
                            </li>
                            <li class="{{ set_active(['admin.jobs.*']) }}">
                                <a class="sidenav-item-link" href="{{ route('admin.jobs.index') }}">
                                    <span class="nav-text">Jobs</span>
                                </a>
                            </li>
                            <li class="{{ set_active(['admin.salaries.*']) }}">
                                <a class="sidenav-item-link" href="{{ route('admin.salaries.index') }}">
                                    <span class="nav-text">Salaries</span>
                                </a>
                            </li>
                            <li class="{{ set_active(['admin.vacations.*']) }}">
                                <a class="sidenav-item-link" href="{{ route('admin.vacations.index') }}">
                                    <span class="nav-text">Vacations</span>
                                </a>
                            </li>
                            <li class="{{ set_active(['admin.attendance.*']) }}">
                                <a class="sidenav-item-link" href="{{ route('admin.attendance.index') }}">
                                    <span class="nav-text">Attendance</span>
                                </a>
                            </li>
                        </div>
                    </ul>
                </li>
                <li class="section-title">
                    Apps
                </li>
                <li>
                    <a class="sidenav-item-link" href="chat.html">
                        <i class="mdi mdi-wechat"></i>
                        <span class="nav-text">Chat</span>
                    </a>
                </li>
                <li>
                    <a class="sidenav-item-link" href="contacts.html">
                        <i class="mdi mdi-phone"></i>
                        <span class="nav-text">Contacts</span>
                    </a>
                </li>
                <li>
                    <a class="sidenav-item-link" href="team.html">
                        <i class="mdi mdi-account-group"></i>
                        <span class="nav-text">Team</span>
                    </a>
                </li>
                <li>
                    <a class="sidenav-item-link" href="calendar.html">
                        <i class="mdi mdi-calendar-check"></i>
                        <span class="nav-text">Calendar</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</aside>
