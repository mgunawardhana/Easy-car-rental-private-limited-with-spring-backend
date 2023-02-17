let baseURL = "http://localhost:8080/Backend_war/vehicle/";


getAllVehicle();

$("#saveVehicle").on('click', function () {
    saveVehicle();
});

function saveVehicle() {
    let formData = $("#vehicleFormController").serialize();
    $.ajax({
        url: baseURL + "save_vehicle", method: "post", data: formData, dataType: "json", success: function (res) {
            alert(res.message);
            getAllVehicle();
            bindRowClickEventsForVehicle();
        }, error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
}

function getAllVehicle() {
    $("#vehicleTableBody").empty();
    $.ajax({
        url: baseURL + "get_all", success: function (res) {
            for (let c of res.data) {

                let vehicleId = c.vehicleId;
                let noOfPassengers = c.numberOfPassenger;
                let extraKmPrice = c.extraKmPer;
                let registrationNo = c.registrationNo;
                let Colour = c.vehicleColour;
                let daily_amount = c.vehiclePriceRate.dailyRate;
                let monthly_amount = c.vehiclePriceRate.monthlyRate;
                let Availability = c.vehicleAvailability;
                let brand = c.vehicleBrand;
                let transmission = c.transmissionType;
                let daily_km = c.freeMileage.dailyMileage;
                let monthly_km = c.freeMileage.monthlyMileage;
                let fuelType = c.fuelType;

                let damageFee = c.refundableDamagedFee;

                let vehicleType = c.vehicleType;
                //
                // let service_milage = c.;

                let last_service = c.lastServiceMileage;


                let row = "<tr>" + "<td>" + vehicleId + "</td>" + "<td>" + noOfPassengers + "</td>" + "<td>" + extraKmPrice + "</td>" + "<td>" + registrationNo + "</td>" + "<td>" + Colour + "</td>" + "<td>" + daily_amount + "</td>" + "<td>" + monthly_amount + "</td>" + "<td>" + Availability + "</td>" + "<td>" + brand + "</td>" + "<td>" + transmission + "</td>" + "<td>" + daily_km + "</td>" + "<td>" + monthly_km + "</td>" + "<td>" + fuelType + "</td>" + "<td>" + damageFee + "</td>" + "<td>" + vehicleType + "</td>"
                    /*      + "<td>" + service_milage + "</td>"*/ + "<td>" + last_service + "</td>" + "</tr>";

                $("#vehicleTableBody").append(row);
            }
            bindRowClickEventsForVehicle();         // clearTextFields();
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}


$("#updateVehicle").on('click', function () {
    let vehicleId = $('#vehicleId').val();
    let numberOfPassenger = $('#numberOfPassenger').val();
    let extraKmPer = $('#extraKmPer').val();
    let registrationNo = $('#registrationNo').val();
    let vehicleColour = $('#vehicleColour').val();
    let dailyRate = $('#dailyRate').val();
    let monthlyRate = $('#monthlyRate').val();
    let vehicleAvailability = $('#vehicleAvailability').val();
    let vehicleBrand = $('#vehicleBrand').val();
    let transmissionType = $('#transmissionType').val();
    let dailyMileage = $('#dailyMileage').val();
    let monthlyMileage = $('#monthlyMileage').val();
    let fuelType = $('#fuelType').val();
    let refundableDamagedFee = $('#refundableDamagedFee').val();
    let vehicleType = $('#vehicleType').val();
    let lastServiceMileage = $('#lastServiceMileage').val();


    var vehicleObj = {
        vehicleId: vehicleId,
        numberOfPassenger: numberOfPassenger,
        extraKmPer: extraKmPer,
        registrationNo: registrationNo,
        vehicleColour: vehicleColour,
        vehiclePriceRate: {dailyRate: dailyRate, monthlyRate: monthlyRate},
        freeMileage: {dailyMileage: dailyMileage, monthlyMileage: monthlyMileage},
        vehicleAvailability: vehicleAvailability,
        vehicleBrand: vehicleBrand,
        transmissionType: transmissionType,
        fuelType: fuelType,
        refundableDamagedFee: refundableDamagedFee,
        vehicleType: vehicleType,
        lastServiceMileage: lastServiceMileage,
    }

    $.ajax({
        url: baseURL + "update",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(vehicleObj),
        dataType: "json",
        success: function (res) {
            alert("update method invoked");
            getAllAdmins();
            alert(res.message);
            clearTextFields();
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });

});


function bindRowClickEventsForVehicle() {
    $("#vehicleTableBody>tr").on('click', function () {
        $('#vehicleId').val($(this).children(":eq(0)").text());
        $('#numberOfPassenger').val($(this).children(":eq(1)").text());
        $('#extraKmPer').val($(this).children(":eq(2)").text());
        $('#registrationNo').val($(this).children(":eq(3)").text());
        $('#vehicleColour').val($(this).children(":eq(4)").text());
        $('#dailyRate').val($(this).children(":eq(5)").text());
        $('#monthlyRate').val($(this).children(":eq(6)").text());
        $('#vehicleAvailability').val($(this).children(":eq(7)").text());
        $('#vehicleBrand').val($(this).children(":eq(8)").text());
        $('#transmissionType').val($(this).children(":eq(9)").text());
        $('#dailyMileage').val($(this).children(":eq(10)").text());
        $('#monthlyMileage').val($(this).children(":eq(11)").text());
        $('#fuelType').val($(this).children(":eq(12)").text());
        $('#refundableDamagedFee').val($(this).children(":eq(13)").text());
        $('#vehicleType').val($(this).children(":eq(14)").text());
        $('#dailyMileage1').val($(this).children(":eq(15)").text());
        $('#lastServiceMileage').val($(this).children(":eq(16)").text());


    });
}


//TODO vehicle error in delete method

$("#deleteVehicle").on('click', function () {
    $.ajax({
        url: baseURL + "?code=" + $("#vehicleId").val(), method: "delete", dataType: "json", success: function (resp) {
            console.log($("#vehicleId").val())
            getAllVehicle();
            alert(resp.message);
        }, error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});
