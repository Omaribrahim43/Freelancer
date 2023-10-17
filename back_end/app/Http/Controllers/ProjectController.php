<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Traits\ImageUploadTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ProjectController extends Controller
{
    use ImageUploadTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::all();
        return response()->json($projects);
    }
    public function oneProject($id)
    {
        $project = Project::findOrFail($id);
        return response()->json($project);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'seller_id' => 'required',
                'category_id' => 'required',
                'image' => 'required',
                'title' => 'required|max:30',
                'price' => 'required',
                'deadline' => 'required',
                'status' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $imagePath = $this->uploadImage($request, 'image', 'uploads');

        Project::create([
            'seller_id' => $request->seller_id,
            'category_id' => $request->category_id,
            'title' => $request->title,
            'image' => $imagePath,
            'price' => $request->price,
            'deadline' => $request->deadline,
            'status' => $request->status,
        ]);

        return response()->json(['message' => 'project added successfully!'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'seller_id' => 'required',
                'category_id' => 'required',
                'image' => 'nullable',
                'title' => 'required|max:30',
                'price' => 'required',
                'deadline' => 'required',
                'status' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $imagePath = $this->updateImage($request, 'image', 'uploads', $request->image);

        Project::where('id', $id)->update([
            'seller_id' => $request->seller_id,
            'category_id' => $request->category_id,
            'title' => $request->title,
            'image' => $imagePath,
            'price' => $request->price,
            'deadline' => $request->deadline,
            'status' => $request->status,
        ]);

        return response()->json(['message' => 'project updated successfully!'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        $this->deleteImage($project->image);
        $project->delete();

        return response()->json(['message' => 'project deleted successfully!'], 200);
    }
}
