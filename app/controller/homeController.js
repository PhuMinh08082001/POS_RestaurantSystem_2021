const foodServices = require("../services/foodServices");
const orderServices = require('../services/orderServices')

class HomeController {

    //[Get / to load home page]
    index(req, res, next) {
        var userJson;
        if (req.user) {
            userJson = JSON.parse(JSON.stringify(req.user));
        }

        foodServices.getAllFood().then(async function(rows) {
            try {
                orderServices.getFeedback().then(async function(results) {
                    try {
                        res.render('homepage', { title: 'Express', layout: 'main', user: userJson, rows, results });
                    } catch (err) {
                        console.log(err);
                    }
                });

            } catch (err) {
                console.log(err);
            }
        });
    }


}

module.exports = new HomeController();