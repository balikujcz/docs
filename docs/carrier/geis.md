---
sidebar_position: 1
---

# Geis CZ s.r.o.
V této sekci nalenezte informace o dopravci Geis CZ s.r.o., který je v současné době podporován v Balíkuj.

import CarrierHelpInfo from '@site/docs/carrier/_help-info.md';

<CarrierHelpInfo />


## Základní informace
| Informace |  |
| ----------- | ----------- |
| Název dopravce | **Geis CZ s.r.o.** |
| Kód dopravce | **`GEIS`** |
| Webové stránky | [www.geis-group.cz/cs ↗️](https://www.geis-group.cz/cs) |
| Stav | ✅️ Implementováno | 


## Podporované služby
- ✅️ **Paletová expedice** (`HomeExpedition`) - [odkaz ↗️](https://www.geis-group.cz/cs/paletova-preprava-b2b)
- ✅️ **Paletová objednávka** (`HomeOrder`) - [odkaz ↗️](https://www.geis-group.cz/cs/paletova-preprava-b2b)
- ✅️ **Home Delivery Standard** (`HomeStd`)  - [odkaz ↗️](https://www.geis-group.cz/cs/home-delivery)
- ✅️ **Home Delivery Premium** (`HomePrem`)  - [odkaz ↗️](https://www.geis-group.cz/cs/home-delivery)

import CarrierServiceInfo from '@site/docs/carrier/_service-info.md';

<CarrierServiceInfo />


## Aktivace dopravce
Pro aktivaci dopravce GEIS je třeba mít vytvořeny přístupové údaje do API rozhraní GEIS. Tyto údaje je potřeba následně vyplnit v administraci v sekci **Nastavení** -> **Dopravci** -> **Geis CZ s.r.o.**

### Přístupové údaje
Přístupové údaje do API rozhraní Vám sdělí dopravce po uzavření smlouvy s dopravcem. Požádat o přístupové údaje k existující smlouvě s dopravcem můžete na emailu [info@geis.cz](mailto:info@geis.cz).

### Testovací režim
Pokud zadáváte přístupové údaje do testovacího rozhraní dopravce, je potřeba zaškrtnout políčko **Testovací režim API**. V testovacím režimu se použije adresa testovacího API rozhraní na místo produkčního API rozhraní.

### Přihlašovací jméno do API
 Jedná se řetězec např. `"nazevfirmy"`.

### Heslo do API
Vygenerované heslo od dopravce např. `"Nxcb3Jsh72ze"`.

### Jazyk API komunikace
Jazyk komunikace s API dopravcem. Vyberte hodnotu `"Čeština"`.

import CarrierDefaultValues from '@site/docs/carrier/_default-values.md';

<CarrierDefaultValues />