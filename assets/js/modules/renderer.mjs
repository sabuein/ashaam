"use strict";

import { readJSONFile } from "data";
import { cl, id, qs } from "helpers";

// Define the callback functions to handle the retrieved JSONP data
const handleEventsResponse = (data) => {
    try {
        const activeSection = document.getElementById("activeEventsPanel");
        const inactiveSection = document.getElementById("inactiveEventsPanel");
        cl("Hi:", data[0].status === "active");
        if (!!data && (data[0].status === "active")) {
            renderEvent(data, activeSection);
        } else if (!!data && (data[0].avatar !== "undefined")) {
            renderEvent(data, inactiveSection);
        } else {
            cl("Data:");
            console.dir(data);
            cl(`Data type: ${typeof data}.`);
        }
    } catch (error) {
        console.error(error);
    } finally {
        if (!!data) console.dir(data); // cl(JSON.stringify(data, null, 2));
    }
};

const setDialog = (selector) => {
    try {
        const openButton = id(`${selector}OpenButton`) || null,
            closeButton = id(`${selector}CloseButton`) || null,
            cancelButton = id(`${selector}CancelButton`) || null,
            resetAllButton = id("resetAllDialogsButton") || null,
            formElement = id(`${selector}Form`) || null,
            dialogElement = id(`${selector}Dialog`) || null,
            dialogDetails = id(`${selector}Details`) || null;

        if (!!dialogElement) {
            // Reset the the dialog
            dialogElement.returnValue = null;
            
            // Cancel button closes the dialog without submitting the form
            dialogElement.addEventListener("close", (e) => {
                if (dialogElement.returnValue !== "null") {
                    alert(`#${selector}Dialog has a return value. View it in the output area.`)
                    // cl(dialogElement.returnValue);
                    qs("section:has(output)").style.display = "flex";
                    qs("output").innerText = dialogElement.returnValue;
                    dialogElement.returnValue = null;
                }
            });

            // Empty the dialog return value and output area if "Esc" key pressed
            dialogElement.addEventListener("keydown", (e) => {
                if (e.code === "Escape") {
                    dialogElement.returnValue = qs("output").innerText = null;
                    qs("section:has(output)").style.display = "none";
                }
            });

            // Set the open button <dialog> to open modally
            if (!!openButton) openButton.addEventListener("click", (e) => dialogElement.showModal());

            if (!!closeButton) {
                closeButton.addEventListener("click", (e) => {
                    dialogElement.returnValue = null;
                    dialogElement.close();
                });
            }

            if (!!cancelButton) {
                cancelButton.addEventListener("click", (e) => {
                    dialogElement.returnValue = null;
                    dialogElement.close();
                });
            }

            if (!!resetAllButton) {
                resetAllButton.addEventListener("click", (e) => {
                    const dialogs = document.querySelectorAll("dialog");
                    dialogs.forEach((dialog) => {
                        qs("section:has(output)").style.display = "none";
                        dialog.returnValue = qs("output").innerText = null;
                        dialog.close();
                    });
                });
            }
    
            if (!!formElement) {
                formElement.addEventListener("submit", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const formData = new FormData(e.target), entries = new Object();
                    for (const entry of formData.entries()) if (!!entry[1] && typeof entry[1] === "string") entries[entry[0]] = entry[1];
                    if (!!entries && Object.keys(entries).length > 0) dialogElement.returnValue = JSON.stringify(entries, null, 2);
                    setOutputButtons(qs("output"));
                    formElement.reset();
                    dialogElement.close();
        
                }, false);
            }
    
            if (!!dialogDetails) dialogDetails.open = true;
        }
    } catch (error) {
        console.log(error);
    }
};

const setOutputButtons = (output) => {
    try {
        const selectButton = output.nextElementSibling.querySelector(`button[data-button-role="select"]`) || null,
            deselectButton = output.nextElementSibling.querySelector(`button[data-button-role="deselect"]`) || null,
            copyButton = output.nextElementSibling.querySelector(`button[data-button-role="copy"]`) || null;

        if (!!selectButton) {
            selectButton.addEventListener("click", (e) => {
                // Clear any current selection
                const selection = window.getSelection();
                selection.removeAllRanges();

                // Select paragraph
                const range = document.createRange();
                range.selectNodeContents(output);
                selection.addRange(range);
            });
        }

        if (!!deselectButton) {
            deselectButton.addEventListener("click", (e) => {
                const selection = window.getSelection();
                selection.removeAllRanges();
            });
        }

        if (!!copyButton) {
            copyButton.addEventListener("click", async (e) => {
                // Copy the text into the clipboard
                await navigator.clipboard.writeText(window.getSelection());
            });
        }
    } catch (error) {
        console.error(error);
    }
}

const renderEvent = (data, output) => {
    try {
        data.forEach(object => {

            if (!!object.avatar) {
                const figure = document.createElement("figure");
                const figcaption = document.createElement("figcaption");
                const img = document.createElement("img");
                img.src = object.avatar;
                figcaption.appendChild(document.createTextNode(`${object.first_name} ${object.last_name}`));
                figure.appendChild(img);
                figure.appendChild(figcaption);
                //output.insertBefore(figure, output.firstChild);
                cl(output.lastElementChild);
                output.lastElementChild.appendChild(figure);
                output.lastElementChild.setAttribute("class", "flexy gap-x1");
                // const clone = output.cloneNode(true); // Deep
                // output.remove();
            }

            const {
                status = null,
                title = null,
                descriptionHTML = null,
                coverPhoto = null,
                startDateTime = null,
                endDateTime = null,
                venue = null
            } = object;

            const article = document.createElement("article");
            const header = document.createElement("header");
            const figcaption = document.createElement("figcaption");
            const img = document.createElement("img");
            const aside = document.createElement("aside");
            const footer = document.createElement("footer");

            if (!status && status !== "active") return;// throw Error("The event is inactive.");

            if (!!title) {
                const h3 = document.createElement("h3");
                h3.appendChild(document.createTextNode(title));
                figcaption.appendChild(document.createTextNode(title));
                header.appendChild(h3);
                img.setAttribute("title", title);
                img.setAttribute("alt", `${title} cover photo`);
            }

            if (!!coverPhoto) {
                const figure = document.createElement("figure");
                figure.appendChild(img);
                figure.appendChild(figcaption);
                header.appendChild(figure);
                img.setAttribute("src", coverPhoto);
            }

            article.appendChild(header);

            if (!!descriptionHTML) {
                const details = document.createElement("details");
                const summary = document.createElement("summary");
                summary.appendChild(document.createTextNode("Read more..."));
                details.innerHTML = descriptionHTML;
                details.insertBefore(summary, details.firstChild);
                article.appendChild(details);
                details.setAttribute("class", "flexy gap-x1");
            }

            if (!!startDateTime) {
                const startDate = document.createElement("time");
                startDate.appendChild(document.createTextNode(new Date(startDateTime).toUTCString()));
                footer.appendChild(startDate);
            }

            if (!!endDateTime) {
                const endDate = document.createElement("time");
                endDate.appendChild(document.createTextNode(new Date(endDateTime).toUTCString()));
                footer.appendChild(endDate);
            }

            if (!!venue) {
                const ul = document.createElement("ul");
                let x = ``;
                if (!!venue.name) x += `<i>${venue.name}</i>`;
                if (!!venue.phone) x += `<i>${venue.phone}</i>`;
                if (!!venue.address.googleMaps) {
                    x += `<i><a href="${venue.address.googleMaps}" title="Google Maps" target="_blank">Google Maps</a></i>`;
                }
                ul.innerHTML = x;
                footer.appendChild(ul);
                ul.setAttribute("class", "flexy gap-x1");
            }

            aside.innerText = "Share: Facebook, Twitter, Instagram, Email";
            footer.appendChild(aside);
            article.appendChild(footer);
            article.setAttribute("class", "flexy");
            footer.setAttribute("class", "flexy gap-x1");

            output.appendChild(article);

        });
    } catch (error) {
        console.error(error);
    }
};

const useTemplate = () => {
    try {
        let myArr = ["Audi", "BMW", "Ford", "Honda", "Jaguar", "Nissan"];
        function showContent() {
            let temp, item, a, i;
            temp = document.getElementsByTagName("template")[0];
            item = temp.content.querySelector("div");
            for (i = 0; i < myArr.length; i++) {
                a = document.importNode(item, true);
                a.textContent += myArr[i];
                document.body.appendChild(a);
            }
        }
        // Test to see if the browser supports the HTML template element by checking
        // for the presence of the template element's content attribute.
        if ("content" in document.createElement("template")) {
            // Instantiate the table with the existing HTML tbody
            // and the row with the template
            const tbody = document.querySelector("tbody");
            const template = document.querySelector("#productrow");

            // Clone the new row and insert it into the table
            const clone = template.content.cloneNode(true);
            const secondClone = template.content.firstElementChild.cloneNode(true);
            let td = clone.querySelectorAll("td");
            td[0].textContent = "1235646565";
            td[1].textContent = "Stuff";

            tbody.appendChild(clone);

            // Clone the new row and insert it into the table
            const clone2 = template.content.cloneNode(true);
            td = clone2.querySelectorAll("td");
            td[0].textContent = "0384928528";
            td[1].textContent = "Acme Kidney Beans 2";

            tbody.appendChild(clone2);
        } else {
            // Find another way to add the rows to the table because
            // the HTML template element is not supported.
            alert("Your browser does not support template element!");
        }
    } catch (error) {
        console.log(error);
    }
};

// const xX = await readJSONFile("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
// cl(xX);

export {
    handleEventsResponse,
    setDialog
};