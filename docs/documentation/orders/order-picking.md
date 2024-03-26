---
sidebar_position: 1
---

# Picking objednávek
Picking objednávek nabízí možnost bezchybného vyskladnění objednávek především díky využítí čárových kódů. Picking je proces, kdy se zboží vybírá z regálů, skenuje je se pomocí hardwarové čtečky čárových kódů (není vyžadováno, můžete provádět i pomocí klávesnice + myši) a 
připravuje k expedici.

Picking objednávek máme v rámci Balíkuj implementován prostřednictvím sekce **Objednávky** -> **Picking a balení**.

## Přehled objednávek pro picking
Ve **výchozím stavu** se zobrazují v sekci **Picking a balení** všechny objednávky ve všech stavech. Doporučujeme proto **jako první** nastavit seznam stavů objednávek, které se v pickingu budou zobrazovat.

### Nastavení stavů objednávek pro picking
Nastavit seznam stavů objednávek si můžete v sekci **Nastavení** -> **Objednávky** -> **Picking a balení**. V této sekci nastavení si můžete volbou **Stavy objednávek pro picking** vybrat stavy objednávek, které se budou nabízet pro picking.

![Stavy objednávek pro picking](/img/order/picking/order-picking-status.png)


### Nastavení pickingu
V sekci **Nastavení** -> **Objednávky** -> **Picking a balení** si můžete nastavit, jak se bude aplikace chovat po dokončení pickingu nebo naskenování všech položek.

Můžete zde nastavit výchozí tiskárnu pro tisk štítků a další uživatelské nastavení.

:::tip
Pokud ještě v systému Balíkuj nepoužíváte žádné tiskárny, tak si je přidejte v sekci **Nastavení** -> **Tiskárny**. Usnadní Vám to mnoho a mnoho práce!
:::

### Další nastavení picking
Pro úspešný picking objednávek je potřeba mít nastavenu váhu objednávky, dopravce a službu dopravce. Tyto informace můžete zpětně nastavit v přehledu objednávek na **Objednávky** -> **Přehled objednávek**. Tyto údaje se berou automaticky z příchozích objednávek. Pokud se Vám tyto údaje nepropisují, máte něco špatně nastaveno a kontaktujte nás, pomůžeme Vám.


## Hardware pro picking
Balíkuj podporuje jakoukoliv hw čtečku, která funguje v režimu klávesnice. Čtečku čárových kódů připojíte ke svému počítači například pomocí USB a můžete začít skenovat čárové kódy. Každý naskenovaný čárový kód pomocí čtečky obsahuje na konci klávesu `ENTER`, díky které se čárový kód zpracuje.

## Skenování čárových kódů v přehledu pickingu
Picking objednávek v Balíkuj lze dělat kompletně bez přístupu ke klávesnici a myši. Stačí mít puštěnou čtečku čárových kódu a skenovat čárové kódy objednávek.

Jakmile naskenujete čárový kód (ať již z detailu objednávky v PDF nebo z vlastního čárového kódu), tak se Balíkuj pokusí vyhledat objednávku s daným číslem.
Pokud objednávka existuje (vždy se bere první objednávka), dojde k přepnutí na picking položek objednávky.

## Detail pickingu objednávky
Detail pickingu objednávky nabízí ucelený přehled nad tím, co je třeba u objednávky vyskladnit. 


:::tip
V detailu pickingu funguje automaticky skenování položek pomocí čárového kódu. Je třeba mít okno aplikace aktivní a naskenovat čárový kód.
:::

### Stavy položek v pickingu
Položky v pickingu mohou mít několik stavů:
- **Částečně pickováno** - Položka byla naskenována, ale ne všechny kusy - zobrazuje se oranžově
- **Pickingováno** - Položka byla naskenována všechny kusy - zobrazuje se zeleně
- **Nepickingováno** - Položka ještě nebyla naskenována - zobrazuje se šedě


![Stavy objednávek pro picking](/img/order/picking/order-picking-statuses.png)

### Dokončení pickingu
Umožňuje dokončit picking objednávky a přepnout objednávku do zvoleného stavu. Současně s tím je možné na zvolené tiskárně rovnou vytisknout štítek pro zásilku.

### Uložení pickingu
Rozpracovaný picking objednávky můžete také uložit najetím dropdown u tlačítka **Dokončit objednávku** a vybrat **Uložit picking**. Tím se naskenované množství u jednotlivých položek uloží a příště můžete pokračovat.

### Zrušení pickingu
Picking objednávky můžete zrušit najetím dropdown u tlačítka **Dokončit objednávku** a vybrat **Zrušit picking**. Tím se objednávka vrátí do původního stavu a můžete začít znovu.

![Akce s pickingem](/img/order/picking/order-picking-dropdown.png)


## Shrnutí ještě jednou:

1. Mít v ideálním případě HW čtečku čárových kódů, např. Virtuos HW-855A, na které sami testuje aplikaci
2. Nastavit si stavy objednávek, které chcete zobrazovat v Pickingu
3. Nastavit si, jak se bude aplikace chovat po dokončení picking nebo naskenování všech položek. Pokud chcete mít automatizovaný Picking bez použití klávecnice a myši, je třeba nastavit volbu **Akce po dokončení pickingu** na hodnotu **Tisk štítků na tiskárně a přesunutí na seznam objednávek**.

