# 🎮 BoolGaming Project

Questo repository è composto da **due progetti separati**:

* **boolgaming-backoffice** → Backend / Backoffice (PHP – Laravel)
* **boolgaming** → Frontend (JavaScript – framework frontend)

Alcuni file e cartelle **non sono presenti su GitHub** perché inseriti nei rispettivi `.gitignore`. Questo README spiega **passo per passo** come far funzionare tutto correttamente dopo il download.

---

## 🧩 Struttura del progetto

```
BoolGaming/
├── boolgaming-backoffice/   # Backend (Laravel)
└── boolgaming/              # Frontend
```

---

# 🔧 SETUP BACKOFFICE (boolgaming-backoffice)

## ✅ Requisiti

Prima di iniziare, assicurati di avere installato:

* **PHP** (versione compatibile con Laravel)
* **Composer**
* **Node.js** (include npm)
* **Un database** (PhpMyAdmin => nome database = laravel_boolgaming)

---

## 1️⃣ Entra nella cartella del backoffice

```bash
cd boolgaming-backoffice
```

---

## 2️⃣ Installa le dipendenze PHP

La cartella `/vendor` **non è inclusa** nel repository.

```bash
composer install
```

NOTA: Se ti da qualche problema d'installazione con il comando composer, prova a disattivare l'antivirus, a volte può essere la causa di alcuni download di package perduti!

---

## 3️⃣ Installa le dipendenze frontend del backoffice con bootsrap!

La cartella `/node_modules` **non è inclusa**.

Esegui i seguenti comandi!

```bash
php artisan ui bootstrap
```

```bash
npm install
```

```bash
composer require laravel/ui
```

NOTA! se ti da errore il npm run dev, prova a rifare questo qui sotto!

```bash
npm install
```

NOTA: Se ti da qualche problema d'installazione con il comando composer, prova a disattivare l'antivirus, a volte può essere la causa di alcuni download di package perduti!

---

## 4️⃣ Crea il file .env e modifica app.js e app.scss

Il file `.env` contiene le configurazioni sensibili ed è **escluso da GitHub**.

1. crea il file .env e inserisci questo contenuto:

```bash
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:Opmn7L5loPiw5+OaLRqZwul4vodqT0ZYkAMsTECO1S8=
APP_DEBUG=true
APP_TIMEZONE=UTC
APP_URL=http://localhost

APP_LOCALE=en
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=en_US

APP_MAINTENANCE_DRIVER=file
APP_MAINTENANCE_STORE=database

BCRYPT_ROUNDS=12

LOG_CHANNEL=stack
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3307
DB_DATABASE=laravel_boolgaming
DB_USERNAME=root
DB_PASSWORD=
DB_COLLATION = utf8mb4_unicode_ci

SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=null

BROADCAST_CONNECTION=log
FILESYSTEM_DISK=public
QUEUE_CONNECTION=database

CACHE_STORE=database
CACHE_PREFIX=

MEMCACHED_HOST=127.0.0.1

REDIS_CLIENT=phpredis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=log
MAIL_HOST=127.0.0.1
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

VITE_APP_NAME="${APP_NAME}"

```

ATTENZIONE! Controlla bene in xampp qual'è la tua DB_PORT
la DB_PORT la puoi trovare su xampp come qui mostrato nell'immagine:

<img src="public/port.jpg" alt="Descrizione" width="300"/>


* assicurati di aver creato su phpMyAdmin un database (dento il db laravel) chiamato laravel_boolgaming

* se ti da errore all'inizio, prova a cancellare e rimettere APP_KEY e salva

Poi, nel file presente in resources/js/app.js, modifica così:

```bash

    import './bootstrap';
    import '~resources/scss/app.scss';
    import '~icons/bootstrap-icons.scss';
    import * as bootstrap from 'bootstrap';
    import.meta.glob([
        '../img/**'
    ])


```

Poi in resorces/scss/app.scss:

```bash

    @import '~bootstrap/scss/bootstrap';

```

---

## 5️⃣ Storage e permessi

Le seguenti cartelle **non sono versionate**:

* `/public/storage`
* `/storage/*.key`

Crea il collegamento allo storage:

```bash
php artisan storage:link
```

---

## 6️⃣ Esegui vue


Esegui:

```bash
npm run dev
```


---

## 7️⃣ Avvia il server Laravel

```bash
php artisan serve
```

Il backoffice sarà disponibile su:

👉 `http://127.0.0.1:8000`

---

# 🌐 SETUP FRONTEND (boolgaming)

## ✅ Requisiti

* **Node.js** (versione LTS consigliata)
* **npm**

---

## 1️⃣ Entra nella cartella frontend

```bash
cd boolgaming
```

---

## 2️⃣ Installa le dipendenze

La cartella `node_modules` **non è inclusa** nel repository.

```bash
npm install
```


---

## 3️⃣ Avvia il frontend

```bash
npm run dev
```

Il frontend sarà disponibile su:

👉 `http://localhost:5173`



## ✅ Checklist finale

✔️ Clonato il repository
✔️ `composer install`
✔️ `npm install` (entrambi i progetti)
✔️ `.env` creato
✔️  key creata
✔️ `npm run dev`
✔️ Backend e frontend avviati

---

## 🆘 Problemi comuni

* ❌ **Pagina bianca?** → controlla `.env`
* ❌ **Errore database?** → verifica credenziali DB
* ❌ **npm error?** → elimina `node_modules` e rifai `npm install`

---

Buon lavoro e buon divertimento con **BoolGaming**!
