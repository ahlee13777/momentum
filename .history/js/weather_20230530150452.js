function onGeoOk(position){
    const lat = position.coords.
    const lng = position.coords.longitude;
}

function onGeoError(){
    alert("Cant' find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
