<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class dateEvent extends Model
{
    use HasFactory;
    
    protected $table = 'dateEvents';
    public $timestamps = true;

    protected $fillable = [
        'name',
        'description',
        'place',
        'date',
        'hour',
        'delay',
    ];
    
    public function blog()
    {
        return $this->hasMany(Blog::class);
    }
 
}
