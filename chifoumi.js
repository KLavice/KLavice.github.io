var player;
var random;
var computer;

player = window.prompt('Choisissez pierre, feuille ou ciseaux');
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


document.write("<p>Choix de l'ordinateur : <strong>" + computer + "</strong></p>");
if(player==computer)
{
	document.write("égalité");
	
}
else
{
	switch(computer)
	{case "pierre" : 
		if (player == "feuille")  
		{document.write("gagné")}
		else
		{document.write("perdu")}
		break;
	case "feuille" :
        if (player == "ciseaux")  
		{document.write("gagné")}
		else
		{document.write("perdu")}
		break;
    case "ciseaux" :
            if (player == "pierre")  
            {document.write("gagné")}
            else
            {document.write("perdu")}
            break;
		}
}