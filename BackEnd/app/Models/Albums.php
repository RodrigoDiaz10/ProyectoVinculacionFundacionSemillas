<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Albums extends Model
{
    use HasFactory;
    protected $table = 'albums';
    public $timestamps = true;

    protected $fillable = [
        'title',
        'description',
        'date',
       
    ];

    public function images()
    {
        return $this->hasMany(Images::class);
    }
    public function events()
    {
        return $this->belongsTo(Events::class);
    }
}
