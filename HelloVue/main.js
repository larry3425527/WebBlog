let myData = {
    Name
        : "吳皇霖"
    ,
    Signs
        : "天秤座"
    ,
    StudentID
        : "1083308"
};
const App
    = Vue.createApp({
        data() {
            return myData
                ;
        }
    });
App.mount("#app");