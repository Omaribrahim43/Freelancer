import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Freelancer() {
    const { id } = useParams();
    const [freelancer, setfreelancer] = useState([]);


    useEffect(() => {
        async function fetchData() {
          try {
            const Response = await axios.get(`http://127.0.0.1:8000/api/users/${id}`);
            setfreelancer(Response.data);
    
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, );


  return (
    <>
    
      <Header />
  	<div class="wt-haslayout wt-innerbannerholder wt-innerbannerholdervtwo">
				<div class="container">
					<div class="row justify-content-md-center">
						<div class="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
						</div>
					</div>
				</div>
			</div>
  	<main id="wt-main" class="wt-main wt-haslayout wt-innerbgcolor">
			
				<div class="wt-main-section wt-paddingtopnull wt-haslayout">
      <div class="container">
						<div class="row">	
							<div class="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
								<div class="wt-userprofileholder">
									<span class="wt-featuredtag"></span>
									<div class="col-12 col-sm-12 col-md-12 col-lg-3 float-left">
										<div class="row">
											<div class="wt-userprofile">
												<figure>
													<img src={freelancer.image} alt="img description"/>
													<div class="wt-userdropdown wt-online">
													</div>
												</figure>
												<div class="wt-title">
													<h3><i class="fa fa-check-circle"></i> {freelancer.name}</h3>
													<br/>Member since {freelancer.created_at} <br/>
                                                    <a  class="wt-reportuser">Report User</a>
												</div>
											</div>
										</div>
									</div>
									<div class="col-12 col-sm-12 col-md-12 col-lg-9 float-left">
										<div class="row">
											<div class="wt-proposalhead wt-userdetails">
												<h2>Classified Posting, Data Entry, Typing Expert</h2>
												<ul class="wt-userlisting-breadcrumb wt-userlisting-breadcrumbvtwo">
													<li><span>  {freelancer.contact_info}</span></li>
													<li><a href="javascript:void(0);" class="wt-clicksave"><i class="fa fa-heart"></i> Save</a></li>
												</ul>
												<div>
												<p>{freelancer.Bio}</p></div>
											</div>
											<div id="wt-statistics" class="wt-statistics wt-profilecounter">
												<div class="wt-statisticcontent wt-countercolor1">
													<h3 data-from="0" data-to="03" data-speed="800" data-refresh-interval="03">03</h3>
													<h4>Ongoing <br/>Projects</h4>
												</div>
												<div class="wt-statisticcontent wt-countercolor2">
													<h3 data-from="0" data-to="1503" data-speed="8000" data-refresh-interval="100">15</h3>
													<h4>Completed <br/>Projects</h4>
												</div>
												<div class="wt-statisticcontent wt-countercolor4">
													<h3 data-from="0" data-to="02" data-speed="800" data-refresh-interval="02">02</h3>
													<h4>Cancelled <br/>Projects</h4>
												</div>
												<div class="wt-statisticcontent wt-countercolor3">
													<h3 data-from="0" data-to="25" data-speed="8000" data-refresh-interval="100">20</h3>
													<em></em>
													<h4>Reviews </h4>
												</div>
											
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                    </div>
                    </main>
      <Footer />
    </>
  );
}
