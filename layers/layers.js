var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_FIAUES_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'FIA-UES<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/FIAUES_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9930062.643390, 1541985.060040, -9929563.982949, 1542552.014036]
        })
    });
var format_ALL_2 = new ol.format.GeoJSON();
var features_ALL_2 = format_ALL_2.readFeatures(json_ALL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALL_2.addFeatures(features_ALL_2);
var lyr_ALL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALL_2, 
                style: style_ALL_2,
                popuplayertitle: 'A.LL',
                interactive: true,
                title: '<img src="styles/legend/ALL_2.png" /> A.LL'
            });
var format_AN_3 = new ol.format.GeoJSON();
var features_AN_3 = format_AN_3.readFeatures(json_AN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AN_3.addFeatures(features_AN_3);
var lyr_AN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AN_3, 
                style: style_AN_3,
                popuplayertitle: 'A.N',
                interactive: true,
                title: '<img src="styles/legend/AN_3.png" /> A.N'
            });
var format_AP_4 = new ol.format.GeoJSON();
var features_AP_4 = format_AP_4.readFeatures(json_AP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AP_4.addFeatures(features_AP_4);
var lyr_AP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AP_4, 
                style: style_AP_4,
                popuplayertitle: 'A.P',
                interactive: true,
                title: '<img src="styles/legend/AP_4.png" /> A.P'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_FIAUES_1.setVisible(true);lyr_ALL_2.setVisible(true);lyr_AN_3.setVisible(true);lyr_AP_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_FIAUES_1,lyr_ALL_2,lyr_AN_3,lyr_AP_4];
lyr_ALL_2.set('fieldAliases', {'CODIGO': 'CODIGO', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ESTADO': 'ESTADO', 'IMAGEN': 'IMAGEN', });
lyr_AN_3.set('fieldAliases', {'CODIGO': 'CODIGO', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ESTADO': 'ESTADO', 'IMAGEN': 'IMAGEN', });
lyr_AP_4.set('fieldAliases', {'CODIGO': 'CODIGO', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'IMAGEN': 'IMAGEN', 'ESTADO': 'ESTADO', });
lyr_ALL_2.set('fieldImages', {'CODIGO': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ESTADO': 'TextEdit', 'IMAGEN': 'ExternalResource', });
lyr_AN_3.set('fieldImages', {'CODIGO': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ESTADO': 'TextEdit', 'IMAGEN': 'ExternalResource', });
lyr_AP_4.set('fieldImages', {'CODIGO': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'IMAGEN': 'ExternalResource', 'ESTADO': 'TextEdit', });
lyr_ALL_2.set('fieldLabels', {'CODIGO': 'header label - visible with data', 'LATITUD': 'header label - visible with data', 'LONGITUD': 'header label - visible with data', 'ESTADO': 'header label - visible with data', 'IMAGEN': 'header label - visible with data', });
lyr_AN_3.set('fieldLabels', {'CODIGO': 'header label - visible with data', 'LATITUD': 'header label - visible with data', 'LONGITUD': 'header label - visible with data', 'ESTADO': 'header label - visible with data', 'IMAGEN': 'header label - visible with data', });
lyr_AP_4.set('fieldLabels', {'CODIGO': 'header label - visible with data', 'LATITUD': 'header label - visible with data', 'LONGITUD': 'header label - visible with data', 'IMAGEN': 'header label - visible with data', 'ESTADO': 'header label - visible with data', });
lyr_AP_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});