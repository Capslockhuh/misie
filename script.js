let factbtn1 = document.querySelector("#factbtn1");
let factbtn2 = document.querySelector("#factbtn2");
let factbtn3 = document.querySelector("#factbtn3");

let display = document.querySelector("#display");

factbtn1.addEventListener("click", () => {
    display.textContent = "Misie są wszystkożerne. Wszystkie uwielbiają smak miodu jednak każdy z gatunków ma inne preferencje kulinarne. Misie polarne gustują w mięsie fok, amerykańskie uwielbiają owoce leśne i larwy insektów, pandy głównie żywią się bambusem (choć nie pogardzą też małymi zwierzętami), a Michały Misie są uzalenione od kawy."
})

factbtn2.addEventListener("click", () => {
    display.textContent = "Największym zagrożeniem dla misi jest utrata środowiska naturalnego. Niechlubny udział w tym zjawisku ma wyrąb lasów, rolnictwo i powiększające się osady ludzkie."
})

factbtn3.addEventListener("click", () => {
    display.textContent = "Misie są bardzo inteligentne. Mają największe i najbardziej złożone mózgi ze wszystkich zwierząt o podobnej wielkości.Misie grizzly potrafią zapamiętywać miejsca łowów nawet po dziesięciu latach. Udało się także zaobserwować misie, które zacierały swoje ślady i ukrywały się za skałami aby zniknąć z pola widzenia myśliwych."
})