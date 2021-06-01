const
{
    addUser,
    getUsers,
    updateUser,
    checkUserName,
} = require('../controlers/users'),
router = require('express').Router(),
{routerWrapper} = require("../config/helper")


// params for each router
const params = {
    addUser: ['body'],
    updateUser: ['params.name', 'body'],
    checkUserName: ['params.name']
}


router
.get('/', routerWrapper(getUsers))
.post('/addUser', routerWrapper(addUser, params.addUser))
.patch('updateUser/:name', routerWrapper(updateUser, params.updateUser))
.get('/checkUserName/:name', routerWrapper(checkUserName, params.checkUserName))


module.exports = router;