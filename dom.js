let btnPlusAll= document.querySelectorAll('.plus');
let btnMoinsAll= document.querySelectorAll('.moins');
let btnSupprimer = document.querySelectorAll('.supprimer');
let ajoutArticle = document.querySelector('.bouton_ajout');


btnPlusAll.forEach((btn) => {btn.addEventListener('click', augmenterQte)});
btnMoinsAll.forEach((btn) => {btn.addEventListener('click', diminuerQte)});
ajoutArticle.addEventListener('click', ajoutNouvelArticle);
btnSupprimer.forEach((btn) => {btn.addEventListener('click', Suppression)});

function augmenterQte() {
    this.previousElementSibling.value = parseInt(this.previousElementSibling.value) +1
    sousTotalPlus(this);
    Total();

}


function diminuerQte() {
    if ( this.nextElementSibling.value > 0){
        this.nextElementSibling.value = parseInt(this.nextElementSibling.value) -1;
        sousTotalMoins(this);
        Total();
    }
    
}

function sousTotalPlus(elt) {
    let prix = parseInt(elt.parentElement.nextElementSibling.innerText);
    let qte = parseInt(elt.previousElementSibling.value);
    let sous_total = prix * qte;
    elt.parentElement.nextElementSibling.nextElementSibling.innerText = sous_total + ' fr';

}
function sousTotalMoins(elt) {
    let prix = parseInt(elt.parentElement.nextElementSibling.innerText);
    let qte = parseInt(elt.nextElementSibling.value);
    let sous_total = prix * qte;

    elt.parentElement.nextElementSibling.nextElementSibling.innerText = sous_total + ' fr';
}

function ajoutNouvelArticle() {
    let nom= document.querySelector('.nom_ajout');
    let prix_ajout= document.querySelector('.prix_ajout');
    document.querySelector('.tableau').innerHTML  += '<tr> <td> <div class="label"> <div class="bloc_img"> <img src="images/gg-1.jpeg" alt="" class="image"> </div> <div> <p class="title">'+ nom.value +'</p> <p class="supprimer">Supprimer</p> </div> </div> </td> <td class=""> <button class="dec moins">-</button> <input type="text" class="quantite" value="1"> <button class="plus">+</button> </td> <td class="prix_unitaire"> '+ prix_ajout.value + ' fr</td> <td class="prix_soustotal">' + prix_ajout.value + ' fr</td> </tr>'
    loadElement();
}

function loadElement() {
    let btnPlusAll= document.querySelectorAll('.plus');
    let btnMoinsAll= document.querySelectorAll('.moins');
    let btnSupprimer = document.querySelectorAll('.supprimer');
    btnPlusAll.forEach((btn) => {btn.addEventListener('click', augmenterQte)});
    btnMoinsAll.forEach((btn) => {btn.addEventListener('click', diminuerQte)});
    btnSupprimer.forEach((btn) => {btn.addEventListener('click', Suppression)});
    
}

// fonction total


function Total() {
    let sousTotalElements = document.querySelectorAll('.prix_soustotal');
    let prix_tot = 0;

    sousTotalElements.forEach(element => {
        let value = parseInt(element.innerText);
        if (!isNaN(value)) {
            prix_tot += value;
        }
    });

    document.querySelector('.prix_total').innerText = prix_tot + 'fr';
}

// fonction supprimer
function Suppression() {
    let articleASupprimer= this.parentElement.previousElementSibling.parentElement.parentElement.parentElement;
    articleASupprimer.remove();
}


