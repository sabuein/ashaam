"use strict";

import { fetchAsJSON, fetchAsJSONP } from "data";
import { handleEventsResponse } from "renderer";

document.getElementById("refreshWindowButton").addEventListener("click", () => window.location.reload());

fetchAsJSONP("./assets/data/events.mjs", handleEventsResponse);
await fetchAsJSON("https://random-data-api.com/api/v2/users?size=21&response_type=json", handleEventsResponse);