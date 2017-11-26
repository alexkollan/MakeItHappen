const ejs = require('ejs')
module.exports = (req, res) => {
    let html = ejs.render(`
<div class="py-5 text-dark bg-light text-center h-100">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card p-5 bg-light h-100" style="border: none !important;">
                    <div class="card-body">
                        <h1 class="mb-4">ΕΡΩΤΗΜΑΤΟΛΟΓΙΟ ΥΓΕΙΑΣ</h1>
                        <p class="lead">Βάρος / Ύψος: </p>
                        <input type="text">
                        <p class="lead">Είστε καπνιστής; </p>
                        <form>
                            <label class="radio-inline">
                            <input type="radio" name="optradio" onchange="app.erwtiseisKapnismatos('y')" value="on">Ναι</label>
                            <label class="radio-inline">
                            <input type="radio" name="optradio" onchange="app.erwtiseisKapnismatos('n')" value="on">Όχι</label>
                        </form>

                        <div class="hidden" id="erwtKapn1">
                            <p class="lead">Πόσο καιρό καπνίζετε; </p>
                            <input type="text">
                        </div>
                        <div class="hidden" id="erwtKapn2">
                            <p class="lead">Πόσα τσιγάρα την ημέρα; </p>
                            <input type="text">
                        </div>
                        <p class="lead">Έχετε ή είχατε διερευνηθεί, διαγνωσθεί ή θεραπευθεί για θέματα καρκίνου; </p>
                        <form>
                            <label class="radio-inline">
                              <input type="radio" name="optradio" onchange="app.erwtiseisKarkinou('y')" value="on">Ναι</label>
                            <label class="radio-inline">
                              <input type="radio" name="optradio" onchange="app.erwtiseisKarkinou('n')" value="on">Όχι</label>
                        </form>
                        <div class="hidden" id="erwtKark1">
                            <p class="lead">Αναλυτική περιγραφή</p>
                            <textarea class="span6" rows="3" placeholder=""></textarea>
                        </div>
                        <div class="hidden" id="erwtKark2">
                            <p class="lead">Χρονολογία περιστατικού </p>
                            <input type="text">
                        </div>
                        <div class="hidden" id="erwtKark3">
                            <p class="lead">Σημερινή κατάσταση: </p>
                            <form>
                                <input type="radio" name="optradio" onchange="app.erwtiseisKarkinouBool('simKat')" value="on">Σταθερή</label>
                                <input type="radio" name="optradio" onchange="app.erwtiseisKarkinouBool('ypoPar')" value="on">Υπό παρακολούθηση</label>
                            </form>
                        </div>
                        <p class="lead">Έχετε ή είχατε διερευνηθεί, διαγνωσθεί ή θεραπευθεί για θέματα διαβήτη; </p>
                        <form>
                            <label class="radio-inline">
                            <input type="radio" name="optradio" onchange="app.erwtiseisDiaviti('y')" value="on">Ναι</label>
                            <label class="radio-inline">
                            <input type="radio" name="optradio" onchange="app.erwtiseisDiaviti('n')" value="on">Όχι</label>
                        </form>
                        <div class="hidden" id="erwtDiav1">
                            <p class="lead">Αναλυτική περιγραφή</p>
                            <textarea class="span6" rows="3" placeholder=""></textarea>
                        </div>
                        <div class="hidden" id="erwtDiav2">
                            <p class="lead">Χρονολογία περιστατικού </p>
                            <input type="text">
                        </div>
                        <div class="hidden" id="erwtDiav3">
                            <p class="lead">Σημερινή κατάσταση: </p>
                            <form>
                                <input type="radio" name="optradio" onchange="app.erwtiseisKarkinouBool('simKat')" value="on">Σταθερή</label>
                                <input type="radio" name="optradio" onchange="app.erwtiseisKarkinouBool('ypoPar')" value="on">Υπό παρακολούθηση</label>
                            </form>
                        </div>
                        <p class="lead">Συμμετέχετε σε: </p>
                        <input type="checkbox"> Αθλήματα
                        <input type="checkbox"> Επικίνδυνες Δραστηριότητες
                        <input type="checkbox"> Αγώνες Ταχύτητας
                        <input type="checkbox"> Πτήσεις
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `);
    res.send({success: true, html: html})
};