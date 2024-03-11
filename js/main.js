document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculate-button');
    const resetButton = document.getElementById('btn-reset');
    const bmiResult = document.getElementById('bmi-result');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const ageInput = document.getElementById('age');
    const genderInputs = document.querySelectorAll('input[name="gender"]');

    calculateButton.addEventListener('click', function () {
        const gender = document.querySelector('input[name="gender"]:checked');
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // convert height to meters
        const age = parseFloat(ageInput.value);

        if (gender && !isNaN(weight) && !isNaN(height) && !isNaN(age)) {
            let bmi = weight / (height * height);
            bmiResult.textContent = `Your BMI Result: ${bmi.toFixed(2)}`;
        } else {
            bmiResult.textContent = 'Please fill in all the fields.';
        }
    });

    resetButton.addEventListener('click', function () {
        weightInput.value = '';
        heightInput.value = '';
        ageInput.value = '';
        bmiResult.textContent = '';
        genderInputs.forEach(input => (input.checked = false));
    });
});