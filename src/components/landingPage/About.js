import Footer from "./Footer";
import Navbar from "./Navbar";

import name from "../../assets/img/dashboard/admin-user.png";
import email from "../../assets/img/dashboard/admin-email.png";
import admin_1 from "../../assets/img/dashboard/admin-1.jpg";
import admin_git from "../../assets/img/dashboard/admin-git.png";
import admin_insta from "../../assets/img/dashboard/admin-insta-2.png";
import admin_linkedin from "../../assets/img/dashboard/admin-linkedin.png";
import admin_card_profile from "../../assets/img/dashboard/admin-card-profile.png";

const About = () => {
  return (
    <div className="body  lg:overflow-hidden lg:h-screen max-h-min flex flex-col h-screen">
      <Navbar />
      <div className=" bg-secoundry font-poppins over ">
        <div className="  flex justify-center">
          <h1 className=" p-4 px-8 font-bold  text-6xl ">About us</h1>
        </div>
        <div className="">
          <div>
            <h1 className="flex justify-center font-bold text-xl">
            </h1>
            <h1 className=" mt-5 flex justify-center font-bold text-4xl">Our Story</h1>
            <div className="p-10  "> <h1 className=" text-xl flex justify-center" >As two founders who have experienced the pains of those around us affected by mental health issues, we decided to embark on a journey to create a healthcare startup that could make a real difference. We named our startup "Wundrsight", as we believe that through the use of cutting-edge technology and innovative solutions, we can help people see the wonder and beauty in life, even during the darkest of times.</h1></div>

            <div className=" grid grid-cols-3 ml-20 mt-12 ">

              <div className="shadow-sm border-2 mt-6 p-4 rounded-md w-9/12 hover:shadow-xl">
                <div className="flex justify-center">
                  <img
                    src={admin_card_profile}
                    alt="Founder_profile"
                    className="h-40 w-40 rounded-full border-2"
                  ></img>
                </div>
                <div className="p-6  ">
                  <div className="flex justify-center ">
                    <img src={name} className="h-4 w-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">Raunak Swarnkar</h1>
                  </div>
                  <h5 className="flex justify-center">(
                    Co-founder & CEO
                    )</h5>
                  <div className="flex justify-center mt-2">
                    <img src={email} className="h-4 w-4 mt-1" alt="email"></img>
                    <h4 className="ml-2">raunakswarnkar@gmail.com</h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="">
                      <img
                        src={admin_linkedin}
                        className="h-5 w-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>

              <div className="shadow-sm border-2 mt-6 p-4 rounded-md w-9/12 hover:shadow-xl">
                <div className="flex justify-center">
                  <img
                    src={admin_card_profile}
                    alt="co-founder_profile"
                    className="h-40 w-40 rounded-full "
                  ></img>
                </div>
                <div className="p-6  ">
                  <div className="flex justify-center ">
                    <img src={name} className="h-4 w-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">Nishtha Budhiraja</h1>
                  </div>
                  <h5 className="flex justify-center">(
                    Co-founder & Chief Medical Officer
                    )</h5>
                  <div className="flex justify-center mt-2 ">
                    <img src={email} className="h-4 w-4 mt-1" alt="email"></img>
                    <h4 className="ml-2">nishthabudhiraja@gmail.com</h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="">
                      <img
                        src={admin_linkedin}
                        className="h-5 w-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>

              <div className="shadow-sm border-2 mt-6 p-4 rounded-md w-9/12 hover:shadow-xl">
                <div className="flex justify-center">
                  <img
                    src={admin_card_profile}
                    alt="admin_profile"
                    className="h-40 w-40 rounded-full border-2"
                  ></img>
                </div>
                <div className="p-6  ">
                  <div className="flex justify-center ">
                    <img src={name} className="h-4 w-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">Mohamed Asfer Ali</h1>
                  </div>
                  <h5 className="flex justify-center">(Admin)</h5>
                  <div className="flex justify-center mt-2">
                    <img src={email} className="h-4 w-4 mt-1" alt="email"></img>
                    <h4 className="ml-2">asferali8384@gmail.com</h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="">
                      <img
                        src={admin_linkedin}
                        className="h-5 w-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
