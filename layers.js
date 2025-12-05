ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32630").setExtent([643868.454163, 1274008.432786, 723085.697132, 1329475.254679]);
var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_ADM_Commune_1 = new ol.format.GeoJSON();
var features_ADM_Commune_1 = format_ADM_Commune_1.readFeatures(json_ADM_Commune_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_ADM_Commune_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADM_Commune_1.addFeatures(features_ADM_Commune_1);
var lyr_ADM_Commune_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADM_Commune_1, 
                style: style_ADM_Commune_1,
                popuplayertitle: 'ADM_Commune',
                interactive: true,
                title: '<img src="styles/legend/ADM_Commune_1.png" /> ADM_Commune'
            });
var format_Commune_Toece_2 = new ol.format.GeoJSON();
var features_Commune_Toece_2 = format_Commune_Toece_2.readFeatures(json_Commune_Toece_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Commune_Toece_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_Toece_2.addFeatures(features_Commune_Toece_2);
var lyr_Commune_Toece_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commune_Toece_2, 
                style: style_Commune_Toece_2,
                popuplayertitle: 'Commune_Toece',
                interactive: true,
                title: '<img src="styles/legend/Commune_Toece_2.png" /> Commune_Toece'
            });
var format_Zone_vegetation_3 = new ol.format.GeoJSON();
var features_Zone_vegetation_3 = format_Zone_vegetation_3.readFeatures(json_Zone_vegetation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Zone_vegetation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_vegetation_3.addFeatures(features_Zone_vegetation_3);
var lyr_Zone_vegetation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone_vegetation_3, 
                style: style_Zone_vegetation_3,
                popuplayertitle: 'Zone_vegetation',
                interactive: true,
                title: '<img src="styles/legend/Zone_vegetation_3.png" /> Zone_vegetation'
            });
var format_Durface_eau_4 = new ol.format.GeoJSON();
var features_Durface_eau_4 = format_Durface_eau_4.readFeatures(json_Durface_eau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Durface_eau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Durface_eau_4.addFeatures(features_Durface_eau_4);
var lyr_Durface_eau_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Durface_eau_4, 
                style: style_Durface_eau_4,
                popuplayertitle: 'Durface_eau',
                interactive: true,
                title: '<img src="styles/legend/Durface_eau_4.png" /> Durface_eau'
            });
var format_RR_Toece_5 = new ol.format.GeoJSON();
var features_RR_Toece_5 = format_RR_Toece_5.readFeatures(json_RR_Toece_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_RR_Toece_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RR_Toece_5.addFeatures(features_RR_Toece_5);
var lyr_RR_Toece_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RR_Toece_5, 
                style: style_RR_Toece_5,
                popuplayertitle: 'RR_Toece',
                interactive: true,
                title: '<img src="styles/legend/RR_Toece_5.png" /> RR_Toece'
            });
var format_Localite_Toece_6 = new ol.format.GeoJSON();
var features_Localite_Toece_6 = format_Localite_Toece_6.readFeatures(json_Localite_Toece_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Localite_Toece_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localite_Toece_6.addFeatures(features_Localite_Toece_6);
cluster_Localite_Toece_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Localite_Toece_6
});
var lyr_Localite_Toece_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Localite_Toece_6, 
                style: style_Localite_Toece_6,
                popuplayertitle: 'Localite_Toece',
                interactive: true,
                title: '<img src="styles/legend/Localite_Toece_6.png" /> Localite_Toece'
            });
var format_Chef_lieu_Toece_7 = new ol.format.GeoJSON();
var features_Chef_lieu_Toece_7 = format_Chef_lieu_Toece_7.readFeatures(json_Chef_lieu_Toece_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32630'});
var jsonSource_Chef_lieu_Toece_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chef_lieu_Toece_7.addFeatures(features_Chef_lieu_Toece_7);
cluster_Chef_lieu_Toece_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Chef_lieu_Toece_7
});
var lyr_Chef_lieu_Toece_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Chef_lieu_Toece_7, 
                style: style_Chef_lieu_Toece_7,
                popuplayertitle: 'Chef_lieu_Toece',
                interactive: true,
                title: '<img src="styles/legend/Chef_lieu_Toece_7.png" /> Chef_lieu_Toece'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_ADM_Commune_1.setVisible(true);lyr_Commune_Toece_2.setVisible(true);lyr_Zone_vegetation_3.setVisible(true);lyr_Durface_eau_4.setVisible(true);lyr_RR_Toece_5.setVisible(true);lyr_Localite_Toece_6.setVisible(true);lyr_Chef_lieu_Toece_7.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_ADM_Commune_1,lyr_Commune_Toece_2,lyr_Zone_vegetation_3,lyr_Durface_eau_4,lyr_RR_Toece_5,lyr_Localite_Toece_6,lyr_Chef_lieu_Toece_7];
lyr_ADM_Commune_1.set('fieldAliases', {'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Commune_Toece_2.set('fieldAliases', {'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Zone_vegetation_3.set('fieldAliases', {'Nature': 'Nature', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Durface_eau_4.set('fieldAliases', {'Regime': 'Regime', 'Type': 'Type', 'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RR_Toece_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'Cl_admin': 'Cl_admin', 'Revetement': 'Revetement', 'Niveau': 'Niveau', 'Praticab': 'Praticab', 'Nb_chausse': 'Nb_chausse', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Localite_Toece_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOM': 'NOM', 'NOM_DEPART': 'NOM_DEPART', 'PROVINCE': 'PROVINCE', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'type': 'type', });
lyr_Chef_lieu_Toece_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOM': 'NOM', 'NOM_DEPART': 'NOM_DEPART', 'PROVINCE': 'PROVINCE', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'type': 'type', });
lyr_ADM_Commune_1.set('fieldImages', {'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Commune_Toece_2.set('fieldImages', {'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Zone_vegetation_3.set('fieldImages', {'Nature': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Durface_eau_4.set('fieldImages', {'Regime': 'TextEdit', 'Type': 'TextEdit', 'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RR_Toece_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nom': 'TextEdit', 'Cl_admin': 'TextEdit', 'Revetement': 'Range', 'Niveau': 'Range', 'Praticab': 'TextEdit', 'Nb_chausse': 'Range', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Localite_Toece_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOM': 'TextEdit', 'NOM_DEPART': 'TextEdit', 'PROVINCE': 'TextEdit', 'X_COORD': 'TextEdit', 'Y_COORD': 'TextEdit', 'type': 'TextEdit', });
lyr_Chef_lieu_Toece_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOM': 'TextEdit', 'NOM_DEPART': 'TextEdit', 'PROVINCE': 'TextEdit', 'X_COORD': 'TextEdit', 'Y_COORD': 'TextEdit', 'type': 'TextEdit', });
lyr_ADM_Commune_1.set('fieldLabels', {'Nom': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Commune_Toece_2.set('fieldLabels', {'Nom': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Zone_vegetation_3.set('fieldLabels', {'Nature': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Durface_eau_4.set('fieldLabels', {'Regime': 'no label', 'Type': 'no label', 'Nom': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RR_Toece_5.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'no label', 'Cl_admin': 'no label', 'Revetement': 'no label', 'Niveau': 'no label', 'Praticab': 'no label', 'Nb_chausse': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Localite_Toece_6.set('fieldLabels', {'OBJECTID': 'no label', 'NOM': 'no label', 'NOM_DEPART': 'no label', 'PROVINCE': 'no label', 'X_COORD': 'no label', 'Y_COORD': 'no label', 'type': 'no label', });
lyr_Chef_lieu_Toece_7.set('fieldLabels', {'OBJECTID': 'no label', 'NOM': 'no label', 'NOM_DEPART': 'no label', 'PROVINCE': 'no label', 'X_COORD': 'no label', 'Y_COORD': 'no label', 'type': 'no label', });
lyr_Chef_lieu_Toece_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});