function onGeoOk(){

}

function onGeoError(){
    alert("Cant' find you. No weather error.");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
