<?php

namespace App\Http\Controllers\HR_System;

use App\DataTables\HR_System\VacationsDataTable;
use App\Http\Controllers\Controller;
use App\Models\HR_system\Employees;
use App\Models\HR_system\Vacations;
use Illuminate\Http\Request;

class VacationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(VacationsDataTable $dataTable)
    {
        return $dataTable->render('admin.pages.hr-system.vacations.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $employees = Employees::all();
        return view('admin.pages.hr-system.vacations.create', compact('employees'));
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
            'vacation_type' => ['required'],
            'status' => ['required'],
            'start_date' => ['required', 'date'],
            'end_date' => ['required', 'date'],
        ]);

        $vacation = new Vacations();

        $vacation->employee_id = $request->employee_id;
        $vacation->vacation_type = $request->vacation_type;
        $vacation->status = $request->status;
        $vacation->start_date = $request->start_date;
        $vacation->end_date = $request->end_date;
        $vacation->save();

        $notification = array(
            'message' => 'Vacation Created Successfully!!',
            'alert-type' => 'success',
        );

        return redirect()->route('admin.vacations.index')->with($notification);
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
        $employees = Employees::all();
        $vacation = Vacations::findOrFail($id);
        return view('admin.pages.hr-system.vacations.edit', compact('vacation', 'employees'));
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
            'vacation_type' => ['required'],
            'status' => ['required'],
            'start_date' => ['required', 'date'],
            'end_date' => ['required', 'date'],
        ]);

        $vacation = Vacations::findOrFail($id);

        $vacation->employee_id = $request->employee_id;
        $vacation->vacation_type = $request->vacation_type;
        $vacation->status = $request->status;
        $vacation->start_date = $request->start_date;
        $vacation->end_date = $request->end_date;
        $vacation->save();

        $notification = array(
            'message' => 'Vacation Updated Successfully!!',
            'alert-type' => 'success',
        );

        return redirect()->route('admin.vacations.index')->with($notification);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $vacation = Vacations::findOrFail($id);
        $vacation->delete();

        return response(['status' => 'success', 'message' => 'Deleted Successfully!']);
    }
}
