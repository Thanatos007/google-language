/* global $ */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// Fill In the invisible google search tool with your language choice and prepare for translate
var lang = ""
var text= ""


function fillBox(lang){
  document.getElementById("gsc-i-id1").value = "";
  document.getElementById("gsc-i-id1").value = "Learn " + document.getElementById("click").text;
  document.getElementById("whatLang").innerHTML = "";
  document.getElementById("whatLang").innerHTML = "You will be translating English to Chinese";
  window.lang = "";
  window.lang = "zh";
  console.log(lang)
}

function fillBox1(lang){
  document.getElementById("gsc-i-id1").value = "";
  document.getElementById("gsc-i-id1").value = "Learn " + document.getElementById("click1").text;
  document.getElementById("whatLang").innerHTML = "";
  document.getElementById("whatLang").innerHTML = "You will be translating English to German";
  window.lang = "";
  window.lang = "de";
  console.log(lang)
}

function fillBox2(lang){
  document.getElementById("gsc-i-id1").value = "";
  document.getElementById("gsc-i-id1").value = "Learn " + document.getElementById("click2").text;
  document.getElementById("whatLang").innerHTML = "";
  document.getElementById("whatLang").innerHTML = "You will be translating English to Russian";
  window.lang = "";
  window.lang = "ru";
  console.log(lang)
}

function fillBox3(lang){
  document.getElementById("gsc-i-id1").value = "";
  document.getElementById("gsc-i-id1").value = "Learn " + document.getElementById("click3").text;
  document.getElementById("whatLang").innerHTML = "";
  document.getElementById("whatLang").innerHTML = "You will be translating English to Spanish";
  window.lang = "";
  window.lang = "es";
  console.log(lang)
}

// Translate

// var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170604T224201Z.b0e5379729c73326.be8be670352adf3d9f5c420925735c13cfc81864&text=hello&lang=en-es&format=plain&options=1&callback=translatedText";
// function translated(url){
//   var translatedText = 
  
// }
// console.log();

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170604T224201Z.b0e5379729c73326.be8be670352adf3d9f5c420925735c13cfc81864&text=hello&lang=en-es&format=plain&options=1&callback=translatedText", false);
// xhr.send();
// console.log(xhr.response);
// console.log(xhr.status);
// console.log(xhr.statusText);
// var data = xhr.response;
function translatedText(data){
  var word = data;
  console.log(word);
  document.getElementById("finalWord").innerHTML=word.text[0];
}

function searchWord(){
                  
            //Define text
            window.text = ""
            window.text = document.getElementById("inputText").value;
            //Create a SCRIPT element.
            var script = document.createElement("script");
 
            //Set the Type.
            script.type = "text/javascript";
 
            //Set the source to the URL the JSON Service.
            script.src = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170604T224201Z.b0e5379729c73326.be8be670352adf3d9f5c420925735c13cfc81864&text="+text+"&lang=en-"+lang+"&format=plain&options=1&callback=translatedText";
 
           //Append the script element to the HEAD section.
            document.getElementsByTagName("head")[0].appendChild(script);
            return false;
        }









