const getData = (url) => {
    let myObject,
        myText,
        myXML = new XMLHttpRequest();
    myXML.onreadystatechange = () => {
        if (myXML.readyState === 4 && myXML.status === 200) {
            myObject = JSON.parse(myXML.responseText);
            myText = JSON.stringify(myObject);
            return myText;
        }
    }
    myXML.open("get", url, true);
    myXML.send();
}

let testing = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d374d4f9124a3308f76ddab3ee00b581";

console.log(getData(testing));

(function getTheMan(data) {
    console.log("JSON-P")
    console.log(data.people.slug);
})();