module.exports = (req, res) => {
    let title = "Επιλέξτε Περιοχές Κάλυψης"
    let countries = {
        "America": [
            "United States",
            "Canada",
            "Mexico",
            "Brazil",
            "Argentine",
            "Colombia",
        ],
        "Europe": [
            "Greece",
            "Belgium",
            "Germany",
            "Spain",
            "Italy",
            "United Kingdom",
            "Switzerland",
        ],
        "Asia": [],
        "Africa": [],
        "Oceania": [],
    };
    res.render(__dirname + '/view.ejs', {
        title: title,
        countries: countries
    });
};