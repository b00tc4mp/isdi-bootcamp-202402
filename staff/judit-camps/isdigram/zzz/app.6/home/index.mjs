import logic from "../logic.mjs"

import Home from "./components/Home.mjs"

if (!logic.isUserLoggedIn())
    location.href = '../login'

else {
    const home = new Home

    home.assembleTo(document.body)
}

