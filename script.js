let aktivCuccok = { 'gulyaslevesTomb': false, 'gyumolcslevesTomb': false, 'huslevesTomb': false, 'paloclevesTomb': false, 'ragulevesTomb': false, 'gombalevesTomb': false,
'toltottKaposztaTomb': false, 'porkoltTomb': false,  'rakottkrumpliTomb': false, 'csirkepaprikasTomb': false, 'csirkecombTomb': false,
'palacsintaTomb': false, 'tiramisuTomb': false, 'somloiTomb': false, 'piteTomb': false, 'muffinTomb': false, 'sajtTortaTomb': false,
'gulyaslevesAr': 1000, 'gyumolcslevesAr': 1200, 'huslevesAr': 800, 'ragulevesAr': 1000, 'paloclevesAr': 1300, 'gombalevesAr': 1550,
'toltottKaposztaAr': 1490, 'porkoltAr': 1150, 'rakottkrumpliAr': 950, 'csirkepaprikasAr': 800, 'csirkecombAr': 800,
'palacsintaAr': 400, 'tiramisuAr': 800, 'somloiAr': 1200, 'piteAr': 1200, 'muffinAr': 800, 'sajtTortaAr': 2000,
'cocacolaTomb': false, 'cappyTomb': false, 'szentkiralyiTomb': false, 'fantaTomb': false, 'spriteTomb': false, 'liptonTomb': false, 'redbullTomb': false,
'soproniTomb': false, 'dreherTomb': false, 'staropramenTomb': false, 'somersbyTomb': false, 'whiskyTomb': false, 'heinekenTomb': false,
'cocacolaAr': 400, 'cappyAr': 550, 'szentkiralyiAr': 200, 'fantaAr': 350, 'spriteAr': 300, 'liptonAr': 400, 'redbullAr': 300,
'soproniAr': 350, 'dreherAr': 400, 'staropramenAr': 550, 'somersbyAr': 500, 'whiskyAr': 600, 'heinekenAr': 450,
'elsoNapimenuTomb': false, 'elsoNapimenuAr': 3500, 'masodikNapimenuTomb': false, 'masodikNapimenuAr': 3999, 'harmadikNapimenuTomb': false, 'harmadikNapimenuAr': 4001, 'negyedikNapimenuTomb': false, 'negyedikNapimenuAr': 3000};
let osszeg = 0;
function nyomasnal(ertek) {
    var ertektomb = ertek + "Tomb"
    if (aktivCuccok[ertektomb] == false) {
        aktivCuccok[ertektomb] = true;
        document.getElementById(ertektomb).style.backgroundColor = "rgba(65 , 15, 22,0.3)";
        if (ertektomb != "elsoNapimenuTomb" && ertektomb != "masodikNapimenuTomb" && ertektomb != "harmadikNapimenuTomb" && ertektomb != "negyedikNapimenuTomb") {
          document.getElementById(ertektomb).style.border = "4px solid #ee3340";
        }
        osszeg = osszeg + aktivCuccok[ertek + "Ar"]
        document.getElementById("osszeg").innerHTML = osszeg + "Ft"
    } else  {
        aktivCuccok[ertektomb] = false;
        document.getElementById(ertektomb).style.backgroundColor = "#56494E";
        if (ertektomb != "elsoNapimenuTomb" && ertektomb != "masodikNapimenuTomb" && ertektomb != "harmadikNapimenuTomb" && ertektomb != "negyedikNapimenuTomb") {
          document.getElementById(ertektomb).style.border = "none";
        }
        osszeg = osszeg - aktivCuccok[ertek + "Ar"]
        document.getElementById("osszeg").innerHTML = osszeg + "Ft"
    }

    if  (aktivCuccok['gulyaslevesTomb'] == true || aktivCuccok['gyumolcslevesTomb'] == true || aktivCuccok['huslevesTomb'] == true || aktivCuccok['paloclevesTomb'] == true || aktivCuccok['ragulevesTomb'] == true || aktivCuccok['gombalevesTomb'] == true) {
        document.getElementById('levesekTomb').style.backgroundColor = "rgba(65 , 15, 22,0.8)";
    } else {
        document.getElementById('levesekTomb').style.backgroundColor = "#56494E";
    }

    if  (aktivCuccok['toltottKaposztaTomb'] == true || aktivCuccok['porkoltTomb'] == true || aktivCuccok['rakottkrumpliTomb'] == true || aktivCuccok['csirkepaprikasTomb'] == true || aktivCuccok['csirkecombTomb'] == true) {
      document.getElementById('foetelTomb').style.backgroundColor = "rgba(65 , 15, 22,0.8)";
    } else {
      document.getElementById('foetelTomb').style.backgroundColor = "#56494E";
    }

    if  (aktivCuccok['palacsintaTomb'] == true || aktivCuccok['tiramisuTomb'] == true || aktivCuccok['somloiTomb'] == true || aktivCuccok['piteTomb'] == true || aktivCuccok['muffinTomb'] == true || aktivCuccok['sajtTortaTomb'] == true) {
      document.getElementById('desszertTomb').style.backgroundColor = "rgba(65 , 15, 22,0.8)";
    } else {
      document.getElementById('desszertTomb').style.backgroundColor = "#56494E";
    }

}

function rendeleselohozas() {
  var urlapdiv = document.getElementById("urlapdiv");
  urlapdiv.style.zIndex = 1;
  urlapdiv.style.backgroundColor = "rgba(0, 0, 0, 80%)";
}

document.addEventListener('click', function handleClickOutsideBox(event)
{
  const urlaptarolo = document.getElementById('bekeres');
  const rendelestarolo = document.getElementById('rendelesgomb');
  var aktivurlap = false;

  if (!rendelestarolo.contains(event.target)) {
    aktivurlap = true;
  }

  if (!urlaptarolo.contains(event.target) && aktivurlap) {
    urlapdiv.style.zIndex = -1;
    urlapdiv.style.backgroundColor = "rgba(0, 0, 0, 0%)";
    aktivurlap = false;
  }
});
