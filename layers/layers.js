var wms_layers = [];


        var lyr_GoogleSatelite_Clase_0 = new ol.layer.Tile({
            'title': 'Google Satelite_Clase',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_ZonasQGIS19012026_1 = new ol.format.GeoJSON();
var features_ZonasQGIS19012026_1 = format_ZonasQGIS19012026_1.readFeatures(json_ZonasQGIS19012026_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasQGIS19012026_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasQGIS19012026_1.addFeatures(features_ZonasQGIS19012026_1);
var lyr_ZonasQGIS19012026_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonasQGIS19012026_1, 
                style: style_ZonasQGIS19012026_1,
                popuplayertitle: 'ZonasQGIS19012026',
                interactive: true,
    title: 'ZonasQGIS19012026<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_0.png" /> 2026 - Ãrea Verde Protegida<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_1.png" /> 2026 - Reserva Natural Autoctona<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_2.png" /> 2026 - Zona Central<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_3.png" /> 2026 - Zona Central en Altura<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_4.png" /> 2026 - Zona Central Residencial<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_5.png" /> 2026 - Zona Circunvalacion y RN NÂ°158<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_6.png" /> 2026 - Zona Comercial Industrial 1<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_7.png" /> 2026 - Zona Comercial Industrial 2<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_8.png" /> 2026 - Zona Comercial Recreativa 4<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_9.png" /> 2026 - Zona Comercial Residencial 1<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_10.png" /> 2026 - Zona Comercial Residencial 2<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_11.png" /> 2026 - Zona Comercial Residencial 3<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_12.png" /> 2026 - Zona Comercial Residencial 5<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_13.png" /> 2026 - Zona Desarrollo Urbano 1<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_14.png" /> 2026 - Zona Desarrollo Urbano 2<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_15.png" /> 2026 - Zona Industrial Alimenticia Existente<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_16.png" /> 2026 - Zona Parque Irigoyen<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_17.png" /> 2026 - Zona Perimetral Consolidada<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_18.png" /> 2026 - Zona Productiva Urbana 1<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_19.png" /> 2026 - Zona Residencial 1<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_20.png" /> 2026 - Zona Residencial 2 A<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_21.png" /> 2026 - Zona Residencial 2 B<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_22.png" /> 2026 - Zona Residencial 2 C<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_23.png" /> 2026 - Zona Residencial 2 D<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_24.png" /> 2026 - Zona Residencial 2 E<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_25.png" /> 2026 - Zona Residencial 2 F<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_26.png" /> 2026 - Zona Rural Extensiva<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_27.png" /> 2026 - Zona Rural Intensiva de PequeÃ±a Escala<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_28.png" /> 2026 - Zona Urbana Productiva 1<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_29.png" /> 2026 - Zona Urbana Productiva 2<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_30.png" /> 2026 - Zonas Especiales<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_31.png" /> 2026 - Zonas Verdes Periurbanas<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_32.png" /> Desagues Principales<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_33.png" /> Espacios Verdes<br />\
    <img src="styles/legend/ZonasQGIS19012026_1_34.png" /> <br />' });
var group_ZonasParaQgis_V19012026 = new ol.layer.Group({
                                layers: [lyr_GoogleSatelite_Clase_0,lyr_ZonasQGIS19012026_1,],
                                fold: 'open',
                                title: 'ZonasParaQgis_V19012026'});

lyr_GoogleSatelite_Clase_0.setVisible(true);lyr_ZonasQGIS19012026_1.setVisible(true);
var layersList = [group_ZonasParaQgis_V19012026];
lyr_ZonasQGIS19012026_1.set('fieldAliases', {'Layer': 'Layer', 'FOS': 'FOS', 'FOT': 'FOT', 'Retiro 1': 'Retiro 1', 'Alt Max 1': 'Alt Max 1', 'Alt Max 2': 'Alt Max 2', 'Ancho Min': 'Ancho Min', 'Sup Min': 'Sup Min', 'Retiro 2': 'Retiro 2', });
lyr_ZonasQGIS19012026_1.set('fieldImages', {'Layer': 'TextEdit', 'FOS': 'TextEdit', 'FOT': 'TextEdit', 'Retiro 1': 'TextEdit', 'Alt Max 1': 'TextEdit', 'Alt Max 2': 'TextEdit', 'Ancho Min': 'TextEdit', 'Sup Min': 'TextEdit', 'Retiro 2': 'TextEdit', });
lyr_ZonasQGIS19012026_1.set('fieldLabels', {'Layer': 'inline label - always visible', 'FOS': 'inline label - always visible', 'FOT': 'inline label - always visible', 'Retiro 1': 'inline label - always visible', 'Alt Max 1': 'inline label - always visible', 'Alt Max 2': 'inline label - always visible', 'Ancho Min': 'inline label - always visible', 'Sup Min': 'inline label - always visible', 'Retiro 2': 'no label', });
lyr_ZonasQGIS19012026_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});