function set(startDate){
    title = document.getElementById("title")
    if (!title){
        $("#courseTable").append("<tr id = \"title\"><th>場次</th><th>時間</th><th>主題</th></tr>");
    }

    flag = document.getElementById("item")
    if (flag){
        const nodeList = document.querySelectorAll("#item");
        for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].remove()
        }
    }

    var topicCount = topic.length;
    let millisecsPerDay = 24*60*60*1000;
    for(var x=0;x<topicCount;x++){
        d = new Date(startDate.getTime()+7*x*millisecsPerDay)
        month = d.getMonth()
        day = d.getDate()
        let style = "style = \"color:blue;\""
        if (topic[x] == "國定假日"){
            style = "style = \"color:red;\""
        }
        var item = "<tr id = \"item\">"+
        `<td + ${style}>${x+1}</td>`+
        `<td + ${style}>${month+1}/${day}</td>`+
        `<td + ${style}>${topic[x]}</td>`+
        "</tr>"
        $("#courseTable").append(item);
    }
}

