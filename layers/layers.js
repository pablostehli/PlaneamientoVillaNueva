var wms_layers = [];

var format_ExpedienteLoteos_0 = new ol.format.GeoJSON();
var features_ExpedienteLoteos_0 = format_ExpedienteLoteos_0.readFeatures(json_ExpedienteLoteos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExpedienteLoteos_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExpedienteLoteos_0.addFeatures(features_ExpedienteLoteos_0);
var lyr_ExpedienteLoteos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ExpedienteLoteos_0, 
                style: style_ExpedienteLoteos_0,
                interactive: true,
                title: '<img src="styles/legend/ExpedienteLoteos_0.png" /> Expediente Loteos'
            });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Zonificacion_2 = new ol.format.GeoJSON();
var features_Zonificacion_2 = format_Zonificacion_2.readFeatures(json_Zonificacion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonificacion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonificacion_2.addFeatures(features_Zonificacion_2);
var lyr_Zonificacion_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonificacion_2, 
                style: style_Zonificacion_2,
                interactive: true,
    title: 'Zonificacion<br />\
    <img src="styles/legend/Zonificacion_2_0.png" /> Las Lilas<br />\
    <img src="styles/legend/Zonificacion_2_1.png" /> Las Rosas<br />\
    <img src="styles/legend/Zonificacion_2_2.png" /> Residencial_Com<br />\
    <img src="styles/legend/Zonificacion_2_3.png" /> ResidencialI<br />'
        });
var format_EjesViales_3 = new ol.format.GeoJSON();
var features_EjesViales_3 = format_EjesViales_3.readFeatures(json_EjesViales_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EjesViales_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EjesViales_3.addFeatures(features_EjesViales_3);
var lyr_EjesViales_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EjesViales_3, 
                style: style_EjesViales_3,
                interactive: false,
    title: 'Ejes Viales<br />\
    <img src="styles/legend/EjesViales_3_0.png" /> Colectoras o Ensanche de Ruta<br />\
    <img src="styles/legend/EjesViales_3_1.png" /> Desagues Principales<br />\
    <img src="styles/legend/EjesViales_3_2.png" /> Ejes_Avenidas_Principales<br />\
    <img src="styles/legend/EjesViales_3_3.png" /> Ejes_Avenidas_Secundarias<br />\
    <img src="styles/legend/EjesViales_3_4.png" /> Ejes_Calles_Principales<br />\
    <img src="styles/legend/EjesViales_3_5.png" /> Rotondas Secundarias<br />'
        });
var format_ZonasdeUsodeSuelo_4 = new ol.format.GeoJSON();
var features_ZonasdeUsodeSuelo_4 = format_ZonasdeUsodeSuelo_4.readFeatures(json_ZonasdeUsodeSuelo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasdeUsodeSuelo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasdeUsodeSuelo_4.addFeatures(features_ZonasdeUsodeSuelo_4);
var lyr_ZonasdeUsodeSuelo_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonasdeUsodeSuelo_4, 
                style: style_ZonasdeUsodeSuelo_4,
                interactive: true,
    title: 'Zonas de Uso de Suelo<br />\
    <img src="styles/legend/ZonasdeUsodeSuelo_4_0.png" /> Educacion-Servicios<br />\
    <img src="styles/legend/ZonasdeUsodeSuelo_4_1.png" /> Espacios Verdes a Mantener<br />\
    <img src="styles/legend/ZonasdeUsodeSuelo_4_2.png" /> Industria a Reubicar<br />\
    <img src="styles/legend/ZonasdeUsodeSuelo_4_3.png" /> Reserva Autoctona Ctalamochita<br />\
    <img src="styles/legend/ZonasdeUsodeSuelo_4_4.png" /> Zona Comercial<br />\
    <img src="styles/legend/ZonasdeUsodeSuelo_4_5.png" /> Zona Comercial - Zona Industrial - Sin Olor -<br />\
    <img src="styles/legend/ZonasdeUsodeSuelo_4_6.png" /> Zona Industrial - Pesada<br />'
        });
var format_DesaguesPluvialesVillaNueva_5 = new ol.format.GeoJSON();
var features_DesaguesPluvialesVillaNueva_5 = format_DesaguesPluvialesVillaNueva_5.readFeatures(json_DesaguesPluvialesVillaNueva_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaguesPluvialesVillaNueva_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaguesPluvialesVillaNueva_5.addFeatures(features_DesaguesPluvialesVillaNueva_5);
var lyr_DesaguesPluvialesVillaNueva_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DesaguesPluvialesVillaNueva_5, 
                style: style_DesaguesPluvialesVillaNueva_5,
                interactive: false,
    title: 'Desagues Pluviales Villa Nueva<br />\
    <img src="styles/legend/DesaguesPluvialesVillaNueva_5_0.png" /> Conductos Existentes<br />\
    <img src="styles/legend/DesaguesPluvialesVillaNueva_5_1.png" /> PuntosBajos<br />\
    <img src="styles/legend/DesaguesPluvialesVillaNueva_5_2.png" /> Subcuencas<br />'
        });
var format_ReddeAgua_6 = new ol.format.GeoJSON();
var features_ReddeAgua_6 = format_ReddeAgua_6.readFeatures(json_ReddeAgua_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReddeAgua_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReddeAgua_6.addFeatures(features_ReddeAgua_6);
var lyr_ReddeAgua_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReddeAgua_6, 
                style: style_ReddeAgua_6,
                interactive: true,
    title: 'Red de Agua<br />\
    <img src="styles/legend/ReddeAgua_6_0.png" /> Acueducto<br />\
    <img src="styles/legend/ReddeAgua_6_1.png" /> Diametro 50 mm<br />\
    <img src="styles/legend/ReddeAgua_6_2.png" /> Diametro 63 mm<br />\
    <img src="styles/legend/ReddeAgua_6_3.png" /> Diametro 75 mm<br />\
    <img src="styles/legend/ReddeAgua_6_4.png" /> Diametro 90 mm<br />\
    <img src="styles/legend/ReddeAgua_6_5.png" /> Diametro 110 mm<br />\
    <img src="styles/legend/ReddeAgua_6_6.png" /> Diametro 160 mm<br />\
    <img src="styles/legend/ReddeAgua_6_7.png" /> Diametro 200 mm<br />\
    <img src="styles/legend/ReddeAgua_6_8.png" /> Diametro 250 mm<br />'
        });
var format_ReddeCloacas_7 = new ol.format.GeoJSON();
var features_ReddeCloacas_7 = format_ReddeCloacas_7.readFeatures(json_ReddeCloacas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReddeCloacas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReddeCloacas_7.addFeatures(features_ReddeCloacas_7);
var lyr_ReddeCloacas_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReddeCloacas_7, 
                style: style_ReddeCloacas_7,
                interactive: false,
    title: 'Red de Cloacas<br />\
    <img src="styles/legend/ReddeCloacas_7_0.png" /> Cloacas<br />'
        });
var format_ParcelasVillaNueva_8 = new ol.format.GeoJSON();
var features_ParcelasVillaNueva_8 = format_ParcelasVillaNueva_8.readFeatures(json_ParcelasVillaNueva_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelasVillaNueva_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelasVillaNueva_8.addFeatures(features_ParcelasVillaNueva_8);
var lyr_ParcelasVillaNueva_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParcelasVillaNueva_8, 
                style: style_ParcelasVillaNueva_8,
                interactive: false,
                title: '<img src="styles/legend/ParcelasVillaNueva_8.png" /> Parcelas Villa Nueva'
            });
var format_CurvasdeNivel_9 = new ol.format.GeoJSON();
var features_CurvasdeNivel_9 = format_CurvasdeNivel_9.readFeatures(json_CurvasdeNivel_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurvasdeNivel_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurvasdeNivel_9.addFeatures(features_CurvasdeNivel_9);
var lyr_CurvasdeNivel_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CurvasdeNivel_9, 
                style: style_CurvasdeNivel_9,
                interactive: false,
                title: '<img src="styles/legend/CurvasdeNivel_9.png" /> Curvas de Nivel'
            });
var format_Manzanas_10 = new ol.format.GeoJSON();
var features_Manzanas_10 = format_Manzanas_10.readFeatures(json_Manzanas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_10.addFeatures(features_Manzanas_10);
var lyr_Manzanas_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manzanas_10, 
                style: style_Manzanas_10,
                interactive: false,
                title: '<img src="styles/legend/Manzanas_10.png" /> Manzanas'
            });
var format_RadioUrbano_11 = new ol.format.GeoJSON();
var features_RadioUrbano_11 = format_RadioUrbano_11.readFeatures(json_RadioUrbano_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RadioUrbano_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RadioUrbano_11.addFeatures(features_RadioUrbano_11);
var lyr_RadioUrbano_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RadioUrbano_11, 
                style: style_RadioUrbano_11,
                interactive: false,
                title: '<img src="styles/legend/RadioUrbano_11.png" /> Radio Urbano'
            });

lyr_ExpedienteLoteos_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Zonificacion_2.setVisible(true);lyr_EjesViales_3.setVisible(true);lyr_ZonasdeUsodeSuelo_4.setVisible(true);lyr_DesaguesPluvialesVillaNueva_5.setVisible(true);lyr_ReddeAgua_6.setVisible(true);lyr_ReddeCloacas_7.setVisible(true);lyr_ParcelasVillaNueva_8.setVisible(true);lyr_CurvasdeNivel_9.setVisible(true);lyr_Manzanas_10.setVisible(true);lyr_RadioUrbano_11.setVisible(true);
var layersList = [lyr_ExpedienteLoteos_0,lyr_GoogleSatellite_1,lyr_Zonificacion_2,lyr_EjesViales_3,lyr_ZonasdeUsodeSuelo_4,lyr_DesaguesPluvialesVillaNueva_5,lyr_ReddeAgua_6,lyr_ReddeCloacas_7,lyr_ParcelasVillaNueva_8,lyr_CurvasdeNivel_9,lyr_Manzanas_10,lyr_RadioUrbano_11];
lyr_ExpedienteLoteos_0.set('fieldAliases', {'nro_expedi': 'nro_expedi', 'desarrolli': 'desarrolli', 'ingreso': 'ingreso', 'etapa_vige': 'etapa_vige', 'nro_cuenta': 'nro_cuenta', 'nro_cuent0': 'nro_cuent0', 'nro_cuent1': 'nro_cuent1', 'razon_soci': 'razon_soci', 'cant_lotes': 'cant_lotes', 'mas_info': 'mas_info', });
lyr_Zonificacion_2.set('fieldAliases', {'id': 'id', 'Zona': 'Zona', 'Perfil': 'Perfil', 'FOS': 'FOS', 'FOT': 'FOT', 'RetiroFren': 'RetiroFren', 'RetiroFond': 'RetiroFond', 'RetiroLat': 'RetiroLat', });
lyr_EjesViales_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ZonasdeUsodeSuelo_4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_DesaguesPluvialesVillaNueva_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ReddeAgua_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ReddeCloacas_7.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ParcelasVillaNueva_8.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_CurvasdeNivel_9.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'LINE_STYLE': 'LINE_STYLE', 'LINE_COLOR': 'LINE_COLOR', 'LINE_WIDTH': 'LINE_WIDTH', 'FONT_SIZE': 'FONT_SIZE', 'FONT_COLOR': 'FONT_COLOR', 'FONT_CHARS': 'FONT_CHARS', 'FONT_WEIGH': 'FONT_WEIGH', 'CLOSED_CON': 'CLOSED_CON', });
lyr_Manzanas_10.set('fieldAliases', {'nomenclatu': 'nomenclatu', 'designacio': 'designacio', 'departamen': 'departamen', 'pedania': 'pedania', 'ped_nomenc': 'ped_nomenc', });
lyr_RadioUrbano_11.set('fieldAliases', {'key': 'key', 'nombre': 'nombre', 'url': 'url', 'area_ha': 'area_ha', 'tipo_gobie': 'tipo_gobie', });
lyr_ExpedienteLoteos_0.set('fieldImages', {'nro_expedi': 'TextEdit', 'desarrolli': 'TextEdit', 'ingreso': 'DateTime', 'etapa_vige': 'TextEdit', 'nro_cuenta': 'TextEdit', 'nro_cuent0': 'TextEdit', 'nro_cuent1': 'TextEdit', 'razon_soci': 'TextEdit', 'cant_lotes': 'Range', 'mas_info': 'TextEdit', });
lyr_Zonificacion_2.set('fieldImages', {'id': 'TextEdit', 'Zona': 'TextEdit', 'Perfil': 'TextEdit', 'FOS': 'TextEdit', 'FOT': 'TextEdit', 'RetiroFren': 'TextEdit', 'RetiroFond': 'TextEdit', 'RetiroLat': 'TextEdit', });
lyr_EjesViales_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ZonasdeUsodeSuelo_4.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_DesaguesPluvialesVillaNueva_5.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ReddeAgua_6.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ReddeCloacas_7.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ParcelasVillaNueva_8.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_CurvasdeNivel_9.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', 'LINE_STYLE': 'TextEdit', 'LINE_COLOR': 'TextEdit', 'LINE_WIDTH': 'Range', 'FONT_SIZE': 'Range', 'FONT_COLOR': 'TextEdit', 'FONT_CHARS': 'Range', 'FONT_WEIGH': 'Range', 'CLOSED_CON': 'TextEdit', });
lyr_Manzanas_10.set('fieldImages', {'nomenclatu': 'TextEdit', 'designacio': 'TextEdit', 'departamen': 'TextEdit', 'pedania': 'TextEdit', 'ped_nomenc': 'TextEdit', });
lyr_RadioUrbano_11.set('fieldImages', {'key': 'TextEdit', 'nombre': 'TextEdit', 'url': 'TextEdit', 'area_ha': 'TextEdit', 'tipo_gobie': 'TextEdit', });
lyr_ExpedienteLoteos_0.set('fieldLabels', {'nro_expedi': 'inline label', 'desarrolli': 'inline label', 'ingreso': 'no label', 'etapa_vige': 'no label', 'nro_cuenta': 'no label', 'nro_cuent0': 'no label', 'nro_cuent1': 'no label', 'razon_soci': 'no label', 'cant_lotes': 'no label', 'mas_info': 'no label', });
lyr_Zonificacion_2.set('fieldLabels', {'id': 'no label', 'Zona': 'inline label', 'Perfil': 'inline label', 'FOS': 'inline label', 'FOT': 'inline label', 'RetiroFren': 'inline label', 'RetiroFond': 'inline label', 'RetiroLat': 'inline label', });
lyr_EjesViales_3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ZonasdeUsodeSuelo_4.set('fieldLabels', {'Layer': 'inline label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_DesaguesPluvialesVillaNueva_5.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ReddeAgua_6.set('fieldLabels', {'Layer': 'inline label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ReddeCloacas_7.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ParcelasVillaNueva_8.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_CurvasdeNivel_9.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'ELEVATION': 'inline label', 'LINE_STYLE': 'no label', 'LINE_COLOR': 'no label', 'LINE_WIDTH': 'no label', 'FONT_SIZE': 'no label', 'FONT_COLOR': 'no label', 'FONT_CHARS': 'no label', 'FONT_WEIGH': 'no label', 'CLOSED_CON': 'no label', });
lyr_Manzanas_10.set('fieldLabels', {'nomenclatu': 'no label', 'designacio': 'no label', 'departamen': 'no label', 'pedania': 'no label', 'ped_nomenc': 'no label', });
lyr_RadioUrbano_11.set('fieldLabels', {'key': 'no label', 'nombre': 'no label', 'url': 'no label', 'area_ha': 'no label', 'tipo_gobie': 'no label', });
lyr_RadioUrbano_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});