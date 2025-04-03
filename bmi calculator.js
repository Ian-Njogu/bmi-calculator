

const button = document.getElementById("btn")

// The height and weight should be declared inside the event listener

button.addEventListener("click", function () {
    const name =   document.getElementById("name").value; //get name value
    const weight = parseFloat(document.getElementById("weight").value); //parseFloat converts the value from an input field into a number
    const height = parseFloat(document.getElementById("height").value);

    // Input validation
    if (!name || isNaN(weight) || isNaN(height)) {
       return document.getElementById("result").innerText = "Please enter correct values";
    }
    const bmi = weight/(height*height);
    document.getElementById("result").innerText = `Hello ${name} your bmi is ${bmi.toFixed(2)}`;
});

// Convert name to a number (should return NaN)
const nameToNumber = Number(name);

// Convert BMI to boolean
const bmiBoolean = Boolean(bmi);