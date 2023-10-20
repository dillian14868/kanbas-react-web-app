import ModuleList from "../Modules/ModuleList";
import "/Users/dillianpica/2023/fall/webdev/kanbas-react-web-app/src/Kanbas/index.css"
import React from 'react';


function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ModuleList />
      <h2>Status</h2>
      <div class="modules col-2 float-end">
                        <p >Course Status</p>
                        <div class="btn-group">
                            <button type="button" class="btn btn-secondary btn-sm ">
                                <i class="fa-solid fa-ban"></i>
                                Unpublish</button>
                            <button type="button" class="btn btn-g btn-sm">
                                <i class="fa fa-check-circle text-white"></i>
                                Published</button>
                        </div>
                        <br/>
                        
                        <br/>
                        <ul class="list-group text-black course-content bg-dark-subtle" style={{fontSize: 10}}>
                            <li class="list-group-item text-black  bg-dark-subtle mb-1"><a href="#">
                                <i class="fa-solid fa-file-import"></i>
                                Import Existing Content</a></li>
                            <li class="list-group-item text-black mb-1"><a href="#">
                                <i class="fa-solid fa-circle-arrow-right"></i>
                                Import From Commons</a></li>
                            <li class="list-group-item text-black mb-1"><a href="#">
                                <i class="fa-regular fa-life-ring"></i>
                                Choose Home Page</a></li>
                            <li class="list-group-item text-black mb-1"><a href="#">
                                <i class="fa-solid fa-chart-column"></i>
                                View Course Stream</a></li>
                            <li class="list-group-item text-black mb-1"><a href="#">
                                <i class="fa-solid fa-bullhorn"></i>
                                New Announcement</a></li>
                            <li class="list-group-item text-black mb-1"><a href="#">
                                <i class="fa-solid fa-chart-column"></i>
                                New Analytics</a></li>
                            <li class="list-group-item text-black"><a href="#">
                                <i class="fa-regular fa-bell"></i>
                                View Course Notifications</a></li>
                        </ul>

                        
                            <br></br>
                            <span class="left">
                                <p class="thick pt-3 small">Comming Up
                                    <br></br>
                            <a class=" text-danger" href="#">
                                <i class="fa-solid fa-calendar-day"></i>
                                
                                View Calendar</a>
                                </p>
                            </span>
                        
                        
                        
                        <hr/>
                        <ul class="list-group comming-up small">
                            <li class="list-group-item "><a href="#">
                                <i class="fa-solid fa-calendar-day pe-2"></i>
                                Lecture 
                                <p class="ps-4"> CS4550.12631.202410 Sep 7 at
                                <br/>
                                11:45am
                                </p>
                            </a></li>
                            <li class="list-group-item"><a href="#">
                                <i class="fa-solid fa-calendar-day pe-2"></i>
                                Lecture 
                                <p class="ps-4"> 
                                    CS4550.12631.202410 Sep 11 at
                                <br/>
                                11:45am
                                </p>
                            </a></li>
                            <li class="list-group-item"><a href="#"><i class="fa-solid fa-calendar-day pe-2"></i>
                                Lecture 
                                <p class="ps-4"> 
                                CS5610 06 
                                <br/>
                                Sep 11 at 6pm
                                </p>
                            </a></li>
                        </ul>
                </div>
            </div>
      
      

  );
}
export default Home;