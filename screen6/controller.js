const ejs = require('ejs')
module.exports = (req, res) => {
    let html = ejs.render(`
<div class="py-5 text-dark bg-light text-center h-100">
    <div class="container">
        <div class="row">
            <div class="col-md-12 h-75">
                <h1 class="h-25 text-center">ΕΠΙΛΕΞΤΕ ΤΥΠΟ ΣΥΜΒΟΛΑΙΟΥ</h1>
                <div class="form-inline justify-content-center my-5 p-3">
                    <button type="button" class="contract-type btn btn-outline-primary w-25 h-25 mr-3">ΕΤΗΣΙΟ</button>
                    <button type="button" class="contract-type btn btn-outline-primary w-25 h-25">ΙΣΟΒΙΟ</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <p class="lead">(ΜΗΝΙΑΙΟ ΚΟΣΤΟΣ ΕΥΡΩ/ΜΗΝΑ)</p>
            </div>
        </div>
        <div class="col-md-12 py-3">
            <button id="to-step-7" type="submit" class="m-auto btn btn-secondary">Επόμενο</button>
        </div>
    </div>
</div>
    `)
    
    res.send({
        success: true,
        html: html
    });
};