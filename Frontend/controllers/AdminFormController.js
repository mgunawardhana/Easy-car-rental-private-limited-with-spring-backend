let baseURL = "http://localhost:8080/Backend_war/admin/";


$("#saveAdmin").on('click', function () {
    saveAdmin();
});


function saveAdmin() {
    let formData = $("#adminFormController").serialize();
    $.ajax({
        url: baseURL + "save_admin", method: "post", data: formData, dataType: "json", success: function (res) {
            alert(res.message);
        }, error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
}