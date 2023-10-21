<?php

namespace App\Http\Controllers\Backend;

use App\DataTables\ProjectsDataTable;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Project;
use App\Models\User;
use App\Traits\ImageUploadTrait;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    use ImageUploadTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ProjectsDataTable $dataTable)
    {
        return $dataTable->render('admin.pages.projects.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $users = User::where('role', 'freelancer')->get();
        $categories = Category::all();
        return view('admin.pages.projects.create', compact('users', 'categories'));
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
            'freelancer' => ['required'],
            'category' => ['required'],
            'title' => ['required', 'max:30'],
            'price' => ['required'],
            'duration' => ['required'],
            'desc' => ['required', 'max:100'],
            'status' => ['required'],
        ]);

        $project = new Project();

        $imagePath = $this->uploadImage($request, 'image', 'uploads');

        $project->image = empty(!$imagePath) ? $imagePath : $project->image;
        $project->seller_id = $request->freelancer;
        $project->category_id = $request->category;
        $project->title = $request->title;
        $project->price = $request->price;
        $project->deadline = $request->duration;
        $project->desc = $request->desc;
        $project->status = $request->status;
        $project->save();

        $notification = array(
            'message' => 'Project Created Successfully!!',
            'alert-type' => 'success',
        );

        return redirect()->route('admin.projects.index')->with($notification);
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
        $project = Project::findOrFail($id);
        $users = User::where('role', 'freelancer')->get();
        $categories = Category::all();
        return view('admin.pages.projects.edit', compact('project', 'users', 'categories'));
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
            'freelancer' => ['required'],
            'category' => ['required'],
            'title' => ['required', 'max:30'],
            'price' => ['required'],
            'duration' => ['required'],
            'desc' => ['required', 'max:100'],
            'status' => ['required'],
        ]);

        $project = Project::findOrFail($id);

        $imagePath = $this->updateImage($request, 'image', 'uploads', $project->image);

        $project->image = empty(!$imagePath) ? $imagePath : $project->image;
        $project->seller_id = $request->freelancer;
        $project->category_id = $request->category;
        $project->title = $request->title;
        $project->price = $request->price;
        $project->deadline = $request->duration;
        $project->desc = $request->desc;
        $project->status = $request->status;
        $project->save();

        $notification = array(
            'message' => 'Project Updated Successfully!!',
            'alert-type' => 'success',
        );

        return redirect()->route('admin.projects.index')->with($notification);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        $this->deleteImage($project->image);
        $project->delete();

        return response(['status' => 'success', 'message' => 'Deleted Successfully!']);
    }
    public function acceptProject($id)
    {
        $project = Project::findOrFail($id);
        $project->status = 'active';
        $project->save();
        $notification = array(
            'message' => 'Project Accepted.',
            'alert-type' => 'success',
        );
        return redirect()->back()->with($notification);
    }
    public function rejectProject($id)
    {
        $project = Project::findOrFail($id);
        $project->delete();
        $notification = array(
            'message' => 'Project Rejected.',
            'alert-type' => 'error',
        );
        return redirect()->back()->with($notification);
    }
}
