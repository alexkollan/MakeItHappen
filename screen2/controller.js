const ejs = require('ejs');
module.exports = (req, res) => {
    if (typeof req.body.user_id !== "string" && req.body.user_id.length < 1) {
        res.send({
            success: false,
            description: "Invalid input"
        });
        return;
    }
    let html = ejs.render(`
<div class="py-5 text-dark bg-light text-center h-100 my-0">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="mb-4">ΕΠΙΒΕΒΑΙΩΣΗ ΔΕΔΟΜΕΝΩΝ</h1>
            </div>
            <div class="col-md-12 d-flex flex-wrap">    
                <div class="col-md-6 mb-3 text-left">
                    <label class="pl-2">ΟΝΟΜΑΤΕΠΩΝΥΜΟ</label>
                    <input id="name" type="text" value="John Doe Smith" class="form-control" placeholder="Ονοματεπώνυμο">
                </div>
                <div class="col-md-6 mb-3 text-left">
                    <label class="pl-2">ΑΦΜ</label>
                    <input id="vat" type="text" value="GR123456789" class="form-control" placeholder="ΑΦΜ">
                </div>
                <div class="col-md-6 mb-3 text-left">
                    <label class="pl-2">ΑΜΚΑ</label>
                    <input id="amka" type="text" value="01019055555" class="form-control" placeholder="ΑΜΚΑ">
                </div>
                <div class="col-md-6 mb-3 text-left">
                    <label class="pl-2">ΗΜΕΡΟΜΗΝΙΑ ΓΕΝΝΗΣΗΣ</label>
                    <input id="birth-date" type="text" value="01/01/1990" class="form-control" placeholder="Ημερομηνία Γέννησης">
                </div>
                <div class="col-md-6 mb-3 text-left">
                    <label class="pl-2">ΤΗΛΕΦΩΝΟ</label>
                    <input id="telephone" type="text" value="6955443322" class="form-control" placeholder="Τηλέφωνο">
                </div>
                <div class="col-md-6 mb-3 text-left">
                    <label class="pl-2">ΕΠΑΓΓΕΛΜΑ</label>
                    <input id="profession" type="text" value="Developer" class="form-control" placeholder="Επάγγελμα">
                </div>
                <div class="col-md-12 py-3">
                    <button id="to-step-3" type="submit" class="m-auto btn btn-secondary">Επόμενο</button>
                </div>
            </div>
        </div>
    </div>
</div>`, {});
    res.send({
        success: true,
        html: html
    });
};