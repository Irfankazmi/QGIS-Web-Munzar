var wms_layers = [];

var format_IndianOccupiedKashmir_0 = new ol.format.GeoJSON();
var features_IndianOccupiedKashmir_0 = format_IndianOccupiedKashmir_0.readFeatures(json_IndianOccupiedKashmir_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndianOccupiedKashmir_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndianOccupiedKashmir_0.addFeatures(features_IndianOccupiedKashmir_0);
var lyr_IndianOccupiedKashmir_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndianOccupiedKashmir_0, 
                style: style_IndianOccupiedKashmir_0,
                popuplayertitle: "Indian Occupied Kashmir",
                interactive: true,
                title: '<img src="styles/legend/IndianOccupiedKashmir_0.png" /> Indian Occupied Kashmir'
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
var format_TerrorAttacks_2 = new ol.format.GeoJSON();
var features_TerrorAttacks_2 = format_TerrorAttacks_2.readFeatures(json_TerrorAttacks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerrorAttacks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerrorAttacks_2.addFeatures(features_TerrorAttacks_2);
var lyr_TerrorAttacks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerrorAttacks_2, 
                style: style_TerrorAttacks_2,
                popuplayertitle: "Terror Attacks",
                interactive: true,
                title: '<img src="styles/legend/TerrorAttacks_2.png" /> Terror Attacks'
            });

lyr_IndianOccupiedKashmir_0.setVisible(true);lyr_District_Boundary_1.setVisible(true);lyr_TerrorAttacks_2.setVisible(true);
var layersList = [lyr_IndianOccupiedKashmir_0,lyr_District_Boundary_1,lyr_TerrorAttacks_2];
lyr_IndianOccupiedKashmir_0.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'province': 'province', 'district': 'district', 'shape_leng': 'shape_leng', 'admin_unit': 'admin_unit', 'shape_le_1': 'shape_le_1', 'shape_le_2': 'shape_le_2', 'shape_area': 'shape_area', });
lyr_District_Boundary_1.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'province': 'province', 'district': 'district', 'shape_leng': 'shape_leng', 'admin_unit': 'admin_unit', 'shape_le_1': 'shape_le_1', 'shape_le_2': 'shape_le_2', 'shape_area': 'shape_area', });
lyr_TerrorAttacks_2.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'area': 'area', 'date & time': 'date & time', 'perperator group': 'perperator group', 'target': 'target', 'fatalities': 'fatalities', 'injured': 'injured', 'attack type': 'attack type', 'weapon type': 'weapon type', });
lyr_IndianOccupiedKashmir_0.set('fieldImages', {'qc_id': '', 'objectid': '', 'province': '', 'district': '', 'shape_leng': '', 'admin_unit': '', 'shape_le_1': '', 'shape_le_2': '', 'shape_area': '', });
lyr_District_Boundary_1.set('fieldImages', {'qc_id': '', 'objectid': '', 'province': '', 'district': '', 'shape_leng': '', 'admin_unit': '', 'shape_le_1': '', 'shape_le_2': '', 'shape_area': '', });
lyr_TerrorAttacks_2.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'area': 'TextEdit', 'date & time': 'DateTime', 'perperator group': 'TextEdit', 'target': 'TextEdit', 'fatalities': 'Range', 'injured': 'Range', 'attack type': 'TextEdit', 'weapon type': 'TextEdit', });
lyr_IndianOccupiedKashmir_0.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'province': 'no label', 'district': 'no label', 'shape_leng': 'no label', 'admin_unit': 'no label', 'shape_le_1': 'no label', 'shape_le_2': 'no label', 'shape_area': 'no label', });
lyr_District_Boundary_1.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'province': 'no label', 'district': 'no label', 'shape_leng': 'no label', 'admin_unit': 'no label', 'shape_le_1': 'no label', 'shape_le_2': 'no label', 'shape_area': 'no label', });
lyr_TerrorAttacks_2.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'area': 'no label', 'date & time': 'no label', 'perperator group': 'no label', 'target': 'no label', 'fatalities': 'no label', 'injured': 'no label', 'attack type': 'no label', 'weapon type': 'no label', });
lyr_TerrorAttacks_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});