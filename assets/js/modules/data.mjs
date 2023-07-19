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

function checkForm(form) {
    // validation fails if the input is blank
    if (form.inputfield.value == "") {
        alert("Error: Input is empty!");
        form.inputfield.focus();
        return false;
    }

    // regular expression to match only alphanumeric characters and spaces
    var re = /^[\w ]+$/;

    // validation fails if the input doesn't match our regular expression
    if (!re.test(form.inputfield.value)) {
        alert("Error: Input contains invalid characters!");
        form.inputfield.focus();
        return false;
    }

    const input = document.querySelector('#input');
    input.addEventListener('change', (e) => {
        const isValid = e.target.checkValidity();
        e.target.setAttribute('aria-invalid', !isValid);
        inputs.forEach((input) => {
            const errorElement = document.createElement('span');
            errorElement.id = `${input.id}-error`;
            input.setAttribute('aria-describedby', errorElement.id);
            input.insertAdjacentElement(errorElement);
        });
        input.addEventListener('change', (e) => {
            const isInvalid = !e.target.checkValidity();
            e.target.setAttribute('aria-invalid', isInvalid);
            if (isInvalid) {
                const errorMessage = e.target.validationMessage;
                errorElement.textContent = errorMessage;
            }
        });
        input.addEventListener('change', (e) => {
            // Don't keep the user locked in place if we previously validated the input
            const wasValidated = e.target.getAttribute('aria-invalid') === 'true';
            if (wasValidated) {
                return;
            }
            const errorMessage = e.target.validationMessage;
            e.target.setAttribute('aria-invalid', !!errorMessage);
            if (errorMessage) {
                // Update error label visually
                errorElement.textContent = errorMessage;
                // Focus the invalid input so its error is narrated
                e.target.focus();
            }
        });
        // Listen for the input event now so we fire this on every keystroke
        input.addEventListener('input', (e) => {
            if (errorElement.textContent) {
                e.target.removeAttribute('aria-invalid');
                errorElement.textContent = '';
            }
        });

        console.log(isValid);
    });

    // validation was successful
    return true;
}
export {
    fetchAsJSON,
    fetchAsJSONP,
    readJSONFile
};