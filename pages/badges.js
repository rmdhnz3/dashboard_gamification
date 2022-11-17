import { useEffect, useState } from "react"
import React from "react"
import useSWR from "swr"  
export default function Badge() {
      const [data,setdata] = useState([]) 
      const [error,setError] = useState(null) 
      var [mk,setMk] = React.useState(1000)
      const [search,setSearch] = React.useState('')
      const handleSearch = (e) =>{
        setSearch(e.target.value)        
      }
      function changea(a){
        ()=>setMk(a)
      }
      
      useEffect(() => {
          const fetcher = async ()=>{
            const res = await fetch(`http://localhost:3000/api/transaction?q=${search}`)
            const data =await res.json()
            setdata(data)
            setError(error) 
          }   
        
         fetcher()
        }, [search])
        
          if(error) return <div>failed to load</div>
          if(!data) return <div>Loading</div>
    return (
        <div className='container mx-auto px-10 mt-8 mb-8 py-4'>
            <div className='bg-white rounded-lg w-full h-full px-8 py-8 text-center'>
      <div className='container mx-auto px-10 mt-4 mb-8 py-4'>
          <title>Transaction List</title>
          {/* Breadcrumb */}
          <nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <span className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
        Home
      </span>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" ></path></svg>
        <span className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Transaction</span>
      </div>
    </li>
  </ol>
</nav>
      {/* Table Header and Filter */}
      <h1 className="text-4xl text-center font-semibold underline pb-4">User Transaction History</h1>
        <div className='bg-white rounded-lg w-full px-8 py-8 text-center'>
        <div>
        <div className="pb-4 bg-white dark:bg-gray-900">
        <label htmlFor="search" className="sr-only">Search</label>
        <div className="relative mt-1">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="search" onChange={handleSearch} className="block p-2 pl-10 w-60 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for id/date/type"></input>
        </div>

      
    </div>  
    {/* Table */}
         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
             <thead className="text-md text-white font-semibold uppercase bg-cyan-900 dark:bg-gray-700 dark:text-gray-400">
                 <tr>
                     <th scope="col" className="py-2 px-2">
                         Transaction ID
                     </th>
                     <th scope="col" className="py-3 px-2">
                          Date
                     </th>
                     <th scope="col" className="py-3 px-2">
                          Type
                     </th>
                     <th scope="col" className="py-3 px-3">
                        Mejakoin Change
                     </th>
                     <th scope="col" className="py-3 px-3">
                        Mejakoin Balance
                     </th>
                 </tr>
             </thead>
              {data.map(item=>{
                return(
            <tbody key={item.transaction_id}>
                <tr  className="bg-white border-b font-medium dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                  <th className="py-2 px-2  text-gray-900 whitespace-nowrap dark:text-white">{item.transaction_id}</th>
                  <td className="py-4 px-2">{item.date}</td>
                  {item.type=='masuk' ? <td className="py-4 px-2 text-green-400">{item.type}</td>:<td className="py-4 px-2 text-red-400">{item.type}</td> }
                  {item.type=='masuk' ? <td className="py-4 px-2 text-green-400">+{item.mk_change}</td>:<td className="py-4 px-2 text-red-400">-{item.mk_change}</td> }
                  {item.type=='masuk' ? <td className="py-4 px-2">{mk+item.mk_change}</td>:<td className="py-4 px-2">{mk-item.mk_change}</td> }
                  
                </tr>
             </tbody>
                )
})}
             <tfoot>
              <tr>
                <th className="py-4 px-2">Mejakoin Balance</th>
                <td></td>
                <td></td>
                <td></td>
                <td className="py-4 px-2">{mk}Mk</td>
              </tr>
             </tfoot>
        </table>
    </div>
        </div>
      </div>

            </div>
        </div>
    )
    }