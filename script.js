function calculateBMI() {
    var heightUnit = document.getElementById("heightUnit").value;
    var height = parseFloat(document.getElementById("height").value);
    var weightUnit = document.getElementById("weightUnit").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var age = parseInt(document.getElementById("age").value);
    var bmi;
    var interpretation = "Normal";

    if (height > 0 && weight > 0) {
        if ((weightUnit === 'kg' && heightUnit === 'cm') || (weightUnit === 'pounds' && heightUnit === 'feet')) {
            if (weightUnit === 'kg') {
                bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
            } else if (weightUnit === 'pounds') {
                weight *= 0.453592; // Convert pounds to kg
                height *= 30.48; // Convert feet to cm
                bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
            }
            if (age >= 18) {
                interpretation = getInterpretationAdult(bmi);
            } else {
                interpretation = getInterpretationChild(bmi);
            }
            document.getElementById("result").innerHTML = "Your BMI is: " + bmi + "<br>Interpretation: " + interpretation;
        } else {
            document.getElementById("result").innerHTML = "ERROR: Please select valid units.";
        }
    } else {
        document.getElementById("result").innerHTML = "ERROR: Please enter valid height and weight values.";
    }
}

function getInterpretationAdult(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
function calculateBMI() {
    var gender = document.getElementById("gender").value;
    var heightUnit = document.getElementById("heightUnit").value;
    var height = parseFloat(document.getElementById("height").value);
    var weightUnit = document.getElementById("weightUnit").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var age = parseInt(document.getElementById("age").value);
    var bmi;
    var interpretation = "Normal";

    if (height > 0 && weight > 0) {
        if ((weightUnit === 'kg' && heightUnit === 'cm') || (weightUnit === 'pounds' && heightUnit === 'feet')) {
            if (weightUnit === 'kg') {
                bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
            } else if (weightUnit === 'pounds') {
                weight *= 0.453592; // Convert pounds to kg
                height *= 30.48; // Convert feet to cm
                bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
            }
            if (age >= 18) {
                interpretation = getInterpretationAdult(bmi);
            } else {
                interpretation = getInterpretationChild(bmi);
            }
            document.getElementById("result").innerHTML = "Your BMI is: " + bmi + "<br>Interpretation: " + interpretation;
        } else {
            document.getElementById("result").innerHTML = "ERROR: Please select valid units.";
        }
    } else {
        document.getElementById("result").innerHTML = "ERROR: Please enter valid height and weight values.";
    }
}

function getInterpretationAdult(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

function getInterpretationChild(bmi) {
    // Interpretation logic for children
    return "BMI SHOULD BE USED ONLY FOR ADULTS";
}


