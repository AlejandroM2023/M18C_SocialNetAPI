const router = require('express').Router();
const { getAllUsers, 
        getOneUser, 
        createUser, 
        updateUser,
        deleteUser,
        addFreind,
        deleteFreind
        } = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

router.route('/:userId/freinds/:freindId').post(addFreind).delete(deleteFreind);

module.exports = router;