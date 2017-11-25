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
                <div class="col-md-6 mb-3">
                    <label>ΟΝΟΜΑΤΕΠΩΝΥΜΟ</label>
                    <input type="email" class="form-control" placeholder="Ονοματεπώνυμο">
                </div>
                <div class="col-md-6 mb-3">
                    <label>ΑΦΜ</label>
                    <input type="password" class="form-control" placeholder="ΑΦΜ">
                </div>
                <div class="col-md-6 mb-3">
                    <label>ΑΜΚΑ</label>
                    <input type="email" class="form-control" placeholder="ΑΜΚΑ">
                </div>
                <div class="col-md-6 mb-3">
                    <label>ΗΜΕΡΟΜΗΝΙΑ ΓΕΝΝΗΣΗΣ</label>
                    <input type="password" class="form-control" placeholder="Ημερομηνία Γέννησης">
                </div>
                <div class="col-md-6 mb-3">
                    <label>ΤΗΛΕΦΩΝΟ</label>
                    <input type="email" class="form-control" placeholder="Τηλέφωνο">
                </div>
                <div class="col-md-6 mb-3">
                    <label>ΕΠΑΓΓΕΛΜΑ</label>
                    <input type="email" class="form-control" placeholder="Επάγγελμα">
                </div>
                <div class="col-md-12">
                    <button type="submit" class="m-auto btn btn-secondary">ΕΠΙΒΕΒΑΙΩΣΗ</button>
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