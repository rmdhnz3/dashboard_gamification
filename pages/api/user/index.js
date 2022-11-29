const conn = require('../../.././config/db')
export default function handler(req, res) {
   const reqMethod = req.method
   switch (reqMethod) {
    case 'POST':
        const data = {...req.body};
        const query= 'INSERT INTO user SET ?'
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

        
    case 'PUT':

    break;
   
    default:    
    const querySql = 'SELECT * FROM user WHERE status=1'
    const {s,x} = req.query
    const keys = ["id","username","exp_point"] ;
    const search = (a)=>{
        return a.filter((item)=>
        keys.some((key)=>item[key].toString().toLowerCase().includes(s))
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

        break;
   }
   
   
   
   }

  
  