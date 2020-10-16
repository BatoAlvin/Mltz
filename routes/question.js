const router = require('express').Router();
const User = require('../models/User')

router.post('/', async(req,res)=>{

    const emailExistt = await User.findOne({question: req.body.question});
    if(emailExistt) return res.status(400).send('Question already exists');
    
    
    //Create a new question
        const user = new User({
            question:req.body.question
        });
        try{
            //Getting the question and saving
             const savedUser = await user.save();
            res.send(savedUser);
        }catch(err){
            res.status(400).send(err);
        }
       
    });
    
    //Getting a question
    router.get('/', async (req,res) =>{
        try{
            const questions = await User.find()
            return res.status(200).json(questions)
        } catch (error) {
            return res.status(500).json({"error":error})
        }
    })

    //deleting a customer
    router.delete('/:questionid', async(req, res,) => {
        try{
           const removedPost =  await User.deleteOne({_id: req.params.questionid});
           res.json( removedPost);
        } catch (err) {
            res.status(500).send("Unable to save")
        }
        });

        //Get specific question
        router.get('/:questionid', async(req, res,) => {
            try{
               const post =  await User.findById({_id: req.params.questionid});
               res.json(post);
            } catch (err) {
                res.status(500).send("Unable to save")
            }
            });

module.exports = router ;