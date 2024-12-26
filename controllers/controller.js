exports.getdefault = (req, res) => {
    res.send('Hello from skillsoft!!!');
}

exports.aboutus = (req, res) => {
    res.send('You are on the About Us route.');
}

exports.addemployee = (req, res) => {
    let empName = req.body.empName;
    let empPass = req.body.empPass;

    res.send(`POST success, you sent ${empName} and ${empPass}, thanks!`);
};

exports.getemployee = (req, res) => {
    res.send('You are on the get employee route.');
}
