# Vytvoření zásilky
Vytvoření zásilky probíhá pomocí endpointu `/Package/Create`, který vrací ID zásilek, čísla zásilek od dopravce a další informace o zásilce. Tento endpoint je dostupný pro všechny dopravce, které máte aktivované ve svém účtu. 

Vytvoření zásilky probíhá pomocí POST požadavku, který obsahuje JSON objekt s informacemi o zásilce, hlavně `serviceType` - typ zvolené služby dopravce.


## Základní informace o zásilce
Každá zásilka, kterou chcete vytvořit v Balíkuj, **musí obsahovat povinné parametry**.

### Povinné parametry
- `serviceType` - typ služby dopravce, kterou chcete použít pro odeslání zásilky
- `packageNumberCustom` - vlastní označení zásilky
- `price` - hodnota zásilky, vyžaduje většina dopravců, proto povinné

### Nepovinné parametry
- `pieceCount` - počet kusů zásilky, pokud je více než 1. Zásilkovna například podporuje podání pouze 1 kusu zásilky.
- `branchId` - kód výdejního místa v systému daného dopravce - povinné pouze pro služby s doručením na výdejní místo
- `codPrice` - částka dobírky, pokud je služba dobírková
- `codCurrency` - měna dobírky, pokud je služba dobírková
- `vs` - variabilní symbol pro dobírku
- `services` - další služby, které chcete k zásilce přidat. 
- `orderId` - ID objednávky **ze systému Balíkuj**, kterou chcete k zásilce přiřadit. Toto ID se zobrazuje v administraci Balíkuj v sekci Objednávky. **Pozor není ID z Vašeho systému**.

### Adresa příjemce
Každá zásilka musí mít vyplněnou adresu příjemce. Každý dopravce může mít vlastní povinné hodnoty pro jednotlivý typ služeb. Adresu odesílatele je možné zadat pomocí hodnot:

- `recName` - jméno příjemce
- `recCompany` - název firmy příjemce
- `recStreet` - ulice příjemce
- `recCity` - město příjemce
- `recZip` - PSČ příjemce
- `recCountry` - země příjemce, ISO dvoumístný kód země (CZ, SK, ...)
- `recPhone` - telefonní číslo příjemce (formát +420123456789)
- `recEmail` - emailová adresa příjemce

Informace jako telefon a e-mail mohou být u jednotlivých dopravců povinné, proto doporučujeme si ověřit, jaké hodnoty jsou povinné pro jednotlivé dopravce. V případě, že nebudou vyplněny povinné hodnoty, dojde k chybě při vytváření zásilky.

### Adresa odesílatele
Adresa odesílatele, pokud chcete, aby zásilku vyzvedli na jiném než svozovém místě. Pomocí adresy odesílatele můžete dělat u dopravců zpětné zásilky atd.

- `senderName` - jméno odesílatele
- `senderCompany` - název firmy odesílatele
- `senderStreet` - ulice odesílatele
- `senderCity` - město odesílatele
- `senderZip` - PSČ odesílatele
- `senderCountry` - země odesílatele, ISO dvoumístný kód země (CZ, SK, ...)
- `senderPhone` - telefonní číslo odesílatele (formát +420123456789)
- `senderEmail` - emailová adresa odesílatele

### Krycí adresa:
Pokud chcete maskovat odesílatele, můžete zadat krycí adresu. Krycí adresu však nepodporují všichni dopravci. Informace o tom, zda je krycí adresa dostupná lze získat pomocí endpointu `/Carrier/Services`.

- `coverName` - jméno odesílatele
- `coverCompany` - název firmy odesílatele
- `coverStreet` - ulice odesílatele
- `coverCity` - město odesílatele
- `coverZip` - PSČ odesílatele
- `coverCountry` - země odesílatele, ISO dvoumístný kód země (CZ, SK, ...)
- `coverPhone` - telefonní číslo odesílatele (formát +420123456789)
- `coverEmail` - emailová adresa odesílatele


## Ostatní parametry
:::tip
Kompletní seznam parametrů pro jednotlivé dopravce naleznete v dokumentaci https://balikuj.docs.apiary.io/.
:::

## Vytvoření zásilky
Už mě to nebaví, pojďme si vytvořit zásilku. Jasně, máte pravdu, vytvoření zásilky probíhá pomocí endpointu `/{koddopravce}/Create`.

:::tip
Pokud si nevíte rady s parametry, které zadat pro vytvoření zásilky, doporučujeme navštívit naši administraci [`https://app.balikuj.cz`](https://app.balikuj.cz) a vytvořit zásilku pomocí webového rozhraní. Všechny parametry, které zadáte do webového rozhraní, jsou stejné jako pro API. 

Pomocí nástrojů Developer Tools ve Vašem prohlížeči si můžete zobrazit JSON požadavek i odpověď, které se odesílají na API rozhraní. Stačí pak tento kód vykopírovat a použít v API.
:::

V rámci jednoho požadavku můžete vytvořit samozřejmě více zásilek bez nutnosti opakovaného volání endpointu. Stačí do pole s požadavkem dát více objektů zásilek.

```json showLineNumbers
POST https://api.balikuj.cz/api/ppl/Create
[
  {   
    "serviceType": "ParcelCzPrivate",
    "pieceCount": 1,
    "packageNumberCustom": "PKG-ORDER-123456",
    "recCompany": "Fima s.r.o.",
    "recName": "Josef Novák",
    "recStreet": "Ulice 677/150",
    "recCity": "Praha 6",
    "recZip": "160 00",
    "recCountry": "CZ",
    "recPhone": "+420777123456",
    "recEmail": "test@email.cz",
    "price": 1000,
    "cod": false // Je to dobírka?
    // Pokud bude dobírka cod = true, tak hodnota dobírky
    "codPrice": 1000,
  }
]
```


Odpověď:

```json showLineNumbers
{
    "result": [
        {
            "id": 17222,
            "packageNumberCarrier": "40857241530",
            "packageNumberCustom": "PKG-ORDER-123456",
            "pieceIndex": 1,
            "orderId": null,
            "orderNumber": null,
            "labelUrl": "https://api.balikuj.cz/api/pdf/label/q6EAr4x7G8Jmz3N5SaBc29Tg/",
            "trackingUrl": "https://www.ppl.cz/vyhledat-zasilku?shipmentId=40857241530",
            "statusCode": 200,
            "message": "OK",
            "carrierErrors": null
        }
    ],
    "labelsUrl": "https://api.balikuj.cz/api/pdf/label/Pr4m9D2JoTy75WxYc68NtBb3/",
    "labelsHash": "Pr4m9D2JoTy75WxYc68NtBb3",
    "ordersUrl": null,
    "ordersHash": null,
    "packagesCount": 1,
    "batchId": 10489,
    "correlationId": "7e7757b6-732d-42f6-a43e-5c6b199843f9"
}
```

V odpovědi je pole `result`, které obsahuje informace o jednotlivých zásilkách:

- `id` - ID zásilky v systému Balíkuj
- `packageNumberCarrier` - číslo zásilky přidělené dopravcem
- `packageNumberCustom` - vlastní označení zásilky
- `pieceIndex` - pořadí zásilky v rámci více kusů
- `orderId` - ID objednávky v Balíkuj, pokud je přiřazena
- `orderNumber` - číslo objednávky v Balíkuj, pokud je přiřazena
- `labelUrl` - URL adresa pro stažení štítku zásilky
- `trackingUrl` - URL adresa pro sledování zásilky na webu dopravce
- `statusCode` - stavový kód odpovědi. 200 = success 400 = error
- `message` - zpráva o stavu vytvoření zásilky
- `carrierErrors` - chybové hlášení od dopravce, pokud došlo k chybě při vytváření zásilky. Pokud je například špatně adresa/telefon nebo chybějí nějaké informace

Na konci je také vrácen:
- `labelsUrl`, což je URL adresa pro stažení všech štítků najednou. 
- `labelsHash` je hash pro přímý tisk štítků na tiskárnu
- `ordersUrl` je URL adresa pro stažení PDF detailu všech objednávek najednou
- `ordersHash` je hash pro přímý tisk objednávek na tiskárnu
- `packagesCount` je počet zásilek, které byly vytvořeny
- `batchId` je ID dávky, pod kterou byly zásilky vytvořeny. Pomocí dávek můžete sledovat všechny odeslané dávky v Balíkuj a zpětně vyhledat chyby v odeslaných dávkách atd.


## Informace o dávkách
Pokud chcete zpětně zjistit, jaké dávky byly odeslány v Balíkuj (případně s jakými chybami), můžete použít endpoint `/Batch/Find`, který vrací seznam všech dávek, které byly odeslány.
Tento endpoint vrací seznam dávek, které odpovídají zadaným parametrům. Parametry pro vyhledávání dávek jsou volitelné a můžete je kombinovat podle potřeby.

```json showLineNumbers
POST https://api.balikuj.cz/api/Batch/Find
{
  "carrierCodes": null,
  "createdFrom": null,
  "createdTo": null,
  "sortOrder": "desc",
  "archived": null,
  "start": 0,
  "length": 50
}
```

Odpověď:
```json showLineNumbers
{
    "result": {
        "data": [
            {
                "carrierCode": "PPL",
                "ordersCount": 0,
                "packagesCount": 1,
                "errorsCount": 0,
                "labelsHash": "Pr4m9D2JoTy75WxYc68NtBb3",
                "ordersHash": null,
                "labelsUrl": "https://api.balikuj.cz/api/pdf/label/Pr4m9D2JoTy75WxYc68NtBb3/",
                "ordersUrl": null,
                "created": "2025-05-18T13:32:50.134",
                "source": "Api",
                "note": null,
                "isArchived": false,
                "archived": null,
                "orders": null,
                "id": 10489
            }
            ... // zkráceno
        ],
        "total": 77
    },
    "correlationId": "2cdac558-5ffd-4132-b034-9df8cb081495"
}
```

### Detail dávky
Pokud chcete zjistit, jaké zásilky byly odeslány v rámci dávky, můžete použít endpoint `/Batch/{id}`.

```json showLineNumbers
GET https://api.balikuj.cz/api/Batch/10489
```

Odpověď:
```json showLineNumbers
{
    "result": {
        "carrierCode": "PPL",
        "ordersCount": 0,
        "packagesCount": 1,
        "errorsCount": 0,
        "labelsHash": "Pr4m9D2JoTy75WxYc68NtBb3",
        "ordersHash": null,
        "labelsUrl": "https://api.balikuj.cz/api/pdf/label/Pr4m9D2JoTy75WxYc68NtBb3/",
        "ordersUrl": null,
        "created": "2025-05-18T13:32:50.134",
        "source": "Api",
        "note": null,
        "isArchived": false,
        "archived": null,
        "orders": [
            {
                "orderId": 0,
                "id": 17222,
                "carrierCode": "PPL",
                "orderNumber": null,
                "orderDeliveryName": "Roman Rozbroj",
                "orderDeliveryCompany": "",
                "packageNumberCarrier": "40857241539",
                "success": true,
                "message": "OK"
            }
        ],
        "id": 10489
    },
    "correlationId": "25ac1247-fdf2-4ebd-8a54-b55637f4f0de"
}
```


## Tisk štítků přímo na tiskárnu
Balíkuj podporuje přímý tisk štítků na tiskárnu. Více informací získáte na stránce [Nastavení tisku a tiskáren](/docs/documentation/settings/printers/printer-overview).

Požadavek na tisk štítků přímo na tiskárnu vypadá takto:

```json showLineNumbers
POST https://api.balikuj.cz/api/Printer/PrintLabel
{
    "hash":"e9QZt23CoLc56EzWs4f7JRg8", // Hash z odpovědi z předchozího požadavku
    "printerName":"EPSON L4150"
}
```

Odpověď:
```json showLineNumbers
{
    "result": true,
    "correlationId": "5c3d61c9-d753-431e-9bd0-7ad656fdade5"
}
```

Balíkuj se po odeslání takového požadavku spojí s tiskárnou pomocí naší služby **Balíkuj Print Service** a pokusí se vytisknout danou tiskovou úlohy. Pokud se nepodaří spojit s tiskárnou, vrátí chybovou hlášku. Pokud se podaří, vrátí true.
