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
    title: 'Terror Attacks<br />\
    <img src="styles/legend/TerrorAttacks_1_0.png" /> Multan<br />\
    <img src="styles/legend/TerrorAttacks_1_1.png" /> dsfsdf<br />\
    <img src="styles/legend/TerrorAttacks_1_2.png" /> fgdg<br />\
    <img src="styles/legend/TerrorAttacks_1_3.png" /> Hyderabad<br />\
    <img src="styles/legend/TerrorAttacks_1_4.png" /> Lahore<br />\
    <img src="styles/legend/TerrorAttacks_1_5.png" /> <br />'
        });

lyr_GoogleStandardMap_0.setVisible(true);lyr_TerrorAttacks_1.setVisible(true);
var layersList = [lyr_GoogleStandardMap_0,lyr_TerrorAttacks_1];
lyr_TerrorAttacks_1.set('fieldAliases', {'fid': 'fid', 'area': 'area', 'Detail': 'Detail', });
lyr_TerrorAttacks_1.set('fieldImages', {'fid': 'TextEdit', 'area': 'TextEdit', 'Detail': 'TextEdit', });
lyr_TerrorAttacks_1.set('fieldLabels', {'fid': 'hidden field', 'area': 'inline label - always visible', 'Detail': 'inline label - always visible', });
lyr_TerrorAttacks_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});