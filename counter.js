let valueDisplays = document.querySelectorAll(".num");
let Interval = 5000

valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = (Interval / endValue);
    let counter = setInterval(function () {
        startValue += 2;
        valueDisplays.textContent = `+${startValue}`;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});
