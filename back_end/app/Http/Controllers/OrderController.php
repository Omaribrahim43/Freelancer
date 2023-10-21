<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Order_feature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function projectOrders($id)
    {
        $Orders = Order::where('project_id', $id)->get();
        return response()->json($Orders);
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
      
        $data = $request->all();
       
        // $data = $data['amount']['data'];
        // $data =$data['project_id'];
   $Order=  Order::create([
            'amount' => $request->amount,
            'payment_method' => $request->method,
            'duration' => $request->duration,
            'project_id' => $request->projectId,
            'user_id' => $request->userId,
            
        ]);


        $features = $request->featureIds;
        if ($features) {
        foreach ($features as  $value) {
            Order_feature::create([
                'order_id'=> $Order->id,
                'feature_id'=> $value,

            ]);
        }
        }

        // Attach feature IDs to the order (assuming a many-to-many relationship)
        // $order->features()->sync($featureIds);
    
        // You can also perform any additional logic here
    
        return response()->json($data);
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
