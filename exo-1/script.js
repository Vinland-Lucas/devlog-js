// you can write js here
console.log('hello from file');

//le prompt permet de demander à l'utilisateur de saisir une valeur lorsqu'il charge la page
let kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
console.log("La température est de", kelvins, "Kelvins");

// La température en Celsius est inférieure de 273 degrés à celle en Kelvins.
// Comme nous avons déjà déclaré la température en Kelvins et on sait que la conversion en celsius se fait en soustrayant 293.
// On déclare alors la variable celsius en effectuant cette opération.
let celsius = kelvins - 293;
console.log("La température en Celsius est de", celsius, "Celsius");

// La température en Fahrenheits s'exprime avec la formule : Fahrenheits = Celsius * (9/5) + 32
// Comme nous avons déjà déclaré la température en Celsius dans une variable, nous avons juste à l'appeler et effectuer la formule ci-dessus
// On déclare alors une variable nommée Fahrenheits et on lui attribue l'opération ci-dessus en valeur.
let fahrenheits = celsius * (9/5) + 32;
console.log("La température en Fahrenheits est de", (Math.floor(fahrenheits)), "Fahrenheits");
// La méthode .floor renvoie le plus grand entier qui est inférieur ou égal à un nombre x
// La méthode .floor doit toujours être utilisée avec la syntaxe Math.floor(), on lui passe en paramètre(entre les parenthèses) le nombre/variable... que l'on veut qu'elle traite
// Dans notre càs, on appelle juste la méthode .floor et on lui passe en paramètre la variable fahrenheit vu qu'on souhaite que cette dernière renvoie un nombre entier
// On fait console.log(Math.floor(fahrenheits)) et le tour est joué.



