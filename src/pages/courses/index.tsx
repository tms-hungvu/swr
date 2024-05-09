import Link from "next/link";
import Layout from "../components/Layout";
import image1 from "../../../public/image/Image (1).png";
import image2 from "../../../public/image/Image (2).png";
import image3 from "../../../public/image/Image.png";
import Image from "next/image";
export default function Course() {
  return (
    <Layout>
       <section className="mt-[80px]  block__course--first container-fluid">
           <div className="container-s">
                <div className="block__course--first-content">
                   <div className="block__course--first-content-thumbnail">
                     <h1 className="">Online Courses on Design and Development</h1>
                   </div>

                 
                   <div className="block__course--first-content-next">
                      <div className="block__course--first-content-title">
                            <h3 className="">Web Design Fundamentals</h3>
                            <p className="">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                      </div>

                      <div className="">
                          <Link href="">
                              <button className="">View Course</button>
                          </Link>
                      </div>
              
                   </div>

                    <div className="block__course--first-content-image">
                        <div className="block__course--first-content-image-item">
                            <Image 
                              src={image1}
                              alt=""
                              width={900}
                            />
                        </div>
                        <div className="block__course--first-content-image-item">
                            <Image 
                              src={image2}
                              alt=""
                              width={900}
                            />
                        </div>
                        <div className="block__course--first-content-image-item">
                            <Image 
                              src={image3}
                              alt=""
                              width={900}
                            />
                        </div>
                    </div>


                   <div className="block__course--first-content-author">
                      <div className="block__course--first-content-author-left">
                          <Link href=""><button className="">4 Weeks</button></Link>
                          <Link href=""><button className="">Beginner</button></Link>

                      </div>
                      <div className="block__course--first-content-author-right">
                         <span className="">By John Smith</span>
                      </div>
                   </div>
                </div>
           </div>
       </section>

       <section className="container-fluid block__course--technical">
         <div className="container-s">
            
             <div className="block__course--technical-content">
                <div className="block__course--technical-content-tab">
                      <h2 className="">Curriculum</h2>
                </div>
                <div className="block__course--technical-content-flex">
                    <div className="block__course--technical-content-flex-item">
                        <h1 className="">01</h1>
                        <span className="">Introduction to HTML</span>
                    </div>
                    <div className="block__course--technical-content-flex-item block__course--technical-content-flex-item-bf">
                        <h1 className="">02</h1>
                        <span className="">Styling with CSS</span>
                    </div>
                    <div className="block__course--technical-content-flex-item block__course--technical-content-flex-item-bf">
                        <h1 className="">03</h1>
                        <span className="">Introduction to Responsive Design</span>
                    </div>
                    <div className="block__course--technical-content-flex-item block__course--technical-content-flex-item-bf">
                        <h1 className="">04</h1>
                        <span className="">Design Principles for Web</span>
                    </div>
                    <div className="block__course--technical-content-flex-item block__course--technical-content-flex-item-bf">
                        <h1 className="">05</h1>
                        <span className=""> Building a Basic Website</span>
                    </div>
                </div>
             </div>
         </div>
         
       </section>


       <section className="mt-[60px]  block__course--first container-fluid">
           <div className="container-s">
                <div className="block__course--first-content">
                   

                 
                   <div className="block__course--first-content-next">
                      <div className="block__course--first-content-title">
                            <h3 className="">UI/UX Design</h3>
                            <p className="">Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</p>
                      </div>

                      <div className="">
                          <Link href="">
                              <button className="">View Course</button>
                          </Link>
                      </div>
              
                   </div>

                    <div className="block__course--first-content-image">
                        <div className="block__course--first-content-image-item">
                            <Image 
                              src={image1}
                              alt=""
                              width={900}
                            />
                        </div>
                        <div className="block__course--first-content-image-item">
                            <Image 
                              src={image2}
                              alt=""
                              width={900}
                            />
                        </div>
                        <div className="block__course--first-content-image-item">
                            <Image 
                              src={image3}
                              alt=""
                              width={900}
                            />
                        </div>
                    </div>


                   <div className="block__course--first-content-author">
                      <div className="block__course--first-content-author-left">
                          <Link href=""><button className="">4 Weeks</button></Link>
                          <Link href=""><button className="">Beginner</button></Link>

                      </div>
                      <div className="block__course--first-content-author-right">
                         <span className="">By John Smith</span>
                      </div>
                   </div>
                </div>
           </div>
       </section>

       <section className="container-fluid block__course--technical">
         <div className="container-s">
            
             <div className="block__course--technical-content">
                <div className="block__course--technical-content-tab">
                      <h2 className="">Curriculum</h2>
                </div>
                <div className="block__course--technical-content-flex">
                    <div className="block__course--technical-content-flex-item">
                        <h1 className="">01</h1>
                        <span className="">Introduction to UI/UX Design</span>
                    </div>
                    <div className="block__course--technical-content-flex-item block__course--technical-content-flex-item-bf">
                        <h1 className="">02</h1>
                        <span className="">User Research and Personas</span>
                    </div>
                    <div className="block__course--technical-content-flex-item block__course--technical-content-flex-item-bf">
                        <h1 className="">03</h1>
                        <span className="">Wireframing and Prototyping</span>
                    </div>
                    <div className="block__course--technical-content-flex-item block__course--technical-content-flex-item-bf">
                        <h1 className="">04</h1>
                        <span className="">Visual Design and Branding</span>
                    </div>
                    <div className="block__course--technical-content-flex-item block__course--technical-content-flex-item-bf">
                        <h1 className="">05</h1>
                        <span className="">Usability Testing and Iteration</span>
                    </div>
                </div>
             </div>
         </div>
         
       </section>
       


       <section className="mt-[60px]  block__course--first container-fluid">
           <div className="container-s">
                <div className="block__course--first-content">
                   

                 
                   <div className="block__course--first-content-next">
                      <div className="block__course--first-content-title">
                            <h3 className="">Mobile App Development</h3>
                            <p className="">Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.</p>
                      </div>

                      <div className="">
                          <Link href="">
                              <button className="">View Course</button>
                          </Link>
                      </div>
              
                   </div>

                    <div className="block__course--first-content-image">
                        <div className="block__course--first-content-image-item">
                            <Image 
                              src={image1}
                              alt=""
                              width={900}
                            />
                        </div>
                        <div className="block__course--first-content-image-item">
                            <Image 
                              src={image2}
                              alt=""
                              width={900}
                            />
                        </div>
                        <div className="block__course--first-content-image-item">
                            <Image 
                              src={image3}
                              alt=""
                              width={900}
                            />
                        </div>
                    </div>


                   <div className="block__course--first-content-author">
                      <div className="block__course--first-content-author-left">
                          <Link href=""><button className="">4 Weeks</button></Link>
                          <Link href=""><button className="">Beginner</button></Link>

                      </div>
                      <div className="block__course--first-content-author-right">
                         <span className="">By John Smith</span>
                      </div>
                   </div>
                </div>
           </div>
       </section>

       <section className="container-fluid block__course--technical mb-10">
         <div className="container-s">
            
             <div className="block__course--technical-content">
                <div className="block__course--technical-content-tab">
                      <h2 className="">Curriculum</h2>
                </div>
                <div className="block__course--technical-content-flex">
                    <div className="block__course--technical-content-flex-item">
                        <h1 className="">01</h1>
                        <span className="">Introduction to Mobile App Development</span>
                    </div>
                    <div className="block__course--technical-content-flex-item block__course--technical-content-flex-item-bf">
                        <h1 className="">02</h1>
                        <span className="">Fundamentals of Swift Programming (iOS)</span>
                    </div>
                    <div className="block__course--technical-content-flex-item block__course--technical-content-flex-item-bf">
                        <h1 className="">03</h1>
                        <span className="">Fundamentals of Kotlin Programming (Android)</span>
                    </div>
                    <div className="block__course--technical-content-flex-item block__course--technical-content-flex-item-bf">
                        <h1 className="">04</h1>
                        <span className="">Building User Interfaces</span>
                    </div>
                    <div className="block__course--technical-content-flex-item block__course--technical-content-flex-item-bf">
                        <h1 className="">05</h1>
                        <span className="">App Deployment and Testing</span>
                    </div>
                </div>
             </div>
         </div>
         
       </section>
    </Layout>
  );
}
