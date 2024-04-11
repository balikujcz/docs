---
sidebar_position: 1
---

# Detail objednávky

Na této stránce nalezenete informace o jednotlivých částech přehledu detailu objednávky
a jejich význam. Detail objednávky se skládá z několika hlavních sekcí: Základní 
informace a fakturační adresa, dodací adresa, přehled jednotlivých částí zboží v objednávce. 

## Menu
Toto menu obsahuje na své levé části číslo objednávky. Na pravé straně menu naleznete několik tlačítek.

![Akce se objednávkou](/img/order/detail/actions.png)

- **Zabalit** - slouží k pickingu. Pro více informací o pickingu navštivte [Picking](/docs/documentation/orders/order-picking).
- **Akce**
    - Vytvořit zásilky a štítky - vytvoření zásilky a následný tisk štítku v jednom kroku. Po zvolení této akce se zobrazí nové okno, kde naleznete základní informace o vytvořené zásilce a dále možnosti pro tisk štítků. **[Více o tisknutí štítků zde](/docs/documentation/packages/order-create-printing)**
    - Objednávka v PDF - kliknutím bude stažen PDF soubor obsahující detail objednávky.
    - Pokročilý tisk štítků - tato volba zobrazí nové okno, kde můžete vybrat způsob tisku štítků. **[Více o tisknutí štítků zde](/docs/documentation/packages/package-printing)**
- **Zpět** - Toto tlačítko vás vrátí zpět na seznam objednávek.
- **Uložit změny** - Toto tlačítko slouží k uložení proběhlých změn v objednávce.



## Základní informace
Zde naleznete základní informace o objednávce:
![Informace o objednávce](/img/order/detail/info.png)
- **Datum vytvoření** - datum a čas vytvoření objednávky.
- **Doprava** - zvolený způsob doručení objednávky.
- **Forma úhrady** - způsob úhrady objednávky.
- **Variabilní symbol** - variabilní symbol objednávky.
- **Fakturační a dodací adresa** - obsahuje údaje o fakturační a dodací adrese zákazníka včetně kontaktních údajů.

## Základní nastavení objednávky
![Nastavení objednávky](/img/order/detail/settings.png)
- **Stav objednávky** - zde lze aktualizovat stav objednávky.
- **Forma úhrady** - umožňuje změnit způsob úhrady objednávky.
- **Uhrazeno** - zde lze zadat, zda byla objednávka uhrazena a kdy. 
- **Vyřešeno** - tímto ovládacím prvkem lze označit objednávku jako vyřešenou.
- **Počet balíků** - pole pro nastavení počtu balíků, které budou vytvořeny při automatickém vytvoření zásilky.
- **Celková hmotnost objednávky** - pole pro nastavení celkové hmotnosti objednávky pro automatické vytvoření zásilky.
- **Dopravce** - nastavení dopravce pro vytvoření zásilky.
- **Služba** - volba služby dopravce pro vytvoření zásilky.


## Přehled zboží v objednávce
V přehledu zboží naleznete jednotlivé položky, které spadají pod danou objednávku.
U každé položky naleznete následující informace:
![Detail objednávky](/img/order/detail/order-detail.png)

- **Název produktu** - název produktu, který zákazník objednal.
- **Parametry produktu** - informace o produktu, které zákazník vybral.
- **Množství** - počet kusů objednaného produktu.
- **Jednotková cena** - Cena za jednu položku daného produktu.
- **DPH** - Daň z přidané hodnoty.
- **Cena s / bez DPH** - Celková cena pro daný produkt (součet všech kusů jednoho produktu).
- **Platba** - rozpis plateb v objednávce a celková cena.
- **Doprava** - jméno zvoleného dopravce.

## Poznámky
V této sekci nalezente dvě pole, **Poznámka od zákazníka** a **Interní poznámka**.
**Poznámka od zákazníka** je textové pole, kde zákazník může uvést jakoukoliv poznámku k objednávce. Tuto poznámku zadal zákazník při vytváření objednávky.
**Interní poznámka** je textové pole, kde může administrátor uvést jakoukoliv poznámku k objednávce. Tuto poznámku může administrátor zadat kdykoliv.


## Zásilky
Sekce zásilky slouží k manuálnímu přidání zásilek k objednávce. Zde můžete zadat informace o zásilce, jako dopravce, služba přes kterou chcete posílat a počet balíků.
**Kliknutím** na tlačítko **Přidat zásilku** bude zásilka přidána k objednávce a zobrazí se v seznamu zásilek.
![Detail objednávky](/img/order/detail/packages.png)
