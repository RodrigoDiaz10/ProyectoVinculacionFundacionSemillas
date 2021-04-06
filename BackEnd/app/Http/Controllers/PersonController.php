<?php

namespace App\Http\Controllers;

use App\Models\person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json( person::all()
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
        

        $person = new person;
        $person->name = $request->input('name');
        $person->surname = $request->input('surname');
        $person->dateBirth = $request->input('dateBirth');
        $person->age = $request->input('age');
        $person->CI = $request->input('CI');
        $person->mothersName = $request->input('mothersName');
        $person->fathersName = $request->input('fathersName');
        $person->study = $request->input('study');
        $person->houseAddress = $request->input('houseAddress');
        $person->schoolName = $request->input('schoolName');
        $person->image = $request->input('image');

        $person->save();
        return response()->json(
                $person
       );


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\person  $person
     * @return \Illuminate\Http\Response
     */
    public function show(person $person)
    {
        $person = person::findOrFail($id);
        return response()->json(
              $person
       );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\person  $person
     * @return \Illuminate\Http\Response
     */
    public function edit(person $person)
    {
      //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\person  $person
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $person = person::findOrFail($id);
        $person->name = $request->input('name');
        $person->surname = $request->input('surname');
        $person->dateBirth = $request->input('dateBirth');
        $person->age = $request->input('age');
        $person->CI = $request->input('CI');
        $person->mothersName = $request->input('mothersName');
        $person->fathersName = $request->input('fathersName');
        $person->study = $request->input('study');
        $person->houseAddress = $request->input('houseAddress');
        $person->schoolName = $request->input('schoolName');
        $person->image = $request->input('image');

        $person->save();
        return response()->json(
               $person
        );
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\person  $person
     * @return \Illuminate\Http\Response
     */
    public function destroy(person $person,$id)
    {
        $person = person::findOrFail($id);
        $person->delete();
        return response()->json(['message'=>'Persona quitada', 'Persona'=>$person],200);
    }
}
