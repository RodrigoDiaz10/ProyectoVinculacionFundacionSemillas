<?php

namespace App\Http\Controllers;
use App\Models\Albums;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json( images::all()
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
        
        $dataImages = $data['images'];
        $dataAlbums = $data['album'];
        $album = Albums::findOrFail($dataAlbums['id']);
       

        $images = new Images();
        $images->name =  $dataImages['name'];
        $images->type =  $dataImages['type'];
        $images->description =  $dataImages['description'];
        $images->album()->associate($album);
        $images->save();

        return response()->json([
        'data' => [
            'Guardado'=>'Exitoso'
        ]
    ], 201);        

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\images  $images
     * @return \Illuminate\Http\Response
     */
    public function show(images $images)
    {
        $images = images::findOrFail($id);
        return response()->json(
              $images
       );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\images  $images
     * @return \Illuminate\Http\Response
     */
    public function edit(images $images)
    {
      //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\images  $images
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->json()->all();
        
        $images = images::findOrFail($id);
        $dataImages = $data['images'];
        $dataAlbums = $data['album'];
        $album = Albums::findOrFail($dataAlbums['id']);

       
        $images->name =  $dataImages['name'];
        $images->type =  $dataImages['type'];
        $images->description =  $dataImages['description'];
        $images->album()->associate($album);
        $images->save();

        return response()->json(
               $images
        );
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\images  $images
     * @return \Illuminate\Http\Response
     */
    public function destroy(images $images,$id)
    {
        $images = images::findOrFail($id);
        $images->delete();
        return response()->json(['message'=>'images quitado', 'images'=>$images],200);
    }
}
