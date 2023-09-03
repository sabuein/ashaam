"use strict";

import { fetchAsJSON, fetchAsJSONP } from "data";
import { id } from "helpers";
import { handleEventsResponse, setDialog } from "renderer";

document.addEventListener("DOMContentLoaded", async (event) => {
    
    // Setting up default nav
    const r = id("refreshWindowButton");
    if (!!r) r.addEventListener("click", () => window.location.reload(), false);

    // Setting up admin.html
    if (document.location.pathname.includes("admin.html")) setDialog("newEvent");

    // Setting up events.html
    if (document.location.pathname.includes("events.html")) {
        fetchAsJSONP("./assets/data/events.mjs", handleEventsResponse);
        await fetchAsJSON("https://random-data-api.com/api/v2/users?size=21&response_type=json", handleEventsResponse);
    }
});