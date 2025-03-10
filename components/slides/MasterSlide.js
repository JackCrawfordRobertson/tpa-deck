"use client";

export default function MasterSlide({ title, subheading, children, darkMode, logo1, logo2 }) {
    return (
        <div
            className={`relative w-screen h-screen flex flex-col justify-center items-center p-8 ${
                darkMode ? "bg-black text-white" : "bg-black text-white"
            }`}
        >
            {/* Top-left title & subheading */}
            <div className="absolute top-6 left-8">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-lg opacity-80">{subheading}</p>
            </div>

            {/* Slide content */}
            <div className="w-full h-full flex justify-center items-center">{children}</div>

         {/* Logos at Bottom-Right */}
         <div className="absolute bottom-6 right-8 flex items-center space-x-4">
                <img
                    src={logo1 || "/logo/Payments_Association_Logo_white.svg"}
                    alt="Logo 1"
                    className="w-24 h-24 opacity-100"
                />
                <span className="text-6xl font-bold opacity-60">×</span>
                <img
                    src={logo2 || "/logo/PAY360_2025_Logo_white.svg"}
                    alt="Logo 2"
                    className="w-24 h-24 opacity-100"
                />
            </div>
        </div>
    );
}