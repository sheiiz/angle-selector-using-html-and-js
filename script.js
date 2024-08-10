// script.js
document.addEventListener('DOMContentLoaded', function () {
    const angleInput = document.getElementById('angleInput');
    const angleSlider = document.getElementById('angleSlider');
    const presetAngles = document.getElementsByName('presetAngle');

    function updateSliderFromInput() {
        let angle = parseInt(angleInput.value);
        if (isNaN(angle)) {
            angle = 0;
        } else if (angle < 0) {
            angle = 0;
        } else if (angle > 360) {
            angle = 360;
        }
        angleInput.value = angle;
        angleSlider.value = angle;
        updateRadioButtons(angle);
    }

    function updateInputFromSlider() {
        const angle = parseInt(angleSlider.value);
        angleInput.value = angle;
        updateRadioButtons(angle);
    }

    function updateFromRadio() {
        for (const radio of presetAngles) {
            if (radio.checked) {
                angleInput.value = radio.value;
                angleSlider.value = radio.value;
            }
        }
    }

    function updateRadioButtons(angle) {
        for (const radio of presetAngles) {
            if (parseInt(radio.value) === angle) {
                radio.checked = true;
                return;
            }
        }
        for (const radio of presetAngles) {
            radio.checked = false;
        }
    }

    angleInput.addEventListener('input', updateSliderFromInput);
    angleSlider.addEventListener('input', updateInputFromSlider);
    presetAngles.forEach(radio => radio.addEventListener('change', updateFromRadio));
});
