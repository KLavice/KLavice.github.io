var player;
var random;
var computer;

player = window.prompt("Ecrivez pierre, feuille ou ciseaux");
player = player.toLowerCase();
random = Math.random();

if(random < 1 / 3)
{
    computer = 'pierre';
}

else if(random < 2 / 3) 
{
    computer = 'feuille';
}

else
{
    computer = 'ciseaux';
}

document.write("<h2>Choix de l'ordinateur : <strong>" + computer + "</strong></h2>");

if(player==computer)
{
	document.write("<h1>Egalité</h1>");
	var image = document.createElement("img");
	image.src = "images/balance.gif";
	document.body.appendChild(image);
}

else
{
	switch(computer)
	{case "pierre" : 
		if (player == "feuille")  
			{document.write("<h1>Gagné !</h1>");
			var image2 = document.createElement("img");
			image2.src = "images/trophy.gif";
			document.body.appendChild(image2);
			}
		else
			{document.write("<h1>Perdu !</h1>");
			var image3 = document.createElement("img");
			image3.src = "images/triste.gif";
			document.body.appendChild(image3);
			}
		break;
	case "feuille" :
        if (player == "ciseaux")  
			{document.write("<h1>Gagné !</h1>");
			 image2 = document.createElement("img");
			 image2.src = "images/trophy.gif";
			 document.body.appendChild(image2);
			}
		else
			{document.write("<h1>Perdu !</h1>");
			image3 = document.createElement("img");
			image3.src = "images/triste.gif";
			document.body.appendChild(image3);
			}
		break;
    case "ciseaux" :
            if (player == "pierre")  
            	{document.write("<h1>Gagné !</h1>");
				image2 = document.createElement("img");
				image2.src = "images/trophy.gif";
				document.body.appendChild(image2);
				}
            else
            	{document.write("<h1>Perdu !</h1>");
				image3 = document.createElement("img");
				image3.src = "images/triste.gif";
				document.body.appendChild(image3);
				}
            break;
		}
}