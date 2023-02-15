const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('home')
})
router.post('/', (req, res) => {
    let teamcode = req.body.teamcode;
    let word = req.body.word;
    const newWord = word.toLowerCase();
    if (teamcode == 2744 && newWord == "terminator") {
        res.render('firstpage')
    } else if (teamcode == 2642 && newWord == "transformer") {
        res.render('two')
    } else {
        res.render('404')
    }
})
router.get('/firstpage', (req,res) => {
    res.render('firstpage')
});
module.exports = router;