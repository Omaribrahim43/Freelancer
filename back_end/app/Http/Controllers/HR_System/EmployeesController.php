<?php

namespace App\Http\Controllers\HR_System;

use App\DataTables\HR_System\EmployeesDataTable;
use App\Http\Controllers\Controller;
use App\Models\HR_system\Employees;
use App\Traits\ImageUploadTrait;
use Illuminate\Http\Request;

class EmployeesController extends Controller
{
    use ImageUploadTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(EmployeesDataTable $dataTable)
    {
        return $dataTable->render('admin.pages.hr-system.employees.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.pages.hr-system.employees.create');
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
            'image' => ['required', 'max:4196', 'image'],
            'username' => ['required', 'max:50'],
            'first_name' => ['required', 'max:30'],
            'last_name' => ['required', 'max:30'],
            'email' => ['required', 'email'],
            'phone' => ['required'],
            'gender' => ['required'],
            'bod' => ['required'],
        ]);

        $employee = new Employees();

        $imagePath = $this->uploadImage($request, 'image', 'uploads');

        $employee->image = $imagePath;
        $employee->username = $request->username;
        $employee->first_name = $request->first_name;
        $employee->last_name = $request->last_name;
        $employee->email = $request->email;
        $employee->phone = $request->phone;
        $employee->gender = $request->gender;
        $employee->date_of_birth = $request->bod;
        $employee->save();

        $notification = array(
            'message' => 'Employee Created Successfully!!',
            'alert-type' => 'success',
        );

        return redirect()->route('admin.employees.index')->with($notification);
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
        $employee = Employees::findOrFail($id);
        return view('admin.pages.hr-system.employees.edit', compact('employee'));
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
            'image' => ['nullable', 'max:4196', 'image'],
            'username' => ['required', 'max:50'],
            'first_name' => ['required', 'max:30'],
            'last_name' => ['required', 'max:30'],
            'email' => ['required', 'email'],
            'phone' => ['required'],
            'gender' => ['required'],
            'bod' => ['required'],
        ]);

        $employee = Employees::findOrFail($id);

        $imagePath = $this->updateImage($request, 'image', 'uploads', $employee->image);

        $employee->image = empty(!$imagePath) ? $imagePath : $employee->image;
        $employee->username = $request->username;
        $employee->first_name = $request->first_name;
        $employee->last_name = $request->last_name;
        $employee->email = $request->email;
        $employee->phone = $request->phone;
        $employee->gender = $request->gender;
        $employee->date_of_birth = $request->bod;
        $employee->save();

        $notification = array(
            'message' => 'Employee Updated Successfully!!',
            'alert-type' => 'success',
        );

        return redirect()->route('admin.employees.index')->with($notification);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $employee = Employees::findOrFail($id);
        $this->deleteImage($employee->image);
        $employee->delete();

        return response(['status' => 'success', 'message' => 'Deleted Successfully!']);
    }
}
