const express  = require('express')
const router = express.Router()
const Data = require('../modals/datamodal')

router.post('/', (req,res)=>{
    console.log(req.body);
    const user = new Data({
        name:req.body.newData.username,
        phone:req.body.newData.phone,
        email:req.body.newData.email,
        title:req.body.newData.title
    })
    user.save()
    res.send('ok')
})

router.get('/data',(req,res)=>{
    Data.find({},function(err,docs){
        if(err){
            console.log(err)
            res.status(501).send(err)
        }

        res.status(200).send(docs)
    })
})

router.post('/update',(req,res)=>{
    console.log(req.body)
    Data.updateOne({_id:req.body.result._id},req.body.result,function(err,docs){
        if(err){
        console.log(err)
    }
    console.log(docs)
    }
)
})

router.post('/delete',(req,res)=>{
    Data.deleteOne({_id:req.body.id},function(err,docs){
        if(err) console.log(err)
        if(docs) console.log(docs)
    })
})


module.exports = router