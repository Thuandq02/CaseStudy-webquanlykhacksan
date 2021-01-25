<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'age',
        'gender',
        'phone',
        'email',
        'address',
    ];

    public function rooms()
    {
        return $this->hasMany(Room::class,'id');
    }
}
