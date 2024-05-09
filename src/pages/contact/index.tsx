import Layout from "../components/Layout";
export default function Contact() {
  return (
    <Layout>
      <section className="container-fluid block__contact-thumbnail">
        <div className="container">
          <h1 className="block__contact-title">Contact Us</h1>
        </div>
      </section>

      <section className="container-fluid ">
        <div className="container-s block__contact--form">
          <div className="block__contact--form-left ">
             
           <div className=" block__contact--form-left-content " >
                
              <form action="" className="">
                  <div className=" flex gap-[30px]">
                  <div className="form-group ">
                    <label htmlFor="">FirstName</label>
                    <input
                      type="text"
                      className=""
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div className="form-group ">
                    <label htmlFor="">LastName</label>
                    <input
                      type="text"
                      className=""
                      placeholder="Enter Last Name"
                    />
                  </div>
                  </div>

                  <div className=" flex gap-[30px]">
                  <div className="form-group ">
                    <label htmlFor="">Email</label>
                    <input
                      type="Email"
                      className=""
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="form-group ">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="text"
                      className=""
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  </div>


                  <div className="form-group ">
                    <label htmlFor="">Subject</label>
                    <input
                      type="text"
                      className=""
                      placeholder="Enter Your Subject"
                    />
                  </div>

                  <div className="form-group mt-5">
                    <label htmlFor="">Message</label>
                     <textarea className="h-[150px]" name="" id="" placeholder="Enter your message here"></textarea>
                  </div>

                  <div className="form-group-submit">
                      <button className="btn-submit">Send Your Message</button>
                  </div>

              </form>
            </div> 
          </div>
          <div className="block__contact--form-right ">
              <div className="block__contact--form-right-content">
                <div className="block__contact--form-right-tab">
                    <div className="block__contact--form-right-tab-bg">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                    <div className="block__contact--form-right-tab-text">
                        <span className="">support@unsolanki.com</span>
                    </div>
                </div>
                <div className="block__contact--form-right-tab">
                    <div className="block__contact--form-right-tab-bg">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div className="block__contact--form-right-tab-text">
                        <span className="">+91 9313224120</span>
                    </div>
                </div>
                <div className="block__contact--form-right-tab">
                    <div className="block__contact--form-right-tab-bg">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div className="block__contact--form-right-tab-text">
                        <span className="">Some Where in the World</span>
                    </div>
                </div>

                <div className="block__contact--form-right-tab">
                    <div className="block__contact--form-right-tab-list">
                        <div className="block__contact--form-right-tab-bg">
                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                        </div>
                        <div className="block__contact--form-right-tab-bg">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                        <div className="block__contact--form-right-tab-bg">
                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </div>

                        
                    </div>
                    <div className="block__contact--form-right-tab-text">
                        <span className="">Social Profiles</span>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
