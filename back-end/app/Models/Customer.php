<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'gender',
        'phone',
        'email',
        'address',
        'roomnumber',
        'date_from',
        'date_to',
        'no_of_people'
    ];

    public function rooms()
    {
        return $this->hasMany(Room::class,'roomnumber');
    }
}
