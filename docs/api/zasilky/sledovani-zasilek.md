# Sledování zásilek
Balíkuj sleduje všechny pohyby zásilek ze systému dopravce a ukládá je do databáze. Historii zásilky můžete získat pomocí endpointu `/{koddopravce}/Tracking`, kde `{koddopravce}` je kód dopravce. Tento endpoint vrací detailní informace o zásilce.


```json showLineNumbers
POST https://api.balikuj.cz/api/PPL/Tracking
{
    "packages":["80892107368"] // Čísla zásilek dle jednotlivého dopravce
}
```

Odpověď:

```json showLineNumbers
{
    "result": [
        {
            "packageNumberCarrier": "80892107368",
            "statusCode": 200,
            "message": "OK",
            "events": [
                {
                    "date": "2025-05-16T08:44:47.511",
                    "category": "Created",
                    "code": "0",
                    "name": "Zásilka vložena do systému",
                    "nameSystem": "Zásilka vložena do systému",
                    "type": "Event",
                    "item": null,
                    "delivered": false,
                    "canceled": false,
                    "carrierCode": null
                },
                {
                    "date": "2025-05-16T08:44:46",
                    "category": "Ordered",
                    "code": "1",
                    "name": "Zásilku jsme převzali do přepravy.",
                    "nameSystem": "Objednáno u dopravce",
                    "type": "Event",
                    "item": "80892107368",
                    "delivered": false,
                    "canceled": false,
                    "carrierCode": "900"
                },
                {
                    "date": "2025-05-16T11:52:30",
                    "category": "TransitCarrier",
                    "code": "210",
                    "name": "Zásilku jsme převzali od odesílatele.",
                    "nameSystem": "Předána koncovému dopravci",
                    "type": "Event",
                    "item": "80892107368",
                    "delivered": false,
                    "canceled": false,
                    "carrierCode": "150"
                },
                {
                    "date": "2025-05-16T17:00:16",
                    "category": "TransitOnTheWay",
                    "code": "220",
                    "name": "Zásilka je v přepravě.",
                    "nameSystem": "Na cestě",
                    "type": "Event",
                    "item": "80892107368",
                    "delivered": false,
                    "canceled": false,
                    "carrierCode": "710"
                }
            ]
        }
    ],
    "correlationId": "2e4635d6-a67b-4816-8115-6da3c1580112"
}
```

V odpovědi naleznete informace o zásilce, jako je datum události, kód události, název události a další informace. Všechny události jsou seřazeny podle data a času. 

:::info
Zobrazené informace o sledování zásilek zobrazují informace, které vždy získáme od daného dopravce. Může zde vzniknout rozdíl oproti informacím, které vidíte v Trackingu zásilek na webu dopravce.

Někteří dopravci vracejí do komunikačního rozhraní, pomocí kterého sledujeme zásilky pouze omezené informace, případně informace se zpožděním nebo neúplné informace.
:::