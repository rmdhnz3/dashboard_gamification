const conn = require('../../.././config/db')

export default function handler(req, res) {
   const reqMethod = req.method
   switch (reqMethod) {

    case 'PUT':
        const data = {...req.body};
        const querya ='SELECT * FROM user WHERE id = ?'
        const queryb= 'UPDATE user SET ? WHERE id = ?'
        conn.query(querya,req.query.id,(err,rows)=>{
            if(err){
                return res.status(500).json({
                    message:'data not found',
                    error:err
                });
            }

            if(rows.length){
                conn.query(queryb,[data,req.query.id],(err)=>{
                    if(err){
                        return res.status(500).json({
                            message:'ERROR',
                            error:err
                        });
                    }
                    res.status(200).json({succes:true,message:'succesfully updated the data'})
                })
            }else{
                return res.status(404).json({message:'data not found',succes:false})
            }
        })
        break;
        
        case 'DELETE':
            const queryx ='SELECT * FROM user WHERE id = ?'
            const queryy= 'UPDATE user SET status=0 WHERE id = ?'
            conn.query(queryx,req.query.id,(err,rows)=>{
                if(err){
                    return res.status(500).json({
                        message:'data not found',
                        error:err
                    });
                }
    
                if(rows.length){
                    conn.query(queryy,req.query.id,(err)=>{
                        if(err){
                            return res.status(500).json({
                                message:'ERROR',
                                error:err
                            });
                        }
                        res.status(200).json({succes:true,message:'succesfully deleted the data'})
                    })
                }else{
                    return res.status(404).json({message:'data not found',succes:false})
                }
            })

   

    default:    
    const querySql = 'SELECT * FROM user WHERE id = ?'
    conn.query(querySql,req.query.id,(err,rows,field)=>{
     if(err){
         return res.status(500).json({
             message:'Error',error:err
         });
     }
    var data = rows;
    return res.status(200).json(data)
    })

        break;
   }
   
   
   
   }

  
  