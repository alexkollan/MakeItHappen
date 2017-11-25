const ejs = require('ejs');
module.exports = (req, res) => {
    let title = "Επιλέξτε Περιοχές Κάλυψης"
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
<div class="container">
    <div class="row">
        <h3 class="col-md-12 text-gray-dark font-weight-normal"><%= title %></h3>
    </div>
    <% for(continent in countries) { %>
        <div id="<%= continent %>" class="continent row border border-info rounded pt-2 mb-3">
            <div class="col-md-12 h4 font-weight-normal d-flex">
                <div class="">
                    <input class="check-all-countries" id="continent-<%= continent %>" type="checkbox">
                    <label for="continent-<%= continent %>"><%= continent %></label>
                </div>
                <div class="ml-auto">
                    <div class="btn btn-info toggle-content">
                        <i class="fa fa-chevron-down"></i>
                    </div>
                </div>
            </div>
            <div class="country-list offset-md-1 col-md-11 d-flex flex-wrap hidden">
                <% for(var i=0; i < countries[continent].length; i++) { %>
                    <div class="col-md-3">
                        <input id="country-<%= continent %>-<%= i %>" class="country" type="checkbox">
                        <label for="country-<%= continent %>-<%= i %>"><%= countries[continent][i] %></label>
                    </div>
                <% } %>
            </div>
        </div>
    <% } %>
</div>`, {
        title: title,
        countries: countries
    });
    res.send({
        success: true,
        html: html
    });
};