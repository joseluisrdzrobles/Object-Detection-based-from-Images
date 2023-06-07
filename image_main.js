var placeImage = ""
var objectsList = [];
var detectionStatus = false;

function preload() {
    placeImage = loadImage(localStorage.getItem("placeOfImage"))
}

function setup() {
   ModelCocossd = ml5.objectDetector('cocossd', ModelCocossdLoaded);

    canvas = createCanvas(1200, 800)
    placeImage.resize(1200, 800)
    canvas.center()
}

function ModelCocossdLoaded() {
    console.log("El modelo Cocossd fue exitoso en cargar...");
    ModelCocossd.detect(placeImage, getResults);
    detectionStatus = true;
}

function draw() {
    image(placeImage, 0, 0, 1200, 800)

    if (detectionStatus) {

        for (var i = 0; i < objectsList.length; i++) {
            var label = objectsList[i].label;
            
            var probability = objectsList[i].confidence;
            probability = Math.round(probability * 100);
    
            var x = objectsList[i].x;
            var y = objectsList[i].y;
    
            var objectWidth = objectsList[i].width;
            var objectHeight = objectsList[i].height;
    
            
            fill("dodgerblue");
            rect(x, y, textWidth(label), 30);
            
            fill("white");
            textSize(20);
            text(label + " " + probability + "%", x, y + 20);
    
            noFill();
            stroke("dodgerblue");
            strokeWeight(3);
            rect(x, y, objectWidth, objectHeight);
    }
    document.getElementById("status").innerText = objectsList.length + " Detected Objects, Objects Detected 👍"
    }
}

function getResults(error, results) {
    if (!error) {
        console.log(results);
        objectsList = results;
    }
}