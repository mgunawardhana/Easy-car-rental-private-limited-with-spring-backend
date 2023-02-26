let baseURL = "http://localhost:8080/Backend_war/";
$("#search").on('click', function () {
    $("#vehicleTableBody").empty();
    $.ajax({
        url: baseURL+"searching/?transmission_type=" + $("#vehicleSearch").val(),
        method: "GET",
        dataType: "json",
        success: function (resp) {
            for (let c of resp.data) {
                let vehicleId = c.vehicleID;
                let registrationNo = c.registrationNo;
                let brand = c.vehicleBrand;
                let vehicleType = c.vehicleType;
                let fuelType = c.fuelType;
                let noOfPassengers = c.numberOfPassenger;
                let Colour = c.vehicleColour;
                let transmission = c.transmissionType;
                let damageFee = c.refundableDamagedFee;
                let daily_amount = c.vehiclePriceRate.dailyRate;
                let monthly_amount = c.vehiclePriceRate.monthlyRate;
                let daily_km = c.freeMileage.dailyMileage;
                let monthly_km = c.freeMileage.monthlyMileage;
                let last_service = c.lastServiceMileage;
                let extraKmPrice = c.extraKmPer;
                let Availability = c.vehicleAvailability;

                //TODO vehicleMileage equals to serviceMileage
                let vehicle_mileage = c.vehicleMileage;

                let row = "<tr>" + "<td>" + vehicleId + "</td>" + "<td>" + noOfPassengers + "</td>" + "<td>" + extraKmPrice + "</td>" + "<td>" + registrationNo + "</td>" + "<td>" + Colour + "</td>" + "<td>" + daily_amount + "</td>" + "<td>" + monthly_amount + "</td>" + "<td>" + Availability + "</td>" + "<td>" + brand + "</td>" + "<td>" + transmission + "</td>" + "<td>" + daily_km + "</td>" + "<td>" + monthly_km + "</td>" + "<td>" + fuelType + "</td>" + "<td>" + damageFee + "</td>" + "<td>" + vehicleType + "</td>" + "<td>" + last_service + "</td>" + "<td>" + vehicle_mileage + "</td>" + "</tr>";
                $("#vehicleTableBody").append(row);
            }
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});
