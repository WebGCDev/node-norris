# NODE NORRIS

Sfruttando l’api https://api.chucknorris.io/jokes/random creare un applicazione che scarica una battuta random, la aggiunge ad un file json norrisDb.json e la mostra all’utente.

Il file json quindi dovrà contenere la lista di tutte le battute scaricate nell’arco del tempo.
Per evitare che nodemon riavvii il server ogni volta che questo file viene modificato, aggiungete la seguente configurazione nel file package.json:
"nodemonConfig": {
"ignore": ["norrisDb.json"]
}

BONUS:
Quando viene scaricata una battuta, controllare che questa non sia già presente nel file json locale. Se lo è, caricare un altra battuta.
Buon lavoro!
