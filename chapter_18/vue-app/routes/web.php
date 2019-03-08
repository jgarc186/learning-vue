<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/skills', function() {
	return ['Javascript', 'Html', 'Css', 'PHP', 'bootstrap'];
});