let baseURL = "http://localhost:8080/Backend_war";

getAllPaymentDetails();


$("#save").on('click', function () {
    // let formData = $("#paymentForm").serialize();

    let payment_id = $("#paymentId").val();
    let invoice_no = $("#invoiceNo").val();
    let paymentDate = $("#paymentDate").val();
    let booking_id = $("#bookingId").val();
    let payment_type = $("#payment").val();
    let amount = $("#amount").val();

    alert(paymentDate);
    alert(booking_id);

    let formData = {
        paymentId: payment_id,
        invoiceNo: invoice_no,
        paymentDate:paymentDate,
        booking: {returnDate: paymentDate, bookingId: booking_id},
        paymentType: payment_type,
        amount: amount,

    }


    $.ajax({
        url: baseURL + "/payment/save_payment", method: "post", // data: formData,
        contentType: "application/json", data: JSON.stringify(formData), dataType: "json", success: function (res) {
            alert(res.message);
        }, error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
});


function getAllPaymentDetails() {
    $("#paymentTable").empty();
    $.ajax({
        url: baseURL + "/payment/get_all_payment_details", success: function (res) {
            for (let c of res.data) {

                let payment_id = c.paymentId;
                let invoice_no = c.invoiceNo;
                let date = c.booking.returnDate;
                let booking_id = c.booking.bookingId;
                let payment_type = c.paymentType;
                let amount = c.amount;

                let row = "<tr>" + "<td>" + payment_id + "</td>" + "<td>" + invoice_no + "</td>" + "<td>" + date + "</td>" + "<td>" + booking_id + "</td>" + "<td>" + payment_type + "</td>" + "<td>" + amount + "</td>" + "</tr>";
                $("#paymentTable").append(row);
            }
            // bindRowClickEvents();
            // clearTextFields();
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

