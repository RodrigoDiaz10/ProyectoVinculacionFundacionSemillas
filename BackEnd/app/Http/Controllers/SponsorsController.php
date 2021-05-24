<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sponsors;

class SponsorsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json( sponsors::all()
       );
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
     
        $data = $request->json()->all();
        
        $dataSponsors = $data['sponsors'];

        $sponsors = new Sponsors();
        $sponsors->name =  $dataSponsors['name'];
        $sponsors->description =  $dataSponsors['description'];
        $sponsors->image =  $dataSponsors['image'];
        $sponsors->save();

        return response()->json([
        'data' => [
            'Guardado'=>'Exitoso'
        ]
    ], 201);        

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\sponsors  $sponsors
     * @return \Illuminate\Http\Response
     */
    public function show(sponsors $sponsors)
    {
        $sponsors = sponsors::findOrFail($id);
        return response()->json(
              $sponsors
       );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\sponsors  $sponsors
     * @return \Illuminate\Http\Response
     */
    public function edit(sponsors $sponsors)
    {
      //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\sponsors  $sponsors
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $sponsors = sponsors::findOrFail($id);
        $dataSponsors = $data['sponsors'];
       
        $sponsors->name =  $dataSponsors['name'];
        $sponsors->description =  $dataSponsors['description'];
        $sponsors->image =  $dataSponsors['image'];
        $sponsors->save();

        return response()->json(
               $sponsors
        );
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\sponsors  $sponsors
     * @return \Illuminate\Http\Response
     */
    public function destroy(sponsors $sponsors,$id)
    {
        $sponsors = sponsors::findOrFail($id);
        $sponsors->delete();
        return response()->json(['message'=>'sponsor quitado', 'sponsors'=>$sponsors],200);
    }
}
