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
        if (!user_id || vat || amka || birth_date || telephone || profession) {
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
                $("#to-step-2").hide();
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
    events: function(){
        $("body").on("click", "#to-step-2", app.loadScreen2);
        $("body").on("click", "#to-step-3", app.loadScreen3);
    }
};
$(document).ready(function(){
    app.events();
});