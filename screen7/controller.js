const ejs = require('ejs')
module.exports = (req, res) => {
    let html = ejs.render(`
<div class="py-5 text-light bg-primary text-center h-100">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card text-white p-5 bg-primary" style="border:none;">
                    <div class="card-body">
                        <h1 class="mb-4">ΠΡΟΣΘΕΣΤΕ ΚΑΛΥΨΕΙΣ</h1>
                        <div style="display:flex; margin:5%">
                            <div class="col-md-4">
                                <img class="m-auto" src="icons/toketos.png" alt="hospital" style="width:60px;height:60px;">
                                <div class="checkbox"> <label><input type="checkbox" value=""> Επίδομα Τοκετού</label> </div>
                            </div>
                            <div class="col-md-4">
                                <img class="m-auto" src="icons/anapiria.png" alt="hospital" style="width:60px;height:60px;">
                                <div class="checkbox"> <label><input type="checkbox" value=""> Επίδομα Αναπηρίας</label> </div>
                            </div>
                            <div class="col-md-4">
                                <img class="m-auto" src="icons/anarrwsi.png" alt="hospital" style="width:60px;height:60px;">
                                <div class="checkbox"> <label><input type="checkbox" value=""> Επίδομα Ανάρρωσης</label> </div>
                            </div>
                        </div>
                        <div style="display:flex; margin:5%">
                            <div class="col-md-4">
                                <img class="m-auto" src="icons/melh.png" alt="hospital" style="width:60px;height:60px;">
                                <div class="checkbox"> <label><input type="checkbox" value=""> Πρόσθετα Μέλη</label> </div>
                            </div>
                            <div class="col-md-4">
                                <img class="m-auto" src="icons/aeroplane.png" alt="hospital" style="width:60px;height:60px;">
                                <div class="checkbox"> <label><input type="checkbox" value=""> Έξοδα Ταξιδιού</label> </div>
                            </div>
                            <div class="col-md-4">
                                <img class="m-auto" src="icons/heart.png" alt="hospital" style="width:60px;height:60px;">
                                <div class="checkbox"> <label><input type="checkbox" value=""> Ασφάλεια Ζωής</label> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 py-3">
                    <button id="to-step-8" type="submit" class="m-auto btn btn-secondary">Επόμενο</button>
                </div>
            </div>
        </div>
    </div>
    `)
    
    res.send({success: true, html: html});
};