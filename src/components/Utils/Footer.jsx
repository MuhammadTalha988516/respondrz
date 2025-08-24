import Logo from "../../assets/Logo.png"
import buttons from "../../assets/appbuttons.png"

const Footer = () => {
  return (
    <div className="w-full h-full bg-white py-8">
      {/* Main Grid with 2 columns */}
      <div className="grid grid-cols-3 gap-8 px-8 text-white">
        
        {/* Left Column (Logo + Buttons) */}
        <div className="grid grid-cols-1 gap-4">
          <img src={Logo} alt="Logo" className="w-32" />
          <img src={buttons} alt="app buttons" className="w-40" />
        </div>

        {/* Right Column (Text / Links) */}
        <div className="flex flex-col gap-2 justify-center">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <p className="text-sm mt-4">© 2025 Respondrz - All rights reserved</p>
        </div>
        <div className="flex items-center">
          <input 
          type="text" 
          placeholder="Enter your Email here "
          className="bg-white text-black w-[180px] h-auto "
          />
          <button className="ml-4 border-2 rounded-md bg-[#F34434] px-6 py-1/2">Subscribe</button>
      
       
        </div>

      </div>
    </div>
  )
}

export default Footer
