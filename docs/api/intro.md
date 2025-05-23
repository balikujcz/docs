﻿---
sidebar_position: 1
---

# API rozhraní

API rozhraní je k dispozici pro všechny zákazníky Balíkuj zcela zdarma. Pomocí API rozhraní můžete automatizovat všechny úkony, které vidíte v našem administračním rozhraní [`https://app.balikuj.cz`](https://app.balikuj.cz) a nejen to. Díky API rozhraní můžete vytvářet zásilky, tisknout štítky, sledovat zásilky, importovat a exportovat zásilky, vytvářet dávky pro dopravce a mnoho dalšího.

Pomocí API rozhraní můžete také spravovat své objednávky, vytvářet pravidla s objednávkami nebo vyřizovat objednávky z různých e-shopů na jednom místě.


## Balíkuj API dokumentace

:::tip
Kompletní specifikaci API rozhraní naleznete na adrese **[https://balikuj.docs.apiary.io/](https://balikuj.docs.apiary.io/)**.
:::

## Základní informace
API rozhraní je dostupné na adrese [`https://api.balikuj.cz`](https://api.balikuj.cz) a je založeno na REST architektuře. Všechny požadavky na API rozhraní musí být zabezpečeny pomocí [autentizace](/docs/api/pripojeni-do-api) a jsou přístupné pouze přes šifrované HTTPS spojení. Veškerá komunikace s API rozhraním probíhá pomocí formátu dat v JSON - `Content-Type: application/json` (požadavky i odpovědi).


## Limity API rozhraní
Pro ochranu před nadbytečným zatěžováním API rozhraní jsou nastaveny limity pro počet požadavků na API rozhraní. Pokud je překročen některý z limitů, API rozhraní vrátí chybovou odpověď s HTTP stavovým kódem 429. V takovém případě je třeba počkat až do dalšího časového intervalu, kdy budou limity resetovány.


## Formát dat
Jak již bylo několikrát zmíněno, veškerá komunikace probíhá ve formátu JSON. Názvy hodnot jsou v tzv. **camelCase** formátu. Vlastnosti v JSON jsou case-insensitive, ale doporučujeme dodržovat formát z dokumentace.

## API klienti
Pro snadnější práci s API rozhraním jsou k dispozici API klienti pro několik programovacích jazyků. API klienti jsou k dispozici pro následující programovací jazyky:
<!-- - [PHP](/docs/api/clients/php) -->
- [C# .NET](/docs/api/clients/dotnet)

## Stavové kódy
V případě, že dojde k chybě při zpracování požadavku na API rozhraní, je vrácena odpověď s HTTP stavovým kódem 4xx nebo 5xx. V těchto případech je v odpovědi obsažen JSON objekt s chybovým kódem a popisem chyby. V případě, že je chyba způsobena chybným požadavkem, je v odpovědi obsažen i seznam chybných parametrů.

### Kód 200 - OK
Pokud je požadavek zpracován úspěšně, je vrácena odpověď s HTTP stavovým kódem 200 a v těle odpovědi je obsažen JSON objekt s požadovanými daty.

### Kód 400 - Bad Request
Požadaven nebyl zpracovaná, jelikož došlo k chybě. Chyba může být například při validaci vstupních údajů (nezadány povinné údaje) nebo například duplicitní ID objednávky apod.

Všechny požadavky jejichž `StatusCode není Success` logujeme interně a ihned řešíme na pozadí.

### Kód 500 - Internal Server Error
Tento stavový kód je vrácen, pokud nastane chyba na straně serveru. Všechny chyby na straně serveru jsou automaticky zaznamenány a odeslány našemu vývojářskému týmu, který se pokusí chybu co nejdříve odstranit. Pokud by problém přetrvával, neváhejte nás kontaktovat na emailu [`info@balikuj.cz`](mailto:info@balikuj.cz), odstraníme jej co nejdříve.
