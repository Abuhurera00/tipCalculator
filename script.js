let bill = document.getElementById('bill');
let tip = document.getElementById('tip');
let people = document.getElementById('nmbr');
let perPerson = document.getElementById('person-bill');

let chkBill = ()=>{
    let billAmount = Number(bill.value);
    // console.log(billAmount)
    let tipInput = Number(tip.value)
    // console.log(tipInput)
    let tipPercentage = tipInput / 100
    let tipAmount = tipPercentage * billAmount
    let totalBill = tipAmount + billAmount
    let totalPeople = Number(people.value)

    let perPersonBill = totalBill / totalPeople
    perPerson.value = perPersonBill.toFixed(2)

    if(totalPeople <= 0){
        perPerson.value = "0.00"
    }
}