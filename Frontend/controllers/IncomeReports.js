let baseURL = "http://localhost:8080/Backend_war/";


getAllByDailyRevenues();
getAllByMonthlyRevenues();
gettingRevenueByYear();

let val1;
let val2;
function getAllByDailyRevenues() {
    $.ajax({
        url: baseURL + "income/by_daily", dataType: "json", success: function (res) {
            for (let c of res.data) {
                let row = "<tr>" + "<td>" + (c[1]) + "</td>" + "<td>" + (c[0]) + "</td>" + "</tr>";
                $("#incomeReportsDailyTable").append(row);
            }

        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}
let month;
function getAllByMonthlyRevenues() {
    $.ajax({
        url: baseURL + "income/by_month", dataType: "json", success: function (res) {
            for (let c of res.data) {
                if (c[0]===1){
                    month="January";
                }else if(c[0]===2){
                    month ="February";
                }else if(c[0]===3){
                    month="March";
                }





                let row = "<tr>" + "<td>" + month + "</td>" + "<td>" + (c[1]) + "</td>" + "</tr>";
                $("#incomeReportsMonthlyTable").append(row);





            }

        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}






function gettingRevenueByYear() {
    $("#todayDate").val(new Date().getFullYear()+" / "+new Date().getMonth()+" / "+new Date().getDate()+"   "
        +new Date().getHours()+" : "+new Date().getMinutes()+" : "+new Date().getSeconds());

    $.ajax({
        url: baseURL + "income/by_year", dataType: "json", success: function (res) {
            console.log(res.data);
            for (let c of res.data) {
                let id = c;
                $("#revenueByYear").val("Rs "+id+".00");
            }

        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}