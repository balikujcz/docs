---
sidebar_position: 1
---

# Česká pošta, s. p.
V této sekci naleznete informace o dopravci Česká pošta, s. p., který je v současné době podporován v Balíkuj.

import CarrierHelpInfo from '@site/docs/carrier/_help-info.md';

<CarrierHelpInfo />


## Základní informace
| Informace |  |
| ----------- | ----------- |
| Název dopravce | **Česká pošta, s. p.** |
| Kód dopravce | **`CP`** |
| Webové stránky | [www.ceskaposta.cz ↗️](https://www.ceskaposta.cz) |
| Stav | ✅️ Implementováno | 


## Podporované služby
- ✅️ **Balík Do ruky** (`DR`) - [odkaz ↗️](https://www.ceskaposta.cz/sluzby/baliky/cr/balik-do-ruky)
- ✅️ **Balík Na poštu** (`NP`) - [odkaz ↗️](https://www.ceskaposta.cz/sluzby/baliky/cr/balik-na-postu)
- ✅️ **Balík Na Balíkovnu - BOX** (`NB`)  - [odkaz ↗️](https://www.ceskaposta.cz/sluzby/baliky/cr/balikovna-box)
- ✅️ **Balík Na Balíkovnu** (`NB`)  - [odkaz ↗️](https://www.ceskaposta.cz/sluzby/baliky/cr/balikovna-box)
- ✅️ **Cenné psaní** (`VL`)  - [odkaz ↗️](https://www.ceskaposta.cz/sluzby/psani/cr/cenne-psani)
- ✅️ **Doporučený balíček** (`BA`)  - [odkaz ↗️](https://www.ceskaposta.cz/sluzby/baliky/cr/doporuceny-balicek)
- ✅️ **Cenný balík** (`BB`)  - [odkaz ↗️](https://www.ceskaposta.cz/sluzby/baliky/cr/cenny-balik)
- ✅️ **Balík nadrozměr** (`BN`)  - [odkaz ↗️](https://www.ceskaposta.cz/documents/10180/483878/Prod-List_Balik-Nadrozmer.pdf)
- ✅️ **EMS expresní přeprava po ČR** (`EE`)  - [odkaz ↗️](https://www.ceskaposta.cz/sluzby/baliky/cr/ems)

import CarrierServiceInfo from '@site/docs/carrier/_service-info.md';

<CarrierServiceInfo />


## Aktivace dopravce
Pro aktivaci dopravce Česká Pošta je třeba mít vytvořeny přístupové údaje do API rozhraní České Pošty. Tyto údaje je potřeba následně vyplnit v administraci v sekci **Nastavení** -> **Dopravci** -> **Česká pošta, s. p.**

### Přístupové údaje
Přístupové údaje do API rozhraní České Pošty vygenerujete po příhlášení svým jménem a heslem na [Pošta Online ↗️](https://www.postaonline.cz/index). V záložce Služby pro **Firmy -> Správa B2B profilu -> Správa API klíčů zákazníka**.

### Testovací režim
Pokud zadáváte přístupové údaje do testovacího rozhraní dopravce, je potřeba zaškrtnout políčko **Testovací režim API**. V testovacím režimu se použije adresa testovacího API rozhraní na místo produkčního API rozhraní.

### API Token
 Jedná se řetězec např. `"b79b1a32-2f77-450f-9335-218c3c698a82"`.

### Secret key
Jedná se řetězec např. `"hkV0h5YH7f4cTSiwsLK4x9E+sKtlUQ0g3v9Gn78xGFi5wieYyszrVSTAC3gOp+TfOP8zkAH43g"`.

### PSČ podací pošty
Zadejte PSČ pošty, ze které budete zásilky odesílat. Např. `"11000"`.

### Číslo podacího místa
Zadejte číslo místa, ze kterého budete zásilky odesílat. Nové místa je možné přidat v administraci České Pošty. Např. `"1"`.

### ID ČCK složky
Zadejte ID ČCK složky dle smlouvy s dopravcem. Např. `"236212001"`.

import CarrierDefaultValues from '@site/docs/carrier/_default-values.md';

<CarrierDefaultValues />