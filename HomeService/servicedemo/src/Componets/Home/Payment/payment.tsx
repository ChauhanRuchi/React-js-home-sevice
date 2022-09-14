import axios from "axios";

declare global {
    interface Window {
        Razorpay: any;
       
    }}
export default function Payment(){
 
    const handlepayment=async()=>{
        const {data}=await axios.post("http://localhost:2009/HomeService/payment")
        console.log("data",data)
    }
    const initpayment=()=>{
            const option={
                key:"rzp_test_385yGikINhUWfh",
                amount:"990",
                currency:"INR",
            }
            const paymentObject = new window.Razorpay(option);
            paymentObject.open();
    }

    return <>
       {handlepayment()
        }
        {
            initpayment()
        }
            
    </>
}