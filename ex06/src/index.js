function myNes() {
    var myStorage = {
        "car": {
            "inside": {
                "glove box": "maps",
                "passenger seat": "crumbs"
            },
            "outside": {
                "trunk": "jack"
            }
        }
    };

    gloveBoxContents = "maps";
    
    var gloveBoxContents = myStorage.car.inside["glove box"];
      
}

console.log(myNes());
module.exports = myNes;



