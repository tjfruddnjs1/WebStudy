const express = require('express');

const { isLoggedIn } = require('./middlewares');
const { addFollowing } = require('../controllers/user');

const router = express.Router();

router.post('/:id/follow', isLoggedIn, addFollowing);

router.post('/:id/followCancle',isLoggedIn, async(req,res,next)=>{
    try{
        console.log(req.user.id, req.params.id);
        const user = await User.findOne({where:{nick:req.params.id}});
        await user.removeFollower(parseInt(req.user.id));
        res.send('success');
    }catch(error){
        console.error(error);
        next(error);
    }
});

router.patch('/:nick', isLoggedIn, async(req,res,next)=>{
    try{
        console.log(req.user.id, req.params.id);
        const user = await User.update({nick : req.params.nick},{where: {id:req.user.id}});
        res.send('success');
    }catch(error){
        console.error(error);
        next(error);
    }
});

module.exports = router;