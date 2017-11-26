const ejs = require('ejs');
module.exports = (req, res) => {
    let html = ejs.render(`
<div class="py-5 bg-primary text-light text-center h-100 my-0">
    <div class="container">
        <div class="row mb-3">
            <h1 class="col-md-12 text-gray-dark">ΕΠΙΛΟΓΗ ΚΑΛΥΨΗΣ</h1>
        </div>
        <div class="row py-5 d-flex flex-wrap">
            <div id="amount" class="h3 text-center w-100 p-2 mb-3"></div>
            <div id="selector" class="w-100"></div>
        </div>
        <div class="col-md-12 py-3">
            <button id="to-step-6" type="submit" class="m-auto btn btn-secondary">Επόμενο</button>
        </div>
    </div>
</div>
    `);
    
    res.send({
        success: true,
        html: html
    });
};