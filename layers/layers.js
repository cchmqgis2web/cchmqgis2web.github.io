ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([582372.937816, 6079494.418681, 597381.334860, 6086365.423713]);
var wms_layers = [];

var format_CroixCalvairesdeHauteMarne_0 = new ol.format.GeoJSON();
var features_CroixCalvairesdeHauteMarne_0 = format_CroixCalvairesdeHauteMarne_0.readFeatures(json_CroixCalvairesdeHauteMarne_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CroixCalvairesdeHauteMarne_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CroixCalvairesdeHauteMarne_0.addFeatures(features_CroixCalvairesdeHauteMarne_0);
var lyr_CroixCalvairesdeHauteMarne_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CroixCalvairesdeHauteMarne_0, 
                style: style_CroixCalvairesdeHauteMarne_0,
                interactive: true,
    title: 'Croix & Calvaires de Haute Marne<br />\
    <img src="styles/legend/CroixCalvairesdeHauteMarne_0_0.png" /> <br />\
    <img src="styles/legend/CroixCalvairesdeHauteMarne_0_1.png" /> <br />\
    <img src="styles/legend/CroixCalvairesdeHauteMarne_0_2.png" /> <br />'
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

lyr_CroixCalvairesdeHauteMarne_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);
var layersList = [lyr_CroixCalvairesdeHauteMarne_0,lyr_OpenStreetMap_1];
lyr_CroixCalvairesdeHauteMarne_0.set('fieldAliases', {'fid': 'fid', 'emplacemen': 'emplacemen', 'commune': 'commune', 'MH': 'MH', 'date': 'date', 'via facebo': 'via facebo', 'initiales ': 'initiales ', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'statut': 'statut', });
lyr_CroixCalvairesdeHauteMarne_0.set('fieldImages', {'fid': 'TextEdit', 'emplacemen': 'TextEdit', 'commune': 'TextEdit', 'MH': 'TextEdit', 'date': 'TextEdit', 'via facebo': 'TextEdit', 'initiales ': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', 'statut': 'ValueMap', });
lyr_CroixCalvairesdeHauteMarne_0.set('fieldLabels', {'fid': 'no label', 'emplacemen': 'header label', 'commune': 'no label', 'MH': 'no label', 'date': 'no label', 'via facebo': 'no label', 'initiales ': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', 'statut': 'no label', });
lyr_CroixCalvairesdeHauteMarne_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});