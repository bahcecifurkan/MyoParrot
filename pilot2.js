var arDrone = require('ar-drone');
var client = arDrone.createClient();
var Myo = require('myo');
var myMyo = Myo.create();
var isFlying = false;

var myoTimer = 500;
var clientTimer = 1000; // movement time
var speed = 0.3; // can be a value from 0 to 1

myMyo.on('fingers_spread', function(edge){
  myMyo.timer(edge, myoTimer, function(){
    	console.log('> DOUBLE TAP');
	if(flying == true){
    		console.log('>>> STOP');
		client.land();
		flying = false;
	}else{
		flying = true;
		console.log('>>> START');
		client.takeoff();
	}
  })
});

myMyo.on('double_tap', function(edge){
	myMyo.timer(edge, myoTimer, function(){
    	console.log('> DOUBLE TAP');
	if(flying == true){
    	console.log('>>> STOP');
		client.land();
	}else{
		console.log('>>> START');
		client.takeoff();
	}
  })
});

myMyo.on('fist', function(edge){
  myMyo.timer(edge, 500, function(){
    console.log('> FIST');
    client.down(speed)
        client.after(clientTimer, function() {
    client.stop();
     })
  })
});


myMyo.on('wave_out', function(edge){
  myMyo.timer(edge, 500, function(){
    console.log('WAVE OUT');
    client.right(speed);
        client.after(clientTimer, function() {
    client.stop();
     })
  })
});


myMyo.on('wave_in', function(edge){
  myMyo.timer(edge, 500, function(){
    console.log('WAVE IN');
    client.left(speed);
        client.after(clientTimer, function() {
    client.stop();
     })
  })
});
