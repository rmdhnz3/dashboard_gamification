const conn = require('../../.././config/db')

export default function handler(req, res) {
   const reqMethod = req.method
   switch (reqMethod) {
    case 'POST':
        const data = {...req.body};
        const query= 'INSERT INTO badges SET ?'
        conn.query(query,data,(err)=>{
            if(err){
                return res.status(500).json({
                    message:'failed to insert data',
                    error:err
                });
            }
           return  res.status(201).json({succes:true,message:'succesfully insert the data'})
        })
        break;

    default:    
    const querySql = 'SELECT * FROM badges WHERE status=1'
    conn.query(querySql,(err,rows,field)=>{
     if(err){
         return res.status(500).json({
             message:'Error',error:err
         });
     }
    return res.status(200).json({succes:true,data:rows,})
    })

        break;
   }
   
   
   
   }

  
  