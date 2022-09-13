/*
Ex-2:
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the
into the local storage.
*/

let divElem=document.createElement('div');


let text;
let val=localStorage.getItem('text')
if (val==null){
    text=document.createTextNode('This is an editable text');
}
else{
    text=document.createTextNode(val)

}
divElem.appendChild(text);

divElem.setAttribute('id', 'element')
divElem.setAttribute('style', 'border:2px solid red; width:165px; margin:30px; padding:25px;');

let container=document.querySelector('.container');
let heading=document.getElementById('head2');

container.insertBefore(divElem, heading)

divElem.addEventListener('click', function() {
    let lenTextArea=document.getElementsByClassName('textarea').length;
    if (lenTextArea==0){
    let html = element.innerHTML;
    divElem.innerHTML = `<textarea class="textarea form-control" class="textarea" id="textarea" rows="3"> ${html}</textarea>`
    }
    let textArea=document.getElementById('textarea')
    textArea.addEventListener("blur", function(){
        element.innerHTML=textArea.value;
        localStorage.setItem('text',textArea.value)
    })

})