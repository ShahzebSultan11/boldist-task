var express = require('express');
var cors = require('cors')
var app = express();

app.use("*", (req, res, next) => {
    console.log(`${req.method}: ${req.originalUrl}`);
    return next();
});

app.use(cors())
app.get('/user', function (req, res) {
    let user = {
        name: { first: "Dave", second: " Connnor" },
        email: "dave11@mail.com",
        phone: "(111) 567-2568",
        location: { city: "London" },
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZZYSsnncqDhroX4Ud9rgHCxpDeyLSN5PdG71BuDAk-ulL4CQCFtjL4lKVH26UIW9EOo&usqp=CAU"
    }

    res.status(200).json(user)
    // return user
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});