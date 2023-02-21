$("#placeBookingBtn").on('click', function () {

    var bk_details = {
        // open: false,

        // bookingId:'B00-001',
        //
        // customerBooking:{
        //     id:'',
        //     name:{
        //         firstName:'maneesha',
        //         lastName:'guna',
        //     }
        // },
        //
        // driverBooking:{
        //     id: 'D00-001',
        //     nic: '20001000',
        //     name: {
        //         firstName:'dakshina',
        //         lastName: 'tharuka'
        //     },
        //     address: 'galle',
        //     drivingLicenseNo: '12345',
        //     email: 'mail@gmail.com',
        //     contactNo: '071-2536654',
        //     user: {
        //         userId:'12',
        //         userName:'mahesh',
        //         password: '1234',
        //         role:'DRIVER',
        //     },
        //     driverAvailability: 'YES'
        // },
        //
        // vehicleBooking:{
        //     vehicleId:'V00-001',
        //     refundableDamagedFee:'2000',
        //     // vehicleBrand:''
        // },
        //
        // formData:{
        //     bookingId:'B00-001',
        //     pickUpDate:'2011-11-11',
        //     pickUpTime:'12:10:00',
        //     returnDate:'2011-11-23',
        //     pickUpLocation:'',
        //     DriverRequestType:'YES',
        //     customer:{
        //         id: 'C00-001',
        //         nic: '12345',
        //         name: {
        //             firstName:'maneesha',
        //             lastName: 'gunawardhama'
        //         },
        //         address: 'galle',
        //         drivingLicenseNo: '12345',
        //         email: 'mail@.com',
        //         contactNo: '071-9087766',
        //         user: {
        //             userId:'1',
        //             userName:'maneesha',
        //             password: '1234',
        //             role:'DRIVER',
        //         }
        //     },
        //     bookingDetails:{
        //         vehicleId:'',
        //         bookingId:'',
        //         vehicle:{
        //             vehicleId: '',
        //             registrationNo: '',
        //             vehicleBrand: '',
        //             vehicleType: '',
        //             fuelType: '',
        //             numberOfPassenger: '',
        //             vehicleColour: '',
        //             transmissionType: '',
        //             refundableDamagedFee: '',
        //             vehicleMileage: '',
        //             vehiclePriceRate: {
        //                 dailyRate: '',
        //                 monthlyRate: ''
        //             },
        //             freeMileage: {
        //                 dailyMileage: '',
        //                 monthlyMileage: ''
        //             },
        //             lastServiceMileage: '',
        //             extraKmPer:'',
        //             vehicleAvailability: ''
        //         },
        //     },
        //     driverSchedules:{
        //         driverId:'',
        //         bookingId:'',
        //         driver:{
        //             id: '',
        //             nic: '',
        //             name: {
        //                 firstName:'',
        //                 lastName: ''
        //             },
        //             address: '',
        //             drivingLicenseNo: '',
        //             email: '',
        //             contactNo: '',
        //             user: {
        //                 userId:'',
        //                 userName:'',
        //                 password: '',
        //                 role:'',
        //             },
        //             driverAvailability: ''
        //         }
        //     },
        // },
        //
        // vehicleList: [],
        //
        // Locations: [
        //     {
        //         type: 'Colombo'
        //     },
        //     {
        //         type: 'Galle'
        //     }
        // ],
        //
        // driverRequest: [
        //     {
        //         type: 'YES'
        //     },
        //     {
        //         type: 'NO'
        //     }
        // ],
        //
        // driverRequestType:'',

    }


    $.ajax({
        url: baseURL + "/bookings/place_bookings",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(bk_details),
        dataType: "json",
        success: function (res) {
            clearTextFields();
            getAllCustomers();
            alert(res.message);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});
var bk_details = {
    bookingId: bookingId,
    pickUpDate: pickUpDate,
    pickUpTime: pickUpTime,
    returnDate: returnDate,
    DriverRequestType: DriverRequestType
}
//     customer: {id:,
//         nic:,
//         name:{firstName:,lastName:},
//         address:,
//         drivingLicenseNo:,
//         email:,
//         contactNo:,
//         user:{userId:,userName:,password:,role:},
//     },
//     pickUpLocation: "Galle",
//     bookingDetails:{vehicleId: bookingId:},
//     driverSchedules:{driverId:bookingId:}
//         }
//     // bookingDetails:, driverSchedules:,
// }
