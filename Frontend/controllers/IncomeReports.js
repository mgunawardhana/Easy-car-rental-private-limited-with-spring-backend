let baseURL = "http://localhost:8080/Backend_war/";


getAllByDailyRevenues();

function getAllByDailyRevenues() {
    $.ajax({
        url: baseURL + "income/by_daily", dataType: "json", success: function (res) {
            console.log(res.data);
            for (let c of res.data) {
                console.log(c);

                let row = "<tr>" + "<td>" +c+ "</td>" + "<td>" + c + "</td>"+"</tr>";
                    $("#incomeReportsDailyTable").append(c+"<br>");
            }

        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}
