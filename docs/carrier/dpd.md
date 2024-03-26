---
sidebar_position: 1
---

# DPD CZ s.r.o.
V této sekci nalenezte informace o dopravci DPD CZ s.r.o., který je v současné době podporován v balíkuj.cz.

import CarrierHelpInfo from '@site/docs/carrier/_help-info.md';

<CarrierHelpInfo />


## Základní informace
| Informace |  |
| ----------- | ----------- |
| Název dopravce | **DPD CZ s.r.o.** |
| Kód dopravce | **`DPD`** |
| Webové stránky | [www.dpd.cz ↗️](https://www.dpd.com/cz/cs/) |
| Stav | ✅️ Implementováno | 


## Podporované služby
- ✅️ **DPD Private** (`Private`) - [odkaz ↗️](https://www.dpd.com/cz/cs/o-nas/nase-sluzby/po-cr/)
- ✅️ **DPD Classic** (`Classic`) - [odkaz ↗️](https://www.dpd.com/cz/cs/o-nas/nase-sluzby/po-cr/)
- ✅️ **DPD Pickup** (`Pickup`)  - [odkaz ↗️](https://www.dpd.com/cz/cs/o-nas/nase-sluzby/po-cr/)
- ✅️ **DPD Expresní doručení do 10:00** (`Express10`)  - [odkaz ↗️](https://www.dpd.com/cz/cs/o-nas/nase-sluzby/po-cr/)
- ✅️ **DPD Expresní doručení do 12:00** (`Express12`)  - [odkaz ↗️](https://www.dpd.com/cz/cs/o-nas/nase-sluzby/po-cr/)
- ✅️ **DPD Expresní doručení do 18:00** (`Express18`)  - [odkaz ↗️](https://www.dpd.com/cz/cs/o-nas/nase-sluzby/po-cr/)
- ✅️ **DPD Expresní doručení po EU** (`ExpressEU`)  - [odkaz ↗️](https://www.dpd.com/cz/cs/o-nas/nase-sluzby/do-zahranici/)
- ✅️ **DPD Expresní doručení po celém světě** (`ExpressNonEU`)  - [odkaz ↗️](https://www.dpd.com/cz/cs/o-nas/nase-sluzby/do-zahranici/)
- ✅️ **DPD přeprava pneumatik** (`Pneu`)  - [odkaz ↗️](https://www.dpd.com/cz/cs/o-nas/nase-sluzby/po-cr/)
- ✅️ **DPD Shop2Shop** (`Shop2Shop`)  - [odkaz ↗️](https://www.dpd.com/cz/cs/o-nas/nase-sluzby/po-cr/)
- ✅️ **DPD Shop2Home** (`Shop2Home`)  - [odkaz ↗️](https://www.dpd.com/cz/cs/o-nas/nase-sluzby/po-cr/)

import CarrierServiceInfo from '@site/docs/carrier/_service-info.md';

<CarrierServiceInfo />


## Aktivace dopravce
Pro aktivaci dopravce DPD je třeba mít vytvořeny přístupové údaje do API rozhraní DPD. Tyto údaje je potřeba následně vyplnit v administraci v sekci **Nastavení** -> **Dopravci** -> **DPD CZ s.r.o.**

### Přístupové údaje
Přístupové údaje do API rozhraní Vám sdělí dopravce po uzavření smlouvy s dopravcem. Požádat o přístupové údaje k existující smlouvě s dopravcem můžete na emailu [mojedpd@dpd.cz](mailto:mojedpd@dpd.cz).

### Testovací režim
Pokud zadáváte přístupové údaje do testovacího rozhraní dopravce, je potřeba zaškrtnout políčko **Testovací režim API**. V testovacím režimu se použije adresa testovacího API rozhraní na místo produkčního API rozhraní.

### API klíč
 Jedná se řetězec např. `"ad8ca026333a5ed7b57a6e6ea1cc666b"`.

### DSW kód zákazníka
DSW kód zákazníka získáte od DPD pro daného uživatele, pod kterým budete zasílat zásilky. `"10029607258"`.

### ID odesílatele
Jedná se o it4emId ID odesílatele (adresy), které Vám sdělí dopravce DPD nebo které získáte po vytvoření nové svozové adresy. ID odesílatele slouží jako identifikátor odesílatele zásilky. Jedná se řetězec např. `"13745424"`.

import CarrierDefaultValues from '@site/docs/carrier/_default-values.md';

<CarrierDefaultValues />
