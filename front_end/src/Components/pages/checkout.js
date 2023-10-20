import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../../axios/axios";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { CLIENT_ID } from '../../Config/config';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector} from "react-redux";


export default function Checkout() {
    const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedFeatureIds = queryParams.get("features").split(',');
  console.log("SelectedFeatureIds Array:", selectedFeatureIds);
  
  const [project, setProject] = useState({});
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const user = useSelector((state) => state.user);
  // console.log("data:", data);


  useEffect(() => {
    // Fetch project details
    axios.get(`http://127.0.0.1:8000/api/projects/${id}`).then((response) => {
      setProject(response.data);
    });

    // Fetch features based on selectedFeatureIds
    axios.get(`http://127.0.0.1:8000/api/features`).then((response) => {
    const featuresData = response.data;

    // Convert selectedFeatureIds to strings
    const selectedFeatureIdsString = selectedFeatureIds.map(String);

    // Filter features based on string comparison
    const features = featuresData.filter((feature) => selectedFeatureIdsString.includes(String(feature.id)));

    setSelectedFeatures(features);
    console.log(features);
  });
  }, []);

  let Duration = project.deadline + selectedFeatures.reduce((acc, feature) => acc + Number(feature.deadline), 0);
  let price = project.price + selectedFeatures.reduce((acc, feature) => acc + feature.price, 0);
 
  // const orderData = [
  //   { key: 'price', value: price },
  //   { key: 'duration', value: Duration },
  //   { key: 'projectId', value: id },
  // ];
  
  // // Serialize the data to JSON and store it in the session
  // sessionStorage.setItem('order', JSON.stringify(orderData));


   // creates a paypal order
   const createOrder = (data, actions) => {
    return actions.order.create({
        purchase_units: [
            {
                description: "Service",
                amount: {
                    currency_code: "USD",
                    value: price,
                },
            },
        ],
    }).then((orderID) => {
            setOrderID(orderID);
            return orderID;
        });
};

// check Approval
const onApprove = async (data, actions) => {
  return actions.order.capture().then(function (details) {
      const paymentData = {
          amount: details.purchase_units[0].amount.value,
          method: 'PayPal',
          payer: {
              name: details.payer.name.given_name + ' ' + details.payer.name.surname,
              email: details.payer.email_address,
          },
          transactionId: details.id,
          currency: details.purchase_units[0].amount.currency_code,
          timestamp: details.create_time,
      };
const amount = paymentData.amount;
const method = paymentData.method;
const payername = paymentData.payer.name;
const payeremail = paymentData.payer.email;
const  userId= user.id;
const projectId = id;
const  duration= Duration;
      // Additional order and feature details
      const orderDetails = {
          duration: Duration,
          price: price,
          projectId: id,
          userId: user.id,
          // Other order-related fields
      };

      // Feature IDs
      const featureIds = selectedFeatures.map(feature => feature.id);

      // Combine all data into a single object
      const requestData = {
        amount,
        method,
        userId,
        projectId,
        duration,
      };

      console.log('requestData' , requestData);
      const Approve = async (data) => {
     try {
        const csrfResponse = await axios.get("/get-csrf-token");
        const csrfToken = csrfResponse.data.csrf_token;
        axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
        console.log('csrfResponse:', csrfResponse);
        const response = await axios.post("/orders/create", {
          amount,
          method,
          userId,
          projectId,
          duration,
        });

        console.log('Data sent to Laravel:', response);
    } catch (error) {
        console.error('Error sending data to Laravel:', error);
    }

  }
  Approve();
    setSuccess(true);
  });
};

//capture likely error
const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
};

useEffect(() => {
    if (success) {
        alert("Payment successful!!");
        console.log('Order successful . Your order id is--', orderID);
    }
},[]);

  return (
    <>
      <Header />

      <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
      <div class="wt-haslayout wt-innerbannerholder" style={{ marginBottom: '80px' }}>
				<div class="container">
					<div class="row justify-content-md-center">
						<div class="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
							<div class="wt-innerbannercontent">
							<div class="wt-title"><h2>Cheackout</h2></div>
							<ol class="wt-breadcrumb">
								<li><a href="index-2.html">Home</a></li>
								<li><a href="javascript:void(0);">Projects</a></li>
								<li > <a href="javascript:void(0);">Project Detail </a></li>
								<li class="wt-active">checkout</li>
							</ol>
							</div>
						</div>
					</div>
				</div>
			</div>
      

      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
        <div className="wt-proposalholder row" style={{ marginLeft: '70px', width: '90%', backgroundColor: 'rgb(245,245,245)' }}>
          <span className="wt-featuredtag">
            {/* Featured tag */}
          </span>
          <div className="wt-widget wt-companysinfo-jobsingle col-3">
                <div className="wt-companysdetails">
                  <figure>
                    <img src={project.image} alt="img description" />
                  </figure>
                 
                </div>
         </div>
          <div className="wt-proposalhead col-3">
            <h2>Service</h2>
            <h3>{project.title}</h3>
            <div className="selected-features">
        <h5>Selected Features:</h5>
        <ul>
             {selectedFeatures.map((item) => (
               <div key={item.id}>
                 <li >{item.title} -- Additional cost of {item.price} JD .</li>
                   </div>
                
                     ))}
        </ul>
          </div>

         </div>

         <div className="wt-proposalhead col-2 ">
            <h2 >Duration</h2>
            <div   >
              {Duration} Days 
           </div>       </div>

         <div className="wt-proposalhead col-2">
            <h2>Total price</h2>
            <div>{price} JD</div>
         </div>
      
          <div className="wt-btnarea" style={{marginTop: '150px'}}>
            <button className="wt-btn"  type="submit" onClick={() => setShow(true)}>
              Pay now
            </button>
          </div>
        </div>
      </div>

      <div style={{ marginLeft : '30%'}}> 
             
                <br></br>
                {show ? (
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                    />
                ) : null}
               
            </div>
  
      </PayPalScriptProvider>
      <Footer />
    </>
  );
}
