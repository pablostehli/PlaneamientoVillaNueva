var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_EjesViales_1 = new ol.format.GeoJSON();
var features_EjesViales_1 = format_EjesViales_1.readFeatures(json_EjesViales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EjesViales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EjesViales_1.addFeatures(features_EjesViales_1);
var lyr_EjesViales_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EjesViales_1, 
                style: style_EjesViales_1,
                interactive: true,
    title: 'Ejes Viales<br />\
    <img src="styles/legend/EjesViales_1_0.png" /> Avenidas Comerciales Existentes<br />\
    <img src="styles/legend/EjesViales_1_1.png" /> Desagues Principales<br />\
    <img src="styles/legend/EjesViales_1_2.png" /> Ejes_Avenidas_Principales<br />\
    <img src="styles/legend/EjesViales_1_3.png" /> Ejes_Avenidas_Secundarias<br />\
    <img src="styles/legend/EjesViales_1_4.png" /> Ejes_Calles_Principales<br />\
    <img src="styles/legend/EjesViales_1_5.png" /> Ejido Urbano<br />'
        });
var format_Parcelas_2 = new ol.format.GeoJSON();
var features_Parcelas_2 = format_Parcelas_2.readFeatures(json_Parcelas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelas_2.addFeatures(features_Parcelas_2);
var lyr_Parcelas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcelas_2, 
                style: style_Parcelas_2,
                interactive: true,
    title: 'Parcelas<br />\
    <img src="styles/legend/Parcelas_2_0.png" /> Parcelas<br />'
        });
var format_Zonificacin_3 = new ol.format.GeoJSON();
var features_Zonificacin_3 = format_Zonificacin_3.readFeatures(json_Zonificacin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonificacin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonificacin_3.addFeatures(features_Zonificacin_3);
var lyr_Zonificacin_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonificacin_3, 
                style: style_Zonificacin_3,
                interactive: true,
    title: 'Zonificación<br />\
    <img src="styles/legend/Zonificacin_3_0.png" /> Avenidas Comerciales Existentes<br />\
    <img src="styles/legend/Zonificacin_3_1.png" /> Espacios Verdes<br />\
    <img src="styles/legend/Zonificacin_3_2.png" /> Espacios Verdes a Mantener<br />\
    <img src="styles/legend/Zonificacin_3_3.png" /> Reservas Naturales - Hidricas<br />\
    <img src="styles/legend/Zonificacin_3_4.png" /> Zona Central Residencial<br />\
    <img src="styles/legend/Zonificacin_3_5.png" /> Zona Centrica Secundaria<br />\
    <img src="styles/legend/Zonificacin_3_6.png" /> Zona Circunvalacion<br />\
    <img src="styles/legend/Zonificacin_3_7.png" /> Zona Comercia - Residencial<br />\
    <img src="styles/legend/Zonificacin_3_8.png" /> Zona Comercial - Industrial<br />\
    <img src="styles/legend/Zonificacin_3_9.png" /> Zona de Incipiente Urbanizacion Residencial<br />\
    <img src="styles/legend/Zonificacin_3_10.png" /> Zona Industrial Lactea I<br />\
    <img src="styles/legend/Zonificacin_3_11.png" /> Zona Industrial Secundaria<br />\
    <img src="styles/legend/Zonificacin_3_12.png" /> Zona Pericentral Consolidada<br />\
    <img src="styles/legend/Zonificacin_3_13.png" /> Zona Residencial - Periferica<br />\
    <img src="styles/legend/Zonificacin_3_14.png" /> Zona Residencial - R1<br />\
    <img src="styles/legend/Zonificacin_3_15.png" /> Zona Residencial - R2<br />\
    <img src="styles/legend/Zonificacin_3_16.png" /> Zona Restringida Residencial<br />\
    <img src="styles/legend/Zonificacin_3_17.png" /> Zona Rural Extensiva<br />\
    <img src="styles/legend/Zonificacin_3_18.png" /> Zona Rural Intensiva<br />\
    <img src="styles/legend/Zonificacin_3_19.png" /> Zonas Especiales<br />\
    <img src="styles/legend/Zonificacin_3_20.png" /> Avenidas Comerciales<br />\
    <img src="styles/legend/Zonificacin_3_21.png" /> Zona Central<br />\
    <img src="styles/legend/Zonificacin_3_22.png" /> Zona Céntrica en Altura<br />\
    <img src="styles/legend/Zonificacin_3_23.png" /> Zona Céntrica Residencial<br />\
    <img src="styles/legend/Zonificacin_3_24.png" /> Zona Circunvalación<br />\
    <img src="styles/legend/Zonificacin_3_25.png" /> Zona Comercial - Residencial<br />\
    <img src="styles/legend/Zonificacin_3_26.png" /> Zona de Incipiente Urbanización<br />\
    <img src="styles/legend/Zonificacin_3_27.png" /> Zona Especial<br />\
    <img src="styles/legend/Zonificacin_3_28.png" /> Zona Industrial Láctea I<br />\
    <img src="styles/legend/Zonificacin_3_29.png" /> Zona Industrial Láctea II<br />\
    <img src="styles/legend/Zonificacin_3_30.png" /> Zona Residencial Periferica<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_EjesViales_1.setVisible(true);lyr_Parcelas_2.setVisible(true);lyr_Zonificacin_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_EjesViales_1,lyr_Parcelas_2,lyr_Zonificacin_3];
lyr_EjesViales_1.set('fieldAliases', {'Layer': 'Layer', });
lyr_Parcelas_2.set('fieldAliases', {'Layer': 'Layer', });
lyr_Zonificacin_3.set('fieldAliases', {'Zona': 'Zona', 'Uso': 'Uso', 'Retiros': 'Retiros', 'Alt.Maxima': 'Alt.Maxima', 'Sup.MinLot': 'Sup.MinLot', 'FrenteMin.': 'FrenteMin.', 'Sectores': 'Sectores', 'CentroManz': 'CentroManz', 'FOS': 'FOS', 'FOT': 'FOT', });
lyr_EjesViales_1.set('fieldImages', {'Layer': 'TextEdit', });
lyr_Parcelas_2.set('fieldImages', {'Layer': 'TextEdit', });
lyr_Zonificacin_3.set('fieldImages', {'Zona': 'TextEdit', 'Uso': 'TextEdit', 'Retiros': 'TextEdit', 'Alt.Maxima': 'TextEdit', 'Sup.MinLot': 'TextEdit', 'FrenteMin.': 'TextEdit', 'Sectores': 'TextEdit', 'CentroManz': 'TextEdit', 'FOS': 'TextEdit', 'FOT': 'TextEdit', });
lyr_EjesViales_1.set('fieldLabels', {'Layer': 'no label', });
lyr_Parcelas_2.set('fieldLabels', {'Layer': 'no label', });
lyr_Zonificacin_3.set('fieldLabels', {'Zona': 'inline label', 'Uso': 'inline label', 'Retiros': 'inline label', 'Alt.Maxima': 'inline label', 'Sup.MinLot': 'inline label', 'FrenteMin.': 'inline label', 'Sectores': 'inline label', 'CentroManz': 'inline label', 'FOS': 'inline label', 'FOT': 'inline label', });
lyr_Zonificacin_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});