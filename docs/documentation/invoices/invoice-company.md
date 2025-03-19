---
sidebar_position: 1
---

# Fakturační subjekty

Na této stránce naleznete přehled fakturačních subjektů s možností vytvoření nového subjektu. Vytváření fakturačních subjektů umožní **vytváření nových faktur** pro všechny Vaše fakturační subjekty.
Prvotní nastavení bylo vytvořeno pomocí našeho průvodce. Zde toto nastavení můžete kdykoliv upravit podle svých potřeb a doplnit další informace.

![Zobrazení subjektů](/img/invoice/company/overview.png)

## Editace fakturačního subjektu
Kliknutím na **detail** daného subjektu Vám budou zobrazena pole s informacemi o subjektu.
Nastavení je rozděleno do několika záložek - **Fakturační údaje**, **Výchozí hodnoty**, **Emaily** a **Vzhled faktury**.

### Fakturační údaje
Základním krokem pro aktivaci fakturace je vyplnění fakturačních údajů. Tyto údaje budou zobrazeny na všech vytvořených fakturách. 

![Editace fakturačních údajů](/img/invoice/company/edit-profile.png)

	- **Název subjektu** - název Vaší společnosti nebo obchodního subjektu.
	- **Jméno a příjmení** - jméno a příjmení osoby, která je zodpovědná za fakturaci. Uveďte pouze v případě, pokud chcete, aby bylo toto uvedeno na faktuře.
	- **Adresa** - adresa Vaší společnosti nebo obchodního subjektu.
	- **Typ plátcovství** - zvolte, zda jste plátcem DPH nebo neplátcem DPH, případně Identifikovaná osoba.
	- **IČO** - IČO Vaší společnosti nebo obchodního subjektu.
	- **DIČ** - DIČ Vaší společnosti nebo obchodního subjektu.
	- **Telefon** - telefonní číslo, které bude uvedeno na faktuře.
	- **Email** - emailová adresa, která bude uvedena na faktuře.
	- **Výchozí** - označení subjektu jako výchozího pro vytváření faktur.

Kliknutím na tlačítko **Uložit změny** budete moci uložit informace o daném subjektu.

### Výchozí hodnoty
Na této záložce můžete nastavit výchozí hodnoty pro faktury, které budou automaticky předvyplněny při vytváření nové faktury.

![Editace výchozích hodnot](/img/invoice/company/edit-default.png)

	- **Splatnost** - počet dní, které budou automaticky nastaveny jako splatnost faktury.
	- **Výchozí typ dokladu** - zvolte výchozí typ dokladu, který bude automaticky nastaven při vytváření nové faktury.
	- **Po zaplacení vystavit** - zde zvolte typ dokladu, který bude automaticky vystaven po zaplacení faktury.
	- **Sazba DPH** - zvolte výchozí sazbu DPH, která bude automaticky nastavena při vytváření nové faktury.
	- **Způsob výpočtu DPH** - zvolte, zda cena položek faktury bude zadávána včetně DPH nebo bez DPH.
	- **Výchozí měrná jednotka** - zvolte výchozí měrnou jednotku, která bude automaticky nastavena při vytváření položek faktury. Lze použít např. kusy (ks) nebo nechat pole prázdné.
	- **Množství u položky** - nastavení výchozí hodnoty množství u položky faktury.
	- **Platební metoda** - zvolte výchozí platební metodu, která bude automaticky nastavena při vytváření nové faktury.
	- **Výchozí měna** - zvolte výchozí měnu, která bude automaticky nastavena při vytváření nové faktury.
	- **Výchozí jazyk** - zvolte výchozí jazyk, který bude automaticky nastaven při vytváření nové faktury.
	- **Zobrazit QR kód** - zvolte, zda bude na faktuře vložen QR kód pro platbu/fakturu.
	- **Zobrazit Neplaťte již uhrazeno** - zvolte, zda bude na faktuře napsáno, že faktura již byla uhrazena.
	- **Zobrazit IBAN na faktuře** - zvolte, zda bude na faktuře uveden IBAN bankovního účtu.
	- **Text před položkami** - zde můžete zadat text, který bude vložen před položkami faktury.
	- **Text za položkami** - zde můžete zadat text, který bude vložen za položkami faktury.

Kliknutím na tlačítko **Uložit změny** budete moci uložit informace o daném subjektu.

### Emaily
Na této záložce můžete nastavit informace pro vytváření emailů, které budou automaticky odesílány při vytváření faktur.

![Nastavení emailů](/img/invoice/company/edit-email.png)
- **Výchozí emailový účet** - zvolte výchozí emailový účet, ze kterého budou odesílány emaily.
- **Jméno odesílatele** - zde zadejte jméno odesílatele, které bude uvedeno v emailu. Pokud není vyplněno, použije se výchozí z emailového účtu Nastavení -> Emaily -> Emailové účty.
- **Kopie emailů posílat na** - zde zadejte emailové adresy, na které budou posílány kopie emailů. Více emailových adres oddělte čárkou.
- **Skrytou kopii emailů posílat na** - zde zadejte emailové adresy, na které budou posílány skryté kopie emailů. Více emailových adres oddělte čárkou.
- **Odpovědět na** - Emailová adresa (Reply-To), na kterou Vám příjemce bude moci odpovědět. Tímto můžete nastavit e-mail pro odpověď na Váš vlastní.
- **Po zaplacení proformy poslat fakturu emailem** - Pokud u proformy máte nastavenu akci po zaplacení vystavit fakturu nebo daňový doklad k platbě, můžete ji touto volbou poslat rovnou emailem zákazníkovi.

Kliknutím na tlačítko **Uložit změny** budete moci uložit informace o daném subjektu.


#### Nastavení výchozích textů emailů
V této sekci můžete nastavit výchozí texty pro emaily, které budou automaticky odesílány při vytváření faktur.

:::info
	V předmětu i tělu emailu můžete použít tzv. proměnné/tagy, které se při poslání emailu nahradí skutečnými hodnotami pro danou fakturu.	
- **\{\{invoice.number}}** - číslo faktury (např. FA2024000001)
- **\{\{invoice.variableSymbol}}** - variabilní symbol (např. 2024000001)
- **\{\{invoice.dueDateString}}** - datum splatnosti (10.10.2025)
- **\{\{invoice.totalWithoutVatString}}** - celková cena bez DPH (např. 1 000 Kč)
- **\{\{invoice.totalWithVatString}}** - celková cena s DPH (např. 1 210 Kč)
- **\{\{invoice.bankAccountNumber}}** - číslo BÚ (např. 2300515021)
- **\{\{invoice.bankAccountCode}}** - kód účtu (např. 2010)
:::

- **Výchozí předmět** - zde zadejte výchozí předmět emailu, který bude automaticky nastaven při vytváření emailu.
- **Tělo emailu s fakturou** - zde zadejte text, který bude automaticky vložen do emailu s fakturou.
- **Název přílohy** - zde zadejte název přílohy - PDF souboru faktury, který bude přiložen k emailu.
- **Odeslat děkovný email po zaplacení** - zvolte, zda bude automaticky odeslán děkovný email po zaplacení faktury.

Kliknutím na tlačítko **Uložit změny** budete moci uložit informace o daném subjektu.

### Vzhled faktury
Na této záložce můžete nastavit vzhled faktury, který bude použit při vytváření nové faktury.

![Vzhled faktury](/img/invoice/company/edit-design.png)

- **Logo na faktuře** - zde můžete nahrát logo, které bude zobrazeno na faktuře.
- **Razítko a podpis** - zde můžete nahrát obrázek, kde bude razítko a podpis, který bude zobrazen na faktuře.
- **Barva faktury** - zde můžete zvolit barvu, která bude použita pro vytvoření faktury.

Kliknutím na tlačítko **Uložit změny** budete moci uložit informace o daném subjektu.
 

## Přidání fakturačního subjektu
Kliknutím na tlačítko **Přidat fakturační subjekt** Vám bude zobrazen formulář pro vyplnění údajů k danému subjektu. Po vyplnění údajů a kliknutí na tlačítko **Přidat fakturační subjekt** bude nový subjekt uložen a budete jej moci využívat ve svých fakturách.

## Odstranění fakturačního subjektu
Kliknutím na tlačítko **Smazat** bude subjekt odstraněn.



