import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../image/image1.jpg';
import { RiGalleryUploadLine } from 'react-icons/ri';
import {  FaRegBookmark, FaRegSun, FaUserFriends, FaRegImages, FaVideo, FaTag, FaMapMarkerAlt, FaPlusCircle } from 'react-icons/fa';
import { MdRssFeed } from 'react-icons/md';


function Progress({ completed}) {
  // const classes = styles()
  return (
    <div className="progress">
      <span className=" progress-bar" id="progress" style={{ width: completed }}></span>
    </div>
  );
}

export default function Section() {
    return (
        <div>
    <section className="m-5">
      <div className="row">
          <div className="col-lg-2 col-sm-2">
            <div className="card" id="comment">
              <div className=" card-body">
                <h5 className="card-title">Switch Account</h5>
                <ul className=" list-group list-group-horizontal">
                    <li className="list-group-item" id="active">Social</li>
                   <li className="list-group-item bg-light" >Business</li>
                </ul>
              </div>    
            </div>
            <div className="mt-3 card" id="active">
                <div className="card-body row ">
                  <span className="m-2 text-white"><MdRssFeed className="m-2" />Feeds</span>
                  <span className="m-2 text-white"><RiGalleryUploadLine className="m-2" />Gallery</span>
                  <span className="m-2 text-white"><FaRegSun  className="m-2" />Settings</span>
                  <span className="m-2 text-white"><FaUserFriends className="m-2" />Referral</span>
                  <span className="m-2 text-white"><FaRegBookmark className="m-2" />Saved</span>
                </div>
              </div> 
          </div>
          <div className=" col-lg-7">
          <div className="row ">
                <h5 className="col-lg-4 fs-6 text-secondary">Community</h5>
                <h5 className="col-lg-4 fs-6 text-secondary">See What's Trending </h5>
                <h5 className="col-lg-4 fs-6 bold " id="border-bottom"><span id="activate">My page</span></h5>
                <hr/>
              </div>
               <div className="">
              <div className=" row" id="page">
               <div className="m-3 row">
               <div className="col-lg-2 col-sm-1"><img src={img1} class="rounded-circle" id="image-3" alt="..." /></div>
               <div className="col-lg-4 col-sm-2">
                 <h4 className="text-1">Rose Kooto</h4>
                 <span className="text-2">User name</span>
                  <p className="justify" id="text">Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when
                  an unknown printer took a galley of type
                  and scrambled it to make a type
                  </p>
                 </div>
               <div className="col-lg-6 col-sm-6">
                 <div className="row">
                   <div className="sm col-2 text-3" id="activate"> 105 <br/> <small id="text-size"> Post</small></div>
                   <div className="sm col-2 text-3" id="activate">7,080 <br/> <small id="text-size">Followers</small></div>
                   <div className="sm col-2 text-3" id="activate">1,500 <br/> <small id="text-size">Following</small></div>
                   <div className=" col-3 text-3" id="activate">1,500<br/> <small id="text-size">Suppotting</small></div>
                   <div className=" col-3">
                    <span id="text-size" className="text-right top-2 position-absolute font-wieght-bold h1">...</span>
                    <div></div>
                  </div>                  
                 </div>
                 <button type="button" className="text-white rounded btn btn-sm" id="active">Following</button><br/> 
                <div className="row">
                  <div className="col-lg-7 col-sm-8">
                  <h6 className="mt-5" id="activate">Other Pages</h6> <br/>
                  <small id="activate">Bussiness One</small><br/>
                  <small id="activate">Bussiness One longer name</small><br/>
                  <small id="activate">Bussiness One</small><br/>
                  <small id="activate">Bussiness One</small><br/>
                  </div>
                </div>    
               </div>
               </div>
              </div>          
            </div>
            <div className="mt-5">
              <div className=" row" >
                <div className=" card" id="comment">
                  <div className="m-5 bg-light rounded-5 card-group">
                  <div className="ml-5 col-lg-10 col-sm-12">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Share your Moments"></input>
                  </div>
                </div>
                <div className="col-1">                 
                </div>
                  <div className=" col-lg-1">
                  <button type="button" class="btn btn-primary">Post</button>
                </div>
                  </div>
                  <div className="row">
                  <div className="m-3 col-lg-8 col-sm-12">
                    <FaRegImages className="m-1 icon " id="activate" /><span className="m-2 text-3">Image</span>
                    <FaVideo className="m-1 icon " id="activate" /><span className="m-2 text-3">Video</span>
                    <FaMapMarkerAlt className="m-1 icon " id="pro" /><span className="m-2 text-3">Location</span>
                    <FaTag className="m-1 icon " id="activate" /><span className="m-2 text-3">Tag</span>
                  </div>
              </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-lg-3" >
            <h6 className="Font-weight-bold" id="activate"> Suggested Listings</h6>
            <div className=" card" id="page">
              <div className="m-3 row">
                <div className="col-3"><img src={img1} class="rounded-circle" id="image-2" alt="..." /></div>
                <div className="col-6"><p>Smoothie</p>
                <div className="row"> 
                  <small className="footer text-muted">Smoothy store </small>
                  <small className="footer text-muted">25 Orders Left</small>
                  <Progress completed="50%" />
                  </div>
                </div>
                <div className="col-3"><button type="button" className="text-white rounded btn btn-sm" id="active">Order</button></div>
              </div>
              <div className="m-3 row">
                <div className="col-3"><img src={img1} class="rounded-circle" id="image-2" alt="..." /></div>
                <div className="col-6"><p>Smoothie</p>
                <div className="row"> 
                  <small className="footer text-muted">Smoothy store </small>
                  <small className="footer text-muted">25 Orders Left</small>
                  <Progress completed="40%" />
                  </div>
                </div>
                <div className="col-3"><button type="button" className="text-white rounded btn btn-sm" id="active">Order</button></div>
              </div>
              <div className="m-3 row">
                <div className="col-3"><img src={img1} class="rounded-circle " id="image-2" alt="..." /></div>
                <div className="col-6">
                  <p>Smoothie</p>
                  <div className="row"> 
                  <small className="footer text-muted">Smoothy store </small>
                  <small className="footer text-muted">25 Orders Left</small>
                  <Progress completed="70%" />
                  </div>
                  </div>
                <div className="col-3"><button type="button" className="text-white rounded btn btn-sm" id="active">Order</button></div>
              </div>
              <div className="m-3 row">
                <div className="col-3"><img src={img1} className="rounded-circle" id="image-2" alt="..." /></div>
                <div className="col-6"><p>Smoothie</p>
                <div className="row"> 
                  <small className="footer text-muted">Smoothy store </small>
                  <small className="footer text-muted">25 Orders Left</small>
                  <Progress completed="70%" />
                  </div>
                </div>
                <div className="col-3"><button type="button" className="text-white rounded btn btn-sm" id="active">Order</button></div>
              </div>
            </div>
            
          </div>
        </div>
          </section>
     
        </div>
    )
}
