---
sidebar_position: 1
---

# Připojení do API
Do API rozhraní se přihlásíte pomocí svých přihlašovacích údajů do aplikace [`https://app.balikuj.cz`](https://app.balikuj.cz). Pokud jste zapomněli heslo, můžete si jej obnovit pomocí kliknutí na odkaz [`Zapomněli jste heslo?`](https://app.balikuj.cz/auth/forgot-password).

## Adresa API rozhraní
API rozhraní je dostupné na adrese [**`https://api.balikuj.cz/v1`**](https://api.balikuj.cz/v1).

## AUTH token
Pro práci s API rozhraním je třeba vygenerovat tzv. AUTH token, který se používá pro autentizaci u jednotlivých požadavků, které autentizaci vyžadují. AUTH token se generuje pomocí metody **`/Account/Login`**.

### Platnost AUTH tokenu
Při zaslání každé requestu do API rozhraní dojde k prodloužení platnosti tokenu o **2 hodiny**. Pokud nebude zaslán žádný request do API rozhraní do 2 hodin, dojde k automatickému odhlášení a AUTH token bude neplatný.

### Zadávání AUTH tokenu
AUTH token se zadává ke každému request do hlavičky **`X-BalikujAuthToken`**. Pokud neuvedete token do hlavičky každého requestu, dojde k chybě s HTTP stavovým kódem 401 s chybovou hláškou **`Token missing`**. Pokud zadáte neplatný nebo expirovaný token, dojde k chybě s HTTP stavovým kódem 401 s chybovou hláškou **`Invalid token`**.



## Přihlášení do API
Níže je uveden příklad přihlášení do API rozhraní ve formátu JSON. Pokud se přihlášení do API rozhraní nepovede, je vrácena také odpověď ve formátu JSON.

```json showLineNumbers
{
  "email": "info@email.cz",
  "password": "pa$$w0rd",
  "language": "cs"
}
```

Po úspěšném přihlášení je vrácen AUTH token:
```json showLineNumbers
{
    "authToken": "EF530E4306E3938EFEBE46969E4D21D8972AFE049CAD3B8AF800615AF6F9D649D52521120C1F52145701B817A78DDFD66625415A4FC9A6917146A8FB83706D0E",
    "expiresIn": "2024-01-19T20:30:01.691"
}
```

Takto získaný AUTH token přidejte do hlavičky **`X-BalikujAuthToken`** ke každému dalšímu requestu do API rozhraní.

## Odhlášení z API
Odhlášení z API rozhraní je možné pomocí metody **`/Account/Logout`**. Po úspěšném odhlášení je AUTH token zneplatněn a nelze jej již použít pro další requesty do API rozhraní.