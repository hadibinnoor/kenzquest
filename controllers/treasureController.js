exports.getHomePage = (req, res) => {
    res.render('home')
}

exports.postHomePage = (req, res) => {
    const { teamcode, word } = req.body;
    const newWord = word.toLowerCase();
    if (teamcode == 2744 && newWord == "terminator") {
        res.render('one')
    } else if (teamcode == 2642 && newWord == "transformer") {
        res.render('two')
    } else {
        res.render('404')
    }
}