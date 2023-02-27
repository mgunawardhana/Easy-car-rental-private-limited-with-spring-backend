let baseURL = "http://localhost:8080/Backend_war/";


$("#login").on('click', function () {
    $.ajax({
        url: baseURL + "login_form/?userName=" + $("#name").val() + "&password=" + $("#password").val(),
        method: "GET",
        dataType: "json",
        success: function (resp) {
            for (let c of resp.data) {
                vehicleSearchManager(c);
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});