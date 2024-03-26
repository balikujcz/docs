# Tracking - sledování stavů zásilek

Balíkuj sleduje stav zásilky od prvopočátku až do doručení dle informací od daného dopravce. V pravidlených intervalech nebo pomocí PUSH informací od dopravce se aktualizuje stav zásilek v našem systému.

V trackingu stavů to funguje tak, že máme vlastní základní stavy a stavy od dopravců. Základní stavy jsou obecné stavy, na které se můžete napojit a reagovat tak více univerzálně. Stavy od dopravců jsou stavy, které nám přicházejí od dopravců a my je mapujeme na naše základní stavy.

## Základní stavy

V této tabulce naleznete základní stavy, které jsou v našem systému a které můžete použít pro sledování stavu zásilek.

| Kód stavu | Kategorie stavu | Popis |
| ----------- | ----------- | ----------- |
| 0 | Created | Zásilka vložena do systému |
| 1 | Ordered | Objednáno u dopravce |
| 10 | Cancel | Zásilka zrušena |
| 11 | CancelRecepient | Zásilka zrušena ze strany příjemce |
| 12 | CancelSender | Zásilka zrušena ze strany odesílatele |
| 13 | CancelCarrier | Zásilka zrušena ze strany dopravce |
| 20 | Transit | Zásilka je v přepravě |
| 21 | TransitPickup | Vyzvednuta u odesílatele |
| 22 | TransitReady | Připravena k vyzvednutí |
| 23 | TransitCarrier | Předána koncovému dopravci |
| 30 | DeliveringBack | Doručováno zpět odesílateli |
| 31 | DeliveredBack | Doručeno zpět odesílateli |
| 40 | Error | Chyba |
| 41 | ErrorRecepient | Chyba na straně příjemce |
| 42 | ErrorSender | Chyba na straně odesílatele |
| 43 | ErrorCarrier | Chyba na straně dopravce |
| 100 | Delivered | Doručeno |
| 101 | DeliveredPickup | Doručení zásilky na výdejní místo |
| 102 | DeliveredAddress | Doručeno na adresu |


## Stavy od dopravců
Stavy od dopravců nejsou pevně dané a mohou se lišit dle dopravce. Stavy dopravců mapujeme na základní stavy pro snadnější práci s trackingem zásilek.

Například u České pošty je cca 800 stavů, které mapujeme na naše základní stavy. V trackingu tedy vracíme stav od dopravce a náš základní stav.