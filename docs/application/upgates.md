---
sidebar_position: 1
---

# Upgates

Upgates je poskytovatel e-shopových řešení nejen v České republice, ale i v zahraničí. Díky aktivaci aplikace **Upgates** získáte možnost

## Základní informace
| Informace |  |
| ----------- | ----------- |
| Název aplikace | **Upgates** |
| Kód aplikace | **`UPGATES`** |
| Webové stránky | [www.upgates.cz ↗️](https://www.upgates.cz/) |
| Stav | ✅️ Implementováno | 


## Aktivace aplikace

Aktivovat aplikaci si můžete v naší administraci v sekci **Nastavení** -> **Aplikace** -> **Přidat aplikaci** -> **Upgates**. 
Pro aktivaci aplikace budete potřebovat přístupové údaje k API rozhraní Upgates. Tyto údaje získáte v administraci svého obchodu v sekci **Doplňky** ->
**API**.

Více informací o API přístupech v e-shopovém řešení Upgates naleznete na adrese [https://www.upgates.cz/api-v2 ↗️](https://www.upgates.cz/api-v2) nebo v 
oficiální dokumentaci na [https://upgatesapiv2.docs.apiary.io ↗️](https://upgatesapiv2.docs.apiary.io)

### Vytvoření přístupových údajů 

Pro úspěšné napojení na Upgates potřebujete vytvořit si nový Token. Postup vytvoření nového tokenu, pokud již nemáte existující, je následující:

![Upgates](/img/application/upgates/upgates2.png)

1. Nový token si vytvoříte v sekci **API** kliknutím na tlačítko **+ Nové**. 
2. Do pole **Název** zadejte textový popis, který Vám pomůže identifikovat token.
3. Vyberte oprávnění, které tento token bude nabízet. Pro správnou funkčnost systému potřebujeme vybrat minimálně:
	* **Objednávky** -> **Čtení a  zápis**
	* **Produkty** -> **Čtení a  zápis**
	* **Kategorie** -> **Čtení a  zápis**
	* **Doprava** -> **Pouze čtení**
	* **Platba** -> **Pouze čtení**
	* **Webhooky** -> **Pouze čtení**
	* **Ceníky** -> **Pouze čtení**
	* **Majitel** -> **Pouze čtení**
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
