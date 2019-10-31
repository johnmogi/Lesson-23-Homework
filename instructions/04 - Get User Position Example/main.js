navigator.geolocation.getCurrentPosition(function(position){
    console.log(position.coords.latitude, position.coords.longitude);
}, function(err) {
    console.log(err.message);
});

