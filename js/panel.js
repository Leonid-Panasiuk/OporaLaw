var cards = document.querySelectorAll("[data-column-item]");

var images = [src = 'img/businesses.jpg', 'img/businesses-2.jpg', 'img/businesses-3.jpg', 'img/businesses-4.jpg'];

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

var real = images.filter(onlyUnique);

if (cards !== null) {
  for (i = 0; i < cards.length; i++) {
    var card = cards[i];

    var set = Math.floor(Math.random() * real.length);
    var random = real.splice(set, 1)[0];

    // card.style.backgroundImage = "url('" + random + "')";

  }

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("column--active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" column--active", "");
      }
      this.className += " column--active";
    });
  }
}