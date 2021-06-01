const
router = require('express').Router(),
{routerWrapper} = require("../config/helper"),
{ getQuestions } = require("../controlers/questions");


// params for each router
const params = {
    getQuestions: ['query.count']
}


router
.get('/', routerWrapper(getQuestions, params.getQuestions));


module.exports = router;