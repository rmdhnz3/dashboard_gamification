const conn = require('../../../config/db')
var sortBy = require('sort-by')

export default function handler(req, res) {
   const reqMethod =  req.method
   switch (reqMethod) {
    case 'POST':
        const data = {...req.body};
        const query= 'INSERT INTO user_transaction SET ?'
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
    const {limit,sort,user_id} = req.query
    const sorty = (sort)=>{
        return (sort==0 ? 'created_at DESC' : req.query.sort)}

    const sorting = sorty(sort)

    const limitation = (limit)=>{
        return (limit==0 ? '0,10' : req.query.limit)}

    const pagelimit=limitation(limit)

    const queryFix =(user_id)=>{
        return (user_id==0 ? `SELECT * FROM user_transaction ORDER BY ${sorting} LIMIT ${pagelimit}` : `SELECT * FROM user_transaction where user_id=${user_id} ORDER BY ${sorting} LIMIT ${pagelimit}`)}

    const querySql = queryFix(user_id)
    conn.query(querySql,(err,rows,field)=>{
     if(err){
         return res.status(500).json({
             message:'Error',error:err
         });
     }
    const data = rows;
            return res.status(200).json(data,{succes:true})
    })

        break;
   }
   
   
   
   }

  
  