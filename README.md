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

* Dans une base de données apartenant au créateur de l'extension
* Sur l'ordinateur de l'utilisateur

La première méthode est utile dans le cas ou l'extension est un jeu par exemple où l'on souhaiterai afficher un top 100.

Dans notre cas, nous allons utiliser la deuxième méthode qui consiste à utiliser une nouveauté du html5 : localStorage. On va donc stocker les données sur l'ordinateur du client.
C'est déjà mieux pour la protection de ses données, et ça vous fait économiser un hébergement, beaucoup de temps de transmission, et énormément de place.



