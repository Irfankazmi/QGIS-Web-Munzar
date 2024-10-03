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
var format_PoliticalEvents_1 = new ol.format.GeoJSON();
var features_PoliticalEvents_1 = format_PoliticalEvents_1.readFeatures(json_PoliticalEvents_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoliticalEvents_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoliticalEvents_1.addFeatures(features_PoliticalEvents_1);
var lyr_PoliticalEvents_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoliticalEvents_1, 
                style: style_PoliticalEvents_1,
                popuplayertitle: "Political Events",
                interactive: true,
                title: '<img src="styles/legend/PoliticalEvents_1.png" /> Political Events'
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

lyr_GoogleStandardMap_0.setVisible(true);lyr_PoliticalEvents_1.setVisible(true);lyr_TerrorAttacks_2.setVisible(true);
var layersList = [lyr_GoogleStandardMap_0,lyr_PoliticalEvents_1,lyr_TerrorAttacks_2];
lyr_PoliticalEvents_1.set('fieldAliases', {'fid': 'fid', 'Location': 'Location', 'Protest By': 'Protest By', 'No. of  Protestors': 'No. of  Protestors', 'Detail': 'Detail', 'Media': 'Media', });
lyr_TerrorAttacks_2.set('fieldAliases', {'fid': 'fid', 'Location': 'Location', 'Type of Attack': 'Type of Attack', 'No. of Injuries': 'No. of Injuries', 'No. of Deaths': 'No. of Deaths', 'Detail': 'Detail', 'Media': 'Media', });
lyr_PoliticalEvents_1.set('fieldImages', {'fid': 'TextEdit', 'Location': 'TextEdit', 'Protest By': 'TextEdit', 'No. of  Protestors': 'TextEdit', 'Detail': 'TextEdit', 'Media': 'TextEdit', });
lyr_TerrorAttacks_2.set('fieldImages', {'fid': 'TextEdit', 'Location': '', 'Type of Attack': '', 'No. of Injuries': '', 'No. of Deaths': '', 'Detail': '', 'Media': '', });
lyr_PoliticalEvents_1.set('fieldLabels', {'fid': 'no label', 'Location': 'inline label - always visible', 'Protest By': 'inline label - always visible', 'No. of  Protestors': 'inline label - always visible', 'Detail': 'inline label - always visible', 'Media': 'inline label - always visible', });
lyr_TerrorAttacks_2.set('fieldLabels', {'fid': 'no label', 'Location': 'inline label - always visible', 'Type of Attack': 'inline label - always visible', 'No. of Injuries': 'inline label - always visible', 'No. of Deaths': 'inline label - always visible', 'Detail': 'inline label - always visible', 'Media': 'inline label - always visible', });
lyr_TerrorAttacks_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});