/* Variables */
var gdpr_accepted = false;
var debugging = false; /*  REMOVE ON FULL RELEASE!!! */

function gotoreservation(){
    window.location.replace('varaa.html');
}
function gotohome(){
    window.location.replace('index.html');
}
function gotolomake(){
    window.location.replace('lomake.html');
}
function popupgdpr(){
    if(debugging) return;
    gdpr_accepted = confirm("Sivumme noudattaa EU:n GDPR tietosuoja vaatimusta. Hyväksytkö tietojesi käytön tällä sivulla ja pakollisten tietojen tallentamisen?");
    /* IF Accepted */

    /* ELSE */
}
function place_footer(){
    var footer = '\
        <div class="foot-top"></div> \
        <div class="div-info-p"> \
        <h2 style="padding-top: 4%;">MEISTÄ</h2> \
        <p class="p-info">Olemme olleet matkustus alalla jo monia vuosia.</p> \
        <p class="p-info">Meidän paketti hinnat ovat alan alhaisimpia!</p> \
        </div> \
        <div class="div-info-contact"> \
        <h2>Kysymyksiä?</h2> \
        <p class="p-info">Ota yhteyttä meihin</p> \
        <button onclick="gotolomake();">Siirry lomakkeeseen</button> \
        </div>';
    document.getElementById("place-footer-here").innerHTML = footer;
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function etusivu_generate(custom_destination = false){
    var num = getRndInteger(1, 5); var destinations = [];
    if(custom_destination){
        var searchresult = document.getElementById("etsi").value;
        if(Object.keys(searchresult).length == 0) { destinations = ["Cambodia", "Nigeria", "Pudasjärvi", "Mongolia", "Kazakhstan"]; }
        document.getElementById("etsi").value = "";
        destinations.push(searchresult);
        destinations.push(searchresult);
        destinations.push(searchresult);
    }
    else
    {
        destinations = ["Cambodia", "Nigeria", "Pudasjärvi", "Mongolia", "Kazakhstan"];
    }
    /* TO DO: FOR LOOP JOKA TEKEE TÄMÄN NOPEASTI */
    for(let x = 1; x <= 5; x++) {
        num += 1;
        if(num > 4) {num = 1;}
        if(num <= 0) {num = 4;}

        var price = 311.76 * num;
        let input = ' \
        <div class="destination"> ' +
        '<img class="destination-img" alt="Destination image"src="kuvat/'+ num.toString() +'.jpg">' + '\
        <div class="destination-info"> \
            <h2 class="destination-info-h2">'+ destinations[num].toString() +'</h2> \
            <p>Suited for: Students, couples and business</p> \
            <p>Some info here. Short blah blah blah, blah blah</p> \
            <div class="destination-stars"> \
                <ion-icon name="star"></ion-icon> \
                <ion-icon name="star"></ion-icon> \
                <ion-icon name="star"></ion-icon> \
                <ion-icon name="star"></ion-icon> \
                <ion-icon name="star-half"></ion-icon> \
                <span>('+(num*601*x)+' arvostelua)</span> \
            </div> \
        </div> \
        <div class="destination-choose"> \
            <span>Kokonaishinta alkaen: </span> \
            <span class="destination-price">'+ price.toString() +' e</span> \
            <button onclick="gotoreservation()">Katso tarjous</button> \
        </div> \
        </div> \
        ';
        document.getElementById("dest-list").innerHTML += input;
    }
    document.getElementById("dest-list").innerHTML += '        <button id="remove-me" class="lisaa-nappi" onclick="lisaakohteita()">Lisää kohteita</button>';
}
function lisaakohteita(){
    etusivu_generate();
    document.getElementById("remove-me").remove();
}
function etsikohteita(){
    document.getElementById("dest-list").innerHTML = "";
    etusivu_generate(true);
}
