(function() {

  // configurações smooth scroll
  smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( anchor, toggle ) {
    } // Function to run after scrolling
  });

  // criando as variáveis com elementos
  var section = document.querySelectorAll('li');
  var sections = {};
  var sectionItem = 0;
  var um = document.querySelector(".um");
  var dois = document.querySelector(".dois");
  var tres = document.querySelector(".tres");

  // pegando o ID de cada seção
  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  // ouvindo o scroll da página e adicionando modificações
  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    for (sectionItem in sections) {
      // quando chega na metade da seção faz algo
      if ((sections[sectionItem]) - 100 <= scrollPosition) {
        // qual seção?
        if (sectionItem === 'um') {
          um.classList.add('seja-vermelho')
        }
        if (sectionItem === 'dois') {
          dois.classList.add('seja-azul')
        }
        if (sectionItem === 'tres') {
          tres.classList.add('seja-verde')
        }
      }
    }
  };
})();
