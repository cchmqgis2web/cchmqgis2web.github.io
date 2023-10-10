var size = 0;
var placement = 'point';
function categories_CroixCalvairesdeHauteMarne_0(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'référencée':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [579.997, 579.997],
                  scale: 0.0327587901316731,
                  anchor: [9, 9],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/religion=christian.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'à référencer':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [700, 700],
                  scale: 0.032857142857142856,
                  anchor: [11, 11],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/blue-marker.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'disparue':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.041379310344827586,
                  anchor: [12, 12],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/WindRose_01.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_CroixCalvairesdeHauteMarne_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("statut");
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'Calibri\', sans-serif";
    var labelFill = "#081dff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("emplacemen") !== null && resolution > 0 && resolution < 14) {
        labelText = String(feature.get("emplacemen"));
    }
    
var style = categories_CroixCalvairesdeHauteMarne_0(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
