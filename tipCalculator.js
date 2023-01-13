
  let tipButton = document.querySelectorAll (".button__porcentage");
  let billAmount = document.querySelector("#tip__amount__input[type='text']");
  let numberOfPeople = document.querySelector("#number__of__person[type='text']");

  let numberOfPeopleInput = document.querySelector(".input__number__people");

  let custom = document.querySelector("#custom[type='text']");

  let resetButton = document.querySelector(".reset__button");

  let amountPerPerson = document.querySelector("#person__amount");
  let totalAmount = document.querySelector("#total__per__person");
  let warning = document.querySelector(".warning__text");


  tipButton.forEach(button => {
    button.addEventListener("click", ()=> {

      let totalTip = 0;
      let people = numberOfPeople.value;
      let amount = billAmount.value; 
      let billPerPerson = 0;
      let tipPerPerson = 0;

      totalTip = amount * button.id / 100;

        if (people != 0) {
          tipPerPerson = totalTip / people;
          billPerPerson = (amount / people) + tipPerPerson;

          var tipPerPersonConDecimal = tipPerPerson.toFixed(3);
          var billPerPersonConDecimal = billPerPerson.toFixed(3)

          amountPerPerson.innerHTML = `$${tipPerPersonConDecimal}`;
          totalAmount.innerHTML = `$${billPerPersonConDecimal}`;

          numberOfPeopleInput.classList.remove("wrong__number__of__persons")
          warning.classList.remove("warning__text__show");
        } else {
          numberOfPeopleInput.classList.add("wrong__number__of__persons");
          warning.classList.add("warning__text__show");
        }
    })
  })

  resetButton.addEventListener("click", ()=> {
    billAmount.value ="";
    numberOfPeople.value ="";

    amountPerPerson.innerHTML = "";
    totalAmount.innerHTML = "";
  })

  
  custom.addEventListener("keypress", ()=> {

    let customPorcentage = custom.value / 100;

    let people = numberOfPeople.value;
    let amount = billAmount.value; 
    let billPerPerson = 0;
    let tipPerPerson = 0;

    let totalTip = amount * customPorcentage;

      if (people != 0) {
        tipPerPerson = totalTip / people;
        billPerPerson = (amount / people) + tipPerPerson;

        var tipPerPersonConDecimal = tipPerPerson.toFixed(3);
        var billPerPersonConDecimal = billPerPerson.toFixed(3)

        amountPerPerson.innerHTML = `$${tipPerPersonConDecimal}`;
        totalAmount.innerHTML = `$${billPerPersonConDecimal}`;

        warning.classList.remove("warning__text__show");
        numberOfPeopleInput.classList.remove("wrong__number__of__persons")
      } else {
        warning.classList.add("warning__text__show");
        numberOfPeopleInput.classList.add("wrong__number__of__persons");
      }

  })

