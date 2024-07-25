window.getLocationPromise = function () {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let lat = position.coords.latitude;
                let long = position.coords.longitude;

                let locationObj = { latitude: lat, longitude: long };
                /*let jsonString = JSON.stringify(locationObj);*/

                console.log("In getLocationPromise:", locationObj)

                resolve(locationObj);
            });
        } else {
            reject("Your browser doesn't support geolocation API");
        }
    });
};
