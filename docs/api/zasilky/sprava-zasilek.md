---
sidebar_position: 1
---

# Správa zásilek
Zásilky můžete spravovat pomocí endpointu `/Package`, kde můžete kompletně spravovat vytvořené zásilky, vytvářet nové zásilky, tisknout štítky a sledovat stav zásilek.

## Přehled zásilek
Přehled vytvořených zásilek získáte zasláním POST požadavku na endpoint `/Package/Find`. Tento endpoint vrací seznam zásilek, které odpovídají zadaným parametrům. Parametry pro vyhledávání zásilek jsou volitelné a můžete je kombinovat podle potřeby.

```json showLineNumbers
POST https://api.balikuj.cz/api/Package/Find
{
  "start": 0,
  "length": 50,

  // Doplňkové parametry
  "search": "zakaznik", // hledaný text
  "carrierCodes": ["PPL", "DPD"], // filtrování zásilek podle dopravce
  "cod": true, // zobrazit pouze zásilky s dobírkou
  "onlyMaster": false, // zobrazí pouze hlavní zásilky
  "orderId": 111, // hledání zásilek podle objednávky
  "createdFrom": "2025-01-01", // datum vytvoření zásilky
  "createdTo": "2025-01-31",
  "status": "NotPicked", // stav zásilky, například Nevyzvednuto
}
```

Kompletní seznam parametrů pro jednotlivé endpointy naleznete v dokumentaci [https://balikuj.docs.apiary.io/](https://balikuj.docs.apiary.io/).

## Detail zásilky
Detail zásilky získáte zasláním GET požadavku na endpoint `/{koddopravce}/{id}/Detail`. `{koddopravce}` je kód dopravce a `{id}` je ID hlavní zásilky. Tento endpoint vrací detailní informace o zásilce včetně odkazu pro sledování na webu dopravce a další informace.

## Získání kódu dopravce

```json showLineNumbers
POST https://api.balikuj.cz/api/Carrier/Find
{
}
```

Odpověď:

```json showLineNumbers
{
    "result": [
        {
            "name": "Česká pošta",
            "code": "CP", // Kód dopravce, který použijete
            "description": "Balíková přeprava Česká pošta, s. p.",
            "activated": null,
            "status": "Inactive",
            "id": 4
        },
        {
            "name": "DPD CZ",
            "code": "DPD",
            "description": "Balíková přeprava DPD CZ s.r.o.",
            "activated": "2025-01-15T10:58:01.065",
            "status": "Active",
            "id": 5
        },
        ... // Zkráceno
        {
            "name": "Zásilkovna",
            "code": "PACKETA",
            "description": "Balíková přeprava Zásilkovna s.r.o.",
            "activated": null,
            "status": "Inactive",
            "id": 7
        }
    ],
    "correlationId": "6d634e5d-a0d7-44d2-84c1-53fde8f44f6d"
}
```

## Získání služeb dopravce
Pro vytvoření zásilek budete potřebovat nejen kód dopravce, ale také kód služby, kterou chcete použít. Tento kód získáte zasláním POST požadavku na endpoint `/Carrier/Services`. Tento endpoint vrací seznam dostupných služeb pro daného dopravce.

```json showLineNumbers
POST https://api.balikuj.cz/api/Carrier/Services
{
    "carrierCode": "PPL" // Kód dopravce, pro kterého chcete získat služby
}
```

Odpověď:

```json showLineNumbers
{
    "result": [
        {
            "code": "ParcelCzBusiness", // Kód služby, který použijete pro vytvoření zásilky
            "name": "PPL Parcel CZ Business",
            "coverAddressEnabled": true,
            "senderAddressEnabled": true
        },
        {
            "code": "ParcelCzPrivate",
            "name": "PPL Parcel CZ Private",
            "coverAddressEnabled": true,
            "senderAddressEnabled": false
        },
        {
            "code": "ParcelConnect",
            "name": "PPL Parcel Connect",
            "coverAddressEnabled": true,
            "senderAddressEnabled": false
        },
        {
            "code": "ParcelConnectPlus",
            "name": "PPL Parcel Connect Plus",
            "coverAddressEnabled": true,
            "senderAddressEnabled": false
        },
        {
            "code": "ParcelCzDopoledni",
            "name": "PPL Parcel CZ Dopolední balík",
            "coverAddressEnabled": true,
            "senderAddressEnabled": false
        },
        {
            "code": "ParcelCzSmart",
            "name": "PPL Parcel CZ Smart",
            "coverAddressEnabled": true,
            "senderAddressEnabled": false
        },
        {
            "code": "ParcelSmartEurope",
            "name": "PPL Parcel Smart Europe",
            "coverAddressEnabled": true,
            "senderAddressEnabled": false
        },
        {
            "code": "ParcelSkImport",
            "name": "PPL Parcel Import SK",
            "coverAddressEnabled": false,
            "senderAddressEnabled": true
        },
        {
            "code": "ParcelReturnConnect",
            "name": "PPL Parcel Return Connect",
            "coverAddressEnabled": false,
            "senderAddressEnabled": true
        },
        {
            "code": "ParcelCzReturn",
            "name": "PPL Parcel CZ Return",
            "coverAddressEnabled": false,
            "senderAddressEnabled": true
        }
    ],
    "correlationId": "1a847072-f839-4be1-aa74-958ff9431fae"
}
```

V odpovědi naleznete také informace, zda služba podporuje možnost zadání adresy odesílatele (`senderAddressEnabled`) a zda je možné zadat krycí adresu ( `coverAddressEnabled`).