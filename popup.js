document.addEventListener('DOMContentLoaded', function() {

  var button = document.getElementById('validerForm');
  button.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function() {
      var message = document.getElementById('congrats');
      var prenom = document.getElementById('prenom');
      message.innerHTML = "Félicitation " + prenom.value + " !";
      document.getElementById('formulaire').classList.add('masquer');
      //TODO (étape 1) - implementer le code javascript permettant à votre extension de ne pas oublier votre prénom :) (1 ligne suffit)
      localStorage.setItem('prenom',prenom.value);
    });
  }, false);

  //TODO (étape 2) - implementer le code permettant d'afficher "Content de vous revoir 'VOTRE_PRENOM'" mais aussi de ne plus afficher le formulaire vous demandant votre prénom
  if (localStorage['prenom']) {
    document.getElementById('formulaire').classList.add('masquer');
    document.getElementById('congrats').innerHTML = "Content de vous revoir " + localStorage.getItem('prenom');
  }

  var favoris = document.getElementById('validerFavoris');
  favoris.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function() {

     // TODO (étape 3) - implémentez le code permettant de recuperer le contenue du formulaire et de le stocker sous format JSON
     var lien = document.getElementById('lien').value;
     var categorie = document.getElementById('categorie').value;
     var description = document.getElementById('description').value;

      var favoris = new Object();
      favoris.lien = lien;
      favoris.categorie  = categorie;
      favoris.description = description;
      var jsonString= JSON.stringify(favoris);
      localStorage.setItem("fav-"+lien, jsonString);
    });
  }, false);


  var ajouter = document.getElementById('ajouter');
  ajouter.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function() {
      document.getElementById('resultHistorique').classList.add('masquer');
      document.getElementById('formHistorique').classList.remove('masquer');
      document.getElementById('afficher').classList.remove('active');
      document.getElementById('ajouter').classList.add('active');
    });
  }, false);

  var afficher = document.getElementById('afficher');
  afficher.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function() {
      document.getElementById('formHistorique').classList.add('masquer');
      document.getElementById('resultHistorique').classList.remove('masquer');
      document.getElementById('ajouter').classList.remove('active');
      document.getElementById('afficher').classList.add('active');
      // TODO (étape 4) - implementez le code permettant d'afficher l'ensemble des favoris par categorie (perso/pro)
      for (var i=0; i<localStorage.length; i++){
        var resultatPerso = document.getElementById('perso');
        var resultatPro = document.getElementById('pro');
        var contenuePerso = "";
        var contenuePro = "";
        var key = localStorage.key(i);
         if(key.substring(0,3) === "fav")
         {
           switch(JSON.parse(localStorage.getItem(key)).categorie) {
             case 'perso':
               resultatPerso.innerHTML = contenuePerso + '<div class="col-md-12"><a>'+JSON.parse(localStorage.getItem(key)).lien+'</a><p>'+JSON.parse(localStorage.getItem(key)).description+'</p>';
               break;
             case 'pro':
               resultatPro.innerHTML = contenuePro + '<div class="col-md-12"><a>'+JSON.parse(localStorage.getItem(key)).lien+'</a><p>'+JSON.parse(localStorage.getItem(key)).description+'</p>';
               break;
           }
         }
      }

    });
  }, false);

}, false);
