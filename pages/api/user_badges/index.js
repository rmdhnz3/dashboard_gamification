const conn = require('../../../config/db')

export default function handler(req, res) {
   const reqMethod = req.method
   switch (reqMethod) {
    case 'POST':
        const data = {...req.body};
        const query= 'INSERT INTO user_badges SET ?'
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
    const {badge_id} = req.query
    const queryFunc  = (badge_id) =>{
        return (badge_id==0 ? 'SELECT * FROM user_badges' : 'SELECT * FROM user_badges where badge_id = ?' )
    }
    const querySql = queryFunc(badge_id)
    conn.query(querySql,badge_id,(err,rows,field)=>{
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

  
  