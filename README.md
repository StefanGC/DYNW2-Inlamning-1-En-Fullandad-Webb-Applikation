# [DYNW2] Inlämning 1: En fulländad webb-applikation

NASA fick nys om att ni hade byggt några smått fantastiska klientgränsnitt till deras foto-API, och tänkte att eftersom ni hade koden klar kanske ni var intresserade av att hjälpa dem utveckla nästa API? På era vägnar tackade vi såklart ja!

Till våren kommer NASA testa 3 st nya rovers (rymdsonder), som de eventuellt ska skicka upp till Mars. De vill att ni bygger ett nytt REST API som kan skicka information om de nya sonderna och även att ni bygger ut ett klientgränsnitt för att visa detta


### Tips på tillvägagångssätt:
Börja med att identifiera och skissa upp hur ditt nya API skall fungera. Med detta menas vilka åtkomstpunkter (endpoints) som skall finnas med samt hur logiken skall ungefär ska se ut. Vilka klasser behöver du skapa?

Både klientgränsnittet och REST API:et ska ligga i samma GIT Repo, använd med fördel följande läng för att skapa ett nytt repo från GitHub Classroom:
 
Ett fulländad webb-applikation på GH Classroom (Länkar till en externa sida.)

**Kom ihåg:** Ditt repo måste vara privat, publika repon kommer att underkännas. Om du inte använder Classroom länken så måste du bjuda in rättande lärare (Lyret och Pickadolly) till ditt repo manuellt.


### Krav på rapporten
Rapporten ska innehålla:
- En länk till gitrepot med implementationen av REST APIet och ett tillhörande klientgränsnitt.
- En kort dokumentation över åtkomstpunkterna i API:et och vad dom retunerar för information.
- En kort reflektion över utformningen av API:et för att uppfylla kraven, och över användarbetheten hos klientgränsnittet; Svara förslagsvis på om åtkomstpunkterna väl valda för att lösa uppgiften, samt vilket syfte och målgrupp som kliengränsnittet är utvecklat för? Tänk på att motivera dina ställningstaganden för att uppnå högre betyg på uppgiften.
 

### Krav på ditt API:
- Din API lösning ska vara byggt i ASP.NET Core, version 3.0 eller 3.1.
- Din ASP.NET applikation ska tillhandahålla minst 4 st åtkomstpunkter (endpoints/actions) som går nå via klientanrop
- Dessa åtkomspunkter skall endas använda verbet GET.
- Namnet på den rymdsond (rover) du vill hämta information av skall skickas med i alla anrop som en parameter. Svaret skall då gälla för den specifika rovern.
- Ni skall använda er av objektorienterade principer i uppbyggnad av ert API:et, varje ny rover skall instansieras via en ”Rover”-klass.
 

### Krav på klientgränsnittet:
- Du kan utgå från ditt egna klientgränsnitt som du byggde på hackathonet, eller en annan grupps gränsnitt. Du kan också bygga ett nytt eget gränsnitt.
- Gränsnittet ska vara utformat på ett användarvänligt sätt för att visa information från NASAS Mars Rover Photos API samt ditt egna, nyutvecklade, REST API i ASP.NET Core.
- Samtliga endpoints (4) i ditt REST API skall anropas minst en gång ifrån klientgränsnittet ni byggde under workshopen,

**Tips:** Bygg ut ditt kliengränsnitt med en ny presentations-sida där ni visar upp information kring alla nya rovers i ditt egna REST API.
