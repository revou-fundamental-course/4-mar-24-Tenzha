document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculate-button');
    const resetButton = document.getElementById('btn-reset');
    const bmiResult = document.getElementById('bmi-result');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const ageInput = document.getElementById('age');
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const resultPopup = document.getElementById('result-popup');

    calculateButton.addEventListener('click', function () {
        const gender = document.querySelector('input[name="gender"]:checked');
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // convert height to meters
        const age = parseFloat(ageInput.value);

        if (gender && !isNaN(weight) && !isNaN(height) && !isNaN(age)) {
            let bmi = weight / (height * height);
            bmiResult.textContent = `Your BMI Result: ${bmi.toFixed(2)}`;

            // Display appropriate message based on BMI result
            if (bmi < 18.5) {
                resultPopup.textContent = 'Anda kekurangan berat badan';
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                resultPopup.textContent = 'Berat badan anda normal';
            } else if (bmi >= 25.0 && bmi <= 29.9) {
                resultPopup.textContent = 'Berat badan anda berlebihan';
            } else {
                resultPopup.textContent = 'Anda Obesitas';
            }
        } else {
            bmiResult.textContent = '';
            resultPopup.textContent = 'Please fill in all the fields and calculate your BMI.';
        }
    });

    // reset button functionality
    resetButton.addEventListener('click', function () {
        weightInput.value = '';
        heightInput.value = '';
        ageInput.value = '';
        bmiResult.textContent = '';
        resultPopup.textContent = '';
        genderInputs.forEach(input => (input.checked = false));
    });
})