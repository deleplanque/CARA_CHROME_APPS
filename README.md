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
  *	"default_icon"
  * "default_popup"
  
#### 2. "background"
  * "scripts"
