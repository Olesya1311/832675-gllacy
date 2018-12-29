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
  var link = document.querySelector(".map__button");
  var popup = document.querySelector(".modal-wrapper");
  var close = popup.querySelector(".modal__button-close");
  var form = popup.querySelector("form");
  var formName = popup.querySelector("[name=fname]");
  var email = popup.querySelector("[name=email2]");
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }
  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
      formName.value = storage;
      email.focus();
    } 
    else {
      formName.focus();
    }
  });
  close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
  });
  form.addEventListener("submit", function (evt) {
    if (!formName.value || !email.value) {
       evt.preventDefault();
       console.log("Нужно ввести имя и email");
    } else {
      if (isStorageSupport) {	
        localStorage.setItem("name", formName.value);
      }
    }
    });
    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
          evt.preventDefault();
          if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
          }
      }
      });