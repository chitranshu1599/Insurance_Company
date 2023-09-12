// init btns

// let individual = document.querySelector("#individual");
// let couple = document.querySelector("#couple");
// let family = document.querySelector("#family");
// let partens = document.querySelector("#partens");

// // init form divs

// let ind = document.querySelector(".ind");
// let coup = document.querySelector(".coup");
// let fam = document.querySelector(".fam");
// let par = document.querySelector(".par");

// // event handling

// individual.addEventListener("click", function (event) {
//   ind.style.display = "block";
//   coup.style.display = "none";
//   fam.style.display = "none";
// });

// couple.addEventListener("click", function (event) {
//   ind.style.display = "none";
//   coup.style.display = "block";
//   fam.style.display = "none";
// });

// family.addEventListener("click", function (event) {
//   ind.style.display = "none";
//   coup.style.display = "none";
//   fam.style.display = "block";
// });

// partens.addEventListener("click", function (event) {
//   ind.style.display = "none";
//   coup.style.display = "none";
//   fam.style.display = "none";
//   par.style.display = "block";
// });

function add() {
  var new_chq_no = parseInt($("#total_chq").val()) + 1;

  var new_div = `
      <div class="member col-lg-4" id="new_${new_chq_no}">
        <div class="info w-100">
          <label class="w-50" for="member_${new_chq_no}">Child ${new_chq_no}</label>
          <div class=radio-btn>
            <input type="radio" id="male" name="${new_chq_no}" value="male">
            <label for="male" class="me-2">Male</label><br>
            <input type="radio" id="female" name="${new_chq_no}" value="female">
            <label for="female">Female</label><br>
          </div>
          <select class="form-select" name="member_${new_chq_no}" id="member_${new_chq_no}">
            <option selected>Select Age</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    `;

  $("#new_chq").append(new_div);
  $("#total_chq").val(new_chq_no);

  // Enable remove button and disable add button
  $("#addBtn").prop("disabled", new_chq_no === 4);
  $("#removeBtn").prop("disabled", false);
}

function remove() {
  var last_chq_no = parseInt($("#total_chq").val());
  if (last_chq_no > 0) {
    $("#new_" + last_chq_no).remove();
    $("#total_chq").val(last_chq_no - 1);

    // Enable add button if there are less than three members
    $("#addBtn").prop("disabled", false);
    $("#removeBtn").prop("disabled", last_chq_no === 2);
  }
}

// const checkboxFather = document.getElementById("checkboxFather");
// const checkboxMother = document.getElementById("checkboxMother");
// const fatherDiv = document.getElementById("fatherDiv");
// const motherDiv = document.getElementById("motherDiv");

// checkboxFather.addEventListener("change", function () {
//   fatherDiv.style.display = checkboxFather.checked ? "block" : "none";
//   checkAndDisplayBothDivs();
// });

// checkboxMother.addEventListener("change", function () {
//   motherDiv.style.display = checkboxMother.checked ? "block" : "none";
//   checkAndDisplayBothDivs();
// });

// function checkAndDisplayBothDivs() {
//   if (checkboxFather.checked && checkboxMother.checked) {
//     fatherDiv.style.display = "block";
//     motherDiv.style.display = "block";
//   }
// }
$(document).ready(function () {
  $("#individual_div").removeClass("d-none");
  
});

$(document).on("click", ".type_btn", function () {
  $(".type_btn")
    .removeClass("active")
  $(this).addClass("active");

  const type = $(this).attr("select-type");
  if (type == "individual") {
    $("#couple_div, #family_div ,#parents_div").addClass("d-none");
    $("#individual_div").removeClass("d-none");
  } else if (type == "couple") {
    $("#individual_div ,#family_div, #parents_div").addClass("d-none");
    $("#couple_div").removeClass("d-none");
  } else if (type == "family") {
    $("#couple_div, #individual_div, #parents_div").addClass("d-none");
    $("#family_div").removeClass("d-none");
  } else if (type == "parents") {
    $("#couple_div, #family_div, #individual_div").addClass("d-none");
    $("#parents_div").removeClass("d-none");
  } else {
  }
});

$(document).on("click", "#checkboxFather", function () {
  $("#fatherDiv").toggle(this.checked);
});

$(document).on("click", "#checkboxMother", function () {
  $("#motherDiv").toggle(this.checked);
});

$(document).on('click','.coverage_btn',function(){
    $(".coverage_btn")
    .removeClass("active").removeClass("btn-primary")
  $(this).addClass("active").addClass("btn-primary");

})