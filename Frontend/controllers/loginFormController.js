let baseURL = "http://localhost:8080/Backend_war/";

$("#login").on('click', function () {
    alert("Your entering as a ADMIN");
    $.ajax({
        url: baseURL + "login_form/?userName=" + $("#name").val() + "&password=" + $("#password").val(),
        method: "GET",
        dataType: "json",
        success: function (resp) {
            if ("Ok" === resp.state) {
                window.location.href = "DashBoardForm.html";
            } else {
                alert(resp.state);
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});