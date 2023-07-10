"use strict";

const fetchAsJSON = async (url, callback) => {
    try {
        const x = await fetch(url);
        const data = await x.json();
        return callback(handleData(data));
    } catch (error) {
        console.log(error);
    }
};

const fetchAsJSONP = (url, callback) => {
    const script = document.createElement("script");
    script.setAttribute("src", `${url}?callback=${callback.name}`);
    // script.setAttribute("type", "text/javascript");
    script.setAttribute("type", "module");
    // Attach the callback function to the global scope
    window[callback.name] = callback;
    return window.document.head.appendChild(script);
};

const handleData = (data) => {
    return validateData(sanitizeData(data));
};


const validateData = (data) => {
    if (typeof data === "object") return data;
    else return JSON.parse(data);
};

const sanitizeData = (data) => {
    return data;
};

const readJSONFile = async (url) => {
    try {
        let myXML = new XMLHttpRequest(), myObject, myText;
        myXML.overrideMimeType("application/json");
        myXML.onreadystatechange = () => {
            if (myXML.readyState === 4 && myXML.status === 200) {
                myObject = JSON.parse(myXML.responseText);
                myText = JSON.stringify(myObject);
                return myObject;
            }/* else {
                throw Error("Something went wrong!");
            }*/
        };
        myXML.open("GET", url, true);
        myXML.send();
    } catch (error) {
        console.log(error);
    }
};

export {
    fetchAsJSON,
    fetchAsJSONP,
    readJSONFile
};