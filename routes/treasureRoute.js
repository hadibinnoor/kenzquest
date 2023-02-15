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
        res.render('secondpage')
    } else if (teamcode == 8462 && newWord == "transformer") {
        res.render('thirdpage')
    } else if (teamcode == 7845 && newWord == "transformer") {
        res.render('fourthpage')
    }else if (teamcode == 5874 && newWord == "transformer") {
        res.render('fourthpage')
    }
    else {
        res.render('404')
    }
})
router.get('/firstpage', (req,res) => {
    res.render('firstpage')
});
router.get('/secondpage', (req,res) => {
    res.render('secondpage')
});
router.get('/thirdpage', (req,res) => {
    res.render('thirdpage')
});
router.get('/fourthpage', (req,res) => {
    res.render('fourthpage')
});
module.exports = router;