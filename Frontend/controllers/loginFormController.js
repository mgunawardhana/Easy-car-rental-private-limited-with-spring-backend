
let baseURL = "http://localhost:8080/Backend_war/";


$("#login").on('click', function () {

    $.ajax({
        url: baseURL + "login_form/?userName=" + $("#name").val() + "&password=" + $("#password").val(),
        method: "GET",
        dataType: "json",

        success: function (resp) {

            if ('ADMIN' === $("#role").val()) {

                alert("Your entering as a ADMIN");

                if ("Ok" === resp.state) {
                    window.location.href = "DashBoardForm.html";
                } else {
                    alert(resp.state);
                }

            } else if ('DRIVER' === $("#role").val()) {

                alert("Your entering as a DRIVER");

                alert($("#role").val());
                if ("Ok" === resp.state) {
                    window.location.href = "DriverShedule.html";
                } else {
                    alert(resp.state);
                }

            }
        },

        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});

