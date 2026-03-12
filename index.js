const principal = document.getElementById("principal");
const rate = document.getElementById("rate");
const period = document.getElementById("time");
const trigger2 = document.getElementById("submit");
trigger2.addEventListener("click", () => {
    const interest = (principal.value * rate.value * period.value) / 100;
    console.log("The interest is", interest)
    const total_amount = Number(principal.value) + interest;
    console.log("The totalamount is", total_amount)
    const summary = "After " + period.value + " years at an interest rate of" + rate.value + "the total amount will be " + total_amount
    document.getElementById("result").textContent = summary;

})
