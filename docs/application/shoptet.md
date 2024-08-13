---
sidebar_position: 1
---

# Shoptet

Shoptet je populární e-shopová platforma, která usnadňuje provozování online obchodů a nabízí širokou škálu funkcí pro správu, marketing a prodej zboží či služeb. Je oblíbená díky své
jednoduchosti, flexibilitě a robustnosti, což umožňuje podnikatelům snadno a rychle vytvořit a spravovat profesionální e-shop.

Shoptet se pyšní svou schopností integrovat se s různými nástroji a službami, včetně platebních bran, analytických nástrojů a logistiky. 
Jednou z těchto služeb je Balíkuj, což je platforma zaměřená na správu a optimalizaci logistiky a doručování balíků. Naše integrace s Shoptetem poskytuje uživatelům Shoptetu možnost využívat výhody Balíkuj.

## Základní informace
| Informace |  |
| ----------- | ----------- |
| Název aplikace | **Shoptet** |
| Kód aplikace | **`SHOPTET`** |
| Webové stránky | [www.shoptet.cz ↗️](https://www.shoptet.cz/) |
| Stav | ✅️ Implementováno |  


## Nastavení exportu objednávek a produktů ze Shoptetu

Pro efektivní správu vašich zásilek a logistických procesů je klíčové správně nastavit export objednávek ze Shoptetu do platformy Balíkuj. Tento proces vám umožní automatizovat zpracování objednávek, vytváření štítků a sledování zásilek přímo z administrace Balíkuj.
Aktuálně Balíkuj podporuje export objednávek ze Shoptetu pomocí XML feedu, ale jsme v procesu žádosti o vytvoření **ověřeného doplňku Shoptet**. Bohužel nyní nemáme informace, kdy by mohl být ověřený doplněk Shoptetu schválen.

Funguje to tedy tak, že Balíkuj si stahuje vždy nové nebo změněné objednávky pomocí tohoto XML feedu.

### Vytvoření exportu objednávek
Pro vytvoření mapování objednávek ze Shoptetu do Balíkuj, je třeba výše zmiňovaný XML feed správně vytvořit a nastavit.
V administraci Shoptetu otevřete v bočním menu sekci **Nastavení -> Export objednávek**. Zde najdete možnost **Vytvořit vlastní export**.

![Shoptet - Aktivace](/img/application/shoptet/template-create.png)


Po kliknutí na tlačítko **Vytvořit vlastní export** vyplňte následující údaje:

- Vyberte možnost **Duplikovat z** a zvolte šablonu s názvem **Shoptet (systémový, formát xml)**
- Klikněte na tlačítko **Uložit**


![Shoptet - Aktivace](/img/application/shoptet/add-template.png)

### Nastavení detailu exportu

Po vytvoření samotné šablony budete přesměrováni do detailu šablony exportu objednávek. Zde vyplňte následující údaje:

- **Název**: Zadejte název exportu, např. **Balíkuj**
- **XML feed**: viz níže v dokumentaci [zde](/docs/application/shoptet#nastavení-xml-exportu)

![Shoptet - Aktivace](/img/application/shoptet/detail-template.png)


### Nastavení XML exportu

V detailu šablony exportu objednávek nalezněte sekci **Obsažené sloupce**. Ujistěte se, že z pole **Tělo XML** pečlivě smažete veškeré defaultní údaje a nahraďte je následujícím XML kódem:

![Shoptet - Aktivace](/img/application/shoptet/xml-set.png)


**XML kód** k nahrazení:

```xml
 <ORDER>
	<ORDER_ID>#id#</ORDER_ID>
	<CODE>#code#</CODE>
	<DATE>#date#</DATE>
	<STATUS>#statusName#</STATUS>
	<CURRENCY>
		<CODE>#currencyCode#</CODE>
		<EXCHANGE_RATE>#currencyExchangeRate#</EXCHANGE_RATE>
	</CURRENCY>
	<CUSTOMER>
		<EMAIL>#email#</EMAIL>
		<PHONE>#phone#</PHONE>
		<BILLING_ADDRESS>
			<NAME>#billFullName#</NAME>
			<COMPANY>#billCompany#</COMPANY>
			<STREET>#billStreet#</STREET>
			<HOUSENUMBER>#billHouseNumber#</HOUSENUMBER>
			<CITY>#billCity#</CITY>
			<ZIP>#billZip#</ZIP>
			<COUNTRY>#billCountryName#</COUNTRY>
			<COUNTRY_CODE>#billCountryCode#</COUNTRY_CODE>
			<COMPANY_ID>#billCompanyId#</COMPANY_ID>
			<VAT_ID>#billVatId#</VAT_ID>
			<CUSTOMER_IDENTIFICATION_NUMBER>#customerIdentificationNumber#</CUSTOMER_IDENTIFICATION_NUMBER>
		</BILLING_ADDRESS>
		<SHIPPING_ADDRESS>
			<NAME>#deliveryFullName#</NAME>
			<COMPANY>#deliveryCompany#</COMPANY>
			<STREET>#deliveryStreet#</STREET>
			<HOUSENUMBER>#deliveryHouseNumber#</HOUSENUMBER>
			<CITY>#deliveryCity#</CITY>
			<ZIP>#deliveryZip#</ZIP>
			<COUNTRY>#deliveryCountryName#</COUNTRY>
			<COUNTRY_CODE>#deliveryCountryCode#</COUNTRY_CODE>
		</SHIPPING_ADDRESS>
		<IP_ADDRESS>#customerIpAddress#</IP_ADDRESS>
	</CUSTOMER>
	<REMARK>#remark#</REMARK>
	<SHOP_REMARK>#shopRemark#</SHOP_REMARK>
	<REFERER>
		<![CDATA[#referer#]]>
	</REFERER>
	<PACKAGE_NUMBER>#packageNumber#</PACKAGE_NUMBER>
	<VARCHAR1>#varchar1#</VARCHAR1>
	<VARCHAR2>#varchar2#</VARCHAR2>
	<VARCHAR3>#varchar3#</VARCHAR3>
	<TEXT1>#text1#</TEXT1>
	<TEXT2>#text2#</TEXT2>
	<TEXT3>#text3#</TEXT3>
	<WEIGHT>#weight#</WEIGHT>
	<TOTAL_PRICE>
		<WITH_VAT>#totalPriceWithVat#</WITH_VAT>
		<WITHOUT_VAT>#totalPriceWithoutVat#</WITHOUT_VAT>
		<VAT>#totalPriceVat#</VAT>
		<ROUNDING>#totalPriceRounding#</ROUNDING>
		<PRICE_TO_PAY>#totalPriceToPay#</PRICE_TO_PAY>
		<PAID>#paid#</PAID>
		<AMOUNT_PAID>#amountPaid#</AMOUNT_PAID>
	</TOTAL_PRICE>
	<ORDER_ITEMS>#orderItems#</ORDER_ITEMS>
	<SHIPPING_CODE>#foxdeliShippingCode#</SHIPPING_CODE>
	<PICKUP_PLACE>#foxdeliPickUpPlace#</PICKUP_PLACE>
	<CP_SERVICE>#cpostType#</CP_SERVICE>
	<CP_ZIP>#cpostZip#</CP_ZIP>
	<PACKETA_BRANCH_ID>#zasilkovnaDistributionPointBranchId#</PACKETA_BRANCH_ID>
	<DPD_PARCEL_SHOP_ID>#dpdPsId#</DPD_PARCEL_SHOP_ID>
	<DPD_PARCEL_SHOP_NAME></DPD_PARCEL_SHOP_NAME>
	<DPD_SERVICE_CODE>#dpdServiceCode#</DPD_SERVICE_CODE>
</ORDER>
```

Následně v prostředí šablony klikněte na tlačítko **Uložit**.


### Nastavení zabezpečení exportů

V bočním menu opět vyberte sekci **Objednávky -> Export**. V případě, že nemáte aktivní žádný **přístup pro partnera** se v sekci **Zabezpečení exportů** se může zobrazit následující varování: 

![Shoptet - Aktivace](/img/application/shoptet/export-security.png)

Pro správnou funkčnost exportu objednávek do Balíkuj je nutné vytvořit nový **přístup pro partnera**. Tento přístup vytvoříte kliknutím na odkaz **této stránce** ve varovacím poli (viz obrázek varování). 
Jak správně nastavit **přístup pro partnera** naleznete [zde](/docs/application/shoptet#zabezpečení-exportů).

### Nastavení zahrnutí objednávek

V bočním menu vyberte sekci **Objednávky -> Export**. V sekci **Zahrnout objednávky** vyberte **Jen nové nebo změněné**. 
Následně vám bude zobrazena další pole. Do těchto polí není potřeba zadávat ani upravovat žádné údaje. Vše by se mělo provádět automaticky viz obrázek níže.

![Shoptet - Aktivace](/img/application/shoptet/export-new-or-edited.png)

:::warning 
**Upozornění**: Ujistěte se, že při zkopírování finálního odkazu (viz níže v dokumentaci a procesu aktivace aplikace) byla vybrana tato možnost **Jen nové nebo změněné**.
:::

### Vytvoření exportu produktů
V administraci Shoptetu otevřete sekci **Nastavení -> Produkty**. Následně Vám bude zobrazena úvodní strana pro export produktů. V sekci **Typ** zaškrtněte možnost **systémový: Kompletní export - XML**.

![Shoptet - Aktivace](/img/application/shoptet/product-export.png)

Následně na této stránce níže naleznete sekci **Permanentní odkaz zvoleného exportu**. Zde prosím zkopírujte odkaz pro export produktů.

![Shoptet - Aktivace](/img/application/shoptet/product-export-link.png)

Nyní přejděte do administrace **Balíkuj**. V horním menu vyberte **Nastavení -> Aplikace**. Zde vyberte vaši **Shoptet** aplikaci a v kartě základní nastavení vložte tento odkaz do sekce **Nastavení XML exportů**, do pole **Adresa XML exportu produktů**.
Můžete zde také nastavit **Interval aktualizace produktů** - představuje v jakém intervalu aktualizace proběhne (jednou denně, každou hodinu, každé 3 hodiny, atd..).

![Shoptet - Aktivace](/img/application/shoptet/address-xml-product.png)

## Zabezpečení exportů

Po kliknutí na odkaz **této stránky** ve varovacím poli se dostanete do detailu nastavení exportů. Pro správnou funkčnost stačí pouze aktivovat jednoho z vašich již vytvořených partnerů. 

### Aktivace partnera
Pro aktivaci postupujte následovně: 

- Nalezněte již existujícího partnera, kterého chcete aktivovat
- Ve sloupci **aktivní** klikněte na tlačítko symbolu "**stop** / **pause**".
- Následně se zobrazí okno pro potvrzení změny, kde klikněte na tlačítko **Ok**.

![Shoptet - Aktivace](/img/application/shoptet/make-active.png)


### Vytvoření nového partnera
Pokud ovšem chcete pro lepší přehlednost vytvořit nového partnera speciálně pro **Balíkuj**, postupujte následovně:

- Klikněte v pravém horním rohu na tlačítko **Přidat**.

- Následně se Vám zobrazí okno pro vytvoření nového partnera.
- Do pole **Název partnera** zadejte název, např. **Balíkuj** 
- Do pole **Platný do** zadejte také platnost partnera - do kdy bude partner aktivní.
- Následně klikněte na tlačítko **Přidat**.


![Shoptet - Aktivace](/img/application/shoptet/create-partner.png)


## Přidání aplikace Shoptet do Balíkuj
Pokud jste úspěšně nastavili export objednávek ze Shoptetu, můžete pokračovat s přidáním aplikace Shoptet do Balíkuj. V administraci shoptetu otevřete sekci **Nastavení -> Export** a zde nalezněte sekci **Permanentní odkaz zvoleného exportu**.
Pokud jste předešlé kroky správně provedli, měli byste zde vidět odkaz na XML vašeho exportu objednávek -> **Tento odkaz prosím zkopírujte** (ve vaší shoptet administraci, nikoliv ten na ilustračním obrázku).

![Shoptet - Aktivace](/img/application/shoptet/xml-link.png)

### Vytvoření aplikace
V administraci Balíkuj pomocí horního menu přejděte do **Nastavení -> Aplikace**. Zde klikněte na tlačítko **Přidat aplikaci**. Zobrazí se okno s námi podporovanými aplikacemi.

- Vyberte aplikaci **Shoptet**
- Klikněte na tlačítko **Pokračovat**

![Shoptet - Aktivace](/img/application/shoptet/shoptet-app.png)


### Aktivace aplikace
Následně se zobrazí okno pro vytvoření nové aplikace. Zde vyplňte **základní nastavení** i **kontaktní údaje**. V základním nastavení vyplňte následující údaje:

- **Doména eshopu**: Zadejte doménu nebo označení vašeho e-shopu
- **Poznámka**: Zadejte libovolnou poznámku, např. **Shoptet**
- **Nestahovat objednávky ve stavech**: Zde uveďte všechny stavy, ve kterých **nechcete stahovat objednávky**. Např. **Storno, Vráceno, atd..**

:::warning
Prosím dbejte na správné vyplnění stavů, jenž nechcete stahovat objednávky do Balíkuj. Při chybném zadání stavu může dojít k nechtěnému stahování objednávek.
:::

V sekci **Nastavení XML exportů** naleznete pole pro **Adresu XML exportu objednávek** a **Adresu XML exportu produktů**. Zde vložte **odkazy** z vaší Shoptet administrace.

- Jak správně nastavit **XML export objednávek** naleznete [zde](/docs/application/shoptet#vytvoření-exportu-objednávek).
- Jak správně nastavit **XML export produktů** naleznete [zde](/docs/application/shoptet#vytvoření-exportu-produktů).


V naší aplikaci je také možnost manuální synchronizace. Tuto možnost naleznete v sekci **Manuální Synchronizace**. Zde můžete **ručně spustit** synchronizaci objednávek z vašeho Shoptetu do Balíkuj za vybraný interval.

![Shoptet - Aktivace](/img/application/shoptet/shoptet-activate.png)

V sekci **Nastavení XML exportů** je také tlačítko pro **Aktualizace objednávek na eshopu** (více [zde](/docs/application/shoptet#povolení-aktualizace-objednávek)) . Po zaškrtnutí tohoto tlačítka se zobrazí pole pro zadání údajů správce e-shopu. Pro tuto akci je potřeba **vytvořit nového správce** e-shopu. 
Zde zadejte následující údaje: 

- **Email** - Zadejte emailovou adresu nového správce obchodu
- **Heslo** - Zadejte heslo nového správce obchodu

Jak správně vytvořit nového **správce obchodu** naleznete [zde](/docs/application/shoptet#vytvoření-správce-obchodu).

![Shoptet - Aktivace](/img/application/shoptet/allow-updating.png)


Kliknutím na **Aktivovat aplikaci** aktivujete aplikaci. Pro zobrazení, zda je aplikace aktivní můžete jít opět do přehledu aplikací přes menu **Nastavení** -> **Aplikace**. Vámi **nově vytvořená** aplikace by se zde měla nacházet.

## Mapování dopravy

Veškeré objednávky, které přicházející z e-shopové platformy Shoptet do systému Balíkuj, jsou automaticky mapovány pomocí našeho softwarového řešení.
Tento proces zajišťuje, že veškerá data o dopravě jsou správně převedena a zpracována bez nutnosti manuálního zásahu, čímž šetří čas a minimalizuje chyby.

Navíc, pro ještě větší flexibilitu a přizpůsobení se specifickým potřebám zákazníků, poskytuje Balíkuj možnost vytvoření vlastního mapování dopravy přímo v administraci.
To znamená, že zákazníci mohou podle svých preferencí přiřadit jednotlivé dopravní služby z Balíkuj k odpovídajícím službám v Shoptetu.

Například, pokud zákazník využívá službu České pošty "Balík do ruky", může si v administraci Balíkuj vytvořit vlastní mapping této služby a přiřadit jí odpovídající ID podle administrace v Shoptetu. 
Tento flexibilní přístup umožňuje, aby bylo mapování dopravy plně v souladu s konkrétními požadavky a preferencemi každého zákazníka.

Díky těmto možnostem je zajištěno, že všechny objednávky budou doručovány efektivně a podle očekávání zákazníků, což zvyšuje jejich spokojenost a důvěru v naše řešení.

### Vytvoření vlastního mapování dopravy

Pro vytvoření výše zmíněného mapování dopravy z Shoptetu do Balíkuj **je potřeba mít přidanou aplikaci Shoptet** ve Vaší Balíkuj administraci. Jak celý proces bezchybně zvládnout se dočtete [zde](/docs/application/shoptet#vytvoření-exportu-objednávek).
Pro vytvoření mapování postupujte následovně:

V administraci Balíkuj přejděte do **Nastavení -> Aplikace**. V přehledu všech vašich aplikací klikněte na aktivní aplikaci **Shoptet** pro přesunutí se do detailu aplikace. V horní části detailu aplikace naleznete tlačítko **Doprava** viz obrázek.

![Shoptet - Aktivace](/img/application/shoptet/shoptet-detail.png)

Po kliknutí na tlačítko **Doprava** se dostanete do karty s přehledem dopravy. Zde naleznete tlačítko **Přidat dopravu**. 


![Shoptet - Aktivace](/img/application/shoptet/carrier-mapping-overview.png)

Po kliknutí na toto tlačítko se zobrazí následující okno pro **vytvoření nového mapování dopravy**.

![Shoptet - Aktivace](/img/application/shoptet/add-carrier-mapping.png)

Vyplňte prosím následující údaje:

- **Označení mapování**: Zadejte vlastní název mapování, např. **Česká pošta - Balík do ruky**
- **Mapovaná doprava z eshopu**: Unikátní identifikátor dopravy z vašeho **Shoptet e-shopu**. Jak toto Id vyhledat pro konkrétní dopravu a službu se dočtete níže [zde](/docs/application/shoptet#vyhledání-identifikátoru-dopravy). 
- **Dopravce** - Zde vyberte dopravce, který bude **mapován na dopravní službu v Shoptet**. Budete mít možnost vybrat jakéhokoliv Vašeho **aktivního dopravce** v administraci Balíkuj.
- **Služba** - Zde vyberte službu výše zvoleného dopravce.

Kliknutím na tlačítko **Přidat dopravu** vytvoříte nové mapování dopravy. Nové mapování naleznete opět v **přehledu mapování dopravy** u aplikace Shoptet **v administraci Balíkuj**.

![Shoptet - Aktivace](/img/application/shoptet/added-mapping.png)

### Vyhledání identifikátoru dopravy

Identifikátor dopravy je **unikátní číslo, v budoucnu může být také reprezentován jako posloupnost znaků**, jenž identifikují konkrétní dopravní službu v Shoptetu. Tento identifikátor je potřeba pro správné vytvoření **vlastního mapování dopravy z Shoptetu do Balíkuj**. 
Pro získání tohoto identifikátoru postupujte následovně.

V administraci Shoptetu otevřete sekci **Nastavení -> Doprava a platby -> Způsob dopravy**. Zde naleznete seznam všech způsobů dopravy. Následně **vyberte konkrétní dopravu**, kterou chcete mapovat do Balíkuj.


![Shoptet - Aktivace](/img/application/shoptet/shoptet-carrier-overview.png)

Kliknutím na **název** této služby se dostanete do detailu dopravy. Poté je potřeba nahlédnout do **URL** vašeho prohlížeče, kde se nachází **identifikátor** této dopravy. 
Vaše aktuální **URL bude vypadat nějak takto**: 

```
https://www.myshopteteshop.com/admin/doprava-detail/?id=17
```

Všimněte si **čísla** za **id=**. Toto **číslo** či **posloupnost znaků** je **unikátní identifikátor** této dopravy, který budete potřebovat pro vytvoření **vlastního mapování v Balíkuj**. Pro lepší pochopení si můžete prohlédnout následující obrázek:

![Shoptet - Aktivace](/img/application/shoptet/shoptet-carrier-url.png)


## Synchronizace a aktualizace objednávek

Balíkuj umožňuje **automatickou synchronizaci objednávek** z vašeho **Shoptet** e-shopu . Tento proces zajišťuje, že veškeré objednávky, které přicházejí z vašeho e-shopu, jsou **automaticky aktualizovány** v Balíkuj v určitých časových intervalech.


### Povolení aktualizace objednávek

Aktualizace objednávek slouží pro synchronizaci mezi administrací Balíkuj a vaším shoptet e-shopem. V sekci **Nastavení XML exportů** naleznete možnost **Povolit aktualizaci objednávek**. Tuto možnost **zaškrtněte**. Následně vám budou zobrazeny dvě pole **Přihlašovací email** a **Heslo**. Zde vyplňte přihlašovací údaje pro nového **správce obchodu**. 
Jak tohoto správce obchodu vytvořit naleznete v sekci níže.

![Shoptet - Aktivace](/img/application/shoptet/allow-updating.png)

### Vytvoření správce obchodu
V administraci Shoptetu otevřete sekci **Nastavení -> Administrace -> Správci obchodu**. Bude Vám zobrazena následující stránka:

![Shoptet - Aktivace](/img/application/shoptet/shoptet-admins.png)

Kliknutím na tlačítko **Přidat** budete přesměrování na formulář pro vytvoření nového správce obchodu. Zde vyplňte následující údaje:

- **Jméno a příjmení** - Zadejte jméno a příjmení nového správce obchodu
- **Email** - Zadejte emailovou adresu nového správce obchodu
- **Nové heslo** - Zadejte nové heslo pro nového správce obchodu
- **Potvrzení hesla** - Zopakujte nové heslo pro potvrzení
- **Současné heslo pro potvrzení** - Zadejte současné heslo pro potvrzení změn

Níže na této stránce nalezněte sekci **Práva uživatele**. Zde v kategorii **Objednávky** zaškrtněte možnost **Přehled** (viz obrázek níže). Kliknutím na tlačítko **Uložit** vytvoříte nového správce obchodu.

![Shoptet - Aktivace](/img/application/shoptet/new-admin.png)

