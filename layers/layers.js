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
var format_terror_attacks_2 = new ol.format.GeoJSON();
var features_terror_attacks_2 = format_terror_attacks_2.readFeatures(json_terror_attacks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_terror_attacks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_terror_attacks_2.addFeatures(features_terror_attacks_2);
var lyr_terror_attacks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_terror_attacks_2, 
                style: style_terror_attacks_2,
                popuplayertitle: "terror_attacks",
                interactive: true,
                title: '<img src="styles/legend/terror_attacks_2.png" /> terror_attacks'
            });
var format_protests_3 = new ol.format.GeoJSON();
var features_protests_3 = format_protests_3.readFeatures(json_protests_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_protests_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_protests_3.addFeatures(features_protests_3);
var lyr_protests_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_protests_3, 
                style: style_protests_3,
                popuplayertitle: "protests",
                interactive: true,
                title: '<img src="styles/legend/protests_3.png" /> protests'
            });

lyr_GoogleStandardMap_0.setVisible(true);lyr_District_Boundary_1.setVisible(true);lyr_terror_attacks_2.setVisible(true);lyr_protests_3.setVisible(true);
var layersList = [lyr_GoogleStandardMap_0,lyr_District_Boundary_1,lyr_terror_attacks_2,lyr_protests_3];
lyr_District_Boundary_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINCE': 'PROVINCE', 'DISTRICT': 'DISTRICT', 'Shape_Leng': 'Shape_Leng', 'ADMIN_UNIT': 'ADMIN_UNIT', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_terror_attacks_2.set('fieldAliases', {'fid': 'fid', 'area': 'area', 'date & time': 'date & time', 'perperator group': 'perperator group', 'target': 'target', 'fatalities': 'fatalities', 'injured': 'injured', 'attack type': 'attack type', 'weapon type': 'weapon type', });
lyr_protests_3.set('fieldAliases', {'fid': 'fid', 'auxiliary_storage_symbol_name_fdg': 'auxiliary_storage_symbol_name_fdg', });
lyr_District_Boundary_1.set('fieldImages', {'OBJECTID': 'Range', 'PROVINCE': 'TextEdit', 'DISTRICT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'ADMIN_UNIT': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_terror_attacks_2.set('fieldImages', {'fid': 'TextEdit', 'area': 'TextEdit', 'date & time': 'DateTime', 'perperator group': 'TextEdit', 'target': 'TextEdit', 'fatalities': 'Range', 'injured': 'Range', 'attack type': 'TextEdit', 'weapon type': 'TextEdit', });
lyr_protests_3.set('fieldImages', {'fid': 'TextEdit', 'auxiliary_storage_symbol_name_fdg': 'TextEdit', });
lyr_District_Boundary_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'PROVINCE': 'hidden field', 'DISTRICT': 'no label', 'Shape_Leng': 'hidden field', 'ADMIN_UNIT': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_terror_attacks_2.set('fieldLabels', {'fid': 'no label', 'area': 'no label', 'date & time': 'no label', 'perperator group': 'no label', 'target': 'no label', 'fatalities': 'no label', 'injured': 'no label', 'attack type': 'no label', 'weapon type': 'no label', });
lyr_protests_3.set('fieldLabels', {'fid': 'no label', 'auxiliary_storage_symbol_name_fdg': 'inline label - always visible', });
lyr_protests_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});