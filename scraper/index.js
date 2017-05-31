const utils = require("./utils")
const classesScraper = require("./classes")
const definesScraper = require("./defines")

Promise.all([
    classesScraper.scrape(),
    definesScraper.scrape()
])
.then(([{ classes, globals }, defines]) => {
    return Promise.all([
        utils.writeJson("./data/classes.json", classes),
        utils.writeJson("./data/globals.json", globals),
        utils.writeJson("./data/defines.json", defines)
    ])
    .then(() => {
        console.log("all done, exiting now")
        process.exit()
    })
})
.catch((err) => {
    console.log("error, exiting now: ", err)
    process.exit(1)
})
