import Layout from "../components/Layout";
import icon1 from "../../../public/icon/Group.png";
import icon2 from "../../../public/icon/Vector (1).png";
import icon3 from "../../../public/icon/Vector (2).png";
import icon4 from "../../../public/icon/Vector.png";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <Layout>

      <section className="block__about container-fluid">
        <div className=" container-s ">
        <div className="block__about--breadcumb">
              <h1 className="">About Online Education</h1>
          </div>
        </div>
          
      </section>
      <section className="block_about--description container-fluid">
         <div className="container-s">
             <div className="block_about--description-content">
                 <h1 className="">Achievements</h1>
                 <span className="">Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements</span>
             </div>
         </div>
      </section> 

      <section className=" block__achievement container-fluid my-4 ">
          <div className="container-s ">
              <div className="block__achievement--grid">
                    <div className="block__achievement--grid-item flex-s-col">
                       <div className="block__achievement--grid-item-icon">
                           <Image 
                             src={icon4}
                             alt=""
                             width={80}
                           />
                       </div>
                       <div className="block__achievement--grid-item-title">
                          <h1 className="">Trusted by Thousands</h1>
                       </div>
                       <div className="">
                          <p className="">We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.</p>
                       </div>
                    </div>
                    <div className="block__achievement--grid-item flex-s-col">
                       <div className="block__achievement--grid-item-icon">
                           <Image 
                             src={icon1}
                             alt=""
                             width={80}
                           />
                       </div>
                       <div className="block__achievement--grid-item-title">
                          <h1 className="">Award-Winning Courses</h1>
                       </div>
                       <div className="">
                          <p className="">Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.</p>
                       </div>
                    </div>
                    <div className="block__achievement--grid-item flex-s-col">
                       <div className="block__achievement--grid-item-icon">
                           <Image 
                             src={icon2}
                             alt=""
                             width={80}
                           />
                       </div>
                       <div className="block__achievement--grid-item-title">
                          <h1 className="">Positive Student Feedback</h1>
                       </div>
                       <div className="">
                          <p className="">We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.</p>
                       </div>
                    </div>
                    <div className="block__achievement--grid-item flex-s-col">
                       <div className="block__achievement--grid-item-icon">
                           <Image 
                             src={icon3}
                             alt=""
                             width={80}
                           />
                       </div>
                       <div className="block__achievement--grid-item-title">
                          <h1 className="">Industry Partnerships</h1>
                       </div>
                       <div className="">
                          <p className="">We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies</p>
                       </div>
                    </div>
              </div>
          </div>
      </section>

      <section className="block_about--description container-fluid">
         <div className="container-s">
             <div className="block_about--description-content">
                 <h1 className="">Our Goals</h1>
                 <span className="">At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
Through our carefully crafted courses, we aim to</span>
             </div>
         </div>
      </section>

      <section className="  block__achievement container-fluid my-4 ">
          <div className="container-s ">
              <div className="block__achievement--grid">
                    <div className="block__achievement--grid-item flex-s-col">
                       <div className="block__achievement--grid-item-icon">
                           <Image 
                             src={icon4}
                             alt=""
                             width={80}
                           />
                       </div>
                       <div className="block__achievement--grid-item-title">
                          <h1 className="">Provide Practical Skills</h1>
                       </div>
                       <div className="">
                          <p className="">We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.</p>
                       </div>
                    </div>
                    <div className="block__achievement--grid-item flex-s-col">
                       <div className="block__achievement--grid-item-icon">
                           <Image 
                             src={icon1}
                             alt=""
                             width={80}
                           />
                       </div>
                       <div className="block__achievement--grid-item-title">
                          <h1 className="">Foster Creative Problem-Solving</h1>
                       </div>
                       <div className="">
                          <p className="">We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.</p>
                       </div>
                    </div>
                    <div className="block__achievement--grid-item flex-s-col">
                       <div className="block__achievement--grid-item-icon">
                           <Image 
                             src={icon2}
                             alt=""
                             width={80}
                           />
                       </div>
                       <div className="block__achievement--grid-item-title">
                          <h1 className="">Promote Collaboration and Community</h1>
                       </div>
                       <div className="">
                          <p className="">We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.</p>
                       </div>
                    </div>
                    <div className="block__achievement--grid-item flex-s-col">
                       <div className="block__achievement--grid-item-icon">
                           <Image 
                             src={icon3}
                             alt=""
                             width={80}
                           />
                       </div>
                       <div className="block__achievement--grid-item-title">
                          <h1 className="">Stay Ahead of the Curve</h1>
                       </div>
                       <div className="">
                          <p className="">The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.</p>
                       </div>
                    </div>
              </div>
          </div>
      </section>
      <section className=" block__about--end container-fluid">
         <div className="container-s">
           <div className="block__about--end-content">
               <div className="block__about--end-content-left">
                   <h1 className="">Together, lets shape the future of digital innovation</h1>
                   <span className="">Join us on this exciting learning journey and unlock your potential in design and development.</span>
               </div>
               <div className="block__about--end-content-right">
                     <Link href=""> <button>Join Now</button></Link>
                </div>
           </div>
         </div>
      </section>
      
    </Layout>
  );
}
