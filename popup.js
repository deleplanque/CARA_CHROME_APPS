document.addEventListener('DOMContentLoaded', function() {

  var button = document.getElementById('validerForm');
  button.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function() {
      var message = document.getElementById('congrats');
      var prenom = document.getElementById('prenom');
      message.innerHTML = "Félicitation " + prenom.value + " !";
      document.getElementById('formulaire').classList.add('masquer');
      //TODO (étape 1) - implementer le code javascript permettant à votre extension de ne pas oublier votre prénom :) (1 ligne suffit)

    });
  }, false);

  //TODO (étape 2) - implementer le code permettant d'afficher "Content de vous revoir 'VOTRE_PRENOM'" mais aussi de ne plus afficher le formulaire vous demandant votre prénom


}, false);
