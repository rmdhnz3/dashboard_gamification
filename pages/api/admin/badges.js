const conn = require('../../.././config/db')

export default function handler(req, res) { 
    const querySql = 'SELECT * FROM badges'
    conn.query(querySql,(err,rows,field)=>{
     if(err){
         return res.status(500).json({
             message:'Error',error:err
         });
     }
    return res.status(200).json({succes:true,data:rows,})
    })
   }
   
   


  
  