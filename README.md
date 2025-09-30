# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Sofie Maters

  #### Je startniveau:
  Blauw

  #### Je focus:
  Surface plane
 
</details>




## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.malibudrinks.com/nl-nl/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Homepagina

  <img src="readme-images/www.malibudrinks.com_nl-nl_ (1).png" width="375px" alt="De homepagina van Malibu">

  #### Screenshot(s) van de tweede pagina (small screen):
  Malibu drankjes pagina
  <img src="readme-images/www.malibudrinks.com_nl-nl_drinks_.png" width="375px" alt="De drankjes pagina van Malibu">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  Ik vond het persoonlijk erg lastig en onbegrijpelijk om hiermee te werken. 
  De screenreader las de hele tijd elk woord voor, ook de woorden die niet nuttig waren. In het hamburger menu staan bijvoorbeeld afbeeldingen in een carousel, hij leest daarin elke tekst 3x voor wat heel storend is. 

  Meerdere keren als ik een zin of een woord naar onder wilde gaan, vloog de screenreader naar boven, en klopte de volghorde niet meer. Ook leeest hij vaak oppeens letters op ipv woorden of zinnen. Dit veranderd de hele tijd oppeens. 

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>


## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  De Html in elkaar zetten ging best prima, wel loop ik tegen wat punten aan, ik heb een bewegende banner op 
  mijn gekozen site, maar heb geen idee hoe ik die maak. Ik mis ook een filmpje die op mijn site staat.
  Die staat namelijk niet bij de gedownloade items:
   <img src="images/Scherm­afbeelding 2025-09-11 om 19.58.38.png" alt="Scherm­afbeelding van header op malibu site">

  dus ik moet nog even uitzoeken hoe ik die kan krijgen.
  Ook mis ik de iconen op de site, dus de sterren: 
  <img src="images/Scherm­afbeelding 2025-09-11 om 20.00.56.png" alt="schermafbeelding van sterren op malibu site">

 en mis ik de social media iconen.
<img src="images/Scherm­afbeelding 2025-09-11 om 20.01.05.png" alt="schermafbeelding van social media iconen op malibu site">

ik denk dat het het beste is als ik die gewoon zelf namaak op illustrator maar ik moet nog even kijken. 
ik ben alleen nog niet begonnen aan de carousel, maar daar wil ik later even naar kijken.

Alle opmerkingen die ik op mijn code heb of dingen die er nog in moeten heb  ik in opmerkingen erbij gezet.


  ### Agenda voor meeting
  
  Vragen: 
  - Hoe maak ik de begwegend banner?
  - Hoe haal ik de iconen van de site die niet in de afbeeldingen mee werden gegeven?
  - Hoe zet ik bijna alles op mijn site in uppercase? type in dan in uppercase in mijn html?
  


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Dit kan je opzoeken op code.pen
  - je kan een icoon als svg downloaden op https://www.svgrepo.com
  - De tekst kan je hoofdletters maken in CSS text-transform uppercase, dat doe je bijv zo: h2 {text-transform: uppercase;

  Extra punten:
}
  - Probeer minder divs te gebruiken in je code, dit kan je oplossen met een section, daarna voeg je een h2 element toe die je op hidden zet.
  - Helaas mag je geen classes gebruiken, dus dat wordt n:th of type.
  - In de footer kan je gebruik maken van een list (ul met li) en met linkjes (a).

</details>


## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik heb de eerste pagina bijna helemaal af, ik moet nog een paar dingen zoals het hamburgermenu en ik moet nog wat dingen aanpassen. wat minder goed ging was dat ik met classes heb gewerkt, wat dus niet de bedoeling was. Het was wel een tegenvaller dat ik dit nu helemaal moet aanpassen. Ook lukte heb downloaden van mijn font niet, ik heb een student assistent er nog een berichtje over gestuurd, maar het heeft niet echt geholpen.
  <img src="readme-images/Scherm­afbeelding 2025-09-30 om 11.23.18.png" alt="screenshot van de site wat de student assistent als voorbeeld stuurde">.e
  


## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Mijn site is meer toegangkelijk omdat:

  - Ik gebruik consistend een 'alt' bij elke afbeelding, op de orginele Malibu site wordt dit niet gedaan, waardoor het minder toegangkelijk wordt voor mensen die een screenreader gebruiken.
  - ik gebruik header, main, section, article en een footer. De Malibu site is opgedeeld in divs, dit wordt ook lastiger voor screenreaders om te begrijpen.
  - ik heb mijn menu als nav met ul, li en a aangegeven, wat de semantische manier is om het te doen, de screenreader herkent dit als navigatie. Op de Malibu site zitten de meeste menu items in verkeerde containers.
  - ik heb logische H1,H2,H3 en H4 gebruikt, terwijl ze op de Malibu site van H2 naar H5 naar H3 springen.


</details>


## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/Scherm­afbeelding 2025-09-30 om 13.29.40.png" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Hoe ik een bewegende banner maak:
  <img src="readme-images/Scherm­afbeelding 2025-09-30 om 13.30.28.png" alt="bewegend banner">

  Hoe ik een goede slider maak:
  <img src="readme-images/Scherm­afbeelding 2025-09-30 om 13.30.43.png" alt="slider">

  Hoe ik te werk ga met nth-of-type:
  <img src="readme-images/Scherm­afbeelding 2025-09-30 om 13.31.14.png" alt="nth-of-type">

  Hoe ik svg iconen van een site haal:
  <img src="readme-images/Scherm­afbeelding 2025-09-30 om 13.34.19.png" alt="svg iconen">

  Hoe ik een slider maak waarbij je het lettertype aan kan passen:
  <img src="readme-images/Scherm­afbeelding 2025-09-30 om 13.34.32.png" alt="Lettergrootte slider">


  ### Dit was lastig/Is niet gelukt:
  Het helemaal uitwerken van het hamburgermenu, die van mij:
  <img src="readme-images/Scherm­afbeelding 2025-09-30 om 13.36.43.png" alt="hamburgermenu">
  hoe die hoort:
  <img src="readme-images/Scherm­afbeelding 2025-09-30 om 13.38.24.png" alt="hamburgermenu 2">

  De slider is niet helemaal identiek, die van mij:
  <img src="readme-images/Scherm­afbeelding 2025-09-30 om 13.30.43.png" alt="slider">
  hoe die hoort:
  <img src="readme-images/Scherm­afbeelding 2025-09-30 om 13.40.25.png" alt="slider 2">



</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  1. https://codepen.io/fullcircledesign/pen/bGxJLRq (Bewegende banner)
  2. https://chatgpt.com/share/68dba8f8-c8d4-8001-bb8b-833c95f9f636 (Lettertype grootte slider)
  3. https://codepen.io/Sofie-Maters/pen/JoGKKVN (Carousel)

</details>