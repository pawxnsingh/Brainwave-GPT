import Section from "./Section";
import Heading from "./Heading";
import { check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import { service1, service2, service3 } from "../assets";
import { VideoChatMessage, VideoBar } from "./design/Services";

const Services = () => {
   return (
      <Section id="Services">
         <div className="container relative">
            <Heading
               heading="Generative AI made for creators."
               text="Brainwave unlocks the potential of AI-powered applications"
            />

            {/* this is bento card container */}
            <div className="relative">
               {/* this is first card */}
               <div className="relative z-1 flex  w-auto mt-11 h-[39rem] border rounded-3xl border-n-1/10 overflow-hidden">
                  {/* image container */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                     <img
                        src={service1}
                        className="w-full h-full object-cover"
                        alt="service-1"
                        width={800}
                        height={730}
                     />
                  </div>
                  {/* this is the heading and bullet point container */}
                  {/* in this case on mobile  */}
                  {/* here what i can do is define width of it and  margin-left: auto*/}

                  <div className="relative z-1 max-w-[17rem] ml-auto mr-8 top-36 md:right-16">
                     <h4 className="h4 mb-4">Smartest AI</h4>
                     <p className="body-2 mb-[3rem] text-n-3 ">
                        Brainwave unlocks the potential of AI-powered
                        applications
                     </p>

                     <ul className="body-2">
                        {brainwaveServices.map((item, index) => (
                           <li key={index}>
                              <div className="border border-x-0 py-4 border-n-1/10 ">
                                 <img
                                    className="inline mr-3"
                                    src={check}
                                    alt="check"
                                 />
                                 <p className="inline">{item}</p>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <Generating
                     className={`absolute bottom-5 left-4 right-4 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 border`}
                  />
               </div>

               {/* this is two column grid */}
               <div className="relative grid lg:grid-cols-2 gap-4 mt-4">
                  {/* this is first card */}
                  <div className="relative border min-h-[42rem] rounded-2xl border-n-1/10 overflow-hidden">
                     {/* this is image container */}
                     <div className="absolute w-full h-full">
                        <img
                           className="w-full h-full object-cover border rounded-2xl border-n-1/10 "
                           width={400}
                           height={800}
                           src={service2}
                           alt="service-2"
                        />
                     </div>

                     {/* thi is text area */}
                     <div className="absolute p-8 inset-0 flex flex-col justify-end  bg-gradient-to-b from-n-8/10 to-n-8/90">
                        <h4 className="h4 mb-4">Photo Editing</h4>
                        <p className="body-2 mb-[3rem] text-n-3">
                           Automatically enhance your photos using our AI app's
                           photo editing feature. Try it now!
                        </p>
                     </div>
                  </div>
                  {/* this is second one */}
                  <div className="relative border h-[42rem] rounded-2xl border-n-1/10 bg-n-7 overflow-hidden lg:py-6">
                     <div className="px-8 py-8 ">
                        <h1 className="h4">Video generation</h1>
                        <p className="body-2 text-n-3">
                           The world's most powerful AI photo and video art
                           generation engine. What will you create?
                        </p>

                        <ul className="flex justify-between items-center mt-9 pointer-events-none ">
                           {brainwaveServicesIcons.map((item, idx) => (
                              <li
                                 key={idx}
                                 className={`rounded-2xl flex items-center justify-center  ${
                                    idx === 2
                                       ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                                       : " bg-n-6 flex w-10 h-10 md:w-15 md:h-15"
                                 }`}
                              >
                                 <div
                                    className={`${
                                       idx === 2
                                          ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                                          : ""
                                    }`}
                                 >
                                    <img
                                       src={item}
                                       width={24}
                                       height={24}
                                       alt="images"
                                    />
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </div>
                     {/* this is image container */}
                     <div className="absolute border rounded-2xl border-n-8 h-[22rem] bg-n-8 bottom-4 left-4 right-4">
                        <img
                           className="w-full h-full object-cover"
                           src={service3}
                           alt="service-3"
                        />
                        <VideoBar />
                        <VideoChatMessage />
                     </div>

                     {/* here will be the playbar and message */}
                  </div>
               </div>
            </div>
         </div>
      </Section>
   );
};

export default Services;
