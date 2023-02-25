getAllBookingDetails()
function getAllBookingDetails() {

    $.ajax({
        url: baseURL + "/payment/load_all_booking_details", dataType: "json", success: function (res) {
            for (let c of res.data) {
                console.log(c)

                let paymentID = c.paymentId;
                let paymentDate = c.paymentDate;
                let invoiceNo = c.invoiceNo;
                let amount = c.amount;
                let paymentType = c.paymentDate;
                let booking = c.booking;


                let row = "<tr>" +
                    "<td>" +    paymentID + "</td>"
                    + "<td>" + invoiceNo + "</td>"
                    + "<td>" + paymentDate + "</td>"
                    + "<td>" + booking + "</td>"
                    + "<td>" + paymentType + "</td>"
                    + "<td>" + amount + "</td>"
                    + "</tr>";
                $("#paymentTable").append(row);
            }

        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}
