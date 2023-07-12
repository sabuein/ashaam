"use strict";

import { readJSONFile } from "./data.mjs";

// Define the callback functions to handle the retrieved JSONP data
const handleEventsResponse = (data) => {
    const section = document.getElementById("activeEventsPanel");
    if (!!data && !!data.coverPhoto) {
        console.dir(data);
        console.log(JSON.stringify(data, null, 2));
        return renderEvent(data, section);
    } else if (!!data) {
        return data.forEach(element => {
            renderEvent(element, section);
        });
    } else {
        console.log("Data:");
        console.dir(data);
        console.log(`Data type: ${typeof data}.`);
    }
};

const renderEvent = (data, output) => {
    try {
        const {
            status = null,
            title = null,
            descriptionHTML = null,
            coverPhoto = null,
            startDateTime = null,
            endDateTime = null,
            venue = null
        } = data;

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
            img.setAttribute("title", title);
            img.setAttribute("alt", `${title} cover photo`);
            header.appendChild(h3);
        }
        
        if (!!coverPhoto) {
            const figure = document.createElement("figure");
            img.setAttribute("src", coverPhoto);
            figure.appendChild(img);
            figure.appendChild(figcaption);
            header.appendChild(figure);
        }

        article.appendChild(header);

        if (!!descriptionHTML) {
            const div = document.createElement("div");
            const details = document.createElement("details");
            details.innerHTML = descriptionHTML;
            div.setAttribute("class", "flexy gap-x1");
            const summary = document.createElement("summary");
            summary.appendChild(document.createTextNode("Read more..."));
            details.appendChild(summary);
            article.appendChild(details);
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
            ul.setAttribute("class", "flexy gap-x1");
            footer.appendChild(ul);
        }

        article.setAttribute("class", "flexy");
        aside.innerText = "Share: Facebook, Twitter, Instagram, Email";
        footer.appendChild(aside);
        footer.setAttribute("class", "flexy gap-x1");
        article.appendChild(footer);
        output.appendChild(article);

    } catch (error) {
        console.error(error);
    }
};

// const xX = await readJSONFile("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
// console.log(xX);

export {
    handleEventsResponse
};