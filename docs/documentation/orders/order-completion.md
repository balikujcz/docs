---
sidebar_position: 1
---

# Kompletace objednávek
Kompletace objednávek nabízí možnost bezchybného vyskladnění objednávek především díky využití čárových kódů. Kompletace je proces, kdy se zboží vybírá z regálů, skenuje se pomocí hardwarové čtečky čárových kódů (není vyžadováno, můžete provádět i pomocí klávesnice + myši) a 
připravuje k expedici.

Kompletace objednávek máme v rámci Balíkuj implementován prostřednictvím sekce **Objednávky** -> **Detail objednávky** -> **Kompletovat**.

## Přehled objednávek pro kompletaci
Ve **výchozím stavu** se zobrazují v sekci **Přehled objednávek** všechny objednávky ve všech stavech. Pomocí filtru nebo klepnutí na **Nekompletované** nahoře ve statistikách lze zobrazit pouze nekompletované objednávky.
<!--
### Nastavení stavů objednávek pro kompletace
Nastavit seznam stavů objednávek si můžete v sekci **Nastavení** -> **Objednávky** -> **Kompletace a balení**. V této sekci nastavení si můžete volbou **Stavy objednávek pro kompletace** vybrat stavy objednávek, které se budou nabízet pro kompletace.


![Stavy objednávek pro kompletace](/img/order/picking/order-picking-status.png)


### Nastavení kompletaceu
V sekci **Nastavení** -> **Objednávky** -> **Kompletace a balení** si můžete nastavit, jak se bude aplikace chovat po dokončení kompletaceu nebo naskenování všech položek.

Můžete zde nastavit výchozí tiskárnu pro tisk štítků a další uživatelské nastavení.

:::tip
Pokud ještě v systému Balíkuj nepoužíváte žádné tiskárny, přidejte si je v sekci **Nastavení** -> **Tiskárny**. Usnadní Vám to mnoho a mnoho práce!
:::

### Další nastavení kompletace
Pro úspěšný kompletace objednávek je potřeba mít nastavenu váhu objednávky, dopravce a službu dopravce. Tyto informace můžete zpětně nastavit v přehledu objednávek na **Objednávky** -> **Přehled objednávek**. Tyto údaje se berou automaticky z příchozích objednávek. Pokud se Vám tyto údaje nepropisují, máte něco špatně nastaveno - kontaktujte nás, pomůžeme Vám.
-->

## Hardware pro kompletaci
Balíkuj podporuje jakoukoliv HW čtečku, která funguje v režimu klávesnice. Čtečku čárových kódů připojíte ke svému počítači například pomocí USB a můžete začít skenovat čárové kódy. Každý naskenovaný čárový kód pomocí čtečky obsahuje na konci klávesu `ENTER`, díky které se čárový kód zpracuje.

## Skenování čárových kódů v přehledu kompletace
Kompletaci objednávek v Balíkuj lze dělat kompletně bez přístupu ke klávesnici a myši. Stačí mít puštěnou čtečku čárových kódů a skenovat čárové kódy objednávek.

Jakmile naskenujete čárový kód (ať již z detailu objednávky v PDF nebo z vlastního čárového kódu), tak se Balíkuj pokusí vyhledat objednávku s daným číslem.
Pokud objednávka existuje (vždy se bere první objednávka), dojde k přepnutí na kompletaci položek objednávky.

## Detail kompletace
Detail kompletace nabízí ucelený přehled nad tím, co je třeba u objednávky vyskladnit. Po kliknutí na tlačítko **Kompletovat** se zobrazí formulář pro kompletaci objednávky. Zde je nutno vyplnit všechny potřebné údaje a kliknout na tlačítko **Kompletovat objednávku**.
Kompletace objednávky je důležitý krok, který byste měli provést před odesláním objednávky zákazníkovi. Zde provedete veškeré kroky, které jsou potřeba k tomu, abyste objednávku mohli odeslat. 
Pomocí tlačítka vpravo nahoře lze **Označit vše jako kompletované**.


:::tip
V detailu kompletace funguje automaticky skenování položek pomocí čárového kódu. Je třeba mít okno aplikace aktivní a naskenovat čárový kód.
:::

### Stavy položek v kompletaci
Položky v kompletaci mohou mít několik stavů:
- **Částečně kompletováno** - položka byla naskenována, ale ne všechny kusy - zobrazuje se oranžově.
- **Kompletováno** - u položky byly naskenovány všechny kusy - zobrazuje se zeleně.
- **Nekompletováno** - položka ještě nebyla naskenována - zobrazuje se šedě.


![Stavy objednávek pro kompletace](/img/order/completion/order-completion-statuses.png)

<!--![Decision tree](/img/order/picking/order-picking-decision-tree.png)-->

### Parametry pro kompletaci
Při kompletaci je nutno mít vyplněny tyto parametry:
- **Dopravce** - zvolený dopravce pro objednávku.
- **Počet položek** - počet balíků, které budou vytvořeny při automatickém vytvoření zásilky.
- **Připojištění** - připojištění zásilky.
- **Nastavení parametrů zásilek** - nastavení parametrů zásilek, jako je hmostnost a velikost, potřebných pro automatické vytvoření zásilky dle typu dopravy

<!--Umožňuje dokončit kompletace objednávky a přepnout objednávku do zvoleného stavu. Současně s tím je možné na zvolené tiskárně rovnou vytisknout štítek pro zásilku. 
Pokud jsou všechny položky kompletovány, stav kompletace u objednávky se nastaví na **Kompletace dokončen**. V opačném případě, kdy jsou vypickovány pouze některé položky, po dokončení bude stav u objednávky nastaven na **Rozpracovaný kompletace**.
-->
### Dokončení kompletace
Rozpracovanou kompletaci objednávky můžete dokončit stisknutím tlačítka **Kompletovat objednávku**.
Pokud jsou všechny položky kompletovány, stav kompletace u objednávky se nastaví na **Kompletováno**. 
Pokud nyní nechcete nebo nelze kompletovat všechny položky, stav kompletace u objednávky se nastaví na **Částečně kompletováno** a ostatní se přesunou do nové samostatné kompletace.

### Zrušení kompletace
Kompletace objednávky můžete zrušit stisknutím tlačítka **Zrušit**.

## Akce s jednotlivými kompletacemi
Objednávka může mít více kompletací. Všechny kompletace objednávky se zobrazují v přehledu kompletací. Lze tak expedovat jen část objednávky a zbytek nechat na později.
U každé kompletace naleznete vpravo nahoře tlačítko pro výběr akce, které můžete provést s jednotlivými kompletacemi. 
![Akce s kompletacemi](/img/order/completion/order-completion-dropdown.png)

Po kliknutí na tlačítko se zobrazí menu s nabízenými akcemi:
- **Kompletovat** - toto tlačítko slouží k otevření kompletace dané části objednávky.
- **Rozdělit** - zde lze položky rozdělit do nové kompletace. Zde zvolíte položky, které budou ponechány ve zvolené kompletaci a ostatní budou přeneseny do nové samostatné kompletace. Po kliknutí na tlačítko **Rozdělit** se nová kompletace uloží a zobrazí se v seznamu kompletací u objednávky.
- **Sloučit** - zde lze sloučit více kompletací do jedné. Zde zvolíte položky, které budou sloučeny s jinou již existující kompletací. Po kliknutí na tlačítko **Sloučit** se kompletace sloučí a zobrazí se v seznamu kompletací u objednávky.
- **Blokovat** - zde lze zablokovat kompletaci z důvodu **skladové nedostupnosti** apod. Po kliknutí na tlačítko **Blokovat** se kompletace zablokuje a důvod blokace se zobrazí v seznamu kompletací u objednávky. Lze také přidat více blokací. 
Tyto blokace je nutno před další kompletací odebrat - do té doby není umožněno kompletaci dokončit. Tyto blokace se také zobrazují v **Historii změn objednávky** ve spodní části objednávky.
- **Označit jako hotovo** - zde lze označit kompletaci jako hotovou. Po kliknutí na toto tlačítko se kompletace označí jako hotová. Takto ale **nebude** automaticky vytvořena zásilka k objednávce.


![Akce s kompletacemi](/img/order/completion/order-completion-block.png)

<!--
## Shrnutí ještě jednou:

1. Mít v ideálním případě HW čtečku čárových kódů, např. Virtuos HW-855A, na které sami testujeme aplikaci
2. Nastavit si stavy objednávek, které chcete zobrazovat v Kompletaceu
3. Nastavit si, jak se bude aplikace chovat po dokončení kompletace nebo naskenování všech položek. Pokud chcete mít automatizovaný Kompletace bez použití klávecnice a myši, je třeba nastavit volbu **Akce po dokončení kompletaceu** na hodnotu **Tisk štítků na tiskárně a přesunutí na seznam objednávek**.-->

