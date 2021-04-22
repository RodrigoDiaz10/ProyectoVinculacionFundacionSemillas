<?php

namespace App\Http\Controllers;

use App\Models\blog;
use App\Models\dateEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'error'=>false,
            'blog'=>blog::all()
        ],200 );
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
       //path image save
        /*if($request->hasFile('image')){
            $file = $request->file('image');
            $name = time().$file->getClientOriginalName();
            $file->move(public_path().'/images/',$name);
       }*/
       //after 
       /*
        $blog = new blog;
        $blog->title = $request->input('title');
        $blog->description = $request->input('description');
        $blog->image = $name;
        $blog->link = $request->input('link');*/
        //before
        
        $data = $request->json()->all();
        
        $dataBlog = $data['blog'];
        $dataDateEvent = $data['dateEvent'];
        $dateEvent = DateEvent::findOrFail($dataDateEvent['id']);

        $blog = new Blog();
        $blog->title =  $dataBlog['title'];
        $blog->description =  $dataBlog['description'];
        $blog->image =  $dataBlog['image'];
        $blog->link =  $dataBlog['link'];
        $blog->dateEvents()->associate($dateEvent);


        $blog->save();
        return response()->json([
            'data' => [
                'Guardado'=>'Exitoso'
            ]
        ], 201);  
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $blog = blog::findOrFail($id);
        return response()->json([
            'data' => [
                'Message'=>'Encontrado'
            ]
        ], 201);  
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(blog $blog)
    {
       //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      /* $blog = blog::find($id);
       if(is_null($blog)){
           return response()->json(['message'=>'no encontrado'],404);
       }
      $blog->update($request->all());
      return response()->json(['message'=>$blog],202);*/
        $data = $request->json()->all();
        $blog = blog::findOrFail($id);
        
        
        $dataBlog = $data['blog'];

        $blog->title =  $dataBlog['title'];
        $blog->description =  $dataBlog['description'];
        $blog->image =  $dataBlog['image'];
        $blog->link =  $dataBlog['link'];

        $blog->save();
        return response()->json([
            'data' => [
                'Actualizado'=>'Exitoso'
            ]
        ], 201); 
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy(blog $blog,$id)
    {
        $blog = blog::findOrFail($id);
        $blog->delete();
        return response()->json(['Message'=>'Eliminado'],201);
    }

    public function imageStore(Request $request)
    { 
        //falta probar
       if($request->hasFile('image')){
            $file = $request->file('image');
            $name = time().$file->getClientOriginalName();
            $file->move(public_path().'/images/',$name);
       }
       $blog = new blog;
       $blog -> image = $name;
       $blog -> save();
    }
}
