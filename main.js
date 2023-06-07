function chooseImage(place) {
    switch (place) {
        case "b": localStorage.setItem("placeOfImage", "beach.jpg"); break;
        case "a": localStorage.setItem("placeOfImage", "airport.jpg"); break;
        case "st": localStorage.setItem("placeOfImage", "street.jpg"); break;
        case "sm": localStorage.setItem("placeOfImage", "supermarket.jpg"); break;
        case "ts": localStorage.setItem("placeOfImage", "train station.jpg"); break;
    }
    window.location = "image.html"
}