<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $fillable = [
        'roomnumber',
        'price',
        'content',
        'image',
    ];
    use HasFactory;
    public function customers()
    {
        return $this->belongsTo(Customer::class,'id');
    }
}
