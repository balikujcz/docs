---
sidebar_position: 1
---

# Přehled zásilek
Tento přehled je navržen s cílem usnadnit správu Vašich zásilek a poskytnout Vám úplný přehled o jejich stavu a historii.
S Balíkuj můžete snadno sledovat všechny Vaše zásilky na jednom místě, a to včetně možnosti filtrovat je podle různých kritérií,
jako jsou datum odeslání, stav doručení, platba dobírkou a další. Tato dokumentace Vám poskytne podrobné informace o funkcích, které přehled zásilek aplikace Balíkuj nabízí, a jak je efektivně využívat.
## Obecný přehled zásilek

V sekci přehledu zásilek se na hlavičce stránky nad filtrovacím rozhraním zobrazí obecný přehled zásilek, tento přehled slouží k velmi rychlému posouzení stavu všech objednávek. Obsahuje informace: 

![Rychlý přehled zásilek](/img/package/overview/overview.png)

	- **Celkem zásilek** - celkový počet Vašich zásilek v systému.
	- **Doručované** - počet zásilek, které jsou aktuálně doručovány dopravci.
	- **Nevytištěno** - počet zásilek, k nimž ještě nebyly vytisknuty štítky.
	- **Neodesláno do systému dopravců** - jednoduše počet zásilek, o kterých dopravce ještě neví, že existují.


### Filtrování zásilek
V hlavičce stránky naleznete sekci, která slouží k filtrování přehledu Vašich zásilek. Toto rozhraní umožňuje filtrovat podle rozmanitého spektra kritérií:

![Možnosti filtrování zásilek](/img/package/overview/filters.png)
	- **Hledaný text** - pole pro zadání textu, který se může vyskytovat v názvu zásilky, jejím popisu, čísle zásilky nebo také referenčním čísle.
	- **Dopravce** - po rozkliknutí se zobrazí dropdown menu, ve kterém můžete vybrat jednoho, více a nebo všechny dopravce, podle kterých chcete filtrovat.

:::warning
	Pozor, zobrazují se pouze dopravci, které máte nastavené ve Vaší aplikaci jako aktivní. Aktivovat nového dopravce můžete v sekci **Nastavení** -> **Dopravci**.
:::

	- **Stav zásilky** - po rozkliknutí se zobrazí dropdown menu, kde lze vybrat jeden z mnoha filtrů podle stavu zásilky. Mezi nejpoužívanější patří např. **doručeno**, **nedoručeno**, **odesláno (na cestě)**.
	- **Dobírka** - tento prvek má tři stavy, pokud je zaškrknutý s **pozitivním znaménkem (fajfka)** budou se zásilky filtrovat podle zásilek, které **jsou na dobírku**. Pokud je zde **křížek**, budou se zobrazovat objednávky, které **nejsou na dobírku**.
				Třetí stav **(nezaškrtnuto, pole zůstává prázdné)** značí, že filtrování dle dobírky je vypnuto.
	
	- **Vytvořeno od / do** - možnost výběru intervalu, ve kterém chcete zobrazit hledané zásilky.

:::tip
	Pokud vyberete pouze **datum od**, zobrazí se všechny zásilky od daného datumu až k aktuálnímu dni.
:::
	 
	 - **Seřadit podle** - možnost výběru, zda chcete řadit od **nejnovějších** či **nejstarších** zásilek.
	 - **Pouze hlavní zásilky** - tlačítko se třemi stavy, udává volbu pro zobrazení pouze hlavního kusu zásilky - nezobrazuje další balíky v zásilce.
	 - **Filtrování podle stavu** - zde je možné filtrovat zásilky podle základních stavů, např. **Neodesláno**, **Doručeno**, **Nedoručeno**.

---

### Akce se zásilkami
Tato sekce slouží pro seznámení se s akcemi zásilek, jako je tisk, export dat, aktualizaci zobrazovaných zásilek a mnoho dalšího.


![Akce se zásilkami](/img/package/overview/filter-actions.png)


	- **Vybrat všechny zásilky** - v levé části tohoto menu se nachází tlačítko. Kliknutím na něj vyberete všechny zásilky, tato akce se projeví graficky u každé zásilky zobrazením modrého čtverce s fajfkou.
	- **Tlačítko aktualizace** - tlačítko vyznačující se modrým kruhem uvnitř. Proběhne **update** a následné **zobrazení nových objednávek** v případě jejich existence.
	- **Tlačítko akce** - po kliknutí na tlačítko **Akce** se zobrazí pole, kde naleznete souhrn zásilek dle jednotlivých dopravců, které chcete odeslat do systémů dopravců. Odeslání dat potvrdíte tlačítkem **Odeslat data** u každého z dopravců.
	- **Tlačítko tisk** - najetím myší na tlačítko **Tisk** se zobrazí menu akcí. **[Více o tisknutí štítků zde](/docs/documentation/packages/package-printing)**

:::note
Pozor, aby tlačítko **Akce** -> **Odeslat data k dopravcům** fungovalo, musíte mít vybránu alespoň jednu zásilku.
:::

:::tip
Častým postupem bývá **vybrání všech zásilek** pomocí tlačítka v levé části menu a následné odeslání všech dat k dopravcům pomocí tlačítka **Akce**. To vede k ušetření spousty času a klikání. :smile:
:::




---

### Zobrazení jednotlivých zásilek
V přehledu zásilek má každá zásilka svou kartu s obecným a jednoduchým přehledem. Jak zobrazit další důležité informace a podrobnosti se dočtete níže.

![Zobrazení zásilky](/img/package/overview/package-single.png)

	- **Tlačítko vybrat zásilku** - pokud je toto tlačítko zaškrtnuto (viz na obrázku výše) znamená to, že je aktuální zásilka vybrána a lze s ní provádět akce, jako je **tisk** či **export dat**.
	- **Číslo zásilky** - číslo zásilky je u každé položky v přehledu zobrazeno **tučným** písmem, černou barvou (viz na obrázku výše č. **8803775**).
	
:::tip
	Kliknutím na číslo zásilky se rychle a efektivně přesměrujete do **detailu** zásilky. :relieved:
:::
	
	- **Vlastní označení zásilky** - vlastní označení je zobrazeno hned pod oficiálním číslem zásilky, toto číslo je zobrazeno **šedou barvou** a mělo by pomáhat Vaší orientaci mezi zásilkami.
	- **Tracking dopravce** - ikona **auta** hned vedle čísla zásilky. Po kliknutí budete přesměrováni na **stránku dopravce**, kde si můžete zobrazit ještě **podrobnější data** o dopravě.
	- **Doba od vytvoření** - zobrazuje uplynulou dobu od vytvoření dané zásilky.
	- **Kontaktní údaje** - zobrazuje základní kontaktní údaje příjemce.
	- **Grafické vyjádření stavu zásilky** - u každé zásilky se nachází grafické znázornění aktuálního stavu v jejím životním cyklu pomocí modré linky a jak daleko v tomto cyklu už je. Aby toho nebylo málo 
												jsou pod ní přidány i ikony. Najetím myši na tyto ikony se zobrazí jejich význam.												
	---


### Duplikace zásilky
Kliknutím na tlačítko **Akce** u jednotlivých zásilek lze otevřít menu a zvolit možnost duplikovat. Následně Vám bude zobrazena stránka pro vytvoření zásilky s předvyplněnými údaji.

---

### Patička přehledu
Tato spodní část stránky slouží k listování mezi stranami se zásilkami. Zobrazuje se číslo strany s počtem zásilek na stránce. Disponuje také tlačítky pro postupování mezi stránkami.

![Patička zobrazení zásilek](/img/package/overview/footer-overview.png)




:::note

S těmito funkcemi můžete lépe organizovat a spravovat Vaše zásilky, což Vám ušetří čas a sníží námahu spojenou s jejich sledováním. Další informace o použití jednotlivých funkcí najdete v následujících sekcích dokumentace.

:::





