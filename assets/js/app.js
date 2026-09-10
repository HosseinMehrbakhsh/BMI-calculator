let calcBtn = document.querySelector('.calc_btn');
let userHeightEl = document.getElementById('user_height');
let userWeightEl = document.getElementById('user_weight');
let inpGlassBox = document.querySelector('.inp_glass_box');
let container = document.querySelector('.container');


calcBtn.addEventListener('click', calculateBMI);



document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !inpGlassBox.classList.contains('d-none')) {
        calculateBMI();
    }
    else if (e.key === 'Enter' && inpGlassBox.classList.contains('d-none')) {
        location.reload();
    }
});

function calculateBMI() {
    let userHeight = Number(userHeightEl.value);
    let userWeight = Number(userWeightEl.value);
    let userBMI = (userWeight / Math.pow((userHeight / 100), 2)).toFixed(2);

    inpGlassBox.classList.add('d-none');
    let outGlassBox = document.createElement('div');
    outGlassBox.className = 'out_glass_box d-flex flex-column shadow-lg';
    if (userBMI < 18.5) {
        outGlassBox.innerHTML = `
            <div class="d-flex flex-column align-items-center px-4 py-3">
                <img src="assets/imgs/underweight.webp" width="100%" alt="">
            </div>
            <div class="glass_body p-4 mb-3 d-flex justify-content-around">
                <div class="calc_BMI">
                    <span>BMI :</span>
                    <div class='fs-5 fw-semibold'>${userBMI}</div>
                </div>

                <div class="calc_weight">
                    <span>وزن:</span>
                    <div class='fs-5 fw-semibold'>${userWeight}<small class='fw-normal pe-1'>kg</small></div>
                </div>

                <div class="calc_height">
                    <span>قد:</span>
                    <div class='fs-5 fw-semibold'> ${userHeight}<small class='fw-normal pe-1'>cm</small></div>
                </div>

            </div>
            <a href='' class="btn btn-info d-block mx-3 mb-4">محاسبه مجدد</a>
        `;
    }
    else if (userBMI < 25) {
        outGlassBox.innerHTML = `
            <div class="d-flex flex-column align-items-center px-4 py-3">
                <img src="assets/imgs/normal.webp" width="100%" alt="">
            </div>
            <div class="glass_body p-4 mb-3 d-flex justify-content-around">
                <div class="calc_BMI">
                    <span>BMI :</span>
                    <div class='fs-5 fw-semibold'>${userBMI}</div>
                </div>

                <div class="calc_weight">
                    <span>وزن:</span>
                    <div class='fs-5 fw-semibold'>${userWeight}<small class='fw-normal pe-1'>kg</small></div>
                </div>

                <div class="calc_height">
                    <span>قد:</span>
                    <div class='fs-5 fw-semibold'> ${userHeight}<small class='fw-normal pe-1'>cm</small></div>
                </div>

            </div>
            <a href='' class="btn btn-info d-block mx-3 mb-4">محاسبه مجدد</a>
        `;
        outGlassBox.style.backgroundColor = 'rgba(156, 255, 197, 0.4)';
    }
    else if (userBMI < 30) {
        outGlassBox.innerHTML = `
            <div class="d-flex flex-column align-items-center px-4 py-3">
                <img src="assets/imgs/overweight.webp" width="100%" alt="">
            </div>
            <div class="glass_body p-4 mb-3 d-flex justify-content-around">
                <div class="calc_BMI">
                    <span>BMI :</span>
                    <div class='fs-5 fw-semibold'>${userBMI}</div>
                </div>

                <div class="calc_weight">
                    <span>وزن:</span>
                    <div class='fs-5 fw-semibold'>${userWeight}<small class='fw-normal pe-1'>kg</small></div>
                </div>

                <div class="calc_height">
                    <span>قد:</span>
                    <div class='fs-5 fw-semibold'> ${userHeight}<small class='fw-normal pe-1'>cm</small></div>
                </div>

            </div>
            <a href='' class="btn btn-info d-block mx-3 mb-4">محاسبه مجدد</a>
        `;
        outGlassBox.style.backgroundColor = 'rgba(251, 251, 0, 0.47)';
    }
    else {
        outGlassBox.innerHTML = `
            <div class="d-flex flex-column align-items-center px-4 py-3">
                <img src="assets/imgs/fat.webp" width="100%" alt="">
            </div>
            <div class="glass_body p-4 mb-3 d-flex justify-content-around">
                <div class="calc_BMI">
                    <span>BMI :</span>
                    <div class='fs-5 fw-semibold'>${userBMI}</div>
                </div>

                <div class="calc_weight">
                    <span>وزن:</span>
                    <div class='fs-5 fw-semibold'>${userWeight}<small class='fw-normal pe-1'>kg</small></div>
                </div>

                <div class="calc_height">
                    <span>قد:</span>
                    <div class='fs-5 fw-semibold'> ${userHeight}<small class='fw-normal pe-1'>cm</small></div>
                </div>
                
            </div>
            <a href='' class="btn btn-info d-block mx-3 mb-4">محاسبه مجدد</a>
        `;
        outGlassBox.style.backgroundColor = 'rgba(255, 0, 0, 0.42)';
        outGlassBox.style.color = 'white';
    }

    container.append(outGlassBox);
}