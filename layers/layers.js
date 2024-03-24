var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_expedientesPolygon_1 = new ol.format.GeoJSON();
var features_expedientesPolygon_1 = format_expedientesPolygon_1.readFeatures(json_expedientesPolygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_expedientesPolygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_expedientesPolygon_1.addFeatures(features_expedientesPolygon_1);
var lyr_expedientesPolygon_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_expedientesPolygon_1, 
                style: style_expedientesPolygon_1,
                interactive: true,
                title: '<img src="styles/legend/expedientesPolygon_1.png" /> expedientesPolygon'
            });
var format_parcelas_2 = new ol.format.GeoJSON();
var features_parcelas_2 = format_parcelas_2.readFeatures(json_parcelas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcelas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelas_2.addFeatures(features_parcelas_2);
var lyr_parcelas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcelas_2, 
                style: style_parcelas_2,
                interactive: false,
                title: '<img src="styles/legend/parcelas_2.png" /> parcelas'
            });
var format_Zonificacion_3 = new ol.format.GeoJSON();
var features_Zonificacion_3 = format_Zonificacion_3.readFeatures(json_Zonificacion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonificacion_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonificacion_3.addFeatures(features_Zonificacion_3);
var lyr_Zonificacion_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonificacion_3, 
                style: style_Zonificacion_3,
                interactive: true,
    title: 'Zonificacion<br />\
    <img src="styles/legend/Zonificacion_3_0.png" /> Las Lilas<br />\
    <img src="styles/legend/Zonificacion_3_1.png" /> Las Rosas<br />\
    <img src="styles/legend/Zonificacion_3_2.png" /> Residencial_Com<br />\
    <img src="styles/legend/Zonificacion_3_3.png" /> ResidencialI<br />'
        });
var format_ProyeccionEjesVialesentities_4 = new ol.format.GeoJSON();
var features_ProyeccionEjesVialesentities_4 = format_ProyeccionEjesVialesentities_4.readFeatures(json_ProyeccionEjesVialesentities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProyeccionEjesVialesentities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProyeccionEjesVialesentities_4.addFeatures(features_ProyeccionEjesVialesentities_4);
var lyr_ProyeccionEjesVialesentities_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProyeccionEjesVialesentities_4, 
                style: style_ProyeccionEjesVialesentities_4,
                interactive: true,
    title: 'ProyeccionEjesViales entities<br />\
    <img src="styles/legend/ProyeccionEjesVialesentities_4_0.png" /> Ejes_Avenidas_Principales<br />\
    <img src="styles/legend/ProyeccionEjesVialesentities_4_1.png" /> Ejes_Avenidas_Secundarias<br />\
    <img src="styles/legend/ProyeccionEjesVialesentities_4_2.png" /> Ejes_Calles_Principales<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_expedientesPolygon_1.setVisible(true);lyr_parcelas_2.setVisible(true);lyr_Zonificacion_3.setVisible(true);lyr_ProyeccionEjesVialesentities_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_expedientesPolygon_1,lyr_parcelas_2,lyr_Zonificacion_3,lyr_ProyeccionEjesVialesentities_4];
lyr_expedientesPolygon_1.set('fieldAliases', {'nro_expedi': 'nro_expedi', 'desarrolli': 'desarrolli', 'ingreso': 'ingreso', 'etapa_vige': 'etapa_vige', 'nro_cuenta': 'nro_cuenta', 'nro_cuent0': 'nro_cuent0', 'nro_cuent1': 'nro_cuent1', 'razon_soci': 'razon_soci', 'cant_lotes': 'cant_lotes', 'mas_info': 'mas_info', });
lyr_parcelas_2.set('fieldAliases', {'par_idparc': 'par_idparc', 'Nomenclatu': 'Nomenclatu', 'Tipo_Parce': 'Tipo_Parce', 'Tipo_Valua': 'Tipo_Valua', 'Estado': 'Estado', 'desig_ofic': 'desig_ofic', 'exp_creaci': 'exp_creaci', 'Fecha_Crea': 'Fecha_Crea', 'fecha_alta': 'fecha_alta', 'fxf': 'fxf', 'vut_vigent': 'vut_vigent', 'Valuacion': 'Valuacion', 'vigencia_d': 'vigencia_d', 'porcentaje': 'porcentaje', 'Superficie': 'Superficie', 'Valuacion_': 'Valuacion_', 'base_impon': 'base_impon', 'Superfici0': 'Superfici0', 'Valuacion0': 'Valuacion0', 'base_impo0': 'base_impo0', 'Superfici1': 'Superfici1', 'Valuacion1': 'Valuacion1', 'base_impo1': 'base_impo1', 'Cantidad_C': 'Cantidad_C', 'departamen': 'departamen', 'pedania': 'pedania', 'localidad': 'localidad', 'par_entity': 'par_entity', 'row_number': 'row_number', 'Nro_Cuenta': 'Nro_Cuenta', 'ped_nomenc': 'ped_nomenc', });
lyr_Zonificacion_3.set('fieldAliases', {'id': 'id', 'Zona': 'Zona', 'Perfil': 'Perfil', 'FOS': 'FOS', 'FOT': 'FOT', 'RetiroFren': 'RetiroFren', 'RetiroFond': 'RetiroFond', 'RetiroLat': 'RetiroLat', });
lyr_ProyeccionEjesVialesentities_4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_expedientesPolygon_1.set('fieldImages', {'nro_expedi': 'TextEdit', 'desarrolli': 'TextEdit', 'ingreso': 'DateTime', 'etapa_vige': 'TextEdit', 'nro_cuenta': 'TextEdit', 'nro_cuent0': 'TextEdit', 'nro_cuent1': 'TextEdit', 'razon_soci': 'TextEdit', 'cant_lotes': 'Range', 'mas_info': 'TextEdit', });
lyr_parcelas_2.set('fieldImages', {'par_idparc': 'TextEdit', 'Nomenclatu': 'TextEdit', 'Tipo_Parce': 'TextEdit', 'Tipo_Valua': 'TextEdit', 'Estado': 'TextEdit', 'desig_ofic': 'TextEdit', 'exp_creaci': 'TextEdit', 'Fecha_Crea': 'TextEdit', 'fecha_alta': 'TextEdit', 'fxf': 'TextEdit', 'vut_vigent': 'TextEdit', 'Valuacion': 'TextEdit', 'vigencia_d': 'DateTime', 'porcentaje': 'TextEdit', 'Superficie': 'TextEdit', 'Valuacion_': 'TextEdit', 'base_impon': 'TextEdit', 'Superfici0': 'TextEdit', 'Valuacion0': 'TextEdit', 'base_impo0': 'TextEdit', 'Superfici1': 'TextEdit', 'Valuacion1': 'TextEdit', 'base_impo1': 'TextEdit', 'Cantidad_C': 'TextEdit', 'departamen': 'TextEdit', 'pedania': 'TextEdit', 'localidad': 'TextEdit', 'par_entity': 'TextEdit', 'row_number': 'TextEdit', 'Nro_Cuenta': 'TextEdit', 'ped_nomenc': 'TextEdit', });
lyr_Zonificacion_3.set('fieldImages', {'id': 'TextEdit', 'Zona': 'TextEdit', 'Perfil': 'TextEdit', 'FOS': 'TextEdit', 'FOT': 'TextEdit', 'RetiroFren': 'TextEdit', 'RetiroFond': 'TextEdit', 'RetiroLat': 'TextEdit', });
lyr_ProyeccionEjesVialesentities_4.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_expedientesPolygon_1.set('fieldLabels', {'nro_expedi': 'inline label', 'desarrolli': 'inline label', 'ingreso': 'no label', 'etapa_vige': 'no label', 'nro_cuenta': 'no label', 'nro_cuent0': 'no label', 'nro_cuent1': 'no label', 'razon_soci': 'no label', 'cant_lotes': 'no label', 'mas_info': 'no label', });
lyr_parcelas_2.set('fieldLabels', {'par_idparc': 'no label', 'Nomenclatu': 'inline label', 'Tipo_Parce': 'no label', 'Tipo_Valua': 'no label', 'Estado': 'no label', 'desig_ofic': 'no label', 'exp_creaci': 'no label', 'Fecha_Crea': 'no label', 'fecha_alta': 'no label', 'fxf': 'no label', 'vut_vigent': 'no label', 'Valuacion': 'no label', 'vigencia_d': 'no label', 'porcentaje': 'no label', 'Superficie': 'no label', 'Valuacion_': 'no label', 'base_impon': 'no label', 'Superfici0': 'no label', 'Valuacion0': 'no label', 'base_impo0': 'no label', 'Superfici1': 'no label', 'Valuacion1': 'no label', 'base_impo1': 'no label', 'Cantidad_C': 'no label', 'departamen': 'no label', 'pedania': 'no label', 'localidad': 'no label', 'par_entity': 'no label', 'row_number': 'no label', 'Nro_Cuenta': 'no label', 'ped_nomenc': 'no label', });
lyr_Zonificacion_3.set('fieldLabels', {'id': 'inline label', 'Zona': 'inline label', 'Perfil': 'inline label', 'FOS': 'inline label', 'FOT': 'inline label', 'RetiroFren': 'inline label', 'RetiroFond': 'inline label', 'RetiroLat': 'inline label', });
lyr_ProyeccionEjesVialesentities_4.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_ProyeccionEjesVialesentities_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});