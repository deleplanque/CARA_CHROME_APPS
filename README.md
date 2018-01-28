# CARA_CHROME_APPS

## Définir le "manifest.json"

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
  * "scripts": : "file_name"

## Importer l'extension

De la même façon que pour le premier TP, importez votre extension dans votre Google chrome.

  
