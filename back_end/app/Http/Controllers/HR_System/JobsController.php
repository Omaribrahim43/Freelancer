<?php

namespace App\Http\Controllers\HR_System;

use App\DataTables\HR_System\JobsDataTable;
use App\Http\Controllers\Controller;
use App\Models\HR_system\jobs;
use Illuminate\Http\Request;

class JobsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(JobsDataTable $dataTable)
    {
        return $dataTable->render('admin.pages.hr-system.jobs.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.pages.hr-system.jobs.create');
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
            'job_title' => ['required', 'max:50'],
            'salary' => ['required'],
            'job_desc' => ['required', 'max:100'],
        ]);

        $jobs = new jobs();

        $jobs->job_title = $request->job_title;
        $jobs->salary = $request->salary;
        $jobs->job_desc = $request->job_desc;
        $jobs->save();

        $notification = array(
            'message' => 'Job Created Successfully!!',
            'alert-type' => 'success',
        );

        return redirect()->route('admin.jobs.index')->with($notification);
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
        $job = jobs::findOrFail($id);
        return view('admin.pages.hr-system.jobs.edit', compact('job'));
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
            'job_title' => ['required', 'max:50'],
            'salary' => ['required'],
            'job_desc' => ['required', 'max:100'],
        ]);

        $jobs = jobs::findOrFail($id);

        $jobs->job_title = $request->job_title;
        $jobs->salary = $request->salary;
        $jobs->job_desc = $request->job_desc;
        $jobs->save();

        $notification = array(
            'message' => 'Job Updated Successfully!!',
            'alert-type' => 'success',
        );

        return redirect()->route('admin.jobs.index')->with($notification);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $job = jobs::findOrFail($id);
        $job->delete();

        return response(['status' => 'success', 'message' => 'Deleted Successfully!']);
    }
}
