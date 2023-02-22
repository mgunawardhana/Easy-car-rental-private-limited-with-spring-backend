let baseURL = "http://localhost:8080/Backend_war";

// setUserCunt();
$("#firstName").val("453");
function setUserCunt() {
    $('#customer').empty();
    $.ajax({
        url: baseURL + "/customer/customerCount/{count}", method: "GET", dataType: "json", success: function (res) {
            for (let count of res.data) {
                $("#registered_users").val(count.count);
                alert(count.count)
            }
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}