let baseURL = "";


$("#addCustomerBtn").on('click', function () {
    saveAdmin();
});


function saveAdmin() {
    let formData = $("#adminFormController").serialize();
    $.ajax({
        url: baseURL + "save_admin", method: "post", data: formData, dataType: "json", success: function (res) {
            /*getAllCustomers();*/
            alert(res.message);
        }, error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
}