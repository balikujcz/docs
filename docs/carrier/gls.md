---
sidebar_position: 1
---

# GLS Czech Republic s.r.o.
V této sekci nalenezte informace o dopravci General Logistics Systems Czech Republic s.r.o. (GLS), který je v současné době podporován v balíkuj.cz.

import CarrierHelpInfo from '@site/docs/carrier/_help-info.md';

<CarrierHelpInfo />


## Základní informace
| Informace |  |
| ----------- | ----------- |
| Název dopravce | **General Logistics Systems Czech Republic s.r.o.** |
| Kód dopravce | **`GLS`** |
| Webové stránky | [gls-group.com/CZ/cs/ ↗️](https://gls-group.com/CZ/cs/home/) |
| Stav | ✅️ Implementováno | 


## Podporované služby
- ✅️ **BusinessParcel** (`BusinessParcel`) - [odkaz ↗️](https://gls-group.com/CZ/cs/prepravni-reseni/domaci-preprava/)
- ✅️ **ShopDeliveryService** (`ShopDeliveryService`) - [odkaz ↗️](https://gls-group.com/CZ/cs/prepravni-reseni/)
- ✅️ **ExpressParcel** (`ExpressParcel`) - [odkaz ↗️](https://gls-group.com/CZ/cs/prepravni-reseni/domaci-preprava/)
- ✅️ **Pick&ReturnService** (`PickAndReturnService`) - [odkaz ↗️](https://gls-group.com/CZ/cs/prepravni-reseni/domaci-preprava/)
- ✅️ **Pick&ShipService** (`PickAndShipService`) - [odkaz ↗️](https://gls-group.com/CZ/cs/prepravni-reseni/domaci-preprava/)


import CarrierServiceInfo from '@site/docs/carrier/_service-info.md';

<CarrierServiceInfo />


## Aktivace dopravce
Pro aktivaci dopravce GLS je třeba mít vytvořeny přístupové údaje do API rozhraní GLS. Tyto údaje je potřeba následně vyplnit v administraci v sekci **Nastavení** -> **Dopravci** -> **GLS**

### Přístupové údaje
Přístupové údaje do API rozhraní GLS Vám vygeneruje obchodní zástupce GLS na vyžádání.

### Testovací režim
Pokud zadáváte přístupové údaje do testovacího rozhraní dopravce, je potřeba zaškrtnout políčko **Testovací režim API**. V testovacím režimu se použije adresa testovacího API rozhraní na místo produkčního API rozhraní.

### Přihlašovací jméno do API 
 Jedná se textovou hodnotu např. `"vas@email.cz"`.

### Heslo do API
Jedná se řetězec např. `"hkV0hAH43g"`.

### Číslo klienta
Zadejte číslo klienta. Např. `"50009994"`.

import CarrierDefaultValues from '@site/docs/carrier/_default-values.md';

<CarrierDefaultValues />

## Ukázkové API requesty

### BusinessParcel - Základ
```json
[{
	"serviceType":"BusinessParcel",
	"packageNumberCustom":"GLSBUSINESSPARCEL01",
	"packageNumberOrder":1,
	"piecesCount":1,
	"weight":5,	
	"price":1000
	"recCompany":"Firma s.r.o.",
	"recName":"Jméno Příjemce",
	"recStreet":"Ulice příjemce 12",
	"recCity":"Praha 1",
	"recZip":"11000",
	"recEmail":"email@prijemce.cz"
	"recCountry":"CZ",
	"recPhone":"+420777123456",
	"reference":"Reference",
	"note":"Poznámka"
}]
```


### BusinessParcel - Základ + Dobírka
```json
[{
	"serviceType":"BusinessParcel",
	"packageNumberCustom":"GLSBUSINESSPARCEL02",
	"packageNumberOrder":1,
	"piecesCount":1,
	"weight":5,	
	"price":1000
	"recCompany":"Firma s.r.o.",
	"recName":"Jméno Příjemce",
	"recStreet":"Ulice příjemce 12",
	"recCity":"Praha 1",
	"recZip":"11000",
	"recEmail":"email@prijemce.cz"
	"recCountry":"CZ",
	"recPhone":"+420777123456",
	"reference":"Reference",
	"note":"Poznámka",

	"codPrice":1234,
	"vs":"VS02"
}]
```


### BusinessParcel - Vícekusová + Dobírka + doplňkové služby
```json
[{
	"serviceType":"BusinessParcel",
	"packageNumberCustom":"GLSBUSINESSPARCEL03",
	"packageNumberOrder":1,
	"piecesCount":2,
	"weight":5,	
	"price":1000
	"recCompany":"Firma s.r.o.",
	"recName":"Jméno Příjemce",
	"recStreet":"Ulice příjemce 12",
	"recCity":"Praha 1",
	"recZip":"11000",
	"recEmail":"email@prijemce.cz"
	"recCountry":"CZ",
	"recPhone":"+420777123456",
	"reference":"Reference",
	"note":"Poznámka",

	"codPrice":1234,
	"vs":"VS03"
	
	"exchangeOrder":true, // Výměnná zásilka
	"smsNotification":true, // SMS notifikace
	"emailNotification":true, // emailová notifikace

	"services":["ThinkGreenService"], // Doplňková služba
}]
```


### ShopDeliveryService - Výdejní místo + dobírka
```json
[{
	"serviceType":"ShopDeliveryService",
	"packageNumberCustom":"GLSSHOP01",
	"branchId":"58901-RICHTEROVA",
	"packageNumberOrder":1,
	"piecesCount":1,
	"weight":5,	
	"price":1000
	"recCompany":"Firma s.r.o.",
	"recName":"Jméno Příjemce",
	"recStreet":"Ulice příjemce 12",
	"recCity":"Praha 1",
	"recZip":"11000",
	"recEmail":"email@prijemce.cz"
	"recCountry":"CZ",
	"recPhone":"+420777123456",
	"reference":"Reference",
	"note":"Poznámka",

	"codPrice":1234,
	"vs":"VS01"
}]
```