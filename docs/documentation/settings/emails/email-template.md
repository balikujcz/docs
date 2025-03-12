---
sidebar_position: 1
---

# Emailové šablony

Na této stránce se dozvíte vše o základní manipulaci a nastavení Vašich emailových šablon. Aplikace **Balíkuj** poskytuje základní správu s emaily, jejich **zasílání** a možnost vytváření **vlastních šablon** v našem novém, propracovaném **UI designeru**. 

## Přehled emailových šablon

K přehledu emailových šablon se dostanete v aplikaci **Balíkuj** pomocí navigace: **Nastavení** -> **Emaily** -> **Emailové šablony**. Následně se zobrazí stránka s přehledem všech emailových šablon k Vašemu účtu.

![Zobrazení adres](/img/settings/email/email-template-overview.png)

:::note
Aby bylo možné využívat emailovou šablonu, ujistěte se, že se zobrazuje v aplikaci jako **aktivní** (viz obrázek).
:::


### Navigace přehledu
- Pomocí tlačítka **Synchronizace** bude přehled šablon aktualizován. 
- Tlačítkem **Přidat emailovou šablonu** Vám bude zobrazena karta pro vytvoření nové šablony.


### Možnosti vytváření šablon

V aplikaci **Balíkuj** aktuálně podporujeme tvorbu následujících typů emailových šablon:

- **HTML kód** - šablona, která je vytvořena pomocí HTML kódu. Tato možnost je ideální v případě, že chcete mít plnou kontrolu nad vzhledem emailu, chcete využít pokročilé stylování nebo k nám migrujete z jiné platformy a nechcete znovu vytvářet nové šablony.
- **UI designer** - náš designer emailů je pokročilé řešení, díky kterému můžete zapomenout na všechny starosti ohledně doposavadních HTML kódů. Vytvoření šablony je jednoduché a intuitivní. 
                    Stačí vybrat jeden z předpřipravených bloků, upravit text a obrázky a šablona je hotová. **UI designer** je ideální pro všechny, kteří chtějí mít krásné a moderní emaily, ale nemají zkušenosti s HTML kódem.

:::tip
Pokud si chcete ulehčit starosti ještě o něco více, máme pro vás v našem designeru **předpřipraveny šablony** pro různé typy emailů. Stačí si vybrat a upravit podle svých potřeb.
:::


## Vytvoření šablony
V přehledu všech emailových šablon klikněte na **Přidat emailovou šablonu**. Bude Vám zobrazen formulář pro vyplnění základních údajů o šabloně a jejím obsahu.

![Zobrazení adres](/img/settings/email/email-template-create.png)

:::tip
Abyste nemuseli testovat funkčnost Vašich emailových šablon v ostrém provozu, je možno využít **testovacího režimu**. Do tohoto pole můžete zadat adresu Vašeho emailu a **ověřit správné doručení**. 
:::

### Výběr šablony

Po vyplnění předešlých údajů je potřeba vybrat **text šablony (typ šablony)**. Můžete si vybrat mezi **HTML kódem** a **UI designerem** jak již bylo zmíněno. 

1. **Editace HTML kódu šablony** - V případě, že jste se rozhodli pro HTML kód, můžeme jej vložit do pole níže na stránce. Šablona je defaultně přepnuta do módu HTML kódu.


![Zobrazení adres](/img/settings/email/email-template-variant.png)


2. **Designer emailů** - Kliknutím na pole Designer emailů bude zobrazeno tlačítko **Editovat**.


![Zobrazení adres](/img/settings/email/email-template-variant2.png)


## UI Designer
Po kliknutí na tlačítko editovat uvnitř bloku **Designer emailů** budete přesměrování na stránku UI designeru dané šablony. 

:::warning
**Balíkuj UI Designer** emailových šablon je plně podporován pouze na zařízeních s **vyšším rozlišení**. Ideálním zařízením může být PC nebo větší tablet.
:::

### Menu a přehled šablon

Na levé straně stránky se nachází menu s výběrem **předpřipravených šablon**, které jsme pro Vás nachystali. 
Tyto šablony není nutnost používat, ačkoliv mohou Vám **usnadnit práci** a **ušetřit mnoho času**. Vedle tohoto menu se nachází výber z ikon, které slouží k přepínání zobrazení.

- **1. Skrytí menu vlevo**
- **2. Upravení šablony** - v tomto režimu můžete upravovat strukturu šablony
- **3. Náhled** - v tomto řežimu **nelze** editovat strukturu šablony, ale zobrazí se zde s příkladem reálných dat, které si můžete navolit v pravém horním menu. Více zde...
- **4. HTML výstup** - v tomto řežimu Vám bude zobrazen komplení **HTML kód** vaší šablony.
- **5. JSON výstup** - v tomto režimu Vám bude zobrazen přenositelný **JSON** napříč naší aplikace. Pokud si budete chtít šablonu uložit a dále pokračovat v experimentech na stejné šabloně, můžete si tento JSON uložit a později načíst.

![UI designer menu](/img/settings/email/ui-designer-leftmenu.png)

### Nástroje a nastavení elementů

Na pravé straně se nachazí druhá část menu, která poskytuje mnoho možností pro šablony a konfigurace daného elementu daného elementu.

- **1. Vrátit poslední změnu** - tlačítko s ikonou šipky zpět slouží k vrácení poslední změny provedené v šabloně.
- **2. Vložit tag** - Kliknutím na toto tlačítko se Vám zobrazí seznam dostupných tagů, které můžete vložit do šablony. Tyto tagy se při finálním generování šalbony najradí reálnými daty. Po kliknutí na tag Vám bude zkopírován do schránky.
- **3. Exportovat šablonu do JSON** - po kliknutí Vám bude automaticky stažen soubor s příponou **.json** obsahující strukturu šablony.
- **4. Importovat šablonu z JSON** - po kliknutí se Vám zobrazí okno pro vložení **JSON kódu**. Po vložení bude načtena struktura šablony.
- **5. Počítač** - tlačítko slouží k přepnutí pohledu na **desktopovou verzi** šablony aneb jak budou emaily vypadat na počítači.
- **6. Mobilní zařízení** - tlačítko slouží k přepnutí pohledu na **mobilní verzi** šablony aneb jak budou emaily vypadat na mobilním zařízení.
- **7. Skrýt menu** - tlačítko slouží k **skrytí** pravého menu.

**Vzhled emailu** - v této části menu můžete upravovat vlastnosti šablony. **Barvy**, **fonty** a mnoho dalších.

**Nastavení** - v této části menu můžete nastavovat a upravovat jednotlivé bloky šablony. Nejprve klikněte na blok (element) v šabloně, který chcete upravit. Následně se Vám zobrazí možnosti pro úpravu daného bloku pod záložkou nastavení.

**Data** - Pomocí tohoto formuláře si můžete do emailu nasimulovat testovací data. Tato testovací data budou následně nahrazeny v emailech reálnými daty. Data vložte ve formátu **JSON**.

![UI designer menu](/img/settings/email/ui-designer-rightmenu.png)


## Detail a editace 
Kliknutím na **kartu** dané šablony v přehledu emailových šablon bude zobrazen její **detail** s možností **editace**.

### HTML

![Zobrazení adres](/img/settings/email/email-template-detail.png)

Do pole **Text šablony** vložte text, jenž bude zaslán při určité události. Obsahem tohoto pole může být obyčejný text nebo stylovaná stránka pomocí HTML. Pomocí tlačítka **Je aktivní** můžete jednoduše **aktivovat/deaktivovat** šablonu.
K odeslanému emailu můžete **přidat vybraný soubor jako přílohu** (max. velikost **2 MB**). Lze přidat pouze u již vytvořené šablony. 
Uložení všech  změn nastane po kliknutí na tlačítko **Uložit změny**.


### UI Designer

Po kliknutí na tlačítko editovat uvnitř bloku **Designer emailů** budete přesměrování na stránku UI designeru dané šablony. V horní části stránky naleznete světlý blok s ikonou znamínka **"+"**

![asd](/img/settings/email/add-block.png)

Po kliknutí na tlačítko **PLUS** vám bude zobrazen následující výběr z elementů. Po kliknutí na určitý typ elementu se v pravém menu v nastavení elementu zobrazí všechny možné vlastnosti, s kterými můžete volně pracovat.

:::note
Vždy se ujistěte, že máte vybrán blok, který chcete upravovat. Jinak se v bočním menu nastavení nezobrazí vlastnosti tohoto elementu.
:::

![asd](/img/settings/email/block-choice.png)

U vybraého bloku se také zobrazí malé vertikální menu, které slouží pro rychlou manipulaci. 

**Šipky** - ikony šipek slouží k vertikálnímu posunování bloků mezi sebou. Můžete tak posunout blok vzhůru nebo dolů.

**Smazat** - ikona koše sloužící k odstranění bloku ze stránky.

**Duplikovat** - ikona dvou listů sloužící k vytvoření kopie bloku. Nová kopie bude přidána pod původní blok.

![asd](/img/settings/email/small-block-menu.png)



## Smazání šablony
Mazání šablon je možné v detailu šablony. K této akci je potřeba kliknout na tlačítko **Smazat**.



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