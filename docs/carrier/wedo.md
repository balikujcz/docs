---
sidebar_position: 1
---

# WE|DO CZ s.r.o.
V této sekci nalenezte informace o dopravci WE|DO CZ s.r.o., který je v současné době podporován v balíkuj.cz.

import CarrierHelpInfo from '@site/docs/carrier/_help-info.md';

<CarrierHelpInfo />


## Základní informace
| Informace |  |
| ----------- | ----------- |
| Název dopravce | **WE\|DO CZ s.r.o.** |
| Kód dopravce | **`WEDO`** |
| Webové stránky | [www.wedo.cz ↗️](https://www.wedo.cz) |
| Stav | ✅️ Implementováno | 


## Podporované služby
- ✅️ **Small Colli 24-CZ** (`SmallColli24CZ`)
- ✅️ **Medium Colli 24-CZ** (`MediumColli24CZ`)
- ✅️ **Large Colli 24-CZ** (`LargeColli24CZ`)
- ✅️ **Extra Large Colli 24-CZ** (`ExtraLargeColli24CZ`)
- ✅️ **PUP - Výdejní místo** (`PUP`)
- ✅️ **BOX - CZ** (`BOXCZ`)
- ✅️ **BOX - SK** (`BOXSK`)
- ✅️ **Parcel** (`Parcel`)
- ✅️ **Parcel+** (`ParcelPlus`)
- ✅️ **Large Colli 48-SK** (`LargeColli48SK`)

import CarrierServiceInfo from '@site/docs/carrier/_service-info.md';

<CarrierServiceInfo />


## Aktivace dopravce
Pro aktivaci dopravce WEDO je třeba mít vytvořeny přístupové údaje do API rozhraní WEDO. Tyto údaje je potřeba následně vyplnit v administraci v sekci **Nastavení** -> **Dopravci** -> **WE\|DO CZ s.r.o.**

### Přístupové údaje
Přístupové údaje do API rozhraní Vám sdělí dopravce po uzavření smlouvy s dopravcem. Požádat o přístupové údaje k existující smlouvě s dopravcem můžete na emailu [obchod@wedo.cz](mailto:obchod@wedo.cz).

### Testovací režim
Pokud zadáváte přístupové údaje do testovacího rozhraní dopravce, je potřeba zaškrtnout políčko **Testovací režim API**. V testovacím režimu se použije adresa testovacího API rozhraní na místo produkčního API rozhraní.

### Přihlašovací jméno do API
 Jedná se řetězec např. `"nazevfirmy"`.

### Heslo do API
Vygenerované heslo od dopravce např. `"Nxcb3Jsh72ze"`.

### Kód zákazníka
Kód zákazníka naleznete v administraci WEDO nebo Vám jej WEDO sdělí pro Váš konkrétní účet. Jedná se o hodnotu např. `"C1254"`.

## Kód svozového místa
Kód svozového místa zjistíte v administraci WEDO pro vytvořené svozové místo. Jedná se o hodnotu např. `"S1234"`.

### Kód pro sledování stavů
Uživatelský kód pro sledování stavů zásilek pomocí PULL rozhraní. Bez zadání tohoto kódu nepůjde sledovat změny stavů zásilek. Kód Vám sdělí dopravce přímo pro Váš účet. Jedná se o hodnotu např. `"Zakaznik-AeEDcV12Hcz3"`.


import CarrierDefaultValues from '@site/docs/carrier/_default-values.md';

<CarrierDefaultValues />