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
var format_TerrorAttacksterror_attacks_1 = new ol.format.GeoJSON();
var features_TerrorAttacksterror_attacks_1 = format_TerrorAttacksterror_attacks_1.readFeatures(json_TerrorAttacksterror_attacks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerrorAttacksterror_attacks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerrorAttacksterror_attacks_1.addFeatures(features_TerrorAttacksterror_attacks_1);
var lyr_TerrorAttacksterror_attacks_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerrorAttacksterror_attacks_1, 
                style: style_TerrorAttacksterror_attacks_1,
                popuplayertitle: "Terror Attacks — terror_attacks",
                interactive: true,
                title: '<img src="styles/legend/TerrorAttacksterror_attacks_1.png" /> Terror Attacks — terror_attacks'
            });

lyr_GoogleStandardMap_0.setVisible(true);lyr_TerrorAttacksterror_attacks_1.setVisible(true);
var layersList = [lyr_GoogleStandardMap_0,lyr_TerrorAttacksterror_attacks_1];
lyr_TerrorAttacksterror_attacks_1.set('fieldAliases', {'fid': 'fid', 'area': 'area', 'attack type': 'attack type', });
lyr_TerrorAttacksterror_attacks_1.set('fieldImages', {'fid': 'TextEdit', 'area': 'TextEdit', 'attack type': 'TextEdit', });
lyr_TerrorAttacksterror_attacks_1.set('fieldLabels', {'fid': 'no label', 'area': 'no label', 'attack type': 'no label', });
lyr_TerrorAttacksterror_attacks_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});