//libraries
var drone = require('ar-drone');
var myo = require('myo');
//create clients
var droneClient = drone.createClient();
var myoClient = myo.create();

var flying = false;
var myoTimer = 50;
var clientTimer = 1000; // movement time
var speed = 0.3; // can be a value from 0 to 1

// if drone flying - make the drone land
// else if drone landed - make the drone takeoff
myoClient.on('double_tap', function(edge){
	myoClient.timer(edge, myoTimer, function(){
    console.log('> DOUBLE TAP');
	if(flying == true){
    	console.log('>>> STOP');
		droneClient.land();
	}else{
		console.log('>>> START');
		droneClient.takeoff();
	}
  })
});

//downwards
myoClient.on('fist', function(edge){
  myoClient.timer(edge, myoTimer, function(){
    console.log('> FIST');
    droneClient.down(speed)
        droneClient.after(clientTimer, function() {
    droneClient.stop();
     })
  })
});

//upwards
myoClient.on('fingers_spread', function(edge){
  myoClient.timer(edge, myoTimer, function(){
    console.log('> FINGERS SPREAD');
    droneClient.up(speed)
        droneClient.after(clientTimer, function() {
    droneClient.stop();
     })
  })
});

//leftwards
myoClient.on('wave_in', function(edge){
  myoClient.timer(edge, myoTimer, function(){
    console.log('WAVE IN');
    droneClient.left(speed);
        droneClient.after(clientTimer, function() {
    droneClient.stop();
     })
  })
});

//rightwards
myoClient.on('wave_out', function(edge){
  myoClient.timer(edge, myoTimer, function(){
    console.log('WAVE OUT');
    droneClient.right(speed);
        droneClient.after(clientTimer, function() {
    droneClient.stop();
     })
  })
});
