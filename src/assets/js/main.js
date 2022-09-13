new ResizeObserver((entries) => {
  if (entries[0].contentRect.width <= 900) {
    if (mobileMenu !== null) {
      mobileMenu.style.transition = "transform 0.3s ease-out";
    }
  } else {
    if (mobileMenu !== null) {
      mobileMenu.style.transition = "none";
    }
  }
}).observe(document.body);
// Quand le DOM entier sera charger execute moi cette fonction
window.addEventListener("DOMContentLoaded", function () {
  const preload = document.querySelector(".preloader");
  const laoders = document.querySelectorAll(".box,.loader,.text,.loader-text");
  if (preload !== null) {
    setTimeout(() => {
      preload.style.display = "none";
      laoders.forEach((loader) => (loader.style.animationIterationCount = 0));
    }, 1000);
  }
  /** @type {number} Le ratio qu'on prendra en compte pour les intersections avec le parent (`root`)*/
  const ratio = 0.1;

  /** @type {Object} options Les parametres à prendre en contre dans nos intersections */
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
  };
  /**
   * @description La fonction que l'on souhaite ecouter dans notre API, c'est un callBack, elle sera appeler à chaque fois qu'il y a une nouvelle intersection
   * @param {IntersectionObserverEntry} entries les elements sur lesquels on va ecouter les intersection
   * @param {IntersectionObserver} observer
   * @author NdekoCode
   */
  const handleIntersect = function (entries, observer) {
    entries.forEach((entry) => {
      // Si la valeur d'intersection est superieur à notre ratio d'intersection
      if (entry.intersectionRatio > ratio) {
        // On supprime la classe 'reveal' qui masque l'element
        entry.target.classList.remove("reveal");
        // On ajoute la classe 'reveal-visible' qui va afficher l'element
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target); // On supprime l'observeur sur cet element
      }
    });
  };

  // Pour savoir si le JAVASCRIPT est charger on va rajouter une classe à notre element HMTL <html></html>
  // ET on ne marquera les elements que lorsque cette classe sera active
  document.documentElement.classList.add("reveal-loaded");
  // On initialise notre object IntersectionAPI
  const observer = new IntersectionObserver(handleIntersect, options);

  //  On met tous les elements sur lesquel on souhaite faire une observation
  const elements = document.querySelectorAll(
    ".hero__infos,.block-left,.block-right,.title,.container .title,.service-item,.text-p,p,.footer-item, .group,.hero__donation, .work,.work-item,.section .container .flex,.blog-item ,.blog-item,.member-item,.tabs-content,.section ul,.card"
  );

  //  Au chargement de la page on supprime la classe 'reveal' sur tous les elements du DOM
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.remove("reveal");
  });
  //  On PARCOURS les elements que l'on veut observer
  elements.forEach((element) => {
    //  On leurs ajoutes la classe `reveal`
    element.classList.add("reveal");

    //  On recuperes les enfants de ces elements
    const childrens = element.children;

    //  On fait une boucle sur ces elements en sachant que si on a plus de 5 element on sortira de la boucle au 5è element
    for (let i = 0; i < childrens.length; i++) {
      childrens[i].classList.add(`reveal-${i + 1}`);
      if (i >= 5) {
        break;
      }
    }
    observer.observe(element);
  });
});

// Hide Alert
const alerts = document.querySelectorAll(".alert");
if (alerts !== null) {
  alerts.forEach((alert) => {
    let timer = setTimeout(() => {
      alert.classList.add("is-inactive");
    }, 3000);
    alert.addEventListener("click", () => {
      if (!alert.classList.contains("is-inactive")) {
        alert.classList.add("is-inactive");
        clearTimeout(timer);
      }
    });
  });
}
