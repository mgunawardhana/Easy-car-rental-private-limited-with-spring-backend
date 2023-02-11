let baseURL = "http://localhost:8080/Backend_war/customer/";


$("#saveCustomer").on('click', function () {
    saveCustomer();
});


function saveCustomer() {
    let formData = $("#CustomerFormController").serialize();
    $.ajax({
        url: baseURL + "save_customer", method: "post", data: formData, dataType: "json", success: function (res) {
            /*getAllCustomers();*/
            alert(res.message);
        }, error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
}