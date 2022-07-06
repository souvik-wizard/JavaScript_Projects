
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addName = document.getElementById("addName");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }


  let titleObj = {
    title: addName.value,
    text: addTxt.value
  }


 let regex=/^[a-zA-Z]/
 if (regex.test(addTxt.value)&& regex.test(addName.value)){
  // console.log('You can add now')
  
  notesObj.push(titleObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addName.value = "";
  // console.log(notesObj);
  addName.classList.remove('is-invalid')
  addTxt.classList.remove('is-invalid')

  showNotes();
}
else {
  addName.classList.add('is-invalid')
  addTxt.classList.add('is-invalid')
}
  
})
    
// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
    <div class="noteCard my-3 mx-3 card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title"> ${element.title} </h5>
        <p class="card-text"> ${element.text} </p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
    </div>
</div>`;

  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use " Add " section above to add your places.`;
  }
}

// Function to delete a note
function deleteNote(index) {
  // console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

//For search button

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

  let inputVal = search.value.toLowerCase();
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("h5")[0].innerText.toLowerCase();
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }

  })
})
