console.log("script.js connected");

let inputs = document.getElementById("inputs");
let ul = document.getElementById("list");
let addNameBtn = document.getElementById("add");
let clearListBtn = document.getElementById("clear");
let pickBtn = document.getElementById("pick");
let textBox = document.getElementById("names");
let pickedDisplay = document.getElementById('pickedDisplay');
let deleteThis = document.getElementsByClassName('deleteThis');
// let li = document.createElement('li');
let $ = function (selector) {
    return document.querySelector(selector);
};


// ********* ADD LI ELEMENT TO UL *********
names.addEventListener("keyup", function(event){

        if (event.keyCode === 13) {
            let names = document.getElementById("names").value;
            let li = document.createElement('li');
            li.contentEditable = 'true';
            let span = document.createElement('span');
            span.innerHTML = 'x';
            span.className = 'deleteThis';
            let sDel = '<span class="deleteThis">x</span>';
            if (textBox.value!==''){

                li.innerHTML = sDel + names;
                ul.appendChild(li);


                let list = $('#list').getElementsByTagName('span');
                for(let i = 0; i < list.length; i++){
                    let listItem = list[i];
                    listItem.addEventListener('click', deleteThisFunc);
                }

                console.log("names", names);
                console.log(ul.innerText);
            } else {
                console.log("nothing entered");
            }

            document.getElementById("names").value = '';

            // -- CONSOLE TESTS --
            console.log("enter pressed");
        }



});

// ************ PICK RANDOM FROM LIST ************
pickBtn.addEventListener("click", function(){

    // find the length of li elements in ul
    let liLength = ul.getElementsByTagName('li').length;
    let randomNum = Math.floor(Math.random() * liLength);
    let pickedLi = ul.getElementsByTagName('li')[randomNum].innerText;

    // -- DISPLAY PICKED NAME --
    $('#pickedTitle').style.display = "none";
    // pickedDisplay.innerText = pickedLi;
    pickedDisplay.innerText = pickedLi.substring(1);
    pickedDisplay.style.color = "rgb(21, 116, 71)";
    // -- CONSOLE TESTS --
    console.log("picked name", pickedLi);
    console.log("pick button clicked");

    // this.disabled = true;

});

pickedDisplay.addEventListener("click", function(){
    pickedDisplay.innerHTML="Name drawn will show here";
    pickedDisplay.style.color = "rgb(77, 77, 77)";

});


// ********* CLEAR LIST *********
clearListBtn.addEventListener("click", function(event){
    ul.innerHTML='';

    $('#pickedTitle').style.display = "block";
    pickedDisplay.innerText = '';


    // -- CONSOLE TESTS --
    console.log("clear list button clicked");
});





// ************ FUNCTIONS ************

// ---- DELETE THIS FUNCTION ----
function deleteThisFunc() {
    this.parentNode.remove(this);
}

document.getElementById("add").onclick = function () {

    let names = document.getElementById("names").value;


    if (textBox.value !== '') {
        /* When 'add' button is clicked make sure you add the name in the textBox.value to the list */
        /* Code copied from  names.addEventListener("keyup", function(event) that didn't seem to work */
        let li = document.createElement('li');
        li.contentEditable = 'true';

        li.innerHTML = '<span class="deleteThis">x</span>' + /*names*/ textBox.value;
        ul.appendChild(li);

        let list = $('#list').getElementsByTagName('span');
        for(let i = 0; i < list.length; i++){
            let listItem = list[i];
            listItem.addEventListener('click', deleteThisFunc);
        }

        console.log("names", names);
        console.log(ul.innerText);
        /***********************************************************************************************/
        // li.innerHTML = names;
        // ul.appendChild(li);
    } else {
        console.log("nothing entered");

    }

    document.getElementById("names").value = '';

    console.log("add name button clicked");
};
