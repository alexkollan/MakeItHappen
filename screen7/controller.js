const ejs = require('ejs')
module.exports = (req, res) => {
    return req.headers;
    res.render(__dirname + '/view.ejs', {

    });
    let html = ejs.render(`
    
    `)
    
    res.send({success: true, html: html});
};