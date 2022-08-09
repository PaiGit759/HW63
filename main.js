let counter=0;

let width_counter = 130;
let height_counter = 25;
let paddingTop_counter = 2;


let colors=["red", "green", "blue", "yellow"];


function colorChange() {
  let elements= document.getElementsByTagName('h1');
  for (i=0; i< elements.length; i++ ,width_counter++,height_counter++,paddingTop_counter++){
    elements[i].style.color = colors[counter%4];
    elements[i].innerHTML="Hello Class!";
    elements[i].style.border = "solid 2px red";
    elements[i].style.background = "lightgray";
    elements[i].style.width = "" + width_counter +"px";
    elements[i].style.height = "" + height_counter +"px";
    elements[i].style.textAlign = "center";
    elements[i].style.paddingTop = "" + paddingTop_counter + "px";

  }
  counter++;
}

function colorChange1() {
        let elements= document.getElementsByTagName('h1');
        for (i=0; i< elements.length; i++ ,width_counter--,height_counter--,paddingTop_counter--){

                if (width_counter <= 130) {
                        width_counter = 130;
                        height_counter = 25;
                         paddingTop_counter = 2;

                };
               
          elements[i].style.color = colors[counter%4];
          elements[i].innerHTML="Hello Class!";
          elements[i].style.border = "solid 2px red";
          elements[i].style.background = "lightgray";
          elements[i].style.width = "" + width_counter +"px";
          elements[i].style.height = "" + height_counter +"px";
          elements[i].style.textAlign = "center";
          elements[i].style.paddingTop = "" + paddingTop_counter + "px";
      
        }
        counter++;

      }