/*
Version: 1.6
Last edited by: Natalia Pakhomova
Last edit date: 14/11/2021

Requires jQuery and Bootstrap
*/

let form_type = ""; // Can be either "list" for listing all cats page or "search" for search form page

class Cat {
    /*
    Class Cat - implements all cat functionality
    */
    // class properties
    id = 0; // Cat ID from the API
    name = ""; // Cat Name (string)
    breed = ""; // Cat Breed (string)
    color = ""; // Cat Colour (string)
    age = ""; // Cat Age (Int)
    sex = ""; // Cat sex (male/female)
    description = ""; // Cat description/info (text)
    photo = ""; // Cat photo URL

    // Class methods
    constructor(data) {
        /*
            Class constructor, receives cat data form the API
            Parameters: none
        */
        if (data.id) this.id = data.id;
        if (data.name) this.name = data.name;
        if (data.breed) this.breed = data.breed;
        if (data.color) this.color = data.color;
        if (data.age) this.age = data.age;
        if (data.gender) this.sex = data.gender;
        if (data.description) this.description = data.description;
        if (data.photo) this.photo = data.photo;
        this.buildHTML();
    }
    getGenderColor() {
        /*
        Method to return color depending on sex
        Parameters: none
        */
        return (this.sex == "male")?"#4ba1c8":"#dd00fe";
    }
    buildPhoto() {
        /*
        Method to build photo HTML
        Parameters: none
        */
        return (this.photo != "")?`<img class="w-100" src="${this.photo}" title="${this.name}" alt="${this.name}" width="300">`:'';
    }

    pluraliseAge() {
        /*
        Method returns "s" if cat's age is not 1 for use in texts like "X year[s] old"
        Parameters: none
        */
        return (this.age == 1)?'':'s';
    }

    buildHTML() {
        /*
        Method to build and insert's cat's HTML into the list
        Parameters: none
        */
        let cat = this;

        if (cat.id) {
            let html = `<div class="row cat-row pt-3">`; // START Row
            html += `<div class="col-12 col-md-4 pb-3">${cat.buildPhoto()}</div>`; // Col 1 (Photo)
            html += `<div class="col-12 col-md-8 pb-3">`; // START Col 2 (Data)
            html += `<div class="cat-name"><b>Name:</b> <em style="color: ${cat.getGenderColor()}">${cat.name}</em></div>`; // Name
            if (cat.breed) html += `<div class="cat-breed"><b>Breed:</b> <em>${cat.breed}</em></div>`; // Breed
            if (cat.color) html += `<div class="cat-color"><b>Colour:</b> <em>${cat.color}</em></div>`; // Breed
            if (cat.sex) html += `<div class="cat-sex"><b>Sex:</b> <em>${cat.sex}</em></div>`; // Sex
            if (cat.age) html += `<div class="cat-age"><b>Age:</b> <em>${cat.age} year${cat.pluraliseAge()} old</em></div>`; // Age
            if (cat.description) html += `<div class="cat-gdescription mt-3"><b>Description:</b><br> <em>${cat.description}</em></div>`; // Description
            html += `<button class="btn btn-primary btn-lg mt-3">Adopt ${cat.name}</button>`; // Adopt button
            html += `</div>`; // END Col 2
            html += `</div>`; // END Row
            let row = $(html);
            $('#searchResults').append(row);
            $('button', row).click(function () { cat.showAdoptForm(); });
        }
    }

    showAdoptForm() {
        /*
        Method to show adopiton modal form and fill in the data of cat
        Parameters: none
        */
        let cat = this;
        $('#InputID').val(cat.id);
        $('#InputCatName').val(cat.name);
        $('#CatPhoto').empty().append(cat.buildPhoto());
        $('#adoptDialog').modal('show');
    }
}

function listCats(data) {
    /*
    Build list of cats or show not found message
    */
    let resultsdiv = $('#searchResults');
    resultsdiv.empty();
    if (data.length) {
        // Got at least one cat, show table
        resultsdiv.append(`<div class="alert alert-info" role="alert">${data.length} cat${(data.length>1?"s":"")} found</div>`);
        for (var i = 0; i<data.length; i++) {
            new Cat(data[i]);
        }
    } else {
        // Got no cats, show error message instead
        resultsdiv.append(`<div class="alert alert-warning mpb-5 text-center" role="alert">Sorry, no cats found, please choose different options and try again!</div>`);
    }
}

async function getOptions() {
    /*
    Get options for search form from the API (available breeds, min and max age) and update it
    */
    let response = await fetch('https://api.owlphotography.com.au/options');
    const data = await response.json();
    if (data.result == true) {
        // Response received, filling in the form
        let breeds_id = $('#breed');
        // Fill in breed options
        for (var i = 0; i < data.breeds.length; i++) {
            breeds_id.append(`<option value="${data.breeds[i]}">${data.breeds[i]}</option>`);
        }
        // Fill in min and max age otions
        let min_age_id = $('#min_age');
        let max_age_id = $('#max_age');
        // Looping from min to max age and filling in both options
        for (var i = data.min_age; i <= data.max_age; i++) {
            min_age_id.append(`<option value="${i}">${i} year${(i == 1?'':'s')}</option>`);
            max_age_id.append(`<option value="${i}">${i} year${(i == 1?'':'s')}</option>`);
        }
    }
}

async function adoptCat(event) {
    /*
    Functon to submit adoption form to the API
    */
    event.preventDefault();
    // Collecting data
    let cat_id = $('#InputID').val();
    let cat_name = $('#InputCatName').val();
    let first_name = $('#InputFirstName').val();
    let last_name = $('#InputLastName').val();
    let email = $('#InputEmail').val();
    let phone = $('#InputPhone').val();
    let message = $('#InputMessage').val();
    if (cat_id && first_name && last_name && phone && email && message) {
        // Only submitting if all data are filled in
        let details = {id: cat_id, first_name: first_name, last_name: last_name, email: email, phone: phone, message: message};
        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        // Build form data string
        formBody = formBody.join("&");
        // Submit data and wait for result
        let response = await fetch('https://api.owlphotography.com.au/adopt', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            body: formBody
        });
        const data = await response.json();
        // Hide modal and display confirmation message
        $('#adoptDialog').modal('hide');
        alert(`You adopted ${cat_name}!`);
        if (form_type == 'list') listAllCats();
        else performSearch();
    } else {
        // Not enough data - show error message
        alert("Please fill in adoption form to continue!");
    }
}

async function listAllCats() {
    /*
    Load list of all cats from the API
    */
    let response = await fetch('https://api.owlphotography.com.au/list?limit=100'); // Get list of all cats
    const data = await response.json(); // wait for data and read it
    listCats(data); // Pass data to listCats
}

async function searchCats(sex, breed, min_age, max_age) {
    /*
    Perform search for cats in the API
    */
    let details = {gender: sex, breed: breed, min_age: min_age, max_age: max_age, limit: 100}; // Build data array
    var formBody = []; // Build POST request body
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    let response = await fetch('https://api.owlphotography.com.au/search', { // Perform post request
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        method: "POST",
        body: formBody
    });
    const data = await response.json(); // wait for data and read it
    listCats(data); // Pass data to listCats
    
}

function clearSearch() {
    /*
    Clear all search select controllers
    */
    $("#sex").val("");
    $("#breed").val("");
    $("#min_age").val("");
    $("#max_age").val("");
    $('#searchResults').empty().append(`<div class="alert alert-info mpb-5 text-center" role="alert">Please choose at least one criterion to search!</div>`);
}

function performSearch(){
    /*
    Collects search form data and executes search
    */
    var strSex = $("#sex").val(); // Get sex
    var strBreed = $("#breed").val(); // Get breed
    var strMinage = $("#min_age").val(); // Get min age
    var strMaxage = $("#max_age").val(); // Get max age
    if (strSex || strBreed || strMinage || strMaxage) { // If at least one of the options is set - perform search
        searchCats(strSex, strBreed, strMinage, strMaxage);
    } else { // If no options are set - show this message
        $('#searchResults').empty().append(`<div class="alert alert-warning mpb-5 text-center" role="alert">Please choose at least one criterion to search!</div>`);
    }
}

$(function () {
    /*
    Setup all default events after the page full load
    */
    $('#closeModal').click(function() { $('#adoptDialog').modal('hide'); }); // Close adoption modal if cancel is pressed
    $('#AdoptionForm').submit(adoptCat); // Submit adoption modal if form had been submitted
    $('#searchSubmit').click(performSearch); // Perform search if search is pressed
    $('#searchClear').click(clearSearch); // Clear search form if clear is pressed
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation');
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated');
            }, false)
        });
    if (form_type == "list") listAllCats();
    else getOptions();
})