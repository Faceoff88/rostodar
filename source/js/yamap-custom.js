ymaps.ready(function () {
    var myMap = new ymaps.Map(
      "map",
      {
        center: [54.254344, 35.609874],
        zoom: 15,
        controls: ['zoomControl']
      },
      {
        searchControlProvider: "yandex#search"
      }
    ),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemarkWithContent = new ymaps.Placemark(
        [54.254344, 35.609874],
        {
          hintContent: "Собственный значок метки с контентом",
          balloonContent:
            "Ростодар - удобрение нового уровня",
          iconContent: "12"
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#imageWithContent",
          // Своё изображение иконки метки.
          iconImageHref: "img/map-marker.png",
          // Размеры метки.
          iconImageSize: [136, 104],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-30, -120],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          //iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
        }
      );

    myMap.geoObjects.add(myPlacemarkWithContent);

    function onResizeMap() {
      if (window.innerWidth < '660') {
        myMap.setCenter([54.254344, 35.609874]);
      } else if (window.innerWidth < '1200') {
        myMap.setCenter([54.254344, 35.609874]);
      } else {
        myMap.setCenter([54.254344, 35.509874]);
        myMap.setZoom(12);
      }
    } onResizeMap();

    window.onresize = function () {
      onResizeMap();
    };
  });
