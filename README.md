# CARA_CHROME_APPS

## Initialisation

Le manifest.json est implémenté de la façon suivante:

```json
{
  "manifest_version": 2,
  "name": "TP CARA MIAGE",
  "description": "",
  "version": "1.0",
  "browser_action": {
  },
  "background": {
  },
  "permissions": [
    "activeTab",
    "tabs"
  ]
}
```

La première étape va être de définir les différentes propriétés en fonction des fichiers existants:

#### 1. "browser_action"
  *	"default_icon": "file_name"
  * "default_popup": "file_name"
  
#### 2. "background"
  * "scripts": "file_name"

## Importer l'extension

De la même façon que pour le premier TP, importez votre extension dans votre Google chrome.

## Partie 1

Maintenant que l'extension est importée, nous pouvons commencer le tp. Si vous avez correctement suivit l'initialisation, une icône représentant le logo de la MIAGE devrait se trouver dans la barre de tâche en haut à droite. Si celle ci est absente, recommencez l'initialisation.

* Cliquez sur l'icône.
* La popup est ouverte, remplissez le formulaire puis validez !

Un message vous félicitant apparaît.

Maintenant:

 * Fermez la popup et ouvrez la de nouveau.

### Oupsss !

Votre extension a déjà oublié votre prénom est vous le demande à nouveau :/

Nous allons donc voir comment stocker des données dans votre extension.

## Stocker des données

Il existe deux méthodes pour sauvegarder les données de l'utilisateur de façon durable :

* Dans une base de données appartenant au créateur de l'extension
* Sur l'ordinateur de l'utilisateur

La première méthode est utile dans le cas ou l'extension est un jeu par exemple où l'on souhaiterai afficher un top 100.

Dans notre cas, nous allons utiliser la deuxième méthode qui consiste à utiliser une nouveauté du html5 : localStorage. On va donc stocker les données sur l'ordinateur du client.
C'est déjà mieux pour la protection de ses données, et ça vous fait économiser un hébergement, beaucoup de temps de transmission, et énormément de place.

### Comment utiliser le localStorage ?

```js
localStorage.setItem(key,value);  //donner une nouvelle valeur
localStorage.removeItem(key);  //supprimer l'item
var key = localStorage.key(n);  //récupérer la clef du n item.
var value = localStorage.getItem(key) // retourne la valeur correspondant à la clé
localStorage.clear();  //vider localStorage
localStorage.length();  //le nombre de clef de localStorage
if (localStorage['prenom']) //test si un item dont la cle est prenom est present dans le localStorage
```
A Savoir, localstorage possède une capacité de stockage de 5GO.

Si votre extension sert à stocker une grande quantié de données, alors il vous faudra rajouter dans le manifest.json :

```json
"permissions": ["unlimitedStorage"]
```

#### Etape 1 - implementer le code javascript afin que votre extension n'oublie plus votre prénom !
#### Etape 2 - implementer le code permettant d'afficher "Content de vous revoir 'VOTRE_PRENOM'" lorsque vous ouvrez à nouveau l'extension mais aussi de ne plus afficher le formulaire vous demandant votre prénom.

## Les pages d'options

On pourrait monter tout un dispositif pour enregistrer les options, avec un lien dans la popup, qui, par fenêtres de dialogue permettrait d'enregistrer les préférences de l'utilisateur, mais quelques chose de plus simple existe.

### Une page d'option ?

Une page d'option est une page dans laquelle l'utilisateur choisit ses préférences.
C'est exactement ce qu'il nous faut : une page dédiée à la saisie des préférences dans laquelle on peut utiliser localStorage autant que l’on veut !
Dans certaines extensions, il y a un lien dans la popup. Sinon, on accède à cette fameuse page d'options en faisant un clic droit puis "options" sur l'icône dans la barre d'extensions.
On peut également y accéder, dans la page de gestion des extensions par le lien "options", après le lien "désinstaller".

* Essayer de faire un clic droit sur votre extension situé dans la barre de tâche.

On remarque que le lien est désactivé. 
De base, votre extension ne possède pas de page d’option, lorsque vous publiez votre extension, google le remarque, ainsi il désactive le lien.

Pour l’activer, rien de plus simple. Allez dans le manifest.json puis ajoutez la ligne suivante :

```json
"options_page":"page_options.html"
```

* Créez le fichier nécessaire au bon fonctionnement de l'extension.
* Essayez de nouveau d'accéder à la page d'option

Google à donc détecter la présence d'une page d'option et à donc activé l'option.

A partir de maintenant vous pourrez implémenter une multitude d'options.

## Partie 2

Le but de la partie 2, est de créer une extension qui gère nos favoris. Le but est de pouvoir associer un favoris à une catégorie et de lui ajouter une description.

### Ajoutez au fichier 'popup.html' le code suivant ...

```html
<div class="col-sm-12">
  <ul>
    <li>
      <span class="active" id="ajouter">Ajouter</span>
    </li>
    <li>
      <span id="afficher">Afficher</span>
    </li>
  </ul>
</div>

<div id="formHistorique" class="col-md-12">
  <div class="form-group">
      <label for="lien">Lien:</label>
      <input type="text" class="form-control" id="lien">
  </div>
  <div class="form-group">
    <label for="categorie">Catégorie:</label>
    <select class="form-control" id="categorie">
      <option value="pro">Pro</option>
      <option value="perso">Perso</option>
    </select>
  </div>
  <div class="form-group">
    <label for="description">Description:</label>
    <input type="text" class="form-control" id="description">
  </div>
  <button id="validerFavoris" class="btn btn-sm btn-primary">Valider !</button>
</div>

<div id="resultHistorique" class="col-md-12 masquer">
  <h3>Pro</h3>
  <div id="pro" class="col-md-12"></div>
  <h3>Perso</h3>
  <div id="perso" class="col-md-12"></div>
</div>
```

### ... et ce code au fichier 'popup.js'

```js
var favoris = document.getElementById('validerFavoris');
  favoris.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function() {
    // TODO (étape 3) - implémentez le code permettant de récuperer le contenue du formulaire et de le stocker sous format JSON
    // Pour la sauvegarde de l'objet au format JSON, pensez à mettre un prefixe (ex: fav-) dans la clé. cela permettra de faire un      filtre parmis l'ensemble de vos informations stocker dans votre localStorage.
    
    
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
```

* Faire TODO (étape 3)
* Faire TODO (étape 4)

### Rappels:

```js
var jsonString = JSON.stringify(Object);
```

```js
var Object = JSON.parse(jsonString);
```

## Pour aller plus loin

* Créer une option dans la page d'otpion. (Exemple: changer la couleur de fond)
* Ouvrir une fenêtre lorsque l'on clique sur un favoris.

