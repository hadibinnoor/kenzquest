const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('home')
})
router.post('/', (req, res) => {
    let teamcode = req.body.teamcode;
    let word = req.body.word;
    const newWord = word.toLowerCase();
    if (teamcode == 4005 && newWord == "bandwidth") {
        res.render('firstpage')
    } else if (teamcode == 7647 && newWord == "bandwidth") {
        res.render('secondpage')
    } else if (teamcode == 2580 && newWord == "bandwidth") {
        res.render('thirdpage')
    } else if (teamcode == 6630 && newWord == "bandwidth") {
        res.render('firstpage')
    } else if (teamcode == 5462 && newWord == "bandwidth") {
        res.render('firstpage')
    } else if (teamcode == 2808 && newWord == "bandwidth") {
        res.render('secondpage')
    } else if (teamcode == 3741 && newWord == "bandwidth") {
        res.render('secondpage')
    } else if (teamcode == 4186 && newWord == "bandwidth") {
        res.render('thirdpage')
    } else if (teamcode == 9754 && newWord == "bandwidth") {
        res.render('thirdpage')
    } else if (teamcode == 6876 && newWord == "bandwidth") {
        res.render('firstpage')
    } else if (teamcode == 1298 && newWord == "bandwidth") {
        res.render('firstpage')
    } else if (teamcode == 3424 && newWord == "bandwidth") {
        res.render('secondpage')
    } else if (teamcode == 7869 && newWord == "bandwidth") {
        res.render('secondpage')
    } else if (teamcode == 9210 && newWord == "bandwidth") {
        res.render('thirdpage')
    } else if (teamcode == 7267 && newWord == "bandwidth") {
        res.render('thirdpage')
    } else if (teamcode == 5394 && newWord == "bandwidth") {
        res.render('firstpage')
    } else if (teamcode == 8621 && newWord == "bandwidth") {
        res.render('secondpage')
    } else if (teamcode == 1435 && newWord == "bandwidth") {
        res.render('thirdpage')
    } else if (teamcode == 6135 && newWord == "bandwidth") {
        res.render('firstpage')
    } else if (teamcode == 8276 && newWord == "bandwidth") {
        res.render('secondpage')
    } else if (teamcode == 5801 && newWord == "bandwidth") {
        res.render('thirdpage')
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
module.exports = router;