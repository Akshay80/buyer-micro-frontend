"use client"
import { GraphQLQuery } from '@aws-amplify/api'
import { API, Auth } from 'aws-amplify'
import {useState, useEffect} from 'react'
import { paymentsByBuyerId } from '@/graphql/queries'


let index = 1;

const TransactionList = () => {

    const [buyerid, setBuyerId] = useState(null)
    const [listTransactions, setListTransactions] = useState([])
    const [selectFilter, setSelectFilter] = useState<any>('ALL');
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      const buyerUser = JSON.parse(window.localStorage.getItem("buyer") || '')
      setBuyerId(buyerUser?.buyerId)
    }, [buyerid, selectFilter])
    
    useEffect(() =>{
      if(buyerid){
        getTransaction()
      }
    }, [buyerid, selectFilter])
    
    const getTransaction = async () =>{
        setLoading(true)
        try {
            let filter: any = {};
            if (selectFilter !== 'ALL') {
                filter = { ...filter, status: { eq: selectFilter } };
              }  
            const response = await API.graphql<GraphQLQuery<any>>({
              query: paymentsByBuyerId,
              variables: { 
                buyerId: buyerid, 
                filter: filter 
            }
            });
            setLoading(false)
            setListTransactions(response?.data?.paymentsByBuyerId?.items);
        } catch (error) {
          console.log(error);
        }
    }
  

  return (
   <>
   <div className="row mb-5">
    <div className="col-6">
        <h2>List Transactions</h2>
    </div>
   <div className="col-6">
            <select className="form-select w-50 ms-auto" value={selectFilter} defaultValue="" onChange={(e)=> setSelectFilter(e.target.value)}>
              <option selected>ALL</option>
              <option value="INITIATED">INITIATED</option>
              <option value="PENDING">PENDING</option>
              <option value="PROCESSING">PROCESSING</option>
              <option value="REFUND_PROCESSING">REFUND_PROCESSING</option>
              <option value="REFUNDED">REFUNDED</option>
              <option value="SUCCEEDED">SUCCEEDED</option>
              <option value="FAILED">FAILED</option>
            </select>
          </div>
   </div>
  
   {loading ? <h2>Loading...</h2> :  <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#Id</th>
          <th scope="col">Currency</th>
          <th scope="col">Amount</th>
          <th scope="col">Status</th>
          <th scope="col">CreatedAt</th>
        </tr>
      </thead>
      {listTransactions.length !== 0 ? <tbody>
        {
          listTransactions?.map((listTransaction:any) => {
            return (
              <>
              <tr>
              <th scope="row">{index++}</th>
              <td>{listTransaction?.currency}</td>
              <td>{listTransaction?.amount}</td>
              <td>{listTransaction?.status}</td>
              <td>{listTransaction?.createdAt.slice(0,10)}</td>
             </tr>
              </>
            )
          })
        }
        
      </tbody> : <>
      <h2 className='mt-4'>No Transactions</h2>
      </>}
    </table> }

   </>
  )
}

export default TransactionList