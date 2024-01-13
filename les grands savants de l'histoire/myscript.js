document.addEventListener("DOMContentLoaded", function () {
    const T = [
      "La vie est une aventure audacieuse ou rien du tout. - Helen Keller",
      "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte. - Winston Churchill",
      "La meilleure façon de prédire l'avenir est de le créer. - Peter Drucker",
      "L'éducation coûte cher. Mais l'ignorance coûte plus cher. - Sir Claus Moser",
      "Le seul endroit où le succès vient avant le travail est dans le dictionnaire. - Vidal Sassoon",
      "La vie n'est pas mesurée par le nombre de respirations que nous prenons, mais par les moments qui nous coupent le souffle. - Anonyme",
      "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez. - Albert Schweitzer",
      "La créativité consiste à voir ce que tout le monde voit et à penser ce que personne d'autre ne pense. - Albert Einstein",
      "Le futur appartient à ceux qui croient en la beauté de leurs rêves. - Eleanor Roosevelt",
      "Le bonheur n'est pas quelque chose de prêt à l'emploi. Cela découle de vos propres actions. - Dalai Lama"
    ];
  
    const quoteElement = document.getElementById("citationjours");
    let currentIndex = 0;
  
    function changeQuote() {
      quoteElement.textContent = T[currentIndex];
      currentIndex = (currentIndex + 1) % T.length;
    }
  
    changeQuote();
    setInterval(changeQuote,10*1000); // Changement de citation chaque minute
  });

  /* affichage de la date */

  document.addEventListener("DOMContentLoaded", function () {
    const datetimeElement = document.getElementById("datetime-container");
  
    function updateDateTime() {
      var currentDate = new Date();
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
      var formattedDate = currentDate.toLocaleDateString('fr-FR', options);
  
      datetimeElement.textContent = formattedDate;
    }
  
    updateDateTime();
  });


  /* la redirection de la liste deroulante */

  function redirect() {
    var dropdown = document.getElementById("auteurs");
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;
  
    // Redirection vers le site sélectionné
    if (selectedValue) {
      window.location.href = selectedValue;
    }
  }