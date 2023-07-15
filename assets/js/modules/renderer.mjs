"use strict";

import { readJSONFile } from "./data.mjs";

// Define the callback functions to handle the retrieved JSONP data
const handleEventsResponse = (data) => {
    try {
        const activeSection = document.getElementById("activeEventsPanel");
        const inactiveSection = document.getElementById("inactiveEventsPanel");
        console.log("Hi:", data[0].status === "active");
        if (!!data && (data[0].status === "active")) {
            renderEvent(data, activeSection);
        } else if (!!data && (data[0].avatar !== "undefined")) {
            renderEvent(data, inactiveSection);
        } else {
            console.log("Data:");
            console.dir(data);
            console.log(`Data type: ${typeof data}.`);
        }
    } catch (error) {
        console.error(error);
    } finally {
        if (!!data) console.dir(data); // console.log(JSON.stringify(data, null, 2));
    }
};

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
                console.log(output.lastElementChild);
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

// const xX = await readJSONFile("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
// console.log(xX);

export {
    handleEventsResponse
};