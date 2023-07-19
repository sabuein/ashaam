"use strict";

import { fetchAsJSON, fetchAsJSONP } from "data";
import { handleEventsResponse } from "renderer";

const r = document.getElementById("refreshWindowButton");
if (!!r) r.addEventListener("click", () => window.location.reload(), false);

fetchAsJSONP("./assets/data/events.mjs", handleEventsResponse);
await fetchAsJSON("https://random-data-api.com/api/v2/users?size=21&response_type=json", handleEventsResponse);

const myActions = document.getElementById("adminActions");
myActions.addEventListener("submit", (event) => {
    
    event.preventDefault();
    event.stopPropagation();

    const formData = new FormData(event.target);
    const x = new Object();
    for (const entry of formData.entries()) {
        if (!!entry[1] && typeof entry[1] === "string") x[entry[0]] = entry[1];
    }
    console.log(JSON.stringify(x, null, 2));
    
    // for (const key of formData.keys()) {
    //     if (formData.get(key) !== "") console.log(`${key}: ${formData.get(key)}`);
    // }

}, false);