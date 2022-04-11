var contactAdd = JSON.parse(localStorage.getItem('contactList')) || [];

var favouritesList = JSON.parse(localStorage.getItem('favouritesList')) || [];

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

        var td4 = document.createElement('td');
        td4.innerText = 'Add to fav';
        td4.style.color = 'red';
        td4.style.cursor = 'pointer';

        td4.addEventListener('click', function() {
            favouritesList.push(contact);
            localStorage.setItem('favouritesList', JSON.stringify(favouritesList));
            alert(`added succesfully ${contact.name}`);
        });
        row.append(td1, td2, td3, td4);
        document.querySelector('#tableBody').append(row);
    });
}

window.addEventListener('load', function() {
    displayData(contactAdd);
});

