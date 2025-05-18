# Detail zásilek
Jak již bylo zmíněno, detail zásilky je možné zobrazit zavoláním endpointu `/{koddopravce}/{id}/Detail`. Tento endpoint vrací detailní informace o zásilce. 

Detailní informace se mohou lišit podle dopravce a doplňkových službách, které u zásilky máte přidány.

```json showLineNumbers
GET https://api.balikuj.cz/api/dpd/2915
```

Odpověď:

```json showLineNumbers
{
    "result": [
        {
            "reference": null,
            "reference2": null,
            "weight": 1.0000,
            "note": null,
            "price": 1000.0000,
            "branchId": null,
            "codPrice": null,
            "codCurrency": null,
            "creditCard": true,
            "bankCode": null,
            "bankName": null,
            "bankAccountNumber": null,
            "bankAccountName": null,
            "vs": null,
            "iban": null,
            "swift": null,
            "exchangeOrder": false,
            "smsNotification": false,
            "insurancePrice": null,
            "insuranceCurrency": null,
            "packageNumberCustom": "TESTHOME",
            "packageNumberOrder": 1,
            "authentication": null,
            "authenticationName": null,
            "authenticationId": null,
            "orderId": null,
            "serviceType": "SHOP2HOME",
            "recName": "...",
            "recCompany": null,
            "recStreet": "...",
            "recCity": "...",
            "recZip": "...",
            "recCountry": "CZ",
            "recPhone": "+420777123456",
            "recEmail": "info@balikuj.cz",
            "coverEnabled": false,
            "coverName": null,
            "coverCompany": null,
            "coverStreet": null,
            "coverCity": null,
            "coverZip": null,
            "coverCountry": null,
            "coverPhone": null,
            "coverEmail": null,
            "senderEnabled": false,
            "senderName": null,
            "senderCompany": null,
            "senderStreet": null,
            "senderCity": null,
            "senderZip": null,
            "senderCountry": null,
            "senderPhone": null,
            "senderEmail": null,
            "id": 2915,
            "packageNumberCarrier": "23755010134503",
            "canceled": false,
            "delivered": false,
            "canCancel": false,
            "submittedCarrier": true,
            "printed": true,
            "printable": true,
            "editable": false,
            "trackable": true,
            "inTransit": true,
            "deliveryType": "Home",
            "isReturn": false,
            "readyForPickupDays": null,
            "trackingUrl": "https://www.dpdgroup.com/cz/mydpd/my-parcels/track?parcelNumber=23755010134503",
            "branchName": null,
            "status": {
                "code": "220",
                "name": "Na cestě",
                "category": "TransitOnTheWay"
            }
        }
    ],
    "correlationId": "4ab1f42b-0597-4571-8f10-1491bd4f2021"
}
```