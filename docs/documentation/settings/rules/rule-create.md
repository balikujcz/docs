---
sidebar_position: 1
---

# Přidání pravidla

Na této stránce naleznete informace o tom, jak **vytvářet pravidla**, **možnosti nastavení**, jaké **akce** a **podmínky** lze vytvářet a další.

## Vytvoření pravidla

Pro vytvoření nového pravidla odkudkoliv z aplikace **Balíkuj.cz** stačí v hlavní navigaci kliknout na **Nastavení** a vybrat **Pravidla**.
V navigaci přehledu pravidel klikněte na tlačítko **Vytvořit pravidlo**. Následně budete přesměrováni do **formuláře** pro vytvoření nového pravidla.

![Přehled podpory](/img/settings/rules/rules-create.png)

### Nastavení pravidla

Mezi základní nastavení pravidla patří: 

- **Název pravidla** - tento název bude zobrazen v seznamu pravidel.
- **Typ pravidla** - určuje, zda se jedná o pravidlo pro **zásilku** nebo **objednávku**.
- **Popis pravidla** - Váš vlastní popis k pravidlu, například k čemu je určeno a jaké má funkce.
- **Je aktivní** - určuje, zda bude pravidlo od vytvoření ihned aktivní.
- **Datum platnosti od / do** - určuje, v jakém časovém období bude pravidlo spuštěno.
- **Jednorázové spuštění pravidla** - vyberte, pokud chcete spustit pravidlo pouze jednou.
- **Odeslat systémový email na eshopu** - odešle emaily při změně stavu objednávky pro zvolenou eshopovou platformu.
- **Spouštět pouze ve dny** - pravidlo bude spouštěno pouze ve vybrané dny (**Pondělí - Neděle**).
- **Spouštět pouze v čas** - na výběr jsou čtyři šestihodinové časové intervaly, ve kterých chcete pravidlo spustit. 

### Podmínky
Princip pravidel stojí na **podmínkách** a **akcích**. Podmínky určují, **kdy** se má pravidlo spustit a akce **co** se má stát.
V sekci **Podmínky** klikněte na zelené tlačítko **Přidat podmínku** a vyberte z nabídky podmínek, které chcete nastavit.

***Nastavení podmínek za kterých bude pravidlo spuštěno:***

	**1.** Vyberte **vlastnost** k porovnávání, například **Číslo objednávky**.

	**2.** V poli **Operátor** vyberte jakým způsobem se má porovnávat. Například vlastnost bude nastavena na **Číslo objednávky**,
	operátor bude nastaven na **Rovná se**. 

	**3.** V poli **Hodnota** zadejte hodnotu, kterou chcete porovnávat.

	Tímto způsobem se pravidlo spustí, **pouze pokud číslo objednávky bude rovno zadané hodnotě**.

### Akce
Akce určuje, **co** se má stát při spuštění pravidla. V sekci **Akce** klikněte na zelené tlačítko **Přidat akci** a vyberte z nabídky akcí, které chcete nastavit.

**Typy akcí:**

- **Změnit stav objednávky** - změní stav objednávky na zvolený stav.
        - automaticky bude zobrazeno pole pro zadání nového stavu objednávky.

:::tip   
V poli **Nový stav objednávky** uvidíte všechny své vytvořené nakonfigurované stavy objednávek, jenž jste vytvořili.
Jak vytvořit nový stav se dozvíte v [dokumentaci](/docs/documentation/settings/orders/order-states).
:::	

- **Odeslat email** - odešle email na zvolenou adresu.
        - automaticky bude zobrazeno pole pro zadání emailové adresy, předmětu a obsahu emailu.

- **Odeslat emailovou šablonu** - odešle vytvořenou emailovou šablonu ze systému na zvolenou adresu.
        - automaticky bude zobrazeno pole pro výběr emailové šablony a příjemce.

- **Vytisknout** - vytiskne zvolený výstup na vybrané tiskárně.
        - automaticky bude zobrazeno pole pro typ dokumentu k vytisknutí a výběr tiskárny.

- **HTTP Post** - odešle HTTP POST request na zvolenou adresu.
        - automaticky bude zobrazeno pole pro zadání URL adresy.



:::tip
Nezapomeňte, že můžete přidávat **více podmínek a akcí** do jednoho pravidla! :grinning:
:::