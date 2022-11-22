const conn = require('../../../config/db')
export default function handler(req, res) {
    const querySql = 'SELECT * FROM user_transaction'
    const {s,x} = req.query
    const keys = ["id","name","point_change"] ;
    const search = (a)=>{
        return a.filter((item)=>
        keys.some((key)=>item[key]?.toString().toLowerCase().includes(s))
    )
    }
    conn.query(querySql,(err,rows,field)=>{
     if(err){
         return res.status(500).json({
             message:'Error',error:err
         });
     }
    var data = rows;
    return res.status(200).json(search(data).splice(0,10))
    })

   }
   
   

  
  