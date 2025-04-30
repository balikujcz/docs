---
sidebar_position: 1
---

# Přehled objednávek
Zde najdete rozhraní pro správu veškerých objednávek ze všech Vašich e-shopů, které jste do aplikace Balíkuj importovali z e-shopových platforem jako například Upgates, Shoptet apod. 
Tato sekce Vám umožňuje sledovat stav jednotlivých objednávek a
poskytnout Vám úplný přehled o jejich stavu.
S Balíkuj můžete snadno spravovat všechny Vaše objednávky na jednom místě s cílem zefektivnit a zrychlit celý proces expedice zboží.
:::warning
Pozor, zobrazují se pouze aplikace, které máte nastavené ve Vaší aplikaci jako aktivní. Aktivovat novou aplikaci můžete v sekci **Nastavení** -> **Aplikace**.
:::

## Nastavení zobrazení
Symbol ozubeného kolečka v pravém horním rohu slouží k nastavení zobrazení přehledu objednávek. Po kliknutí na něj se zobrazí menu, ve kterém si můžete vybrat, zda chcete mít zobrazen **obecný přehled objednávek** a **položky jednotlivých objednávek**.

## Obecný přehled objednávek

V sekci přehledu objednávek se v hlavičce stránky nad filtrovacím rozhraním zobrazí obecný přehled objednávek. Tento přehled slouží k velmi rychlému posouzení stavu všech objednávek. Obsahuje informace: 

![Rychlý přehled objednávek](/img/order/overview/overview.png)

	- **Dnešní objednávky** - počet dnešních objednávek v systému.
	- **Celkem objednávek** - celkový počet Vašich objednávek v systému.
	- **Nekompletované** - počet objednávek evidovaných jako nekompletované.
	- **Nezaplacené** - počet objednávek, k nimž nebyla evidována platba.


### Filtrování objednávek
V horní části rozhraní se nachází tlačítko, která slouží k filtrování přehledu Vašich objednávek. Toto rozhraní umožňuje filtrovat podle řady kritérií:

![Možnosti filtrování objednávek](/img/order/overview/filters.png)
	- **Hledaný text** - pole pro zadání textu, který se může nacházet v údajích o příjemci objednávky, čísle objednávky či jiných údajích.
	- **Stav objednávky** - po rozkliknutí se zobrazí dropdown menu, kde lze vybrat jeden z mnoha filtrů podle stavu objednávky. Mezi nejpoužívanější patří např. **přijatá**, **storno**, **odesláno (na cestě)**.
	- **Stav kompletace** - zde lze vybrat jeden nebo více stavů kompletace objednávky. Mezi nejpoužívanější patří např. **kompletováno**, **nekompletováno**.
	
	- **Vytvořeno od / do** - možnost výběru intervalu, ve kterém chcete zobrazit hledané objednávky. Pro usnadnění slouží náš rychlý filtr pro automatické vyplnění rozmezí např. pro **tento měsíc** apod.

:::tip
	Pokud vyberete pouze **datum od**, zobrazí se všechny objednávky od daného data až k aktuálnímu dni.
:::
	 
<!-- - **Seřadit podle** - možnost výběru, zda chcete řadit od **nejnovějších** či **nejstarších** objednávek. Dále lze řadit podle **čísla objednávky** a **doby poslední změny**.
	 - **Filtrování podle stavu** - zde je možné filtrovat objednávky podle základních stavů, např. **Nevyřízená**, **Vyřizuje se**, **Stornována**.-->
	- **Dopravce** - po rozkliknutí se zobrazí dropdown menu, ve kterém můžete vybrat jednoho, více a nebo všechny dopravce, podle kterých chcete filtrovat.

:::warning
	Pozor, zobrazují se pouze dopravci, které máte nastavené ve Vaší aplikaci jako aktivní. Aktivovat nového dopravce můžete v sekci **Nastavení** -> **Dopravci**.
:::

	- **Aplikace** - možnost filtrovat objednávky podle jednotlivých aplikací.
		 
---

### Akce se objednávkami
Tato sekce slouží pro seznámení se s akcemi objednávek, jako je tisk, export dat, aktualizaci zobrazovaných objednávek a mnoho dalšího.


![Akce se objednávkami](/img/order/overview/filter-actions.png)


	- **Vybrat všechny objednávky** - v levé části tohoto menu se nachází tlačítko pro výběr všech objednávek. Tato akce se projeví graficky u každé objednávky zobrazením modrého čtverce s fajfkou.
	- **Tlačítko aktualizace** - tlačítko vyznačující se modrým kruhem uvnitř. Proběhne **update** a následné **zobrazení nových objednávek** v případě jejich existence.
	- **Tlačítko akce** - po kliknutí na tlačítko **Akce** se zobrazí dropdown menu s nabízenými akcemi:
	- **Vytvořit zásilky a štítky** - vytvoření zásilky a následný tisk štítku v jednom kroku. Po zvolení této akce se zobrazí nové okno, kde naleznete základní informace o nově vytvořených zásilkách. **[Více o tisknutí štítků zde](/docs/documentation/packages/package-printing)**
	- **Označit jako vyřešeno / nevyřešeno** - po kliknutí na toto pole se zvolené objednávky označí jako **vyřešeno** či **nevyřešeno**. V případě označení jako **vyřešeno** se tato volba projeví graficky u každé objednávky zobrazením zeleného čtverce s fajfkou. V opačném případě je tento čtverec šedý.
	- **Tlačítko tisk** - najetím myší na tlačítko **Tisk** se zobrazí možnost pro tisk **Objednávky v PDF**.

:::note
Pozor, aby tlačítko **Akce** fungovalo, musíte mít vybránu alespoň jednu objednávku.
:::

:::tip
Častým postupem bývá **vybrání všech objednávek** pomocí tlačítka v levé části menu a následné zásilek a štítků pomocí tlačítka **Akce**. To vede k ušetření spousty času a klikání. :smile:
:::




---

### Zobrazení jednotlivých objednávek
V přehledu objednávek má každá objednávka svou kartu s informacemi také o položkách objednávky a kontaktních údajích příjemce.

![Zobrazení objednávky](/img/order/overview/order-single.png)

:::tip
Pro zobrazení jednotlivých položek objednávky je nutné mít aktivní volbu **Přehled objednávek s položkami** v sekci **Nastavení** -> **Objednávky** -> **Základní nastavení**. Pro podrobnější informace klikněte **[zde](/docs/documentation/settings/orders/order-settings).**
:::
	- **Tlačítko vybrat objednávku** - pokud je toto tlačítko zaškrtnuto (viz na obrázku výše) znamená to, že je aktuální objednávka vybrána a lze s ní provádět akce.
	- **Číslo objednávky** - číslo objednávky je u každé položky v přehledu zobrazeno **tučným** písmem, černou barvou (viz na obrázku výše č. **00021**).
	
:::tip
	Kliknutím na číslo objednávky jednoduše zobrazíte **detail** objednávky. :relieved:
:::
	
	- **Vlastní označení objednávky** - jméno aplikace je zobrazeno hned pod oficiálním číslem objednávky, toto číslo je zobrazeno **šedou barvou** a mělo by pomáhat Vaší orientaci mezi objednávkami.
	- **Datum vytvoření** - zobrazuje datum a čas vytvoření objednávky.
	- **Celková cena** - zobrazuje celkovou cenu objednávky.
	- **Platba** - zobrazuje způsob platby, který byl u objednávky vybrán.
	- **Doprava** - zobrazuje způsob zvolené dopravy při vytváření objednávky.
	- **Kontaktní údaje** - zobrazuje základní kontaktní údaje příjemce.
	- **Stav objednávky** - po kliknutí na název aktuálního stavu objednávky se zobrazí seznam všech stavů, které může objednávka nabývat. Po zvolení nové hodnoty se stav objednávky uloží.
	- **Počet balíků** - zobrazuje počet balíků, které budou vytvořeny při automatickém vytvoření zásilky. Při změně hodnoty bude změna automaticky uložena.
	- **Celková hmotnost** - zobrazuje celkovou hmotnost objednávky pro automatické vytvoření zásilky. Po zvolení nové hodnoty bude změna automaticky uložena.
	---


## Skenování čárových kódů v přehledu objednávek
Zde lze provádět také **kompletaci** objednávek kompletně bez přístupu ke klávesnici a myši. Stačí mít puštěnou čtečku čárových kódů a skenovat čárové kódy objednávek.
Jakmile naskenujete čárový kód (ať již z detailu objednávky v PDF nebo z vlastního čárového kódu), tak se Balíkuj pokusí vyhledat objednávku s daným číslem.
Pokud objednávka existuje (vždy se bere první objednávka), dojde k přepnutí na kompletaci položek objednávky.

Pro více informací o kompletaci navštivte [Kompletaci](/docs/documentation/orders/order-completion).


### Objednávka v PDF
Kliknutím na tlačítko **Akce** u jednotlivých objednávek lze otevřít menu a zvolit možnost **Stáhnout PDF**.

---

### Patička přehledu
Tato spodní část stránky slouží k listování mezi stranami s objednávkami. Zobrazuje se číslo strany s počtem objednávek na stránce. Disponuje také tlačítky pro postupování mezi stránkami.

![Patička zobrazení objednávek](/img/order/overview/footer-overview.png)




:::note

S těmito funkcemi můžete lépe organizovat a spravovat Vaše objednávky, což Vám ušetří čas a sníží námahu spojenou s jejich sledováním. Další informace o použití jednotlivých funkcí najdete v následujících sekcích dokumentace.

:::





