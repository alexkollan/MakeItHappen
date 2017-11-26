const ejs = require('ejs');
module.exports = (req, res) => {
    let title = "ΕΠΙΛΕΞΤΕ ΠΕΡΙΟΧΕΣ ΚΑΛΥΨΗΣ"
    let countries = {
        "Αμερική": [
            "Ηνωμένες Πολιτείες",
            "Καναδάς",
            "Μεξικό",
            "Βραζιλία",
            "Αργεντινή",
            "Κολομβία",
        ],
        "Ευρώπη": [
            "Έλλαδα",
            "Βέλγιο",
            "Γερμανία",
            "Ισπανία",
            "Ιταλία",
            "Ηνωμένο Βασίλειο",
            "Ελβετία",
        ],
        "Ασία": [],
        "Αφρική": [],
        "Ωκεανία": [],
    };
    let html = ejs.render(`
<div class="py-5 text-light bg-primary text-center h-100 my-0">
    <div class="container">
        <div class="row mb-4">
            <h1 class="col-md-12 text-gray-dark"><%= title %></h1>
        </div>
        <% for(continent in countries) { %>
            <div id="<%= continent %>" class="continent bg-light text-dark row rounded pt-2 mb-3">
                <div class="col-md-12 h4 font-weight-normal d-flex">
                    <div class="">
                        <input class="check-all-countries" id="continent-<%= continent %>" type="checkbox">
                        <label class="m-0 p-1" for="continent-<%= continent %>"><%= continent %></label>
                    </div>
                    <div class="toggle-content text-right" style="flex-grow: 1;">
                        <div class="btn btn-light">
                            <i class="fa fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
                <div class="country-list offset-md-1 col-md-11 d-flex flex-wrap text-left hidden">
                    <% for(var i=0; i < countries[continent].length; i++) { %>
                        <div class="col-md-3">
                            <input id="<%= countries[continent][i] %>" class="country" type="checkbox">
                            <label for="<%= countries[continent][i] %>"><%= countries[continent][i] %></label>
                        </div>
                    <% } %>
                </div>
            </div>
        <% } %>
        <div class="col-md-12 py-3">
            <button id="to-step-4" type="submit" class="m-auto btn btn-secondary">Επόμενο</button>
        </div>
    </div>
</div>
    `, {
        title: title,
        countries: countries
    });
    res.send({
        success: true,
        html: html
    });
};