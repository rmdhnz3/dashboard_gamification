import { NextApiHandler, NextApiRequest } from "next";
import path from 'path'
import formidable from "formidable";
import fs from "fs/promises"
export const config = {
  api:{
    bodyParser:false,
  }
}

const readfile = (req:NextApiRequest,saveLocally?:boolean) 
:Promise<{fields:formidable.Fields;files:formidable.Files}>=>{
  const options:formidable.options={};
  if(saveLocally){
    options.uploadDir = path.join(process.cwd()+"/public","/badges","/new")
    options.filename = (name,ext,path,form)=>{
      return path.originalFilename;
    }
    options.keepExtensions=true
    options.maxFileSize=200 * 1024 * 1024
    options.miniFileSize=1024
  }

  const form = formidable(options)
  return new Promise((resolve,reject)=>{
    form.parse(req,(err,fields,files)=>{ 
      if(err) reject (err)
      resolve({fields, files}) 
    })
  })
}
const handler : NextApiHandler = async(req,res)=>{
 try{
  await fs.readdir(path.join(process.cwd()+"/public","/badges","/new"))
 }catch(error){
  await fs.mkdir(path.join(process.cwd()+"/public","/badges","/new"))
 }
 await readfile(req,true);
 res.json({done:"succes"})

}
export default handler