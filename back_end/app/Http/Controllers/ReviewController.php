<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reviews = Review::all();
        $reviews->load('user');
        $reviews->load('project');
        return response()->json($reviews);
    }

    public function userReviews($id)
    {
        $reviews = Review::where('user_id', $id)->get();
        return response()->json($reviews);
    }

    public function projectReviews($id)
    {
        $reviews = Review::where('project_id', $id)->get();
        return response()->json($reviews);
    }

    public function oneReview($id)
    {
        $review = Review::findOrFail($id);
        return response()->json($review);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // Validate the incoming request for creating a project
        $reviewValidator = Validator::make(
            $request->all(),    
            [
                'user_id' => 'required',
                'project_id' => 'required',
                'rating' => 'required',
                'comment' => 'required',
                'review_date' => 'required',
                
            ]
        );

        if ($reviewValidator->fails()) {
            Log::error('Review validation errors:', $reviewValidator->errors()->all());
            return response()->json(['error' => $reviewValidator->errors()], 400);
        }

        
        Log::info('Request data:', $request->all());

        // Upload project image
        // $imagePath = $this->uploadImage($request, 'image', 'uploads');

        // Create the Project
        Review::create([
            'user_id' => $request->user_id,
            'project_id' => $request->project_id,
            'rating' => $request->rating,
            'comment' => $request->comment,
            'review_date' => $request->review_date,

        ]);

        // Log that the Project was added successfully
        Log::info('Review added successfully');
        return response()->json(['message' => 'Review added successfully!'], 200);

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
                'user_id' => 'required',
                'project_id' => 'required',
                'rating' => 'required',
                'comment' => 'nullable',
                'review_date' => 'required',
            ]
        );

        if ($validator->fails()) {
            Log::error('Validation errors:', $validator->errors()->all());
            return response()->json(['error' => $validator->errors()], 400);
        }
        Log::info('Request data:', $request->all());

        // $imagePath = $this->uploadImage($request, 'image', 'uploads');

        Review::create([
            'user_id' => $request->user_id,
            'project_id' => $request->project_id,
            'rating' => $request->rating,
            'comment' => $request->comment,
            'review_date' => $request->review_date,
        ]);

        Log::info('Review added successfully');
        return response()->json(['message' => 'Review added successfully!'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function show(Review $review)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function edit(Review $review)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    // public function update(Request $request, Review $review)
    public function update(Request $request, $id)
    {
        $a=$request->all();
        $validator = Validator::make(

            $request->all(),
            [
                // 'user_id' => 'required',
                // 'project_id' => 'required',
                // 'rating' => 'required',
                'comment' => 'nullable',
                // 'review_date' => 'required',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        // $imagePath = $this->updateImage($request, 'image', 'uploads', $request->image);

        // Review::where('id', $id)->update([
        //     'user_id' => $request->user_id,
        //     'project_id' => $request->project_id,
        //     'rating' => $request->rating,
        //     'comment' => $request->comment,
        //     'review_date' => $request->review_date,
        // ]);

        return response()->json([$a], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $review = Review::findOrFail($id);
        // $this->deleteImage($review->image);
        $review->delete();

        return response()->json(['message' => 'review deleted successfully!'], 200);
    }
}
