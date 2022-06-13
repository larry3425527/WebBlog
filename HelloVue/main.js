let myData = {
    firstName
        : "Larry"
    ,
    lastName
        : "Wu"
};
const App
    = Vue.createApp({
        data() {
            return myData
                ;
        }
    });
App.mount("#app");