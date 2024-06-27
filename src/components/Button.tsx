import ButtonSvg from "../assets/svg/ButtonSvg";
// inline-flex <- need to filled in the space
const Button = ({ className, href, children, onClick, px, white }: any) => {
   const classes = `button relative flex item-center justify-center h-11 transition-colors hover:text-color-1 ${
      px || "px-7"
   } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

   const spanClasses = `relative z-10 pt-[13px]`;

   const renderButton = () => (
      <button className={classes} onClick={onClick}>
         <span className={spanClasses}>{children}</span>
         {ButtonSvg(white)}
      </button>
   );

   const renderLink = () => (
      <a href={href} className={classes} onClick={onClick}>
         <span className={spanClasses}>{children}</span>
         {ButtonSvg(white)}
      </a>
   );

   return href ? renderLink() : renderButton();
};

export default Button;
