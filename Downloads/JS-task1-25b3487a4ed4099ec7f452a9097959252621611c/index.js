// --------- КАЛЬКУЛЯТОР СТОИМОСТИ МАШИНЫ ---------

const auctionPrice = document.querySelector('.auto-calculator__price') //value
const auctionModel = document.querySelector('.auto-calculator__auction')//выбрала общий селект, может надо именно варианты?
const typeOfCar = document.querySelector('.auto-calculator__radio-buttons_type')//выбрала общий селект, может надо именно варианты?
const typeOfFuel = document.querySelector('.auto-calculator__radio-buttons_fuel')//выбрала общий селект, может надо именно варианты?
const typeOfVolume = document.querySelector('.auto-calculator__volume')
const typeOfStrength = document.querySelector('.auto-calculator__strength')
const AgeOfCar = document.querySelector('auto-calculator__radio-buttons_age')//выбрала общий селект, может надо именно варианты?
const typeOfReceiver = document.querySelector('auto-calculator__radio-buttons_receiver')//выбрала общий селект, может надо именно варианты?
const totalPrice = document.querySelector('.auto-calculator__button')

totalPrice.addEventListener('click', function () {
    const auctionPriceValue = +auctionPrice.value;


    let typeOfVolumePrice = ""
    const typeOfVolumePriceValue = typeOfVolume.value
    if (typeOfVolumePriceValue < 100){
        typeOfVolumePrice = "200"
    }
    else {
        typeOfVolumePrice = "400"
    }

    let typeOfStrengthPrice = ""
    const typeOfVolumeStrengthValue = typeOfStrength.value
    if (typeOfVolumeStrengthValue < 500){
        typeOfStrengthPrice = "400"
    }
    else {
        typeOfStrengthPrice = "800"
    }
    
console.log(+auctionPriceValue + +typeOfVolumePrice + +typeOfStrengthPrice )
})




// --------- СОРТИРОВКА И СУММА МАССИВА -------------
const input3 = document.querySelector('.numbers__input-first')
const input4 = document.querySelector('.numbers__input-second')
const input5 = document.querySelector('.numbers__input-third')
const input6 = document.querySelector('.numbers__input-fourth')
const button = document.querySelector('.numbers__button')

button.addEventListener('click', function () {
    let numbers = []
    numbers[0]= +input3.value
    numbers[1]= +input4.value
    numbers[2]= +input5.value
    numbers[3]= +input6.value

    let showMass = [];
    console.log(`Массив не отсортирован:   ` + numbers);
    
    function sortMass(a, b) {
        if (a > b) {
        return 1;
        }else if (b > a) {
        return -1;
        }else{
        return 0;
        }
    }
    numbers.sort(sortMass);
    for(let i = 0; i < numbers.length; i++){
        showMass = showMass + numbers[i] + ` `;
    }
    alert(`Массив отсортирован:  ` +showMass)
    alert(+numbers[0]+ +numbers[1]+ +numbers[2]+ +numbers[3])
})
// -----------------------------------------------------


// // --------- КАЛЬКУЛЯТОР С ДЕЛЕНИЕМ НА НОЛЬ ---------
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const result = document.getElementById('result')
function dividebyZero(){
    input2.value === '0' ? alert('На ноль делить нельзя'):result.innerHTML = resultNumbers ;

}
function clearInput(){
    input1.value=''
    input2.value=''
}
function addition(){
    const inputValueFirst = input1.value
    const inputValueSecond = input2.value
    const resultNumbers = +inputValueFirst + +inputValueSecond;
    result.innerHTML = resultNumbers 
    clearInput()
}
function extraction(){
    const inputValueFirst = input1.value
    const inputValueSecond = input2.value
    const resultNumbers = +inputValueFirst - +inputValueSecond;
    result.innerHTML = resultNumbers 
    clearInput()
}
function division(){
    const inputValueFirst = input1.value
    const inputValueSecond = input2.value
    const resultNumbers = +inputValueFirst / +inputValueSecond;
    result.innerHTML = resultNumbers
    dividebyZero()
    clearInput()
}
function multiplication(){
    const inputValueFirst = input1.value
    const inputValueSecond = input2.value
    const resultNumbers = +inputValueFirst * +inputValueSecond;
    result.innerHTML = resultNumbers 
    clearInput()
}
function changeColor(sender) {
    sender.classList.add('selected');
}
// -----------------------------------------------------


// // ---------ФОРМА РЕГИСТРАЦИИ ------------------------
const name =  document.getElementById('name')
const surname = document.getElementById('surname')
const number = document.getElementById('number')
const email = document.getElementById('email')
const checkbox = document.getElementById('checkbox')
function submit() {

   if(name.value === "") {
    const nameResult = document.getElementById("name__result");
    nameResult.innerHTML = "Введите имя"
    nameResult.style.color = 'red';
   }
   else if(surname.value === "") {
    const surnameResult = document.getElementById("surname__result");
    surnameResult.innerHTML = "Введите фамилию"
    surnameResult.style.color = 'red';
   }
    else if(email.value === "") {
    const emailResult = document.getElementById("email__result");
    emailResult.innerHTML = "Введите email"
    emailResult.style.color = 'red';
   }
    else if (number.value.length <6) {
    const numberResult = document.getElementById("number__result");
    numberResult.innerHTML = 'Введите верный номер';
    numberResult.style.color='red';
   }
   else if(checkbox.checked === false) {
    const checkboxResult = document.getElementById("checkbox__result");
    checkboxResult.innerHTML = 'Подтвердите согласие';
    checkboxResult.style.color='red';
   }
   else {
    alert(name.value + ' , форма успешно отправлена')
   }
}
function changeTheme() {
    const newColor = document.getElementById('themebox')
    if (document.getElementById('change-theme__select').value == "blue")
    {
        newColor.style.background = "blue"}
        if (document.getElementById('change-theme__select').value == "red")
    {
        newColor.style.background = "red"}
        if (document.getElementById('change-theme__select').value == "green")
    {
        newColor.style.background = "green"}
        if (document.getElementById('change-theme__select').value == "orange")
    {
        newColor.style.background = "orange"}
}
