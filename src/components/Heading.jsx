const Heading = ({ className, subHeading, children }) => {
    return (
        <div className={`text-center flex flex-col items-center justify-center gap-6 py-10 px-4 ${className}`}>
            <h1 className={`md:text-4xl text-3xl md:leading-12 font-extrabold text-text font-hero`}>
                {children}
            </h1>
            {subHeading && <p>{subHeading}</p>}
        </div>
    )
}

export default Heading