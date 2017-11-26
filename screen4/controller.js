const ejs = require('ejs');
module.exports = (req, res) => {
    let html = ejs.render(`
<div class="py-5 text-dark bg-light text-center h-100 my-0">
    <div class="container">
        <div class="row mb-3">
            <h1 class="col-md-12 text-gray-dark">ΕΠΙΛΟΓΗ ΝΟΣΟΚΟΜΕΙΩΝ</h1>
        </div>
        <div class="row py-2 px-5">
            <div id="select-all-hospitals" class="btn btn-outline-primary">Select all</div>
        </div>
        <div class="row py-3 d-flex flex-wrap">
            <div class="col-md-3 text-center p-2"><div class="hospital">ΙΑΣΩ</div></div>
            <div class="col-md-3 text-center p-2"><div class="hospital">ΥΓΕΙΑ</div></div>
            <div class="col-md-3 text-center p-2"><div class="hospital">METROPOLITAN</div></div>
            <div class="col-md-3 text-center p-2"><div class="hospital">ΚΕΝΤΡΙΚΗ ΚΕΝΤΡΙΚΗ ΑΘΗΝΩΝ</div></div>
        </div>
        <div class="col-md-12 py-3">
            <button id="to-step-5" type="submit" class="m-auto btn btn-secondary">Επόμενο</button>
        </div>
    </div>
</div>
    `, {});
    
    res.send({
        success: true,
        html: html
    })
};