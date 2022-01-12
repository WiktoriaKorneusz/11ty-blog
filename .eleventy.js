const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    // Return your Object options:
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");

    eleventyConfig.addFilter("postDate", (dateObject) => {
        return DateTime.fromJSDate(dateObject).toLocaleString(
            DateTime.DATE_MED
        );
    });
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
