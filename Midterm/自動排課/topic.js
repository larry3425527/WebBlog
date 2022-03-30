var topic = [
    "尚未開學"
    ,
    "國定假日"
    ,
    "環境準備"
    ,
    "隨機性"
    ,
    "重複性"
];
var inputdate;
var startDate = new Date();
$(function(){
    $("#confirm").on("click",(function() {
        inputdate = document.getElementById('date').value
        const words = inputdate.split('/');
        month = parseInt(words[0], 10);
        day = parseInt(words[1], 10);
        setMonthAndDay(month,day);
        set(startDate);
    }));
});

function setMonthAndDay(startMonth, startDay){
//一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
