var size = 0;
var placement = 'point';
function categories_ReddeAgua_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Acueducto':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(246,18,10,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Diametro 50 mm':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(29,16,71,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Diametro 63 mm':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(80,18,123,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Diametro 75 mm':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(130,37,129,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Diametro 90 mm':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(182,55,122,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Diametro 110 mm':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(230,81,100,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Diametro 160 mm':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(251,135,97,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Diametro 200 mm':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(254,195,135,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Diametro 250 mm':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(252,253,191,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ReddeAgua_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Layer");
    var labelText = "";
    size = 0;
    var labelFont = "6.5px \'Ubuntu\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Layer") !== null) {
        labelText = String(feature.get("Layer"));
    }
    
var style = categories_ReddeAgua_6(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
