---
sidebar_position: 1
---

# Upgates

Upgates je moderní e-shopová platforma navržená pro usnadnění provozu online obchodů. Své uživatele oslovuje širokou škálou funkcí a možností, které podporují efektivní správu, marketing a prodej zboží či služeb online.
Tato platforma je známá svou snadnou použitelností a flexibilitou, což umožňuje podnikatelům rychle vytvořit a spravovat profesionální e-shop bez hlubších technických znalostí. 
Upgates také nabízí integrace s různými platebními bránami, analytickými nástroji a dalšími službami právě jako je **Balíkuj** což z ní činí komplexní řešení pro moderní e-commerce potřeby.

## Základní informace
| Informace |  |
| ----------- | ----------- |
| Název aplikace | **Upgates** |
| Kód aplikace | **`UPGATES`** |
| Webové stránky | [www.upgates.cz ↗️](https://www.upgates.cz/) |
| Stav | ✅️ Implementováno | 


Balíkuj v tuto chvíli podporuje dva způsoby napojení na e-shpohovou platformu Upgates. Aktivace přes ověřený doplněk, která nepodléhá API limitům a manuální aktivace pomocí API přístupových údajů do Upgates. Pro více info o limitech navštivte dokumentaci [Upgates API ↗️](https://upgatesapiv2.docs.apiary.io/#introduction/rate-limiting).


## Aktivace přes ověřený doplněk
Instalace ověřeného doplňku přes platformu Upgates je rychlá a jednoduchá, a zajišťuje bezproblémovou integraci do vašeho e-shopu. Náš doplněk prošel důkladnou kontrolou ze strany Upgates, aby splňoval všechna kritéria pro bezpečnost a kompatibilitu.

Postupujte následovně:

### Instalace doplňku v administraci 
Přihlaste se do administrace vašeho e-shopu a přejděte do sekce **Nastavení -> Doplňky**.

### Aktivace doplňku 
Najděte naši aplikaci v seznamu dostupných doplňků a klikněte na možnost **Aktivovat**.

![Upgates - Aktivace](/img/application/upgates/upgates-aktivace.png)

### Odsouhlasení oprávnění 
Pro pokračování budete vyzváni k odsouhlasení oprávnění, která náš doplněk vyžaduje pro správnou funkci v Upgates.

### Přesměrování na Balíkuj 
Budete přesměrováni na stránku Balíkuj, kde se buď přihlaste pod existujícím účtem, nebo vytvoříte nový účet, pokud jej ještě nemáte.

### Nastavení aplikace v Balíkuj
V naší aplikaci přejděte do seznamu aplikací **Nastavení -> Aplikace**. Zde byste nyní měli vidět nově aktivovanou aplikaci Upgates. Pro zobrazení podrobnějších informací klikněte na kartu aplikace.

Tímto jednoduchým postupem získáte přístup k výhodám našeho doplňku pro Upgates a můžete začít využívat jeho pokročilé funkcionality pro optimalizaci vašeho e-shopu.

### Vytvoření přístupových údajů 

Pro úspěšné napojení na Upgates potřebujete vytvořit si nový Token. Postup vytvoření nového tokenu, pokud již nemáte existující, je následující:

![Upgates](/img/application/upgates/upgates2.png)

1. Nový token si vytvoříte v sekci **API** kliknutím na tlačítko **+ Nové**. 
2. Do pole **Název** zadejte textový popis, který Vám pomůže identifikovat token.
3. Vyberte oprávnění, které tento token bude nabízet. Pro správnou funkčnost systému potřebujeme vybrat minimálně:
	* **Objednávky** -> **Čtení a  zápis**
	* **Stavy objednávek** -> **Pouze čtení**
	* **Faktury** -> **Pouze čtení**
	* **Produkty** -> **Čtení a  zápis**
	* **Štítky** -> **Pouze čtení**
	* **Výrobci** -> **Pouze čtení**
	* **Parametry** -> **Pouze čtení**
	* **Kategorie** -> **Čtení a  zápis**
	* **Zákazníci** -> **Čtení a  zápis**
	* **Skupiny zákazníků** -> **Pouze čtení**
	* **Košíky** -> **Pouze čtení**
	* **Doprava** -> **Čtení a zápis**
	* **Platba** -> **Čtení a zápis**
	* **Konverzní kódy** -> **Čtení a zápis**
	* **Webhooky** -> **Čtení a zápis**
	* **Nastavení** -> **Pouze čtení**
	* **Ceníky** -> **Čtení a zápis**
	* **Jazyky** -> **Pouze čtení**
	* **Majitel** -> **Pouze čtení**
	* **Stav** -> **Pouze čtení**

4. Pokud nechcete nastavovat jednotlivá oprávnění, můžete nastavit všechna oprávnění. Napojení na **Upgates** neustále rozšiřujeme a může se stát,
že v budoucnu budete potřebovat další oprávnění.


### Získání přístupových údajů
V seznamu **Propojení** se nově vytvořený token zobrazí. V seznamu naleznete **Login** a **Klíč API**, který zobrazíte kliknutím na tlačítko **Zobrazit API klíč**.

![Upgates](/img/application/upgates/upgates.png)


## Nastavení aplikace
Pro nastavení/aktivaci aplikace je třeba zadat **Doména nebo označení e-shopu**. Tato hodnota v tuto chvíli slouží jako identifikátor, ke které aplikaci patří objednávka. 
Jako další můžete vyplnit **Poznámku**, která se zobrazí v přehledu aplikací.

### Přihlašovací údaje
V této sekci je třeba nastavit přihlašovací údaje do API Upgates, které jste si nastavili/vygenerovali v předchozím kroku. Zadávat budete:
1. **API Login** - jedná se o textovou hodnotu, kterou vygenerovala administrace Upgates
2. **API Klíč** - jedná se o textovou hodnotu, kterou vygenerovala administrace Upgates
3. **Název e-shopu** - název/označení e-shopu. Je to textová hodnota v URL ve tvaru `https://<nazeve-shopu>.admin.<znackaserveru>.upgates.com`
4. **Značka serveru** - textová hodnota názvu serveru, na kterém je Váš e-shop hostován. Může se jednat o hodnoty např. `t1`, `s50` apod.

### Kontaktní údaje
Pokud jste vytvořenému tokenu přiřadili práva na čtení vlastníka e-shopu, zobrazí se zde informace o vlastníkovi e-shopu. Tyto informace se propisuji 
do našich formulářů na tisk potvrzení objednávky apod.

### Doprava

Proces mapování dopravy mezi Upgates a Balíkuj je klíčovým krokem pro správné nastavení dopravy ve vašem e-shopu. V balíkuj jsou k dispozici všichni hlavní dopravci jako Česká pošta, DPD, GLS, Packeta a další, přičemž každý z nich poskytuje své specifické služby.
Je potřeba namapovat dopravu z platformy Upgates na konkrétní dopravce a služby v balíkuj.

V sekci **Doprava** se provádí mapování dopravy z Upgates na dopravu v Balíkuj. Základem je vytvoření nové dopravy kliknutím na tlačítko **Přidat dopravu**.
Systém Balíkuj podporuje řadu dopravců a je třeba systému sdělit, jakou dopravu e-shopu chcete mapovat na jakého dopravce a přepravní službu v Balíkuj.

Nové mapování přidáte kliknutím na tlačítko **Přidat dopravu**.

![Upgates](/img/application/upgates/upgates-doprava.png)

V dialogovém okně, které se Vám zobrazí zadejte:
* **Označení mapování** - Vaše označení mapování - nikde se nepropisuje, pouze informativní charakter
* **Mapovaná doprava z e-shopu** - zde vyberte dopravní službu, která se načte ze seznamu dopravců Vašeho e-shopu. Vybrat můžete i několik různých dopravců a sdružit je pod jednoho dopravce v systému Balíkuj.
* **Vyberte dopravce** - vyberte dopravce, kterého máte v Balíkuj aktivovaného a na kterého chcete mapovat zvolenou dopravu
* **Vyberte službu** - vyberte službu daného dopravce, která bude použita pro vytvoření zásilek

Vše potvrdíte kliknutím na tlačítko **Přidat dopravu**.

Při vytváření aplikace Upgates dojde k automatickému namapování již přidaných dopravců v aplikaci Balíkuj. Pokud chcete provést změny, můžete využít tlačítko **Upravit**.



## Manuální aktivace

U tohoto způsobu napojení jsou již zavedeny placené limity počtu odeslaných požadavků ze strany **Upgates**, proto doporučujeme aktivovat aplikaci přes ověřený doplněk. 
Manuální aktivaci již tedy **nedoporučujeme**.

Pouze pro pokročilé uživatele, kteří  nechtějí používat ověřený doplněk.
Aktivovat aplikaci si můžete v naší administraci v sekci **Nastavení** -> **Aplikace** -> **Přidat aplikaci** -> **Upgates**. 
Pro aktivaci aplikace budete potřebovat přístupové údaje k API rozhraní Upgates. Tyto údaje získáte v administraci svého obchodu v sekci **Doplňky** ->
**API**.

Více informací o API přístupech v e-shopovém řešení Upgates naleznete na adrese [https://www.upgates.cz/api-v2 ↗️](https://www.upgates.cz/api-v2) nebo v 
oficiální dokumentaci na [https://upgatesapiv2.docs.apiary.io ↗️](https://upgatesapiv2.docs.apiary.io)

:::info
Pokud narazíte na problémy při aktivaci konkrétního dopravce nebo při mapování služeb, můžete se obrátit na naši podporu. Stačí napsat na info@balikuj.cz nebo zavolat na naše telefonní číslo, kde vám rádi pomůžeme s jakýmikoli technickými nebo konfiguračními otázkami
:::