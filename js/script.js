let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu-wrapper');
let headerLink = document.querySelectorAll('.header__nav-link');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__menu-wrapper--active');
  document.body.classList.toggle('overflow');
  headerLink.forEach( function (link) {
    link.addEventListener('click', function () {
      burger.classList.remove('burger--active');
      menu.classList.remove('header__menu-wrapper--active');
      document.body.classList.remove('overflow');
    });
  });
});
// Select

const element = document.querySelector('.galery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  position: 'bottom',
});

let search = document.querySelector('.header__btn');
let searchingBlock = document.querySelector('.header__search-block');
let searchInput = document.querySelector('.header__input');
let searchCross = document.querySelector('.header__cross-btn');

search.addEventListener('click', function () {
  searchingBlock.classList.add('header__search-block--active');
  searchCross.addEventListener('click', function () {
    searchCross.classList.remove('burger--active');
    searchingBlock.classList.remove('header__search-block--active');
  });
});


// Swiper

const swiper = new Swiper('.galery__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,

  pagination: {
    el: '.galery__pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.galery__button-next',
    prevEl: '.galery__button-prev',
  },

  a11y: {
    paginationBulletMessage: 'Перейти на слайд {{index}}',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  breakpoints: {
    1441: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },

    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 34,
    },

    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
  },
});

//accordion

const accordion = new Accordion('.accordion-container', {
  showMultiple: true,
  collapse: true,
});

const eventsSwiper = new Swiper('.events__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,

  navigation: {
    nextEl: '.events__button-next',
    prevEl: '.events__button-prev',
  },

  pagination: {
    el: '.events-pagination',
    clickable: true,
  },

  a11y: {
    paginationBulletMessage: 'Перейти на слайд {{index}}',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  breakpoints: {
    1441: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    },

    993: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },

    665: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    }
  },

});

const partnerSwiper = new Swiper('.projects__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,

  navigation: {
    nextEl: '.projects__button-next',
    prevEl: '.projects__button-prev',
  },

  a11y: {
    paginationBulletMessage: 'Перейти на слайд {{index}}',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  breakpoints: {
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },

    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
  }
});

// Выпадающий блок в header
let groupTops = document.querySelectorAll('.header__group-upper-part');
let groupBlocks = document.querySelectorAll('.header__group');
let groupArrows = document.querySelectorAll('.header__group-svg');

groupTops.forEach(function (elem) {
  elem.addEventListener('click', function () {
    let topNum = elem.dataset.top;
    groupArrows.forEach(function (arrow) {
      if(arrow == elem.querySelector('.header__group-svg')) {
        arrow.classList.toggle('header__group-svg--active');
      }
      else {
        arrow.classList.remove('header__group-svg--active');
      }
    });
    groupBlocks.forEach(function (block) {
      if(block.dataset.group == topNum) {
        block.classList.toggle('header__group--active');
      }
      else {
        block.classList.remove('header__group--active');
      }
    });
  });
});

// Плавный скролл

document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();

      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
  });
});

// Тултипы
tippy('.tooltip', {
  theme: 'tooltip__window',
  maxWidth: 264,
});

// табы

let artistBtns = document.querySelectorAll('.catalog__panel-btn');
let artistContent = document.querySelectorAll('.catalog__left-part');
console.log(artistBtns[0]);
artistBtns.forEach(function (elem) {
  elem.addEventListener('click', function () {
    let artistName = elem.dataset.btn;
    console.log(artistName);
    artistContent.forEach( function (content) {
      if(content.dataset.content == artistName) {
        content.classList.add('catalog__left-part--active');
      }
      else {
        content.classList.remove('catalog__left-part--active');
      }
    });
  });
});

// телефон
var telSelector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999) 999-99-99");
im.mask(telSelector);

// форма
const validation = new JustValidate('.contacts__form');

validation
  .addField('.name-input', [
    {
      rule: 'customRegexp',
      value: /^[а-яА-ЯёЁa-zA-Z]+$/,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Поле должно содержать минимум 3 символа',
    },
    {
      rule: 'maxLength',
      value: 25,
      errorMessage: 'Поле должно содержать не более 25 символов',
    },
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
  ])

  .addField('.phone-input', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
    {
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Недопустимый формат',
    },
  ])


// Карта

ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map("map", {
    center: [55.75896058794534,37.614685094232584],
    zoom: 14.3,
    controls: ['geolocationControl', 'zoomControl'],
  },
  {
    geolocationControlFloat: 'none',
    geolocationControlPosition: {
      bottom: '340px',
      right: '18px'
    },
    zoomControlSize: 'small',
    zoomControlPosition: {
      bottom: '390px',
      right: '18px'
    }
  });

  if (window.matchMedia("(max-width: 576px)").matches) {
    if (Object.keys(myMap.controls._controlKeys).length) {
      myMap.controls.remove('zoomControl');
      myMap.controls.remove('geolocationControl');
    }
  }

  myMap.behaviors.disable("scrollZoom");

  myMap.events.add("sizechange", function (e) {
    if (window.matchMedia("(max-width: 1024px)").matches) {
      if (Object.keys(myMap.controls._controlKeys).length) {
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('geolocationControl');
      }
    } else {
      if (!Object.keys(myMap.controls._controlKeys).length) {
        myMap.controls.add('zoomControl');
        myMap.controls.add('geolocationControl');
      }
    }
  });

  var myPlacemark = new ymaps.Placemark([55.75896058794534,37.614685094232584], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-img.svg',
    iconImageSize: [20, 20],
  });
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
}

