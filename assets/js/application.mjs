"use strict";

import { fetchAsJSON, fetchAsJSONP } from "data";
import { id } from "helpers";
import { handleEventsResponse, setDialog } from "renderer";

document.addEventListener("DOMContentLoaded", async (event) => {
    
    const r = id("refreshWindowButton");
    if (!!r) r.addEventListener("click", () => window.location.reload(), false);

    // Setting up the admin buttons
    switch (document.location.pathname) {
        case "/admin.html":
            setDialog("newEvent");
            break;
        case "/events.html":
            fetchAsJSONP("./assets/data/events.mjs", handleEventsResponse);
            await fetchAsJSON("https://random-data-api.com/api/v2/users?size=21&response_type=json", handleEventsResponse);
            break;
    }

});