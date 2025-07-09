import React, { use, useContext, useEffect } from 'react'
import "./Verfiy.css" 

const Verfiy = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParms.get("success")
    const orderId = searchParms.get("orderId")

    const {url} = useContext(StoreContext);
    const navigate = useNavigate();
    
    const verifyPayment = async ()=>{
        const response = await axios.post(url+"/api/order/verfiy", {success,orderId});
        if (response.data.success) {
            navigate("/myorders");
        } else{
            navigate("/")
        }
    }
    useEffect(()=>{
        verifyPayment()
    },[])
     return (
    <div className='verify'>
      <div className="spinner">

      </div>
    </div>
  )
}

export default Verfiy
