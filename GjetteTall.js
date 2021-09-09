var høyde = 88;
var minimumHøyde = 100;
var maksHøyde = 180;

if (høyde === minimumHøyde) {
    console.log("høy nok");
}
else if (høyde < minimumHøyde){
    console.log("for lav");
}
else if (høyde > maksHøyde) {
    console.log("for høy");
}