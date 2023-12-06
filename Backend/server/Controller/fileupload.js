exports.EmployeeProfile = (req,res)=>{
    if(req.files){
    //    console.log(req.files);
       let file = req.files.file
      let filename = file.name
      //  console.log(filename);
       file.mv('../public/profile/'+ filename,(err)=>{
         if(err){
           res.send(err)
         }else{
           res.status(200).json({msg : 'File Uploaded!', fileName : filename})
         }
       })
     }
   }