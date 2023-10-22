<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Project;
use App\Models\User;
use App\Models\Feature;
use App\Traits\ImageUploadTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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
        $projects = Project::all() ;
        $projects->load('user');
        $projects->load('category');
        return response()->json($projects);
    }
    public function categoryProjects($id)
    {
        $projects = Project::where('category_id', $id)->get();
        return response()->json($projects);
    }
    public function oneProject($id)
    {
        $project = Project::with(['review', 'user', 'review.user'])->findOrFail($id);

        return response()->json($project);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // Validate the incoming request for creating a project
        $projectValidator = Validator::make(
            $request->all(),
            [
                'seller_id' => 'required',
                'category_id' => 'required',
                'title' => 'required|max:30',
                'image' => 'nullable',
                'price' => 'required',
                'deadline' => 'required',
                'desc' => 'required',
            ]
        );

        if ($projectValidator->fails()) {
            Log::error('Project validation errors:', $projectValidator->errors()->all());
            return response()->json(['error' => $projectValidator->errors()], 400);
        }

        // Log request data
        Log::info('Request data:', $request->all());

        // Upload project image
        $imagePath = $this->uploadImage($request, 'image', 'uploads');

        // Create the Project
        $project = Project::create([
            'seller_id' => $request->seller_id,
            'category_id' => $request->category_id,
            'title' => $request->title,
            'image' => $imagePath,
            'price' => $request->price,
            'deadline' => $request->deadline,
            'desc' => $request->desc,
        ]);

        // Log that the Project was added successfully
        Log::info('Project added successfully');

        // Create Features associated with the Project
        if ($request->has('features')) {
            foreach ($request->features as $featureData) {
                Feature::create([
                    'project_id' => $project->id,
                    'title' => $featureData['title'],
                    'price' => $featureData['price'],
                    'deadline' => $featureData['deadline'],
                ]);
            }
        }

        // Log that the Features were added successfully
        Log::info('Features added successfully');

        return response()->json(['message' => 'Project and Features added successfully!'], 200);
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
                'title' => 'required|max:30',
                'image' => 'nullable',
                'price' => 'required',
                'deadline' => 'required',
                'desc' => 'required',
            ]
        );

        if ($validator->fails()) {
            Log::error('Validation errors:', $validator->errors()->all());
            return response()->json(['error' => $validator->errors()], 400);
        }
        Log::info('Request data:', $request->all());

        $imagePath = $this->uploadImage($request, 'image', 'uploads');

        Project::create([
            'seller_id' => $request->seller_id,
            'category_id' => $request->category_id,
            'title' => $request->title,
            'image' => $imagePath,
            'price' => $request->price,
            'deadline' => $request->deadline,
            'desc' => $request->desc,
        ]);
        
        Log::info('Project added successfully');
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
