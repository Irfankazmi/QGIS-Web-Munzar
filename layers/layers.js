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
var format_IndianOccupiedKashmir_1 = new ol.format.GeoJSON();
var features_IndianOccupiedKashmir_1 = format_IndianOccupiedKashmir_1.readFeatures(json_IndianOccupiedKashmir_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndianOccupiedKashmir_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndianOccupiedKashmir_1.addFeatures(features_IndianOccupiedKashmir_1);
var lyr_IndianOccupiedKashmir_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndianOccupiedKashmir_1, 
                style: style_IndianOccupiedKashmir_1,
                popuplayertitle: "Indian Occupied Kashmir",
                interactive: true,
                title: '<img src="styles/legend/IndianOccupiedKashmir_1.png" /> Indian Occupied Kashmir'
            });
var format_District_Boundary_2 = new ol.format.GeoJSON();
var features_District_Boundary_2 = format_District_Boundary_2.readFeatures(json_District_Boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_Boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_Boundary_2.addFeatures(features_District_Boundary_2);
var lyr_District_Boundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District_Boundary_2, 
                style: style_District_Boundary_2,
                popuplayertitle: "District_Boundary",
                interactive: true,
                title: '<img src="styles/legend/District_Boundary_2.png" /> District_Boundary'
            });
var format_TerrorAttacksterror_attacks_3 = new ol.format.GeoJSON();
var features_TerrorAttacksterror_attacks_3 = format_TerrorAttacksterror_attacks_3.readFeatures(json_TerrorAttacksterror_attacks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerrorAttacksterror_attacks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerrorAttacksterror_attacks_3.addFeatures(features_TerrorAttacksterror_attacks_3);
var lyr_TerrorAttacksterror_attacks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerrorAttacksterror_attacks_3, 
                style: style_TerrorAttacksterror_attacks_3,
                popuplayertitle: "Terror Attacks — terror_attacks",
                interactive: true,
                title: '<img src="styles/legend/TerrorAttacksterror_attacks_3.png" /> Terror Attacks — terror_attacks'
            });
var format_Protestsprotests_4 = new ol.format.GeoJSON();
var features_Protestsprotests_4 = format_Protestsprotests_4.readFeatures(json_Protestsprotests_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Protestsprotests_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Protestsprotests_4.addFeatures(features_Protestsprotests_4);
var lyr_Protestsprotests_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Protestsprotests_4, 
                style: style_Protestsprotests_4,
                popuplayertitle: "Protests — protests",
                interactive: true,
                title: '<img src="styles/legend/Protestsprotests_4.png" /> Protests — protests'
            });

lyr_GoogleStandardMap_0.setVisible(true);lyr_IndianOccupiedKashmir_1.setVisible(true);lyr_District_Boundary_2.setVisible(true);lyr_TerrorAttacksterror_attacks_3.setVisible(true);lyr_Protestsprotests_4.setVisible(true);
var layersList = [lyr_GoogleStandardMap_0,lyr_IndianOccupiedKashmir_1,lyr_District_Boundary_2,lyr_TerrorAttacksterror_attacks_3,lyr_Protestsprotests_4];
lyr_IndianOccupiedKashmir_1.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'province': 'province', 'district': 'district', 'shape_leng': 'shape_leng', 'admin_unit': 'admin_unit', 'shape_le_1': 'shape_le_1', 'shape_le_2': 'shape_le_2', 'shape_area': 'shape_area', });
lyr_District_Boundary_2.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'province': 'province', 'district': 'district', 'shape_leng': 'shape_leng', 'admin_unit': 'admin_unit', 'shape_le_1': 'shape_le_1', 'shape_le_2': 'shape_le_2', 'shape_area': 'shape_area', });
lyr_TerrorAttacksterror_attacks_3.set('fieldAliases', {'qc_id': 'qc_id', 'area': 'area', 'date & time': 'date & time', 'perperator group': 'perperator group', 'target': 'target', 'fatalities': 'fatalities', 'injured': 'injured', 'attack type': 'attack type', 'weapon type': 'weapon type', });
lyr_Protestsprotests_4.set('fieldAliases', {'qc_id': 'qc_id', 'Location': 'Location', 'Protest by': 'Protest by', 'No of Participants': 'No of Participants', 'Slogans': 'Slogans', 'Impact': 'Impact', });
lyr_IndianOccupiedKashmir_1.set('fieldImages', {'qc_id': '', 'objectid': '', 'province': '', 'district': '', 'shape_leng': '', 'admin_unit': '', 'shape_le_1': '', 'shape_le_2': '', 'shape_area': '', });
lyr_District_Boundary_2.set('fieldImages', {'qc_id': 'TextEdit', 'objectid': 'Range', 'province': 'TextEdit', 'district': 'TextEdit', 'shape_leng': 'TextEdit', 'admin_unit': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_le_2': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_TerrorAttacksterror_attacks_3.set('fieldImages', {'qc_id': 'TextEdit', 'area': 'TextEdit', 'date & time': 'DateTime', 'perperator group': 'TextEdit', 'target': 'TextEdit', 'fatalities': 'Range', 'injured': 'Range', 'attack type': 'TextEdit', 'weapon type': 'TextEdit', });
lyr_Protestsprotests_4.set('fieldImages', {'qc_id': 'TextEdit', 'Location': 'TextEdit', 'Protest by': 'TextEdit', 'No of Participants': 'Range', 'Slogans': 'TextEdit', 'Impact': 'TextEdit', });
lyr_IndianOccupiedKashmir_1.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'province': 'no label', 'district': 'no label', 'shape_leng': 'no label', 'admin_unit': 'no label', 'shape_le_1': 'no label', 'shape_le_2': 'no label', 'shape_area': 'no label', });
lyr_District_Boundary_2.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'province': 'no label', 'district': 'no label', 'shape_leng': 'no label', 'admin_unit': 'no label', 'shape_le_1': 'no label', 'shape_le_2': 'no label', 'shape_area': 'no label', });
lyr_TerrorAttacksterror_attacks_3.set('fieldLabels', {'qc_id': 'no label', 'area': 'no label', 'date & time': 'no label', 'perperator group': 'no label', 'target': 'no label', 'fatalities': 'no label', 'injured': 'no label', 'attack type': 'no label', 'weapon type': 'no label', });
lyr_Protestsprotests_4.set('fieldLabels', {'qc_id': 'no label', 'Location': 'no label', 'Protest by': 'no label', 'No of Participants': 'no label', 'Slogans': 'no label', 'Impact': 'no label', });
lyr_Protestsprotests_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});