var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasKecamatan_1 = new ol.format.GeoJSON();
var features_BatasKecamatan_1 = format_BatasKecamatan_1.readFeatures(json_BatasKecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_1.addFeatures(features_BatasKecamatan_1);
var lyr_BatasKecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_1, 
                style: style_BatasKecamatan_1,
                popuplayertitle: 'Batas Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_1.png" /> Batas Kecamatan'
            });
var format_BatasPemukiman_2 = new ol.format.GeoJSON();
var features_BatasPemukiman_2 = format_BatasPemukiman_2.readFeatures(json_BatasPemukiman_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasPemukiman_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasPemukiman_2.addFeatures(features_BatasPemukiman_2);
var lyr_BatasPemukiman_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasPemukiman_2, 
                style: style_BatasPemukiman_2,
                popuplayertitle: 'Batas Pemukiman',
                interactive: true,
                title: '<img src="styles/legend/BatasPemukiman_2.png" /> Batas Pemukiman'
            });
var format_BatasPersawahan_3 = new ol.format.GeoJSON();
var features_BatasPersawahan_3 = format_BatasPersawahan_3.readFeatures(json_BatasPersawahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasPersawahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasPersawahan_3.addFeatures(features_BatasPersawahan_3);
var lyr_BatasPersawahan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasPersawahan_3, 
                style: style_BatasPersawahan_3,
                popuplayertitle: 'Batas Persawahan',
                interactive: true,
                title: '<img src="styles/legend/BatasPersawahan_3.png" /> Batas Persawahan'
            });
var format_Point_4 = new ol.format.GeoJSON();
var features_Point_4 = format_Point_4.readFeatures(json_Point_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_4.addFeatures(features_Point_4);
var lyr_Point_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Point_4, 
                style: style_Point_4,
                popuplayertitle: 'Point',
                interactive: true,
                title: 'Point'
            });
var format_Jalan_Provinsi_5 = new ol.format.GeoJSON();
var features_Jalan_Provinsi_5 = format_Jalan_Provinsi_5.readFeatures(json_Jalan_Provinsi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Provinsi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Provinsi_5.addFeatures(features_Jalan_Provinsi_5);
var lyr_Jalan_Provinsi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Provinsi_5, 
                style: style_Jalan_Provinsi_5,
                popuplayertitle: 'Jalan_Provinsi',
                interactive: true,
                title: '<img src="styles/legend/Jalan_Provinsi_5.png" /> Jalan_Provinsi'
            });
var format_JalanRaya_6 = new ol.format.GeoJSON();
var features_JalanRaya_6 = format_JalanRaya_6.readFeatures(json_JalanRaya_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanRaya_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanRaya_6.addFeatures(features_JalanRaya_6);
var lyr_JalanRaya_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanRaya_6, 
                style: style_JalanRaya_6,
                popuplayertitle: 'Jalan Raya',
                interactive: true,
                title: '<img src="styles/legend/JalanRaya_6.png" /> Jalan Raya'
            });
var format_JalanDesa_7 = new ol.format.GeoJSON();
var features_JalanDesa_7 = format_JalanDesa_7.readFeatures(json_JalanDesa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_7.addFeatures(features_JalanDesa_7);
var lyr_JalanDesa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_7, 
                style: style_JalanDesa_7,
                popuplayertitle: 'Jalan Desa',
                interactive: true,
                title: '<img src="styles/legend/JalanDesa_7.png" /> Jalan Desa'
            });
var format_JalanGang_8 = new ol.format.GeoJSON();
var features_JalanGang_8 = format_JalanGang_8.readFeatures(json_JalanGang_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanGang_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanGang_8.addFeatures(features_JalanGang_8);
var lyr_JalanGang_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanGang_8, 
                style: style_JalanGang_8,
                popuplayertitle: 'Jalan Gang',
                interactive: true,
                title: '<img src="styles/legend/JalanGang_8.png" /> Jalan Gang'
            });
var format_GangPerumahan_9 = new ol.format.GeoJSON();
var features_GangPerumahan_9 = format_GangPerumahan_9.readFeatures(json_GangPerumahan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GangPerumahan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GangPerumahan_9.addFeatures(features_GangPerumahan_9);
var lyr_GangPerumahan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GangPerumahan_9, 
                style: style_GangPerumahan_9,
                popuplayertitle: 'Gang Perumahan',
                interactive: true,
                title: '<img src="styles/legend/GangPerumahan_9.png" /> Gang Perumahan'
            });
var format_Lokasi_Cuci_Motor_Lowokwaru_10 = new ol.format.GeoJSON();
var features_Lokasi_Cuci_Motor_Lowokwaru_10 = format_Lokasi_Cuci_Motor_Lowokwaru_10.readFeatures(json_Lokasi_Cuci_Motor_Lowokwaru_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokasi_Cuci_Motor_Lowokwaru_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokasi_Cuci_Motor_Lowokwaru_10.addFeatures(features_Lokasi_Cuci_Motor_Lowokwaru_10);
var lyr_Lokasi_Cuci_Motor_Lowokwaru_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokasi_Cuci_Motor_Lowokwaru_10, 
                style: style_Lokasi_Cuci_Motor_Lowokwaru_10,
                popuplayertitle: 'Lokasi_Cuci_Motor_Lowokwaru',
                interactive: true,
                title: '<img src="styles/legend/Lokasi_Cuci_Motor_Lowokwaru_10.png" /> Lokasi_Cuci_Motor_Lowokwaru'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BatasKecamatan_1.setVisible(true);lyr_BatasPemukiman_2.setVisible(true);lyr_BatasPersawahan_3.setVisible(true);lyr_Point_4.setVisible(true);lyr_Jalan_Provinsi_5.setVisible(true);lyr_JalanRaya_6.setVisible(true);lyr_JalanDesa_7.setVisible(true);lyr_JalanGang_8.setVisible(true);lyr_GangPerumahan_9.setVisible(true);lyr_Lokasi_Cuci_Motor_Lowokwaru_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BatasKecamatan_1,lyr_BatasPemukiman_2,lyr_BatasPersawahan_3,lyr_Point_4,lyr_Jalan_Provinsi_5,lyr_JalanRaya_6,lyr_JalanDesa_7,lyr_JalanGang_8,lyr_GangPerumahan_9,lyr_Lokasi_Cuci_Motor_Lowokwaru_10];
lyr_BatasKecamatan_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', });
lyr_BatasPemukiman_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_BatasPersawahan_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_Point_4.set('fieldAliases', {});
lyr_Jalan_Provinsi_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_JalanRaya_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_JalanDesa_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_JalanGang_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_GangPerumahan_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_Lokasi_Cuci_Motor_Lowokwaru_10.set('fieldAliases', {'id': 'id', 'Lokasi': 'Lokasi', 'Alamat': 'Alamat', });
lyr_BatasKecamatan_1.set('fieldImages', {'id': '', 'Nama': '', 'Luas': '', });
lyr_BatasPemukiman_2.set('fieldImages', {'id': '', 'Nama': '', 'Panjang': '', });
lyr_BatasPersawahan_3.set('fieldImages', {'id': '', 'Nama': '', 'Panjang': '', });
lyr_Point_4.set('fieldImages', {});
lyr_Jalan_Provinsi_5.set('fieldImages', {'id': '', 'Nama': '', 'Panjang': '', });
lyr_JalanRaya_6.set('fieldImages', {'id': '', 'Nama': '', 'Panjang': '', });
lyr_JalanDesa_7.set('fieldImages', {'id': '', 'Nama': '', 'Panjang': '', });
lyr_JalanGang_8.set('fieldImages', {'id': '', 'Nama': '', 'Panjang': '', });
lyr_GangPerumahan_9.set('fieldImages', {'id': '', 'Nama': '', 'Panjang': '', });
lyr_Lokasi_Cuci_Motor_Lowokwaru_10.set('fieldImages', {'id': 'TextEdit', 'Lokasi': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_BatasKecamatan_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', });
lyr_BatasPemukiman_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_BatasPersawahan_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_Point_4.set('fieldLabels', {});
lyr_Jalan_Provinsi_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_JalanRaya_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_JalanDesa_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_JalanGang_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_GangPerumahan_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_Lokasi_Cuci_Motor_Lowokwaru_10.set('fieldLabels', {'id': 'no label', 'Lokasi': 'no label', 'Alamat': 'no label', });
lyr_Lokasi_Cuci_Motor_Lowokwaru_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});