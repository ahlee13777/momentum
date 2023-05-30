function onGeoOk(position){
    const lat = position.coords.
    const 
}

function onGeoError(){
    alert("Cant' find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
