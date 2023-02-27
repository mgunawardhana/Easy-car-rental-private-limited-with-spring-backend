let baseURL = "http://localhost:8080/Backend_war";

// getAllPaymentDetails();

$("#save").on('click', function () {

    let paymentID = $("#paymentId").val();
    let paymentDate = $("#paymentDate").val();
    let invoiceNo = $("#invoiceNo").val();
    let amount = $("#amount").val();
    let payment = $("#payment").val();
    let bookingID = $("#bookingId").val();


    let obj = {
        paymentId: paymentID,
        paymentDate: paymentDate,
        invoiceNo: invoiceNo,
        amount: amount,
        paymentType: payment,
        bookingDTO: {bookingID: bookingID},
    }

    $.ajax({
        url: baseURL + "/payment/save_payment",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(obj),
        dataType: "json", success: function (res) {
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
        url: baseURL + "/payment/get_all_payment_details", dataType: "json", success: function (res) {
            for (let c of res.data) {
                console.log(c)

                let paymentID = c.paymentId;
                let paymentDate = c.paymentDate;
                let invoiceNo = c.invoiceNo;
                let amount = c.amount;
                let paymentType = c.paymentDate;
                let booking = c.booking;


                let row = "<tr>" + "<td>" + paymentID + "</td>" + "<td>" + invoiceNo + "</td>" + "<td>" + paymentDate + "</td>" + "<td>" + booking + "</td>" + "<td>" + paymentType + "</td>" + "<td>" + amount + "</td>" + "</tr>";
                $("#paymentTable").append(row);
            }

        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}


loadAllCustomersToCombo();

function loadAllCustomersToCombo() {
    $.ajax({
        url: baseURL + "/payment/get_all_bookings", method: "GET", dataType: "json", success: function (res) {
            for (let booking of res.data) {
                $("#bookingId").append(`<option>${booking.bookingID}</option>`);
            }
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

$('#bookingId').on('click', function () {
    $.ajax({
        url: baseURL + "/payment/get_all_bookings", method: "GET", dataType: "json", success: function (res) {
            for (let booking of res.data) {
                if (booking.bookingID === $('#bookingId').val()) {
                    $("#driver_req").val(booking.driverRequestType);
                    $("#pick_up_date").val(booking.pickUpDate);
                    $("#pick_up_location").val(booking.pickUpLocation);
                    $("#pickup_time").val(booking.pickUpTime);
                    $("#return_date").val(booking.returnDate);
                    $("#customer_id").val(booking.customer.id);
                }
            }
        }
    });
});
// Calc();
//
// function Calc() {
//     let mileage = parseInt($("#totalVehicleMileage").val());
//     let extraPrice = parseInt($("#extraKmPrice").val());
//
//     let dailyRate = 1000;
//
//     if (mileage > 100) {
//         $("#amount").val(((mileage - 100) * extraPrice) + dailyRate);
//     }
//     if (mileage <= 100) {
//         $("#amount").val(dailyRate);
//     }
// }