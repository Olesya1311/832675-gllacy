ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
              center: [59.939238, 30.329213],
              zoom: 16,
              controls: []
          }, {
              searchControlProvider: 'yandex#search'
          });
            myPlacemark = new ymaps.Placemark([59.938585, 30.323089], {}, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/icon-map-cursor.svg',
              // Размеры метки.
              iconImageSize: [80, 140],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-40, -140]
          });
           myMap.geoObjects.add(myPlacemark);
    
  })