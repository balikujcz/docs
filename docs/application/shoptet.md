---
sidebar_position: 1
---

# Shoptet

Shoptet je populární e-shopová platforma, která usnadňuje provozování online obchodů a nabízí širokou škálu funkcí pro správu, marketing a prodej zboží či služeb. Je oblíbená díky své
jednoduchosti, flexibilitě a robustnosti, což umožňuje podnikatelům snadno a rychle vytvořit a spravovat profesionální e-shop.

Shoptet se pyšní svou schopností integrovat se s různými nástroji a službami, včetně platebních bran, analytických nástrojů a logistiky. 
Jednou z těchto služeb je Balíkuj, což je platforma zaměřená na správu a optimalizaci logistiky a doručování balíků. Naše integrace s Shoptetem poskytuje uživatelům Shoptetu možnost využívat výhody Balíkuj přímo ze svého e-shopu.

## Základní informace
| Informace |  |
| ----------- | ----------- |
| Název aplikace | **Shoptet** |
| Kód aplikace | **`SHOPTET`** |
| Webové stránky | [www.shoptet.cz ↗️](https://www.shoptet.cz/) |
| Stav | ✅️ Implementováno |  


## Nastavení exportu objednávek ze Shoptetu

Pro efektivní správu vašich zásilek a logistických procesů je klíčové správně nastavit export objednávek ze Shoptetu do platformy Balíkuj. Tento proces vám umožní automatizovat zpracování objednávek, vytváření štítků a sledování zásilek přímo z administrace Balíkuj.
Aktuálně Balíkuj podporuje export objednávek ze Shoptetu pomocí XML feedu.

### Vytvoření exportu objednávek
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

V bočním menu opět vyberte sekci **Nastavení -> Export**. V případě, že nemáte aktivní žádný **přístup pro partnera** se v sekci **Zabezpečení exportů** se může zobrazit následující varování: 

![Shoptet - Aktivace](/img/application/shoptet/export-security.png)

Pro správnou funkčnost exportu objednávek do Balíkuj je nutné vytvořit nový **přístup pro partnera**. Tento přístup vytvoříte kliknutím na odkaz **této stránce** ve varovacím poli (viz obrázek varování). 
Jak správně nastavit **přístup pro partnera** naleznete [zde](/docs/application/shoptet#zabezpečení-exportů).

## Zabezpečení exportů

Po kliknutí na odkaz **této stránky** ve varovacím poli se dostanete do detailu nastavení exportů. Pro správnou fuknčnost stačí pouze aktivovat jednoho z vašich již vytvořených partnerů. 

### Aktivace partnera
Pro aktivaci postupujde následovně: 

- Nalezněte již existujícího partnera, kterého chcete aktivovat
- Ve sloupci **aktivní** klikněte na tlačítko symbolu "**stop** / **pause**".
- Následně se zobrazí okno pro potvrzení změny, kde klikněte na tlačítko **Ok**.

![Shoptet - Aktivace](/img/application/shoptet/make-active.png)


### Vytvoření nového partnera
Pokud ovšem chcete pro lepší přehlednost vytvořit nového partnera speciálně pro **Balíkuj**, postupujte následovně:

- Kliněte v pravém horním rohu na tlačítko **Přidat**.

![Shoptet - Aktivace](/img/application/shoptet/create-partner.png)

- Následně se Vám zobrazí okno pro vytvoření nového partnera.
- Do pole **Název partnera** zadejte název, např. **Balíkuj** 
- Do pole **Platný do** zadejte také platnost partnera - do kdy bude partner aktivní.
- Následně klikněte na tlačítko **Přidat**.
- Aktivujte nově vytvořeného partnera podle postupu popsaného [zde](/docs/application/shoptet#aktivace-partnera).

![Shoptet - Aktivace](/img/application/shoptet/add-partner.png)


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
- **Adresa XML exportu objednávek**: Zkopírujte odkaz na XML export objednávek ze Shoptetu a vložte jej do tohoto pole
- **Interval aktualizace objednávek**: Zvolte interval, ve kterém se budou objednávky z Shoptetu aktualizovat v Balíkuj

![Shoptet - Aktivace](/img/application/shoptet/final-activation.png)

Kliknutím na **Aktivovat aplikaci** aktivujete aplikaci. Pro zobrazení, zda je aplikace aktivní můžete jít opět do přehledu aplikací přes menu **Nastavení** -> **Aplikace**. Vámi **nově vytvořená** aplikace by se zde měla nacházet.