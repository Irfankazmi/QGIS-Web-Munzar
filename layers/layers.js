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

lyr_GoogleStandardMap_0.setVisible(true);lyr_District_Boundary_1.setVisible(true);lyr_terror_attacks_2.setVisible(true);
var layersList = [lyr_GoogleStandardMap_0,lyr_District_Boundary_1,lyr_terror_attacks_2];
lyr_District_Boundary_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINCE': 'PROVINCE', 'DISTRICT': 'DISTRICT', 'Shape_Leng': 'Shape_Leng', 'ADMIN_UNIT': 'ADMIN_UNIT', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_terror_attacks_2.set('fieldAliases', {'Region': 'Region', 'Date & Time': 'Date & Time', 'Perpetrator group': 'Perpetrator group', 'Target': 'Target', 'Attack Type': 'Attack Type', 'Weapon Type': 'Weapon Type', 'Fatalities': 'Fatalities', 'Injured': 'Injured', 'Current Status': 'Current Status', 'Media': 'Media', });
lyr_District_Boundary_1.set('fieldImages', {'OBJECTID': 'Range', 'PROVINCE': 'TextEdit', 'DISTRICT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'ADMIN_UNIT': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_terror_attacks_2.set('fieldImages', {'Region': 'TextEdit', 'Date & Time': 'DateTime', 'Perpetrator group': 'TextEdit', 'Target': 'TextEdit', 'Attack Type': 'TextEdit', 'Weapon Type': 'TextEdit', 'Fatalities': 'TextEdit', 'Injured': 'TextEdit', 'Current Status': 'TextEdit', 'Media': 'TextEdit', });
lyr_District_Boundary_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'PROVINCE': 'hidden field', 'DISTRICT': 'no label', 'Shape_Leng': 'hidden field', 'ADMIN_UNIT': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Le_2': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_terror_attacks_2.set('fieldLabels', {'Region': 'inline label - always visible', 'Date & Time': 'inline label - always visible', 'Perpetrator group': 'inline label - always visible', 'Target': 'inline label - always visible', 'Attack Type': 'inline label - always visible', 'Weapon Type': 'inline label - always visible', 'Fatalities': 'inline label - always visible', 'Injured': 'inline label - always visible', 'Current Status': 'no label', 'Media': 'inline label - always visible', });
lyr_terror_attacks_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});