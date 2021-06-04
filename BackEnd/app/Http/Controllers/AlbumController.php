<?php

namespace App\Http\Controllers;
use App\Models\Events;
use App\Models\Albums;
use Illuminate\Http\Request;

class AlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json( albums::all()
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
        
        $dataAlbums = $data['albums'];
        $dataEvents = $data['events'];
        $events = Events::findOrFail($dataEvents['id']);
       

        $albums = new Albums();
        $albums->title =  $dataAlbums['title'];
        $albums->description =  $dataAlbums['description'];
        $albums->date =  $dataAlbums['date'];
        $albums->events()->associate($events);
        $albums->save();

        return response()->json([
        'data' => [
            'Guardado'=>'Exitoso'
        ]
    ], 201);        

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\albums  $albums
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $albums = albums::findOrFail($id);
        return response()->json(
              $albums
       );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\albums  $albums
     * @return \Illuminate\Http\Response
     */
    public function edit(albums $albums)
    {
      //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\albums  $albums
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->json()->all();
        
        $albums = albums::findOrFail($id);
        $dataAlbums = $data['albums'];
        $dataEvents = $data['events'];
        $events = Events::findOrFail($dataEvents['id']);

       
        $albums->title =  $dataAlbums['title'];
        $albums->description =  $dataAlbums['description'];
        $albums->date =  $dataAlbums['date'];
        $albums->events()->associate($events);
        $albums->save();

        return response()->json([
            'data' => [
                'Actualizado'=>'Exitoso'
            ]
        ], 201);    
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\albums  $albums
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $albums = albums::findOrFail($id);
        $albums->delete();
        return response()->json(['message'=>'albums quitado', 'albums'=>$albums],200);
    }
}
