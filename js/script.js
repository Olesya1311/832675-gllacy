ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
              center: [59.939238, 30.329213],
              zoom: 16,
              controls: []
          }, {
              searchControlProvider: 'yandex#search'
          });
            myPlacemark = new ymaps.Placemark([59.938585, 30.323089], {}, {
              iconLayout: 'default#image',
              iconImageHref: 'img/map-pin.png',
              iconImageSize: [218, 142],
              iconImageOffset: [-40, -140]
          });
           myMap.geoObjects.add(myPlacemark);
  });

