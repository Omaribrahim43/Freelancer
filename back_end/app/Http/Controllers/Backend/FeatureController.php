<?php

namespace App\Http\Controllers\Backend;

use App\DataTables\FeaturesDataTable;
use App\Http\Controllers\Controller;
use App\Models\Feature;
use App\Models\Project;
use Illuminate\Http\Request;

class FeatureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(FeaturesDataTable $dataTable)
    {
        return $dataTable->render('admin.pages.features.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $projects = Project::all();
        return view('admin.pages.features.create', compact('projects'));
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
            'project' => ['required'],
            'title' => ['required', 'max:30'],
            'price' => ['required'],
            'duration' => ['required'],
        ]);

        $feature = new Feature();

        $feature->project_id = $request->project;
        $feature->title = $request->title;
        $feature->price = $request->price;
        $feature->deadline = $request->duration;
        $feature->save();

        $notification = array(
            'message' => 'Feature Created Successfully!!',
            'alert-type' => 'success',
        );

        return redirect()->route('admin.features.index')->with($notification);
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
        $projects = Project::all();
        $feature = Feature::findOrFail($id);
        return view('admin.pages.features.edit', compact('feature', 'projects'));
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
            'project' => ['required'],
            'title' => ['required', 'max:30'],
            'price' => ['required'],
            'duration' => ['required'],
        ]);

        $feature = Feature::findOrFail($id);

        $feature->project_id = $request->project;
        $feature->title = $request->title;
        $feature->price = $request->price;
        $feature->deadline = $request->duration;
        $feature->save();

        $notification = array(
            'message' => 'Feature Updated Successfully!!',
            'alert-type' => 'success',
        );

        return redirect()->route('admin.features.index')->with($notification);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $feature = Feature::findOrFail($id);
        $feature->delete();

        return response(['status' => 'success', 'message' => 'Deleted Successfully!']);
    }
}
