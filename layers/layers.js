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
var format_PakistanDistricts_1 = new ol.format.GeoJSON();
var features_PakistanDistricts_1 = format_PakistanDistricts_1.readFeatures(json_PakistanDistricts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PakistanDistricts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PakistanDistricts_1.addFeatures(features_PakistanDistricts_1);
var lyr_PakistanDistricts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PakistanDistricts_1, 
                style: style_PakistanDistricts_1,
                popuplayertitle: "Pakistan Districts",
                interactive: true,
                title: '<img src="styles/legend/PakistanDistricts_1.png" /> Pakistan Districts'
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

lyr_GoogleStandardMap_0.setVisible(true);lyr_PakistanDistricts_1.setVisible(true);lyr_TerrorAttacks_2.setVisible(true);lyr_PoliticalEvents_3.setVisible(true);
var layersList = [lyr_GoogleStandardMap_0,lyr_PakistanDistricts_1,lyr_TerrorAttacks_2,lyr_PoliticalEvents_3];
lyr_PakistanDistricts_1.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'province': 'province', 'district': 'district', 'shape_leng': 'shape_leng', 'admin_unit': 'admin_unit', 'shape_le_1': 'shape_le_1', 'shape_le_2': 'shape_le_2', 'shape_area': 'shape_area', });
lyr_TerrorAttacks_2.set('fieldAliases', {'fid': 'fid', 'Place': 'Place', 'Date and Time': 'Date and Time', 'Attack Type': 'Attack Type', 'Perpetrator Group': 'Perpetrator Group', 'Motive': 'Motive', 'Injured': 'Injured', 'Casualties': 'Casualties', 'No. of Attackers': 'No. of Attackers', 'Drive Link': 'Drive Link', });
lyr_PoliticalEvents_3.set('fieldAliases', {'fid': 'fid', 'Location': 'Location', 'Date & Time': 'Date & Time', 'Event Type': 'Event Type', 'Organizer': 'Organizer', 'No. of Participants': 'No. of Participants', 'Purpose': 'Purpose', 'Security': 'Security', 'Media Presence': 'Media Presence', 'Statements Issued': 'Statements Issued', 'Drive Link': 'Drive Link', });
lyr_PakistanDistricts_1.set('fieldImages', {'qc_id': 'TextEdit', 'objectid': 'TextEdit', 'province': 'TextEdit', 'district': 'TextEdit', 'shape_leng': 'TextEdit', 'admin_unit': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_le_2': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_TerrorAttacks_2.set('fieldImages', {'fid': 'TextEdit', 'Place': 'TextEdit', 'Date and Time': 'DateTime', 'Attack Type': 'TextEdit', 'Perpetrator Group': 'TextEdit', 'Motive': 'TextEdit', 'Injured': 'Range', 'Casualties': 'Range', 'No. of Attackers': 'Range', 'Drive Link': 'TextEdit', });
lyr_PoliticalEvents_3.set('fieldImages', {'fid': 'TextEdit', 'Location': 'TextEdit', 'Date & Time': 'DateTime', 'Event Type': 'TextEdit', 'Organizer': 'TextEdit', 'No. of Participants': 'TextEdit', 'Purpose': 'TextEdit', 'Security': 'TextEdit', 'Media Presence': 'TextEdit', 'Statements Issued': 'TextEdit', 'Drive Link': 'TextEdit', });
lyr_PakistanDistricts_1.set('fieldLabels', {'qc_id': 'hidden field', 'objectid': 'hidden field', 'province': 'hidden field', 'district': 'inline label - always visible', 'shape_leng': 'hidden field', 'admin_unit': 'hidden field', 'shape_le_1': 'hidden field', 'shape_le_2': 'hidden field', 'shape_area': 'hidden field', });
lyr_TerrorAttacks_2.set('fieldLabels', {'fid': 'hidden field', 'Place': 'inline label - always visible', 'Date and Time': 'inline label - always visible', 'Attack Type': 'inline label - always visible', 'Perpetrator Group': 'inline label - always visible', 'Motive': 'inline label - always visible', 'Injured': 'inline label - always visible', 'Casualties': 'inline label - always visible', 'No. of Attackers': 'inline label - always visible', 'Drive Link': 'no label', });
lyr_PoliticalEvents_3.set('fieldLabels', {'fid': 'hidden field', 'Location': 'inline label - always visible', 'Date & Time': 'inline label - always visible', 'Event Type': 'inline label - always visible', 'Organizer': 'inline label - always visible', 'No. of Participants': 'inline label - always visible', 'Purpose': 'inline label - always visible', 'Security': 'inline label - always visible', 'Media Presence': 'inline label - always visible', 'Statements Issued': 'inline label - always visible', 'Drive Link': 'inline label - always visible', });
lyr_PoliticalEvents_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});