var api = {
    ajax: function(params, callback) {
        $.ajax({
            url: params.url,
            method: params.method,
            data: params.data
        }).done(function(result) {
            try {
                if (typeof result === "string") {
                    result = JSON.parse(result);
                }
            } catch (error) {} finally {
                if (typeof callback === "function") callback(result);
            }
        }).fail(function(result){
            if (typeof callback === "function") callback(result);
        })
    },
    getScreen2: function (data, callback) {
        this.ajax({
            url: "/screen2",
            method: "POST",
            data: data
        }, callback);
    },
    getScreen3: function (data, callback) {
        this.ajax({
            url: "/screen3",
            method: "POST",
            data: data
        }, callback);
    },
    getScreen4: function (data, callback) {
        this.ajax({
            url: "/screen4",
            method: "POST",
            data: data
        }, callback);
    },
    getScreen5: function (data, callback) {
        this.ajax({
            url: "/screen5",
            method: "POST",
            data: data
        }, callback);
    },
    getScreen6: function (data, callback) {
        this.ajax({
            url: "/screen6",
            method: "POST",
            data: data
        }, callback);
    },
    getScreen7: function (data, callback) {
        this.ajax({
            url: "/screen7",
            method: "POST",
            data: data
        }, callback);
    },
    getScreen8: function (data, callback) {
        this.ajax({
            url: "/screen8",
            method: "POST",
            data: data
        }, callback);
    },
};

var app = {
    templates: {
        alert: `<div id="{id}" class="message bg-danger text-light">{message}</div>`
    },
    alert: function(msg){
        var id = `message-${new Date().getTime() % 100000}${Math.floor(Math.random()*100000)}`;
        $("#message-container").append(this.templates.alert.replace('{id}', id).replace('{message}', msg));
        setTimeout(function(){
            $(`#${id}`).fadeOut(400, function(){
                $(this).remove();
            });
        }, 10000);
    },
    loadScreen2: function(){
        let user_id = $("#user_id").val();
        if (!user_id) {
            return app.alert("Αυτό πεδίο δεν μπορεί να είναι άδειο");
        }
        api.getScreen2({
            user_id: user_id
        }, function(data){
            if (data.success) {
                $("#wrapper").append(data.html);
                $("#to-step-2").hide();
                $("#to-step-2").parents(".input-group").parent().append('<div class="text-center pt-4"><div class="text-light bg-success d-inline p-2">Λάβατε κωδικό επιβεβαίωσης</div></div>')
                $("#user_id").attr("disabled", "");
                
            } else {
                app.alert(data.description);
            }
        })
    },
    loadScreen3: function(){
        let name = $("#name").val();
        let vat = $("#vat").val();
        let amka = $("#amka").val();
        let birth_date = $("#birth-date").val();
        let telephone = $("#telephone").val();
        let profession = $("#profession").val();
        if (!user_id || !vat || !amka || !birth_date || !telephone || !profession) {
            return app.alert("Κάποιο πεδίο είναι άδειο");
        }
        api.getScreen3({
            name: name,
            vat: vat,
            amka: amka,
            birth_date: birth_date,
            telephone: telephone,
            profession: profession
        }, function(data){
            if (data.success) {
                $("#wrapper").append(data.html);
                $("#to-step-3").hide();
                $("#name").attr("disabled", "");
                $("#vat").attr("disabled", "");
                $("#amka").attr("disabled", "");
                $("#birth-date").attr("disabled", "");
                $("#telephone").attr("disabled", "");
                $("#profession").attr("disabled", "");
            } else {
                app.alert(data.description);
            }
        })
    },
    loadScreen4: function(){
        let countries = [];
        $(".country:checked").toArray().forEach(function(country){
            countries.push($(country).attr("id"));
        });
        api.getScreen4({
            countries: countries
        }, function(data){
            if (data.success) {
                $("#wrapper").append(data.html);
                $("#to-step-4").hide();
                $(".country").attr("disabled", "");
                $(".check-all-countries").attr("disabled", "");
            } else {
                app.alert(data.description);
            }
        })
    },
    loadScreen5: function(){
        let hospitals = [];
        $(".hospital.selected").toArray().forEach(function(hosp){
            hospitals.push($(hosp).attr("id"));
        });
        api.getScreen5({
            hospitals: hospitals
        }, function(data){
            if (data.success) {
                $("#wrapper").append(data.html);
                $("#to-step-5").hide();
                app.initSlider();
            } else {
                app.alert(data.description);
            }
        })
    },
    loadScreen6: function(){
        let coverage = {};
        coverage.min = parseInt($("#selector").slider("values", 0));
        coverage.max = parseInt($("#selector").slider("values", 1));
        api.getScreen6({
            coverage: coverage
        }, function(data){
            if (data.success) {
                $("#wrapper").append(data.html);
                $("#to-step-6").hide();
            } else {
                app.alert(data.description);
            }
        })
    },
    loadScreen7: function(){
        let contract_type = $(".contract-type.btn-primary").html("ΕΤΗΣΙΟ") ? true : false;
        api.getScreen7({
            contract_type: contract_type
        }, function(data){
            if (data.success) {
                $("#wrapper").append(data.html);
                $("#to-step-7").hide();
            } else {
                app.alert(data.description);
            }
        })
    },
    loadScreen8: function(){
        // let contract_type = $(".contract-type.btn-primary").html("ΕΤΗΣΙΟ") ? true : false;
        api.getScreen8({
            // contract_type: contract_type
        }, function(data){
            if (data.success) {
                $("#wrapper").append(data.html);
                $("#to-step-8").hide();
            } else {
                app.alert(data.description);
            }
        })
    },
    initSlider: function() {
        $("#selector").slider({
            range: true,
            min: 0,
            max: 500000,
            step: 100,
            values: [5000, 30000],
            slide: function(event, ui) {
                $("#amount").html("€" + ui.values[0] + " - €" + ui.values[1]);
            }
        });
        $("#amount").html("€" + $("#selector").slider("values", 0) + " - €" + $("#selector").slider("values", 1));
    },
    erwtiseisKapnismatos: function(a) {
        
        if (a =='y'){
            $('#erwtKapn1 , #erwtKapn2').removeClass('hidden')
        }
        else if(a == 'n'){
            $('#erwtKapn1 , #erwtKapn2').addClass('hidden')
        }
    },
    
    erwtiseisKarkinou: function(b){
        if (b == 'y'){
            $('#erwtKark1 , #erwtKark2, #erwtKark3' ).removeClass('hidden')
        }
        else if(b == 'n'){
            $('#erwtKark1 , #erwtKark2, #erwtKark3' ).addClass('hidden')
        }
    },
    
    erwtiseisDiaviti: function(c){
        if (c == 'y'){
            $('#erwtDiav1 , #erwtDiav2, #erwtDiav3' ).removeClass('hidden')
        }
        else if(c == 'n'){
            $('#erwtDiav1 , #erwtDiav2, #erwtDiav3' ).addClass('hidden')
        }
    },
    
    events: function(){
        $("body").on("click", "#to-step-2", app.loadScreen2);
        $("body").on("click", "#to-step-3", app.loadScreen3);
        $("body").on("click", "#to-step-4", app.loadScreen4);
        $("body").on("click", "#to-step-5", app.loadScreen5);
        $("body").on("click", "#to-step-6", app.loadScreen6);
        $("body").on("click", "#to-step-7", app.loadScreen7);
        $("body").on("click", "#to-step-8", app.loadScreen8);
        
        // If font awesome icon is clicked toggle the icon appropriately
        $("body").on("click", ".toggle-content", function(){
            app.toggleContent(this);
            if ($(this).parents(".continent").find(".country-list").is(":visible")) {
                app.toggleIcon(this, false);
            } else {
                app.toggleIcon(this, true);
            }
        });

        // If the continent checkbox is ticked, open the country list div and check all
        $("body").on("change", ".check-all-countries", function(){
            app.toggleContent(this, true);
            app.toggleIcon($(this).parents(".continent"), false);
            $(this).parents(".continent").find(".country-list input[type=checkbox]").prop('checked', $(this).prop('checked'));
        });

        // On country checkbox tick check whether all countries of the checkbox are ticked
        // if yes, then check the continent checkbox
        // otherwise uncheck it
        $("body").on("change", ".country", function(){
            let parent = $(this).parents(".continent");
            if (parent.find(".country-list input[type=checkbox]").length === parent.find(".country-list input[type=checkbox]:checked").length) {
                parent.find(".check-all-countries").prop("checked", true);
            } else {
                parent.find(".check-all-countries").prop("checked", false);
            }
        });
        
        // Select hospital on click
        $("body").on("click", ".hospital", function(){
            $(this).toggleClass("selected");
        });
        // If select all button is clicked, select all hospitals
        $("body").on("click", "#select-all-hospitals", function(){
            $(".hospital").addClass("selected");
        });
        
        
        $("body").on("click", ".contract-type", function(){
            $(".contract-type").removeClass("btn-primary").addClass("btn-outline-primary");
            $(this).addClass("btn-primary").removeClass("btn-outline-primary");
        });
    },
    // Function to toggle display of country list div
    toggleContent: function (elem, forced) {
        if (forced === true || !$(elem).parents(".continent").find(".country-list").is(":visible")) {
            $(elem).parents(".continent").find(".country-list").removeClass("hidden");
        } else {
            $(elem).parents(".continent").find(".country-list").addClass("hidden");
        }
    },
    // Function to toggle the icon of the continent
    toggleIcon: function(elem, shown) {
        if (shown == true) {
            $(elem).find("i.fa").addClass("fa-chevron-down").removeClass("fa-chevron-up");
        } else if (shown == false) {
            $(elem).find("i.fa").addClass("fa-chevron-up").removeClass("fa-chevron-down");
        } else {
            $(elem).find("i.fa").toggleClass("fa-chevron-up fa-chevron-down");
        }
    }
};

$(document).ready(function(){
    app.events();
});