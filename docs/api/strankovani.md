---
sidebar_position: 1
---

# Stránkování záznamů

API rozhraní stránkuje záznamy u endpointů, které se vrací z databáze a podporují stránkování. Maximální počet záznamů na jednu stránku je 100. 

Požadavek na stránkování může vypadat například takto:
```json showLineNumbers
POST https://api.balikuj.cz/api/Package/Find
{
  "start": 0,
  "length": 50
}
```

Odpovědí bude pole s informacemi o zásilkách:

```json showLineNumbers
{
    "result": {
        "data": [
            {
                "canCancel": true,
                "canceled": false,
                "carrierCode": "PPL",
                "carrierName": "PPL",
                "codCurrency": "CZK",
                "codPrice": 593.0000,
                ... // Zkráceno
                "id": 16954
            },
            ... // Zkráceno
        ],
        "total": 129
    },
    "correlationId": "729e42ae-efe8-4b8b-9594-cf15215816a5"
}
```
V hodnotě `total` je celkový počet záznamů, které odpovídají vašemu dotazu. V tomto případě je to 129 záznamů. V hodnotě `data` je pole s 50 záznamy, které odpovídají vašemu dotazu. V tomto případě je to 50 záznamů.

Další stránku získáte například takto:

```json showLineNumbers
POST https://api.balikuj.cz/api/Package/Find
{
  "start": 50,
  "length": 50
}
```