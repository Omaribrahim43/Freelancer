<?php

namespace App\Http\Controllers\HR_System;

use App\DataTables\HR_System\AttendanceDataTable;
use App\Http\Controllers\Controller;
use App\Models\HR_system\Attendance;
use App\Models\HR_system\Employees;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(AttendanceDataTable $dataTable)
    {
        return $dataTable->render('admin.pages.hr-system.attendance.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $employees = Employees::all();
        return view('admin.pages.hr-system.attendance.create', compact('employees'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'employee_id' => ['required'],
            'date' => ['required', 'date'],
            'clock_in' => ['required'],
            'clock_out' => ['required'],
        ]);

        $attendance = new Attendance();

        $attendance->employee_id = $request->employee_id;
        $attendance->date = $request->date;
        $attendance->clock_in = $request->clock_in;
        $attendance->clock_out = $request->clock_out;
        $attendance->save();

        $notification = array(
            'message' => 'Attendance Created Successfully!!',
            'alert-type' => 'success',
        );

        return redirect()->route('admin.attendance.index')->with($notification);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $attendance = Attendance::findOrFail($id);
        $employees = Employees::all();
        return view('admin.pages.hr-system.attendance.edit', compact('employees', 'attendance'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'employee_id' => ['required'],
            'date' => ['required', 'date'],
            'clock_in' => ['required'],
            'clock_out' => ['required'],
        ]);

        $attendance = Attendance::findOrFail($id);

        $attendance->employee_id = $request->employee_id;
        $attendance->date = $request->date;
        $attendance->clock_in = $request->clock_in;
        $attendance->clock_out = $request->clock_out;
        $attendance->save();

        $notification = array(
            'message' => 'Attendance Updated Successfully!!',
            'alert-type' => 'success',
        );

        return redirect()->route('admin.attendance.index')->with($notification);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $attendance = Attendance::findOrFail($id);
        $attendance->delete();

        return response(['status' => 'success', 'message' => 'Deleted Successfully!']);
    }
}
