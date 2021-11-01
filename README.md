# Utiliser les paramètres d'URL

Dans server.js, remets la première version de requestHandler :

const requestHandler = (request, response) => {
console.log(request.url);
response.end('Hello Node.js Server!');
};

Tu vas devoir y intégrer url.parse.

Plus précisément, lorsque tu visiteras le serveur en passant des paramètres name et city dans l'URL, tu devras afficher un message personnalisé : Hello, <name> from <city>!, en remplaçant <name> et <city> par les paramètres récupérés de l'URL.

Ainsi, si tu visites http://localhost:8000/?name=Ringo&city=Liverpool, tu devras afficher Hello, Ringo from Liverpool!.

Attention : si aucun paramètre n'est fourni dans l'URL, l'attribut query de l'objet renvoyé par url.parse sera vide : {}. L'utilisateur obtiendra alors le message Hello, <name> from <city>!, à moins de prendre des précautions.

En bonus, tu peux tester si cet objet contient les clés name et city, de façon à afficher Please provide name AND city parameters si au moins l'un des deux paramètres est manquant. Pour rappel, on peut tester l'existence d'une clé age dans un objet person comme ceci :

if (person.age) {
// the age key exists
}

Quelques indications sur la structure du code :

- L'import du module url doit être fait en haut du fichier (juste sous celui de http),
- Le reste du code devra se trouver à l'intérieur de requestHandler.

Poste le code de server.js sur un Gist en guise de solution. Les correcteurs sont invités à tester les solutions sur leur machine.

# Critères d'acceptation

- L'application lance un serveur sur le port 8000
- Sur le navigateur, on peut voir Hello, <name> from <city>! si l'url est http://localhost:8000/?name=&city=
- En bonus, sur le navigateur, on peut voir Please provide name and city parameters si l'url est http://localhost:8000/ sans paramètres, ou avec un seul des deux paramètres.
