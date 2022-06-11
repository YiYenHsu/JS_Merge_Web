$(function () {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount = topic.length;
    // 1 sec = 1000 ms
    // 計算1天的秒數量
    let millisecsPerDay = 24 * 60 * 60 * 1000;

    for (let x = 0; x < topicCount; x++) {

        //  去掉年分-寫法二
        // var thisDateObject = new Date(startDate.getTime() + 7 * x * millisecsPerDay);
        // $("#courseTable").append(
        // `<tr>
        // <td>${x+1}</td>
        // <td>${thisDateObject.getMonth()+1}/${thisDateObject.getDate()}</td>
        // <td>${topic[x]}</td>
        // </tr>`

        // 去掉年分-寫法一
        $("#courseTable").append(
            `<tr>
                <td>${x + 1}</td>
                <td>${new Date(startDate.getTime() + 7 * x * millisecsPerDay).toLocaleDateString().slice(5)}</td>
                <td>${topic[x]}</td>
            </tr>`
        );
    }
});

let d=new Date;
$('select#myDate').val(Date);