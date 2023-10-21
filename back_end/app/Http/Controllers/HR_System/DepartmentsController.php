<?php

namespace App\Http\Controllers\HR_System;

use App\DataTables\HR_System\DepartmentsDataTable;
use App\Http\Controllers\Controller;
use App\Models\HR_system\Departments;
use App\Models\HR_system\Employees;
use Illuminate\Http\Request;

class DepartmentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(DepartmentsDataTable $dataTable)
    {
        return $dataTable->render('admin.pages.hr-system.departments.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $employees = Employees::all();
        return view('admin.pages.hr-system.departments.create', compact('employees'));
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
            'department_name' => ['required', 'max:50'],
            'manager' => ['required'],
            'location' => ['required', 'max:30'],
            'desc' => ['required', 'max:30'],
        ]);

        $department = new Departments();

        $department->department_name = $request->department_name;
        $department->manager = $request->manager;
        $department->location = $request->location;
        $department->desc = $request->desc;
        $department->save();

        $notification = array(
            'message' => 'Department Created Successfully!!',
            'alert-type' => 'success',
        );

        return redirect()->route('admin.departments.index')->with($notification);
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
        $departments = Departments::findOrFail($id);
        return view('admin.pages.hr-system.departments.edit', compact('departments', 'employees'));
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
            'department_name' => ['required', 'max:50'],
            'manager' => ['required'],
            'location' => ['required', 'max:30'],
            'desc' => ['required', 'max:30'],
        ]);

        $department = Departments::findOrFail($id);

        $department->department_name = $request->department_name;
        $department->manager = $request->manager;
        $department->location = $request->location;
        $department->desc = $request->desc;
        $department->save();

        $notification = array(
            'message' => 'Department Updated Successfully!!',
            'alert-type' => 'success',
        );

        return redirect()->route('admin.departments.index')->with($notification);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $department = Departments::findOrFail($id);
        $department->delete();

        return response(['status' => 'success', 'message' => 'Deleted Successfully!']);
    }
}
