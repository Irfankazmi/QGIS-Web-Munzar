var wms_layers = [];


        var lyr_GoogleStandardMap_0 = new ol.layer.Tile({
            'title': 'Google Standard Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_District_Boundary_1 = new ol.format.GeoJSON();
var features_District_Boundary_1 = format_District_Boundary_1.readFeatures(json_District_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_Boundary_1.addFeatures(features_District_Boundary_1);
var lyr_District_Boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District_Boundary_1, 
                style: style_District_Boundary_1,
                popuplayertitle: "District_Boundary",
                interactive: true,
                title: '<img src="styles/legend/District_Boundary_1.png" /> District_Boundary'
            });
var format_TerrorAttacks_1_2 = new ol.format.GeoJSON();
var features_TerrorAttacks_1_2 = format_TerrorAttacks_1_2.readFeatures(json_TerrorAttacks_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerrorAttacks_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerrorAttacks_1_2.addFeatures(features_TerrorAttacks_1_2);
var lyr_TerrorAttacks_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerrorAttacks_1_2, 
                style: style_TerrorAttacks_1_2,
                popuplayertitle: "Terror Attacks_1",
                interactive: true,
                title: '<img src="styles/legend/TerrorAttacks_1_2.png" /> Terror Attacks_1'
            });
var format_PoliticalEvents_3 = new ol.format.GeoJSON();
var features_PoliticalEvents_3 = format_PoliticalEvents_3.readFeatures(json_PoliticalEvents_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoliticalEvents_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoliticalEvents_3.addFeatures(features_PoliticalEvents_3);
var lyr_PoliticalEvents_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoliticalEvents_3, 
                style: style_PoliticalEvents_3,
                popuplayertitle: "Political Events",
                interactive: true,
                title: '<img src="styles/legend/PoliticalEvents_3.png" /> Political Events'
            });

lyr_GoogleStandardMap_0.setVisible(true);lyr_District_Boundary_1.setVisible(true);lyr_TerrorAttacks_1_2.setVisible(true);lyr_PoliticalEvents_3.setVisible(true);
var layersList = [lyr_GoogleStandardMap_0,lyr_District_Boundary_1,lyr_TerrorAttacks_1_2,lyr_PoliticalEvents_3];
lyr_District_Boundary_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINCE': 'PROVINCE', 'DISTRICT': 'DISTRICT', 'Shape_Leng': 'Shape_Leng', 'ADMIN_UNIT': 'ADMIN_UNIT', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_TerrorAttacks_1_2.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', });
lyr_PoliticalEvents_3.set('fieldAliases', {'fid': 'fid', 'Party': 'Party', });
lyr_District_Boundary_1.set('fieldImages', {'OBJECTID': 'Range', 'PROVINCE': 'TextEdit', 'DISTRICT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'ADMIN_UNIT': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TerrorAttacks_1_2.set('fieldImages', {'fid': 'TextEdit', 'Area': 'TextEdit', });
lyr_PoliticalEvents_3.set('fieldImages', {'fid': 'TextEdit', 'Party': 'TextEdit', });
lyr_District_Boundary_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'PROVINCE': 'hidden field', 'DISTRICT': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'ADMIN_UNIT': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_TerrorAttacks_1_2.set('fieldLabels', {'fid': 'hidden field', 'Area': 'inline label - always visible', });
lyr_PoliticalEvents_3.set('fieldLabels', {'fid': 'no label', 'Party': 'no label', });
lyr_PoliticalEvents_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});