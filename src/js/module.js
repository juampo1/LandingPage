/**
 * Acá escribo la lógica de mi módulo
 */
// alert("Hola Bootcamp!");

// Ejemplo de clase
// class Bootcamp {
//   hola() {
//     console.log('Hola desde la consola')
//   }
// }
// let b = new Bootcamp();
// b.hola();


// Ejemplo de función asíncrona
// async function test() {
//   return 'Este es el resultado!';
// }

// Usando then
// test().then(function (result) {
//   console.log(result)
// })

// usando await
// async function callTest() {
//   let result = await test();
//   console.log(result);
// }

// callTest();

class Contact {

  constructor(name, email, tech, message) {
    this.Name = name;
    this.email = email;
    this.Tech = tech;
    this.Message = message;
  }


}

// var local = localStorage.getItem('Contacts') ? JSON.parse(localStorage.getItem('Contacts')) : []; 
var contacts = [];
var form = document.getElementById('contact-form');
const modal = document.getElementById('modal-dialog');
const closeButton = document.getElementById('close-modal');

function toggleModal() {
  // hide or show the modal
  modal.classList.toggle('hidden');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  var name = document.getElementById('Name').value;
  var email = document.getElementById('Email').value;
  var tech = document.getElementById('Tech').value;
  var message = document.getElementById('Message').value;

  var contact = new Contact(name, email, tech, message);
  contacts.push(contact);
  console.log(contact);
  localStorage.setItem('Contacts', JSON.stringify(contacts));

  form.reset();
  toggleModal();
  closeButton.addEventListener('click', toggleModal);
})