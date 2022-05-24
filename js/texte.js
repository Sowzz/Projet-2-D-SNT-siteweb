var i=0, text;
text = "L'histoire de Linux"

function typing() {
if(i<text.length){
  document.getElementById ("text").innerHTML += text.charAt (i);
  i++;
  setTimeout (typing,(75));
}
}
typing();
