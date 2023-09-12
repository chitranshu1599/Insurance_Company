let loanAmount = document.getElementById("amount");
let interestRate = document.getElementById("interest");
let loanDuration = document.getElementById("loanTenure");
let submit = document.getElementById("calculate");

$(document).on("input", "#amount", function () {
  $("#amount_range").val($("#amount").val());
});

$(document).on("input", "#amount_range", function () {
  $("#amount").val($("#amount_range").val());
});

$(document).on("input", "#interest", function () {
  $("#interest_range").val($("#interest").val());
});

$(document).on("input", "#interest_range", function () {
  $("#interest").val($("#interest_range").val());
});

$(document).on('change','.calculate_emi',function(){
  calculateEMI();
})

$(document).ready(function () {
    $("#tenure-range-1").removeClass('d-none')
    calculateEMI()
});

$(document).on("change", ".tenure_select", function () {
  let value = $('input[name="btn"]:checked').val();
  let tenure_value = $("#loanTenure").val();
  if (value == "year") {
    $("#loanTenure").val(tenure_value/12);
    $("#tenure-range-1").removeClass("d-none")
    $("#tenure-range-2").addClass("d-none")
  }else{
    $("#loanTenure").val(tenure_value*12);
    $("#tenure-range-2").removeClass("d-none")
    $("#tenure-range-1").addClass("d-none")
  }
});

$(document).on('input','.tenure_range',function(){
    $("#loanTenure").val($(this).val());
})

function calculateEMI() {
  $("#chart_div").html("");
  let isYear = document.getElementById("year").checked;
  let isMonth = document.getElementById("month").checked;
  let noOfMonths = 0;
  if (isYear == "" && isMonth == "") {
    // alert("Please select loan tenure type-> Month or year");
  } else {
    if (isYear == true) {
      noOfMonths = loanDuration.value * 12;
    } else {
      noOfMonths = loanDuration.value;
    }
    let r = parseFloat(interestRate.value) / 12 / 100;
    let P = loanAmount.value;
    let n = noOfMonths;
    //formula EMI= (P * r * (1 + r)^n ) / ((1+r)^n - 1)
    let EMI = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    let totalInterest = EMI * n - P;
    let totalPayment = totalInterest + parseFloat(P);
    document.getElementById("emi").innerText = "₹" + Math.round(EMI);
    document.getElementById("totalInterest").innerText =
      "₹" + Math.round(totalInterest);
    document.getElementById("totalPayment").innerText =
      "₹" + Math.round(totalPayment);
    $("#chart_div").html('<canvas id="myChart"></canvas>');
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Total Interest", "Principal Loan Amount"],
        datasets: [
          {
            data: [totalInterest, P],
            backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
