var contactAdd = JSON.parse(localStorage.getItem('contactList')) || [];

function displayData(contactAdd) {
    document.querySelector('tbody').innerHTML = '';
    contactAdd.forEach(contact => {
        var row = document.createElement('tr');

        var td1 = document.createElement('td');
        td1.innerText = contact.name;

        var td2 = document.createElement('td');
        td2.innerText = contact.phone;

        var td3 = document.createElement('td');
        td3.innerText = contact.type;

        row.append(td1, td2, td3,);
        document.querySelector('#tableBody').append(row);
    });
}
window.addEventListener('load', function() {
    displayData(contactAdd);
});