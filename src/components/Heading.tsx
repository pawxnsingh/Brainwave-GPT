// heading title subHeading
import brackets from "../assets/svg/Brackets";
const Heading = ({ className, tagline, heading, text }: any) => {
   return (
      <div
         className={`${className}  `}
      >
         {/* this is for the tagline */}
         {tagline && (
            <div className={`${className} text-sm flex items-center gap-3 font-code text-n-3`}>
               {brackets("left")}
               {tagline}
               {brackets("right")}
            </div>
         )}

         {/* this is for the title */}
         {/* {title && <h2 className="h2">{title}</h2>} */}

         {heading && <div className="lg:text-center h2 mt-3  md:text-center">{heading}</div>}

         {text && (
            <p className="text-sm font-thin text-n-4 mt-3 mb-12 lg:mb-20 md:text-center md:text-base ">
               {text}
            </p>
         )}
      </div>
   );
};

export default Heading;
