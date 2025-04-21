# Designstudion – Ett komplett system för interaktiva 3D-modeller

Designstudion är ett komplett system för 3D-konfiguratorer, utvecklat för företag som vill ladda upp och redigera interaktiva 3D-modeller direkt på webben. På uppdrag av designstudion [Studio3D](https://studio3d.se/produkt/tjanster/designstudion/) har vi skapat en plattform som gör det enkelt för deras kunder att presentera och anpassa 3D-modeller online.

Systemet erbjuder en mängd verktyg för att hantera modellernas utseende, omgivningar, interaktivitet, AR-stöd och mycket mer.

Projektet bygger på flera moderna teknologier och ramverk, inklusive PostgreSQL, Go, JavaScript, Svelte och Three.js.

![3D-konfiguratorn](/the-design-studio-hero.webp)

## Viewer-komponenten
Kärnan i Designstudion är den interaktiva 3D-konfiguratorn. Den används både internt – där kunder hanterar sina modeller, testar olika scener och skapar material från texturer – och externt av slutanvändare, som kan rotera modeller, byta material, se mått, exportera och interagera i realtid.

Viewer-komponenten är framtagen för att visa upp högkvalitativa och realistiska modeller i en optimerad visuell miljö.

Konfiguratorn är byggd som en webkomponent, vilket gör den enkel att bädda in i andra webbapplikationer. Den möjliggör också skräddarsydda gränssnitt, där exempelvis användare kan byta modell eller material efter behov. Komponenten är vidareutvecklad från Googles model-viewer-bibliotek.

## Multitenant-arkitektur
Designstudion är byggd som ett tenantbaserat system, där flera separata kunder (tenanter) kan hantera sitt innehåll inom samma plattform. Samtidigt finns globala funktioner för administratörer på Studio3D – så kallade supertenanter – som behöver kunna få översikt över alla konton och vid behov navigera in i specifika tenanter utan att logga ut.

Systemet tillåter även att innehåll, som exempelvis material och inställningar, delas mellan olika tenanter, vilket är ovanligt i traditionella multitenant-lösningar. Detta ställer högre krav på databasstrukturen.

För att möta detta valde vi att använda en gemensam databas för alla tenanter, där varje innehåll och tenant identifieras med unika ID:n. Denna lösning ger systemet både flexibilitet och skalbarhet – tenanter hålls åtskilda, samtidigt som supertenanten kan agera övergripande där det behövs.

## Resultat
Projektet har resulterat i en kraftfull och konkurrenskraftig lösning för Studio3D. Konfiguratorn utgör en central del i framtidens sätt att presentera produkter digitalt. Med Designstudion har vi skapat ett fullfjädrat verktyg för att effektivisera skapandet och arbetsflödet kring interaktiva 3D-modeller – med fokus på flexibilitet, kvalitet och användarvänlighet.

