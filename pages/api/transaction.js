// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { transaction } from "../../../test/transaction"
export default function handler(req, res) {
  const {q} = req.query;
    const keys = ["type","date","mk_change","transaction_id"] ;

    const search = (a)=>{
        return a.filter((item)=>
        keys.some((key)=>item[key].toString().toLowerCase().includes(q))
    )
    }

    res.status(200).json(search(transaction).splice(0,10))
}
