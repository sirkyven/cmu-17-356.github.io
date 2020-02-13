const express = require('express')

const app =express()

app.get('/hello',function(req ,res ){
	res.send('Hello World');
});

app.listen(3000, function(){
	console.log('Server started on 3000');
});