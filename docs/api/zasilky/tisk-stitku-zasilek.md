# Tisk štítků
Tisk štítků je velmi důležitou funkcí, která vám umožňuje vytisknout štítky pro vaše zásilky. Tento proces je velmi jednoduchý a rychlý. Stačí zavolat endpoint `Label/Print`, který vrátí odkazy na PDF soubory se štítky pro ID zásilek, které zvolíte.

Endpoint můžete zavolat i pro zásilky různých dopravců. Systém rozdělí zásilky podle dopravce a vrátí odkazy na PDF soubory se štítky pro jednotlivé dopravce.

```json showLineNumbers
POST https://api.balikuj.cz/api/Label/Print/?type=pdf
{
    "packages":[17016, 16948],

    // Nepovinný parametr, který umožňuje tisknout 4x štítek na A4
    // Pokud není udáno, bere se výchozí nastavení u dopravce
    // true = tiskne 1x štítek na A6
    "onePerPage": false
}
```

Někteří dopravci podporují také tisk štítků v ZPL, to je možné zadáním query parametru `?type=zpl`.

Odpověď:

```json showLineNumbers
{
    "result": [
        {
            "carrierCode": "CP",
            "carrierName": "Česká pošta",
            "labelsUrl": "https://api.balikuj.cz/api/pdf/label/w2GJ952Nyp4XBx67Sqi5W3aa/",
            "labelsCount": 1,
            "hash": "w2GJ952Nyp4XBx67Sqi5W3aa"
        },
        {
            "carrierCode": "GLS",
            "carrierName": "GLS CZ",
            "labelsUrl": "https://api.balikuj.cz/api/pdf/label/e8G7MFaskj9Qmd5FEb3s4XLcd/",
            "labelsCount": 1,
            "hash": "e8G7MFaskj9Qmd5FEb3s4XLcd"
        }
    ],
    "correlationId": "5c3d61c9-d753-431e-9bd0-7ad656fdade5"
}

```

V odpovědi je pole `result`, které obsahuje informace o jednotlivých štítkách pro každé dopravce:

- `carrierCode` - kód dopravce
- `carrierName` - název dopravce
- `labelsUrl` - odkaz na PDF soubor se štítky
- `labelsCount` - počet štítků
- `hash` - unikátní kód tiskové úlohy, díky které můžete tisknout štítky rovnou na tiskárně. Tento kód je dostupný po dobu 14 dnů.


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