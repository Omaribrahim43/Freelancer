import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { NavLink } from "react-router-dom";

export default function Articles() {
  return (
    <>
    
      <Header />
      <div class="wt-haslayout wt-innerbannerholder">
				<div class="container">
					<div class="row justify-content-md-center">
						<div class="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
							<div class="wt-innerbannercontent">
							<div class="wt-title"><h2>New Articles</h2></div>
							<ol class="wt-breadcrumb">
								<li><a href="index-2.html">Home</a></li>
								<li class="wt-active">Articles</li>
							</ol>
							</div>
						</div>
					</div>
				</div>
			</div>
		
			<main id="wt-main" class="wt-main wt-haslayout wt-innerbgcolor">
				
				<div class="wt-haslayout wt-main-section">
					<div class="container">
						<div class="row justify-content-md-center">
							<div class="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
								<div class="wt-articletabshold wt-articlelist">
									<ul class="wt-navarticletab nav navbar-nav">
										<li class="nav-item">
											<a class="active" id="all-tab" data-toggle="tab" href="#alltab">All</a>
										</li>
										<li class="nav-item">
											<a id="business-tab" data-toggle="tab" href="#business">Business</a>
										</li>
										<li class="nav-item">
											<a id="trading-tab" data-toggle="tab" href="#trading">Trading</a>
										</li>
										<li class="nav-item">
											<a id="economics-tab" data-toggle="tab" href="#economics">Economics</a>
										</li>
										<li class="nav-item">
											<a id="marketing-tab" data-toggle="tab" href="#marketing">Marketing</a>
										</li>
									</ul>
							 <div class="tab-content wt-haslayout">
										<div class="wt-contentarticle tab-pane active fade show" id="alltab">
											<div class="row">
                    	<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
													  <NavLink to='/article' >		<img src="images/article/list/img-01.jpg" alt="img description"/></NavLink>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>Who Else Wants To Be Successful With Business</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Marina Groth</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
                            <NavLink to='/article' >	<img src="images/article/list/img-02.jpg" alt="img description"/></NavLink>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>20 Top Tips For Business</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Louanne Mattioli</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
                            <NavLink to='/article' >	<img src="images/article/list/img-03.jpg" alt="img description"/></NavLink>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>7 Ways To Keep Your Business Growing Without Burning The Midnight Oil</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Soraya Roloff</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
                            <NavLink to='/article' >	<img src="images/article/list/img-04.jpg" alt="img description"/></NavLink>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>Clear And Unbiased Facts About Business (Without All the Hype)</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Florentino Norsworthy</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
													  <NavLink to='/article' >	<img src="images/article/list/img-05.jpg" alt="img description"/></NavLink>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>Business And Love Have 4 Things In Common</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Jasper Kinney</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
                            <NavLink to='/article' >	<img src="images/article/list/img-06.jpg" alt="img description"/></NavLink>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>BUSINESS 2.0 - The Next Step</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Kaye Medley</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div> 
										<div class="wt-contentarticle tab-pane fade" id="business">
											<div class="row">
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
                            <NavLink to='/article' >			<img src="images/article/list/img-01.jpg" alt="img description"/></NavLink>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>Who Else Wants To Be Successful With Business</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
                            <NavLink to='/article' >	<img src="images/article/list/img-06.jpg" alt="img description"/></NavLink>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>BUSINESS 2.0 - The Next Step</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div> 
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
													  <NavLink to='/article' >	<img src="images/article/list/img-02.jpg" alt="img description"/></NavLink>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>20 Top Tips For Business</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-03.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>7 Ways To Keep Your Business Growing Without Burning The Midnight Oil</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-04.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>Clear And Unbiased Facts About Business (Without All the Hype)</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-05.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>Business And Love Have 4 Things In Common</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="wt-contentarticle tab-pane fade" id="trading">
											<div class="row">
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-01.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>Who Else Wants To Be Successful With Business</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-02.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>20 Top Tips For Business</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-03.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>7 Ways To Keep Your Business Growing Without Burning The Midnight Oil</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-04.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>Clear And Unbiased Facts About Business (Without All the Hype)</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-05.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>Business And Love Have 4 Things In Common</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-06.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>BUSINESS 2.0 - The Next Step</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="wt-contentarticle tab-pane fade" id="economics">
											<div class="row">
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-01.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>Who Else Wants To Be Successful With Business</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-02.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>20 Top Tips For Business</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-03.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>7 Ways To Keep Your Business Growing Without Burning The Midnight Oil</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-04.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>Clear And Unbiased Facts About Business (Without All the Hype)</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-05.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>Business And Love Have 4 Things In Common</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-06.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>BUSINESS 2.0 - The Next Step</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="wt-contentarticle tab-pane fade" id="marketing">
											<div class="row">
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-01.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>Who Else Wants To Be Successful With Business</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-02.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>20 Top Tips For Business</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-03.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>7 Ways To Keep Your Business Growing Without Burning The Midnight Oil</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-04.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>Clear And Unbiased Facts About Business (Without All the Hype)</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-05.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>Business And Love Have 4 Things In Common</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="col-12 col-sm-12 col-md-6 col-lg-6">
													<div class="wt-article">
														<figure>
															<img src="images/article/list/img-06.jpg" alt="img description"/>
														</figure>
														<div class="wt-articlecontent">
															<div class="wt-title">
																<h2>BUSINESS 2.0 - The Next Step</h2>
															</div>
															<ul class="wt-postarticlemeta">
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-clock"></i>
																		<span>June 27, 2018</span>
																	</a>
																</li>
																<li>
																	<a href="javascript:void(0);">
																		<i class="lnr lnr-user"></i>
																		<span>Willis Wainright</span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
										<nav class="wt-pagination">
											<ul>
												<li class="wt-prevpage"><a href="javascrip:void(0);"><i class="lnr lnr-chevron-left"></i></a></li>
												<li><a href="javascrip:void(0);"><i class="fa fa-th"></i></a></li>
												<li class="wt-nextpage"><a href="javascrip:void(0);"><i class="lnr lnr-chevron-right"></i></a></li>
											</ul>
										</nav>
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
