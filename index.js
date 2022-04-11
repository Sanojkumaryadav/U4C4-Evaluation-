document.querySelector('#formBox').addEventListener('submit', myFunction);

var contactList = JSON.parse(localStorage.getItem('contactList')) || [];

function myFunction() {
    event.preventDefault();
    var contactObj = {
        name: document.querySelector("#name").value,
        phone: document.querySelector("#phone").value,
        type: document.querySelector("#type").value,
    };
    contactList.push(contactObj);
    localStorage.setItem('contactList', JSON.stringify(contactList));
    alert('Added contact to your contact list');
}