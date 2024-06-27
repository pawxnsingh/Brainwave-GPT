import { check, smallSphere, stars } from "../assets";
import Section from "./Section";
import brackets from "../assets/svg/Brackets";
import { pricing } from "../constants";
import Button from "./Button";
// import {}src\assets\4-small.png

const Pricing = () => {
   return (
      <Section id="#pricing">
         <div className="container relative">
            {/* this is the image and heading text container */}
            <div className="relative mt-4 mb-20 w-auto hidden lg:flex justify-center">
               <img
                  src={smallSphere}
                  className="relative z-2"
                  width={260}
                  height={260}
                  alt="smallSphere"
               />
               <div className="absolute -top-20">
                  <img src={stars} alt="spiral cicle" />
               </div>
            </div>
            {/* this is heading and title and tagline */}
            <h4 className="h4 body-2 uppercase flex items-center text-n-3 lg:justify-center ">
               {brackets("left")}
               <span className="mx-3">GET STARTED WITH BRAINWAVE </span>
               {brackets("right")}
            </h4>
            <h1 className="h2 mt-3 lg:text-center">Pay once, use forever</h1>

            {/* this is the pricing section */}
            <div className="flex gap-[1rem] mt-16 max-lg:flex-wrap">
               {pricing.map((item) => (
                  <div
                     key={item.id}
                     className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                  >
                     <h4 className={`h4 ${item.id == "1" ? "mb-2 " : " mb-4"}`}>
                        {item.title}
                     </h4>

                     <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
                        {item.description}
                     </p>

                     <div className="flex items-center h-[5.5rem] mb-6">
                        {item.price && (
                           <>
                              <div className="h3">$</div>
                              <div className="text-[5.5rem] leading-none font-bold">
                                 {item.price}
                              </div>
                           </>
                        )}
                     </div>

                     <Button
                        className="w-full mb-6"
                        href={
                           item.price
                              ? "/pricing"
                              : "mailto:contact@jsmastery.pro"
                        }
                        white={!!item.price}
                     >
                        {item.price ? "Get started" : "Contact us"}
                     </Button>

                     <ul>
                        {item.features.map((feature, index) => (
                           <li
                              key={index}
                              className="flex items-start py-5 border-t border-n-6"
                           >
                              <img
                                 src={check}
                                 width={24}
                                 height={24}
                                 alt="Check"
                              />
                              <p className="body-2 ml-4">{feature}</p>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>
      </Section>
   );
};

export default Pricing;
