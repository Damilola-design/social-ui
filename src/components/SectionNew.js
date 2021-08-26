import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FaRegBookmark, FaPlusCircle } from 'react-icons/fa';
import {  RiShareForwardFill } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi'; 
import {  GiPin } from 'react-icons/gi';
import { FcLike } from 'react-icons/fc';
import { BsChat } from 'react-icons/bs';
import img1 from '../image/image1.jpg';
import img2 from '../image/image2.jpg';




export default function SectionNew() {
    return (
        <div>
            <section className="m-5">
      <div className="row">
          <div className=" col-lg-2">
            <div className="mt-3 card" id="comment">
                <div className="card-body row ">
                  <div className="col-5">
                    <small  className="font-wi" id="text-size">My Pages</small>
                  </div>
                  <div className="col-7 comment" id="active">      
                    <FaPlusCircle className="" id="pro" /><small  className="font-size-2" id="text-size" >Create New</small>
                  </div>
                  <div className="mt-2">
                  <span className="border-0 bg-light search input-group-text input-group" id="addon-wrapping"><BiSearch /> <input type="text" className="bg-transparent border-0 rounded-end form-control" placeholder="search" aria-label="Username" aria-describedby="addon-wrapping" id="search-col"></input>
                  </span>
                   </div>
                </div>
                <div className="m-1 row" id="biz">
                  <div className="col-3"><img src={img1} class="rounded-circle image-4 mt-2 mr-2"  alt="..." /></div>
                  <div className="col-7">
                    <small  id="text-size">Business name</small>
                  <div className="row"> 
                    <div className="col-9">
                    <small className="footer text-muted" id="text-size1">Private seller</small>
                    </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <span id="text-size" className="top-1 position-absolute font-wieght-cold h1">...</span>
                    <GiPin className="mt-4"/>
                  </div>       
              </div>
              <div className="m-1 row" id="biz">
                  <div className="col-3"><img src={img1} class="rounded-circle image-4 mt-2 mr-2" alt="..." /></div>
                  <div className="col-7">
                    <small  id="text-size">Business name</small>
                  <div className="row"> 
                    <div className="col-9">
                    <small className="footer text-muted" id="text-size1">Private seller</small>
                    </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <span id="text-size" className="top-1 position-absolute font-wieght-cold h1">...</span>
                    <GiPin className="mt-4"/>
                  </div>       
              </div>
              <div className="m-1 row" id="biz">
                  <div className="col-3"><img src={img1} class="rounded-circle image-4 mt-2 mr-2"  alt="..." /></div>
                  <div className="col-7">
                    <small  id="text-size">Business name</small>
                  <div className="row"> 
                    <div className="col-9">
                    <small className="footer text-muted" id="text-size1">Private seller</small>
                    </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <span id="text-size" className="top-1 position-absolute font-wieght-cold h1">...</span>
                    <GiPin className="mt-4"/>
                  </div>       
              </div>
              <div className="m-1 row" id="biz">
                  <div className="col-3"><img src={img1} class="rounded-circle image-4 mt-2 mr-2"  alt="..." /></div>
                  <div className="col-7">
                    <small  id="text-size">Business name</small>
                  <div className="row"> 
                    <div className="col-9">
                    <small className="footer text-muted" id="text-size1">Private seller</small>
                    </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <span id="text-size" className="top-1 position-absolute font-wieght-cold h1">...</span>
                    <GiPin className="mt-4"/>
                  </div>       
              </div>
              </div>  
          </div>
          <div className=" col-lg-7">
            <div className="">
              <div className="border card row" id="comment">
               <div className="m-3 row">
               <div className="col-lg-6"><img src={img2} class="rounded  img-fluid " id="comment" alt="..." /></div>
               <div className="col-lg-6 col-sm-8">
                 <div  className="row">
                   <div className="col-lg-2 col-sm-4">
                    <img src={img2} class="rounded-circle image-1" alt="..." />
                   </div>
                 <div className="col-lg-9 col-sm-12">
                  <h4 className="text-1">Rose Kooto</h4>
                  <div className="row">
                    <div className="sa text-4 col-3 " id="text-size"> <small> Abuja</small></div>
                    <div className="sa text-4 col-3 " id="text-size"> <small>11hrs ago</small></div>
                    <div className="sa text-4 col-3 " id="text-size"><small>200 Likes</small></div>
                    <div className="sa text-4 col-3 " id="text-size"><small>20 Replies</small></div>
                  </div>
                 </div>
                 <div className=" col-1">
                    <span id="text-size" className="text-right position-absolute font-wieght-bold h1">...</span>
                  </div>
                 </div>
                 <p className="display-10 justify" id="text">Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when
                  an unknown printer took a galley of type
                  and scrambled it to make a type
                  </p>
                  <div>
                  
                  <div className="col-12">
                  <span className="m-4 font-weight-bold" id="text-size">View all comments</span>
                 <div  className="row">
                   <div className="col-2">
                    <img src={img2} class="rounded-circle image-1" alt="..." />
                   </div>
                 <div className="col-lg-10">
                 <h4 className="text-1">Rose Kooto</h4>
                 <div className="col">
                   <div className=" col-12" id="text-size"> <small> Last Seen 11hrs</small>
                   </div>
                   <div className="col-12">
                   <p className="display-10 justify" id="text">Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when
                    an unknown printer took a galley of type
                    and scrambled it to make a type             
                    </p>
                   </div>
                 </div>
                 </div>
                 <div className="row">
                    <div className="col-10">
                      <FcLike className="m-2"/>
                      <BsChat id="activate" className="m-2"/>
                      <FaRegBookmark id="activate" className="m-2"/>
                    </div>
                    <div className="col-2">
                      <RiShareForwardFill id="activate"/>
                    </div>
                  </div>
                 </div>
                 </div>
                  </div>
                 </div>
               </div>
              </div>
              <div className="mt-5 border row card" id="comment">
               <div className="m-3 row">
               <div className="col-lg-6"><img src={img2} class="rounded  img-fluid" id="comment" alt="..." /></div>
               <div className="col-lg-6">
                 <div  className="row">
                   <div className="col-lg-2">
                    <img src={img2} class="rounded-circle image-1" alt="..." />
                   </div>
                 <div className="col-lg-9">
                 <h4 className="text-1">Rose Kooto</h4>
                 <div className="row">
                   <div className=" col-3" id="text-size"> <small> Abuja</small></div>
                   <div className="col-3 " id="text-size"> <small>11hrs ago</small></div>
                   <div className="col-3 " id="text-size"><small>200 Likes</small></div>
                   <div className="col-3 " id="text-size"><small>20 Replies</small></div>
                 </div>
                 </div>
                 <div className=" col-lg-1">
                    <span id="text-size" className="text-right position-absolute font-wieght-bold h1">...</span>
                  </div>
                 </div>
                 <p className="display-10 justify" id="text">Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when
                  an unknown printer took a galley of type
                  and scrambled it to make a type
                  </p>
                  <div>
                  
                  <div className="col-lg-12">
                  <span className="m-4 font-weight-bold" id="text-size">View all comments</span>
                 <div  className="row">
                   <div className="col-2">
                    <img src={img2} class="rounded-circle image-1" alt="..." />
                   </div>
                 <div className="col-lg-10">
                 <h4 className="text-1">Rose Kooto</h4>
                 <div className="col">
                   <div className=" col-12" id="text-size"> <small> Last Seen 11hrs</small>
                   </div>
                   <div className="col-12">
                   <p className="display-10 justify" id="text">Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when
                    an unknown printer took a galley of type
                    and scrambled it to make a type             
                    </p>
                   </div>
                 </div>
                 </div>
                 <div className="row">
                    <div className="col-10">
                      <FcLike className="m-2"/>
                      <BsChat id="activate" className="m-2"/>
                      <FaRegBookmark id="activate" className="m-2"/>
                    </div>
                    <div className="col-2">
                      <RiShareForwardFill id="activate"/>
                    </div>
                  </div>
                 </div>
                 </div>
                  </div>
                 </div>
               </div>
              </div>
            
            </div>
        </div>
          
          <div className=" col-lg-3">
            <div className="row" >
            <h5 className="col-6 fs-6 text-secondary suggestion text-4" >Suggested Users </h5>
                <h5 className="col-6 fs-6 bold text-1" id="activate">Suggested pages </h5>
                <hr/>
            </div>
            <div className=" card" id="page">
              <div className="m-3 sm row">
                <div className="col-2"><img src={img1} class="rounded-circle" id="image-2" alt="..." /></div>
                <div className="col-4"><p id="text-size">Rose Kooto</p>
                <div className="row"> 
                  <small className="footer text-muted" id="text-size1">Abuja </small>
                  </div>
                </div>
                <div className="col-4" id="text-size"><button type="button" className="text-white rounded btn btn-sm" id="active">Support</button></div>
                <div className="col-2">
                <FaRegBookmark id="activate" className="m-2"/>
                </div>
              </div>
              <div className="m-3 row">
                <div className="col-2"><img src={img1} class="rounded-circle" id="image-2" alt="..." /></div>
                <div className="col-4"><p id="text-size">Rose Kooto</p>
                <div className="row"> 
                  <small className="footer text-muted" id="text-size1">Abuja </small>
                  </div>
                </div>
                <div className="col-4" id="text-size"><button type="button" className="text-white rounded btn btn-sm" id="active">Support</button></div>
                <div className="col-2">
                <FaRegBookmark id="activate" className="m-2"/>
                </div>
              </div>
              <div className="m-3 row">
                <div className="col-2"><img src={img1} class="rounded-circle" id="image-2" alt="..." /></div>
                <div className="col-4"><p id="text-size">Rose Kooto</p>
                <div className="row"> 
                  <small className="footer text-muted" id="text-size1">Abuja </small>
                  </div>
                </div>
                <div className="col-4" id="text-size"><button type="button" className="text-white rounded btn btn-sm" id="active">Support</button></div>
                <div className="col-2">
                <FaRegBookmark id="activate" className="m-2"/>
                </div>
              </div>
              <div className="m-3 row">
                <div className="col-2"><img src={img1} class="rounded-circle" id="image-2" alt="..." /></div>
                <div className="col-4"><p id="text-size">Rose Kooto</p>
                <div className="row"> 
                  <small className="footer text-muted" id="text-size1">Abuja </small>
                  </div>
                </div>
                <div className="col-4" id="text-size"><button type="button" className="text-white rounded btn btn-sm" id="active">Support</button></div>
                <div className="col-2">
                <FaRegBookmark id="activate" className="m-2"/>
                </div>
              </div>
              <div className="m-3 row">
                <div className="col-2"><img src={img1} class="rounded-circle" id="image-2" alt="..." /></div>
                <div className="col-4"><p id="text-size">Rose Kooto</p>
                <div className="row"> 
                  <small className="footer text-muted" id="text-size1">Abuja </small>
                  </div>
                </div>
                <div className="col-4" id="text-size"><button type="button" className="text-white rounded btn btn-sm" id="active">Support</button></div>
                <div className="col-2">
                <FaRegBookmark id="activate" className="m-2"/>
                </div>
              </div>
            </div>
          </div>
        </div>
          </section>
    
        </div>
    )
}
