<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
class FeatureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $features = Feature::all();
        return response()->json($features);
    }


    public function projectFeatures($id)
    {
        $features = Feature::where('project_id', $id)->get();
        return response()->json($features);
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
                'project_id' => 'required',
                'title' => 'required',
                'deadline' => 'required',
                'price' => 'required',
            ]
        );
        if ($validator->fails()) {
            Log::error('Validation errors:', $validator->errors()->all());
            return response()->json(['error' => $validator->errors()], 400);
        }
        Log::info('Request data:', $request->all());


        Feature::create([
            'project_id' => $request->project_id,
            'title' => $request->title,
            'price' => $request->price,
            'deadline' => $request->deadline,
        ]);
        
        Log::info('Feature added successfully');
        return response()->json(['message' => 'Feature added successfully!'], 200);
        }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Feature  $feature
     * @return \Illuminate\Http\Response
     */
    public function show(Feature $feature)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Feature  $feature
     * @return \Illuminate\Http\Response
     */
    public function edit(Feature $feature)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Feature  $feature
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Feature $feature)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Feature  $feature
     * @return \Illuminate\Http\Response
     */
    public function destroy(Feature $feature)
    {
        //
    }
}
