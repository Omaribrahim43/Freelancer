<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        // Retrieve the data, including payment, order, and feature IDs
        $data = $request->input('data');
    
        // Access the feature IDs
        $featureIds = $data['featureIds'];
    
        // Create an order record with all data, including feature IDs
        $order = Order::create([
            'amount' => $data['paymentData']['amount'],
            'payment_method' => $data['paymentData']['method'],
            'duration' => $data['orderDetails']['duration'],
            'project_id' => $data['orderDetails']['projectId'],
            'user_id' => $data['orderDetails']['userId'],
            
        ]);
    
        // Attach feature IDs to the order (assuming a many-to-many relationship)
        // $order->features()->sync($featureIds);
    
        // You can also perform any additional logic here
    
        return response()->json(['message' => 'Data stored successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
