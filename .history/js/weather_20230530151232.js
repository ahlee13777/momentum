const API_KEY = ""

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
}

function onGeoError(){
    alert("Cant' find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
