var wms_layers = [];

var lyr_PlanIGNv2_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wxs.ign.fr/essentiels/geoportail/r/wms?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Plan IGN v2",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PlanIGNv2_0, 0]);
var format_CroixCalvairesdeHauteMarne_1 = new ol.format.GeoJSON();
var features_CroixCalvairesdeHauteMarne_1 = format_CroixCalvairesdeHauteMarne_1.readFeatures(json_CroixCalvairesdeHauteMarne_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CroixCalvairesdeHauteMarne_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CroixCalvairesdeHauteMarne_1.addFeatures(features_CroixCalvairesdeHauteMarne_1);
var lyr_CroixCalvairesdeHauteMarne_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CroixCalvairesdeHauteMarne_1, 
                style: style_CroixCalvairesdeHauteMarne_1,
                interactive: true,
    title: 'Croix & Calvaires de Haute Marne<br />\
    <img src="styles/legend/CroixCalvairesdeHauteMarne_1_0.png" /> <br />\
    <img src="styles/legend/CroixCalvairesdeHauteMarne_1_1.png" /> <br />\
    <img src="styles/legend/CroixCalvairesdeHauteMarne_1_2.png" /> <br />'
        });

lyr_PlanIGNv2_0.setVisible(true);lyr_CroixCalvairesdeHauteMarne_1.setVisible(true);
var layersList = [lyr_PlanIGNv2_0,lyr_CroixCalvairesdeHauteMarne_1];
lyr_CroixCalvairesdeHauteMarne_1.set('fieldAliases', {'fid': 'fid', 'emplacemen': 'emplacemen', 'commune': 'commune', 'MH': 'MH', 'date': 'date', 'via facebook': 'via facebook', 'initiales ': 'initiales ', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'statut': 'statut', });
lyr_CroixCalvairesdeHauteMarne_1.set('fieldImages', {'fid': 'TextEdit', 'emplacemen': 'TextEdit', 'commune': 'TextEdit', 'MH': 'TextEdit', 'date': 'TextEdit', 'via facebook': 'TextEdit', 'initiales ': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', 'statut': 'ValueMap', });
lyr_CroixCalvairesdeHauteMarne_1.set('fieldLabels', {'fid': 'no label', 'emplacemen': 'inline label', 'commune': 'no label', 'MH': 'no label', 'date': 'no label', 'via facebook': 'no label', 'initiales ': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', 'statut': 'no label', });
lyr_CroixCalvairesdeHauteMarne_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});