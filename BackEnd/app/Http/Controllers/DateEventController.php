<?php

namespace App\Http\Controllers;
use App\Models\dateEvent;
use Illuminate\Http\Request;


class DateEventController extends Controller
{
     public function index(){
        //
    }

    public function show(){
        //
    }

    public function store(Request $request){
        $data = $request->json()->all();
        
        $dataDateEvent = $data['dateEvent'];
       

        $dateEvent = new DateEvent();
        $dateEvent->name =  $dataDateEvent['name'];
        $dateEvent->description =  $dataDateEvent['description'];
        $dateEvent->place =  $dataDateEvent['place'];
        $dateEvent->date =  $dataDateEvent['date'];
        $dateEvent->hour =  $dataDateEvent['hour'];
        $dateEvent->delay =  $dataDateEvent['delay'];
       

        $dateEvent->save();
        return response()->json([
            'data' => [
                'Guardado'=>'Exitoso'
            ]
        ], 201);  
    }

    public function update(Resquest $request, $id){
        $data = $request->json()->all();
        $dateEvent = blog::findOrFail($id);
        $dataDateEvent = $data['dateEvent'];
       

        
        $dateEvent->name =  $dataDateEvent['name'];
        $dateEvent->description =  $dataDateEvent['description'];
        $dateEvent->place =  $dataDateEvent['place'];
        $dateEvent->date =  $dataDateEvent['date'];
        $dateEvent->hour =  $dataDateEvent['hour'];
        $dateEvent->delay =  $dataDateEvent['delay'];
       

        $dateEvent->save();
        return response()->json([
            'data' => [
                'Actualizado'=>'Exitoso'
            ]
        ], 201);  
    }

    public function destroy(){
        $dateEvent = DateEvent::findOrFail($id);
        $dateEvent->delete();
        return response()->json(['Eliminado'=>'Exitoso'],201);
    }

    public function edit(){
        //
    }


}
