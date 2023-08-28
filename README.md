# GitHub Repository klónozásának lépésről lépésre történő útmutató

Ez a dokumentáció részletesen bemutatja, hogyan kell klónozni egy GitHub repository-t a saját számítógépedre. A klónozás során a távoli repository adatai lemásolódnak, így lehetővé válik a helyi fejlesztés és módosítások végrehajtása.

## Lépés 1: Repository URL megszerzése

Először is meg kell találni és másolni a GitHub repository URL-jét. Ezt a következőképpen teheted meg:

1. Látogass el a GitHub oldalra: https://github.com/
2. Keresd meg azt a repository-t, amelyet klónozni szeretnél.
3. Kattints a repository nevére a felső részen a navigációs sávban.
4/ A "Code" vagy "Kód" gombra kattintva nyílik egy legördülő menü.
5. Másold ki a repository URL-jét a megjelenő opciók közül. Ez általában egy HTTPS vagy SSH link lesz.
   
## Lépés 2: Git telepítése

Ha még nincs telepítve a Git a számítógépeden, akkor először telepítened kell. A Git telepítéséhez kövesd az alábbi lépéseket:

1. Látogass el a hivatalos Git weboldalra: https://git-scm.com/
2. Válaszd ki a megfelelő operációs rendszert (pl. Windows, macOS, Linux) és kövesd a telepítési utasításokat.
   
## Lépés 3: Parancssor vagy terminál megnyitása

Nyiss meg egy parancssor ablakot (Windows) vagy terminált (macOS és Linux) a számítógépeden. Ez a lépés lehetővé teszi a Git parancsok végrehajtását.

## Lépés 4: Repository klónozása

Most már klónozhatod a repository-t a GitHub-ról a saját számítógépedre a következő lépésekkel:

1.Változtasd meg a munkakönyvtárat arra a helyre, ahol a repository-t szeretnéd klónozni. Ehhez használhatod a cd parancsot (change directory).

```bash
cd eleresi/utvonal/a/munkakonyvtarhoz
```
2. Klónozd le a repository-t a megadott URL segítségével. Cseréld le az {URL} szót a korábban másolt GitHub repository URL-jére.

```bash
git clone {URL}
```
3. A klónozás befejeztével lépj be a repository mappájába.

```bash
cd repository-nev
```
Most már a repository tartalma klónozva van a számítógépedre és a munkádat elkezdheted.

## Összegzés

Ezzel a dokumentációval betekintést kaptál abba, hogy hogyan kell klónozni egy GitHub repository-t a saját számítógépedre. Ezekkel a lépésekkel könnyedén elérheted a repository tartalmát, és helyi fejlesztéseket végezhetsz rajta. Ne felejtsd el, hogy a repository URL-jét megszerezni és a Git telepítését először elvégezni kell a folyamat során.
