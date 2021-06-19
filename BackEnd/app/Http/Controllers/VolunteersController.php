<?php

namespace App\Http\Controllers;

use App\Models\Volunteers;
use Illuminate\Http\Request;

class VolunteersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            volunteers::all()
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

        $dataVolunteers = $data['volunteers'];

        $volunteers = new Volunteers();
        $volunteers->name =  $dataVolunteers['name'];
        $volunteers->surname =  $dataVolunteers['surname'];
        $volunteers->CI =  $dataVolunteers['CI'];
        $volunteers->description =  $dataVolunteers['description'];
        $volunteers->address =  $dataVolunteers['address'];
        $volunteers->availability =  $dataVolunteers['availability'];
        $volunteers->telefonNumber =  $dataVolunteers['telefonNumber'];
        $volunteers->image =  $dataVolunteers['image'];
        $volunteers->state =  $dataVolunteers['state'];
        $volunteers->save();

        return response()->json([
            'data' => [
                'Guardado' => 'Exitoso'
            ]
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\volunteers  $volunteers
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $volunteers = volunteers::findOrFail($id);
        return response()->json(
            $volunteers
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\volunteers  $volunteers
     * @return \Illuminate\Http\Response
     */
    public function edit(volunteers $volunteers)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\volunteers  $volunteers
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->json()->all();
<<<<<<< HEAD

=======
>>>>>>> 2746eb47bedc618f999a62aae9b0726ac0d5bdab
        $volunteers = volunteers::findOrFail($id);
        $dataVolunteers = $data['volunteers'];

        $volunteers->name =  $dataVolunteers['name'];
        $volunteers->surname =  $dataVolunteers['surname'];
        $volunteers->CI =  $dataVolunteers['CI'];
        $volunteers->description =  $dataVolunteers['description'];
        $volunteers->address =  $dataVolunteers['address'];
        $volunteers->availability =  $dataVolunteers['availability'];
        $volunteers->telefonNumber =  $dataVolunteers['telefonNumber'];
        $volunteers->image =  $dataVolunteers['image'];
        $volunteers->state =  $dataVolunteers['state'];
        $volunteers->save();

        return response()->json(
            $volunteers
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\volunteers  $volunteers
     * @return \Illuminate\Http\Response
     */
    public function destroy(volunteers $volunteers, $id)
    {
        $volunteers = volunteers::findOrFail($id);
        $volunteers->delete();
        return response()->json(['message' => 'voluntario quitado', 'volunteers' => $volunteers], 200);
    }
}