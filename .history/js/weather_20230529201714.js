function onGeoOk(){

}

function onGeoError(){
    alert("Cant' find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
