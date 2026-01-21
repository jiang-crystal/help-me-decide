let decisionState = {
    question: "",
    pros: [],
    cons: [],
    result: null
}

function displayMore() {
    var submitButton = document.getElementById("questionSubmit");
    submitButton.style.display = "none";

    decisionState.question = document.getElementById("questionInput").value;

    var proConList = document.getElementById("proConList");
    proConList.style.display = "flex";
}

function reset() {
    var submitButton = document.getElementById("questionSubmit");
    submitButton.style.display = "flex";

    var proConList = document.getElementById("proConList");
    proConList.style.display = "none";

    document.getElementById("questionInput").value = "";
}