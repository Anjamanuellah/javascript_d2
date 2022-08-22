

//js => evenement 
//selecteur : pour cibler un element => modifier son style
/*recherche :queryselector() permet de selectionner une balise grace a un selecteur css / un seel element
              getElementByID()sel une balise ayant un atrribuy id
   selection=>getElementByClassNAme() sel une balise par un identifiant de class css contenu dans l attribut html: class
   selection=>tagName = balise ex un h1 h2
*/
/*
var header = document.querySelector('button');
console.log(header);
*/
/*
var header = document.getElementsByClassName('button');
console.log(header);
*/
//console.log(document.getElementsByClassName("bouton"));         
//console.log(document.querySelector("button"))
//console.log(document.getElementById("btn")); //bouclena rehefa misy collection
//console.log(document.getElementsByTagName("button")); // bouclena

//fomba fijerena evenement iray
//evenement direct
/*
btn = document.getElementById('btn');
btn.onclick = function() {
  //console.log("click");  
  alert("test"); 
}
//alert("test");       //mitovy am console ihany ny asany

btn.addEventListener("click" , function(){   //antony apiasana azy
   console.log("hello");
 });
*/
var a = document.getElementById("text1");
var b = document.getElementById("text2");
var btn = document.getElementById("btn");
var spn = document.getElementById("resultat")
var signe = document.getElementById('signe')

btn.onclick = function() {
   var resultat = parseInt(a.value) + parseInt(b.value);
   if (signe.value === "*") {
      resultat = a.value * b.value;
   }

   if (signe.value === "-") {
      resultat = a.value - b.value;
   }

   if (signe.value === "/") {
      resultat = a.value / b.value;
   }
   //console.log("ok");
   // console.log(parseInt(a.value) + parseInt(b.value)); //raha te anao + am js dia : mampiasa parseint
   spn.innerText = resultat
}

/*
btn.onclick = function() {
   //console.log("ok");
   console.log(b.value);
}
*/
//mametraka html ao anaty balise iray a.inner
/*ex:a.innerHTML = "<span>hello</span>"
a.innerText = "Text"
*/

