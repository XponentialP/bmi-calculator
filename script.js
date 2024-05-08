// let button = document.querySelector('.btn');

// button.addEventListener('click', () => {
//     const weight = parseInt(document.getElementById('weight').value);
//     const height = parseInt(document.getElementById('height').value);
//     const output = document.getElementById('bmi-answer');
//     let weight_status = false, height_status = false;

//     if (weight === "" || isNaN(weight) || (weight <= 0)) {
//         document.querySelector('.weight-error').innerHTML = "Please provide a valid weight value";
//     } else {
//         document.querySelector('.weight-error').innerHTML = "";
//         weight_status = true;
//     }

//     if (height === "" || isNaN(height) || (height <= 0)) {
//         document.querySelector('.height-error').innerHTML = "Please Provide a valid height value";
//     } else {
//         document.querySelector('.height-error').innerHTML = "";
//         height_status = true;
//     }

//     if (weight_status && height_status) {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(1)

//         if (bmi <= 18.5) {
//             output.innerHTML = "Underweight: " + bmi;
//         } else if (bmi <= 24.9) {
//             output.innerHTML = "Normal Weight: " + bmi;
//         } else {
//             output.innerHTML = "Overweight: " + bmi;
//         }
//     }else{
//         alert("Input fields cannot be empty");
//         output.innerHTML = "";
//     }
// })



// function
// get values
// conditions
// calculate

function bmiCalculator() {
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const bmi = (weight / (Math.pow(height, 2) / 10000)).toFixed(1);

    if (weight === "" || isNaN(weight) || (weight <= 0)) {
        document.querySelector('.weight-error').innerHTML = "Please Provide a valid weight value";
    } else {
        document.querySelector('.weight-error').innerHTML = "";
        weight_status = true;
    }

    if (height === "" || isNaN(height) || (height <= 0)) {
        document.querySelector('.height-error').innerHTML = "Please Provide a valid height value";
    } else {
        document.querySelector('.height-error').innerHTML = "";
        height_status = true;
    }

    if (weight_status && height_status) {
        

        if (bmi <= 18.5) {
            document.querySelector('.bmi-answer').innerHTML = "Underweight: " + bmi;
            document.querySelector('.bmi-answer').style = "color:red";
            

        } else if (bmi <= 24.9) {
            document.querySelector('.bmi-answer').innerHTML = "Normal: " + bmi;
            document.querySelector('.bmi-answer').style = "color:blue";

        } else {
            document.querySelector('.bmi-answer').innerHTML = "Over-weight: " + bmi;
            document.querySelector('.bmi-answer').style = "color:red";

        }
    } else {
        document.querySelector('.bmi-answer').innerHTML = "";
    }
}