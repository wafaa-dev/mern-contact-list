const express=require("express")
const router=express.Router();
const Contact =require ("../models/Contact")
//test 

// router.get("/",(req,res)=>{
//     res.send("test");
// })

//using then and catch

// router.post("/add",(req,res)=>{
//     const {name,email,phone}=req.body
//     const newContact=new Contact({
//         name, email, phone 
//     })
//     newContact.save()
//     .then(contact => res.json ({msg:"contact added", contact:contact}))
//     .catch(err=> console.log(err))
// })

//using async and await
router.post("/add",async(req,res)=>{
    const {name,email, phone}=req.body;
    try {
         const newContact=new Contact ({
        name,email,phone
    });
    const contact = await  newContact.save()
        res.json({msg:"contact added",contact})
    } catch (error) {
        res.json("error")
       
    }
   
});
//
//
//
router.get("/",async(req,res)=>{
    try {
      const contacts= await Contact.find()
      res.json({msg:"data fetched",contacts})
    } catch (error) {
        console.log(error)
    }
} );
//
//
//
router.delete("/delete/:id", async (req,res)=>{
    const {id}=req.params
    try {
         const contact= await Contact.findOneAndDelete({_id:id})
         res.json({msg:"contact deleted",contact})
    } catch (error) {
        console.log(error)
    }
});
//
//
//
router.put("/edit/:_id",async (req,res)=>{
    const {_id}=req.params
    // const {name, email,phone}=req.body
    try {
        const contact= await Contact.findOneAndUpdate({_id},{$set:req.body})
         res.json({msg:"contact edited",contact})
    } catch (error) {
        console.log(error)
        
    }
} )
module.exports=router;