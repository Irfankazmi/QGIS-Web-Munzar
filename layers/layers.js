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
var format_TerrorAttacks_1 = new ol.format.GeoJSON();
var features_TerrorAttacks_1 = format_TerrorAttacks_1.readFeatures(json_TerrorAttacks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerrorAttacks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerrorAttacks_1.addFeatures(features_TerrorAttacks_1);
var lyr_TerrorAttacks_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerrorAttacks_1, 
                style: style_TerrorAttacks_1,
                popuplayertitle: "Terror Attacks",
                interactive: true,
                title: '<img src="styles/legend/TerrorAttacks_1.png" /> Terror Attacks'
            });

lyr_GoogleStandardMap_0.setVisible(true);lyr_TerrorAttacks_1.setVisible(true);
var layersList = [lyr_GoogleStandardMap_0,lyr_TerrorAttacks_1];
lyr_TerrorAttacks_1.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'area': 'area', 'date & time': 'date & time', 'perperator group': 'perperator group', 'target': 'target', 'fatalities': 'fatalities', 'injured': 'injured', 'attack type': 'attack type', 'weapon type': 'weapon type', });
lyr_TerrorAttacks_1.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'area': 'TextEdit', 'date & time': 'DateTime', 'perperator group': 'TextEdit', 'target': 'TextEdit', 'fatalities': 'Range', 'injured': 'Range', 'attack type': 'TextEdit', 'weapon type': 'TextEdit', });
lyr_TerrorAttacks_1.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'area': 'no label', 'date & time': 'no label', 'perperator group': 'no label', 'target': 'no label', 'fatalities': 'no label', 'injured': 'no label', 'attack type': 'no label', 'weapon type': 'no label', });
lyr_TerrorAttacks_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});