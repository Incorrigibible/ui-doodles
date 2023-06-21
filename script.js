document.addEventListener('DOMContentLoaded', function() {

  // choices
  const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
  });

  // yandex map
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [48.872185, 2.354224],
      zoom: 12,
      controls: []
    },
     {
      suppressMapOpenBlock: true
    })

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Франция, Иль-де-Франс, Париж, X округ Парижа, улица дю Фобур Сен Дени 54',
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'map-icon.svg',
      // Размеры метки.
      iconImageSize: [48, 48],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-24, -48]
    })

    myMap.geoObjects
      .add(myPlacemark)
  });

  // simple bar
  new SimpleBar(document.querySelector('.custom-scroll'), {
    // autoHide: false,
    // forceVisible: true,
  });

  // form validate
  var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999) 999-99-99");

    im.mask(selector);

    new JustValidate('.form', {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 10
        },
        tel: {
          required: true,
          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Number(Phone) && phone.Length === 10
          }
        },
        mail: {
          required: true,
          email: true
        },
      },
      messages: {
        name: 'Как вас зовут?',
        tel: 'Укажите ваш телефон',
        mail: 'Укажите ваш e-mail',
      },
      colorWrong: '#FF5C00',
    });
})
