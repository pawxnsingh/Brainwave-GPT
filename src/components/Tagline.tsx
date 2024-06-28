import brackets from "../assets/svg/Brackets"

const Tagline = ({ children }: any) => {
    return (
        <div className={`text-sm flex tagline items-center gap-2 font-grotesk uppercase text-n-3`}>
            {brackets("left")}
            {children}
            {brackets("right")}
        </div>
    )
}

export default Tagline;