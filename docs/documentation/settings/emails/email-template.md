---
sidebar_position: 1
---

# Emailové šablony

Na této stránce se dozvíte vše o základní manipulaci a nastavení Vašich emailových šablon. Aplikace **Balíkuj** poskytuje základní správu s emaily, jejich **zasílání** a možnost vytváření **vlastních šablon**. 

## Přehled emailových šablon

K přehledu emailových šablon se dostanete v aplikaci **Balíkuj** pomocí navigace: **Nastavení** -> **Emaily** -> **Emailové šablony**. Následně se zobrazí stránka s přehledem všech emailových šablon k Vašemu účtu.

![Zobrazení adres](/img/settings/email/email-template-overview.png)

:::note
Aby bylo možné využívat emailovou šablonu, ujistěte se, že se zobrazuje v aplikaci jako **aktivní** (viz obrázek).
:::


### Navigace přehledu
- Pomocí tlačítka **Synchronizace** bude přehled šablon aktualizován. 
- Tlačítkem **Přidat emailovou šablonu** Vám bude zobrazena karta pro vytvoření nové šablony.


## Detail a editace 
Kliknutím na **kartu** dané šablony v přehledu emailových šablon bude zobrazen její **detail** s možností **editace**.

![Zobrazení adres](/img/settings/email/email-template-detail.png)

Do pole **Text šablony** vložte text, jenž bude zaslán při určité události. Obsahem tohoto pole může být obyčejný text nebo stylovaná stránka pomocí HTML. Pomocí tlačítka **Je aktivní** můžete jednoduše **aktivovat/deaktivovat** šablonu.
K odeslanému emailu můžete **přidat vybraný soubor jako přílohu** (max. velikost **2 MB**). Lze přidat pouze u již vytvořené šablony. 
Uložení všech  změn nastane po kliknutí na tlačítko **Uložit změny**.

## Smazání šablony
Mazání šablon je možné v detailu šablony. K této akci je potřeba kliknout na tlačítko **Smazat**.

## Vytvoření šablony
V přehledu všech emailových šablon klikněte na **Přidat emailovou šablonu**. Bude Vám zobrazen formulář pro vyplnění základních údajů o šabloně a jejím obsahu.

![Zobrazení adres](/img/settings/email/email-template-create.png)

:::tip
Abyste nemuseli testovat funkčnost Vašich emailových šablon v ostrém provozu, je možno využít **testovacího režimu**. Do tohoto pole můžete zadat adresu Vašeho emailu a **ověřit správné doručení**. 
:::

## Tagy pro vložení reálných hodnot

Do emailové šablony můžete vkládat také specializované tagy, které se při odeslání emailu nahradí reálnými hodnotami. Tyto tagy jsou ve tvaru **`%Package.PackageNumberCustom%`**.

Pokud se rozhodnete tagy využívat, můžete tak personalizovat emaily uživatelům se stavem objednávky nebo například s odkazem na sledování zásilky.

### Seznam dostupných tagů

Podporované tagy rozšiřujeme na vyžádání a pokud Vám nějaký chybí, stačí napsat a my jej doplníme.

| Tag | Popis |
| ----------- | ----------- |
| **`%Package.Id%`** | ID zásilky v Balíkuj |
| **`%Package.PackageNumberCustom%`** | Vaše označení nebo číslo zásilky |
| **`%Package.PackageNumberCarrier%`** | Číslo zásilky dopravce |
| **`%Package.TrackingUrl%`** | Odkaz na sledování stavu zásilky |
| **`%Package.CarrierCode%`** | Kód dopravce |
| **`%Package.CarrierName%`** | Název dopravce |
| **`%Package.ServiceCode%`** | Kód služby |
| **`%Package.ServiceName%`** | Název služby |
| **`%Order.Id%`** | ID objednávky v Balíkuj |
| **`%Order.OrderNumber%`** | Číslo objednávky |
| **`%Order.TotalToPay%`** | Celková cena |