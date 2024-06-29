import Section from "./Section";
import Heading from "./Heading";
import { roadmap } from "../constants";
import Button from "./Button";
import Tagline from "./Tagline";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => {
   return (
      <Section className="overflow-hidden" id="#roadmap">
         <div className="container relative">
            <div className="mb-20">
               <Heading
                  className="md:justify-center"
                  tagline="READY TO GET STARTED"
                  heading="What we’re working on"
               />
            </div>

            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
               {roadmap.map((item) => {
                  const status =
                     item.status === "done" ? "Done" : "In progress";
                  // this is one card in the grid
                  return (
                     <div
                        className={`md:flex even:md:translate-y-[7rem] border rounded-[2.5rem] p-0.25 border-n-8   ${
                           item.colorful ? "bg-conic-gradient" : "bg-n-6"
                        }`}
                        key={item.id}
                     >
                        <div className="relative p-8 border rounded-[2.4375rem] bg-n-8 lg:p-15 overflow-hidden border-n-8">
                           <div className="absolute top-0 left-0 max-w-full">
                              <img
                                 src={grid}
                                 className="w-full"
                                 width={550}
                                 height={550}
                                 alt="fadedgrid"
                              />
                           </div>

                           {/* here it will contain all the item */}
                           <div className="relative z-1">
                              {/* this is will hav the tagline and done and process */}

                              <div className="flex items-center max-w-[27rem] justify-between mb-20">
                                 <Tagline>{item.date}</Tagline>
                                 {/* this is progress container */}
                                 <div className="flex bg-n-1 items-center justify-between rounded text-n-8 px-4 py-1">
                                    <img
                                       className="mr-2.5"
                                       src={
                                          item.status === "done"
                                             ? check2
                                             : loading1
                                       }
                                       alt={status}
                                       width={16}
                                       height={16}
                                    />
                                    <div className="tagline">{status}</div>
                                 </div>
                              </div>

                              {/* THIS IS IMAGE CONTAINER */}
                              <div className="z-4 -mx-15 -my-10 pointer-events-none">
                                 <img
                                    width={628}
                                    height={426}
                                    className="w-full"
                                    src={item.imageUrl}
                                    alt={item.title}
                                 />
                              </div>

                              <h4 className="h4 mb-4 mt-10">{item.title}</h4>
                              <p className="body-2 text-n-4">{item.text}</p>
                           </div>
                        </div>
                     </div>
                  );
               })}

               <Gradient />
            </div>

            <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
               <Button href="/roadmap">Our roadmap</Button>
            </div>
         </div>
      </Section>
   );
};

export default Roadmap;
