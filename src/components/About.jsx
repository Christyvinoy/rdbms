import React from "react";
function About() {
    return (
        <div
            className="h-screen bg-gray-900 py-20  flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-around lg:items-center w-screen  "
        >

            <div className=" flex flex-col items-center justify-center itim-regular text-center text-red-400 z-10 lg:w-1/2 ">
                <h1 className="text-2xl tracking-widest mt-3 text-white  lg:m-2">
                    ABOUT
                </h1>
                <p className="text-gray-300 p-3  lg:text-left">
                    <div>Welcome to Wealth Nest,</div>

                    At Wealth Nest, we’re passionate about helping our clients achieve their financial goals. With our seasoned team of investment advisors and analysts brings unparalleled expertise to the table.

                    Our investment philosophy revolves around long-term growth, risk management, and personalized strategies. We believe in transparency, compliance, and putting our clients’ interests first. Whether you’re planning for retirement, building wealth, or preserving assets, we’re here to guide you every step of the way.

                    Explore our track record, meet our team, and discover how Wealth Nest can be your trusted partner on your financial journey. Contact us today to start planning for a brighter financial future!

                    Feel free to customize this paragraph with specific details about your firm. Best wishes for your website launch!
                </p>
            </div>
        </div>
        
    );
}

export default About;