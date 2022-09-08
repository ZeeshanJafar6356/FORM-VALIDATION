let form = document.getElementById('form');
let countingForm = 0;
let currentFormNumber = [0];

// function duplicate(button) {
//   var form = button.closest('form').cloneNode(true);
//   var count = 0;
//   form.id = 'form' + ++count;
//   document.body.appendChild(form) + ++count;
// }
function remove(e) {
  e.parentNode.parentNode.removeChild(e.parentNode);
}

// function myFunction() {
//   var duplicate = form.cloneNode(true);
//   var count = 1;
//   form.id = 'form' + ++count;

//   document.body.appendChild(duplicate);
// }
//Cars form specifications
let car = document.getElementById('carName');
let model = document.getElementById('carModel');
let make = document.getElementById('carCompany');
let carYear = document.getElementById('carYear');
let carMileage = document.getElementById('carMileage');
let carPrice = document.getElementById('carPrice');

//cars form Errors
const nameError = document.getElementById('nameError');
const nameError2 = document.getElementById('nameError2');
const modelError = document.getElementById('modelError');
const modelError2 = document.getElementById('modelError2');
const makeError = document.getElementById('makeError');
const makeError2 = document.getElementById('makeError2');
const mileageError = document.getElementById('add');
const priceError = document.getElementById('add2');
const yearError = document.getElementById('yearError');

//Regex for validations
const regex1 = /^[A-Za-z]+$/;
const regex2 = /^[A-Za-z]+$/;
const regex3 = /^[A-Za-z]+$/;
const regex4 = /^$/;
const regex5 = /^$/;

//We used onkeyup() function of html 5 to keep label of input field on top when there will be some value's on the input field otherwise label will animated at its orignal position

// onkeyup = "this.setAttribute('value', this.value);";

function data() {
  let car = document.getElementById('carName').value;
  let model = document.getElementById('carModel').value;
  let make = document.getElementById('carCompany').value;
  let carYear = document.getElementById('carYear').value;
  let carMileage = document.getElementById('carMileage').value;
  let carPrice = document.getElementById('carPrice').value;

  if (
    model !== '' &&
    car !== '' &&
    make !== '' &&
    carMileage !== '' &&
    carYear !== '' &&
    carPrice !== ''
  ) {
    let storedData = JSON.parse(localStorage.getItem('Information'));
    if (storedData == null || storedData == []) {
      localStorage.setItem('Information', JSON.stringify([]));
    }

    var date = new Date().toLocaleString();
    var collection = { car, model, make, carYear, carMileage, carPrice, date };
    let alreadystoredData = JSON.parse(localStorage.getItem('Information'));
    alreadystoredData.push(collection);
    localStorage.setItem('Information', JSON.stringify(alreadystoredData));
    console.log(alreadystoredData);
  }
}

//Validation on Submit Button//

function go() {
  if (
    model.value.match(regex1) &&
    car.value.match(regex2) &&
    make.value.match(regex3) &&
    !carMileage.value.match(regex4) &&
    !carPrice.value.match(regex4) &&
    !carYear.value.match(regex5)
  ) {
    // alert('Congratulations form has been created');
    window.location.href = 'index.html';
  } else {
    display = 'none';
  }

  //Validation on Car Name//

  if (!car.value.match(regex2)) {
    nameError2.style.display = 'block';
  } else nameError2.style.display = 'none';
  if (car.value.length > 7) {
    nameError.style.display = 'block';
  } else nameError.style.display = 'none';

  //Validation of car Model//

  if (!model.value.match(regex1)) {
    modelError2.style.display = 'block';
  } else modelError2.style.display = 'none';
  if (model.value.length > 7) {
    modelError.style.display = 'block';
  } else modelError.style.display = 'none';

  //validation of Car Company//

  if (!make.value.match(regex3)) {
    makeError2.style.display = 'block';
  } else makeError2.style.display = 'none';
  if (make.value.length > 7) {
    makeError.style.display = 'block';
  } else makeError.style.display = 'none';

  if (carMileage.value.match(regex4)) {
    mileageError.style.display = 'block';
  } else mileageError.style.display = 'none';

  if (carPrice.value.match(regex4)) {
    priceError.style.display = 'block';
  } else priceError.style.display = 'none';
  //validation of car Year//

  if (carYear.value.match(regex5)) {
    yearError.style.display = 'block';
  } else yearError.style.display = 'none';
}

const result = JSON.parse(localStorage.getItem('Information'));
const table = document.getElementById('tabledata');
for (let entries of result) {
  let row = document.createElement('tr');

  row.innerHTML = `<td>${entries.car}</td><td>${entries.model}</td><td>${entries.make}</td><td>${entries.carYear}</td><td>${entries.carMileage}</td><td>${entries.carPrice}</td><td>${entries.date}</td>`;
  table.appendChild(row);
}

function addform() {
  counter = ++countingForm;
  currentFormNumber.push(countingForm);
  console.log(currentFormNumber);
  let html = `

    <div style="margin-left: 80%;  width: 110%" class="container">
  <button onclick="remove(this)" style="margin-left: 95%;" id="remove">X</button>

  
  
    <h2><span>CAR${counter}  REGISTRATION </span></h2>

    <form id="form${counter}" method="get" autocomplete="off">

      <div class="form-row">
        <div class="form-group col-sm-6">
          <div class="inputBox">
            <input type="text" required id="carName${counter}" onkeyup="this.setAttribute('value', this.value);" value="" />
            <label>Car Name</label>
            <span id="nameError${counter}" style="font-size: 13px; display: none; color: red">Minimum 8 Characters</span>
            <span id="nameError2${counter}" style="font-size: 13px; display: none; color: red">Enter Car Name</span>
          </div>
        </div>

        <div class="form-group col-sm-6">
          <div class="inputBox">
            <input type="text" id="carModel${counter}" required onkeyup="this.setAttribute('value', this.value);" value="" />
            <label>Car Model</label>
            <span id="modelError${counter}" style="font-size: 13px; display: none; color: red">Minimum 7 Characters</span>
            <span id="modelError2${counter}" style="font-size: 13px; display: none; color: red">Enter Car Model</span>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-sm-6">
          <div class="inputBox">
            <input type="text" id="carCompany${counter}" required onkeyup="this.setAttribute('value', this.value);" value="" />
            <label>Car Company</label>
            <span id="makeError2${counter}" style="font-size: 13px; display: none; color: red">Enter Car Make</span>
            <span id="makeError${counter}" style="font-size: 13px; display: none; color: red">Minimum 7 Characters</span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-sm-12">
            <div class="inputBox">
              <input type="number" id="carYear${counter}" required onkeyup="this.setAttribute('value', this.value);" value="" />
              <label>Car Year</label>
              <span id="yearError${counter}" style="font-size: 13px; display: none; color: red">Enter Car Year</span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-sm-6 ">
          <div class="inputBox">
            <input type="number" id="carMileage${counter}" required onkeyup="this.setAttribute('value', this.value);" value="" />
            <label>Car Mileage</label>
            <span id="add${counter}" style="font-size: 13px; display: none; color: red">Enter Car Mileage</span>
          </div>
        </div>
        <div class="form-group col-sm-6 ">
          <div class="inputBox">
            <input type="number" id="carPrice${counter}" required onkeyup="this.setAttribute('value', this.value);" value="" />
            <label>Car Price</label>
            <span id="add2${counter}" style="font-size: 13px; display: none; color: red">Enter Car Price</span>
          </div>
        </div>
      </div>
      <image src="R.png" style="width: 50%; margin: auto; display: flex; "></image>

    </form>

  </div>
  `;

  document.getElementById('container').innerHTML += html;
  console.log(addform);
}
