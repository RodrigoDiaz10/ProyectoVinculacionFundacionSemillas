<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Images extends Model
{
    use HasFactory;
    protected $table = 'images';
    public $timestamps = true;

    protected $fillable = [
        'name',
        'type',
        'description',
    ];

    public function album()
    {
        return $this->belongsTo(Albums::class);
    }
}
