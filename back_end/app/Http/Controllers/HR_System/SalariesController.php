<?php

namespace App\Http\Controllers\HR_System;

use App\DataTables\HR_System\SalariesDataTable;
use App\Http\Controllers\Controller;
use App\Models\HR_system\Employees;
use App\Models\HR_system\jobs;
use App\Models\HR_system\salaries;
use Illuminate\Http\Request;

class SalariesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(SalariesDataTable $dataTable)
    {
        return $dataTable->render('admin.pages.hr-system.salaries.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $employees = Employees::all();
        $jobs = jobs::all();
        return view('admin.pages.hr-system.salaries.create', compact('employees', 'jobs'));
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
            'job_id' => ['required'],
            'salary_amount' => ['required'],
            'salary_start_date' => ['required', 'date'],
            'salary_end_date' => ['required', 'date'],
        ]);

        $salary = new salaries();

        $salary->employee_id = $request->employee_id;
        $salary->job_id = $request->job_id;
        $salary->salary_amount = $request->salary_amount;
        $salary->salary_start_date = $request->salary_start_date;
        $salary->salary_end_date = $request->salary_end_date;
        $salary->save();

        $notification = array(
            'message' => 'Salary Created Successfully!!',
            'alert-type' => 'success',
        );

        return redirect()->route('admin.salaries.index')->with($notification);
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
        $jobs = jobs::all();
        $salary = salaries::findOrFail($id);
        return view('admin.pages.hr-system.salaries.edit', compact('employees', 'jobs', 'salary'));
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
            'job_id' => ['required'],
            'salary_amount' => ['required'],
            'salary_start_date' => ['required', 'date'],
            'salary_end_date' => ['required', 'date'],
        ]);

        $salary = salaries::findOrFail($id);

        $salary->employee_id = $request->employee_id;
        $salary->job_id = $request->job_id;
        $salary->salary_amount = $request->salary_amount;
        $salary->salary_start_date = $request->salary_start_date;
        $salary->salary_end_date = $request->salary_end_date;
        $salary->save();

        $notification = array(
            'message' => 'Salary Updated Successfully!!',
            'alert-type' => 'success',
        );

        return redirect()->route('admin.salaries.index')->with($notification);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $salary = salaries::findOrFail($id);
        $salary->delete();

        return response(['status' => 'success', 'message' => 'Deleted Successfully!']);
    }
}
