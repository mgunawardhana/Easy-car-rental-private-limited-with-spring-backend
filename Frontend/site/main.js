
let baseURL = "http://localhost:8080/Backend_war/";


let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}
let menu = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

getAllVehicle();
function getAllVehicle() {
    $("#addingVehicles").empty();
    $.ajax({
        url: baseURL + "vehicle/get_all", success: function (res) {
            for (let c of res.data) {

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

                let vehicle_addons = `<div class="box">
            <img alt="" src="">
            <h3>`+brand+`</h3>
            <hr>
            <p>Daily - 18,000.00LKR</p>
            <p>Monthly - 300,000.00LKR</p>
            <p>Price per extra Km -100.00LKR</p>
            <p>Count - 2</p>
            <hr>
            <a class="blog-btn" href="#">Type - Luxury<i class='bx bx-right-arrow-alt'></i></a>
        </div>`;





                $("#addingVehicles").append(vehicle_addons);
            }
            bindRowClickEventsForVehicle();
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
    genarateVehicleID();
}

