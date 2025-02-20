import assets from "../../assets/assets";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center py-4  bg-white border-t border-gray-200 px-[110px]">
      {/* Left Section: Logo & Text */}
      <div className="flex items-center space-x-4">
        <img src={assets.logo} alt="Edemy Logo" className="w-30 " />
        
        <div className="h-6 border-l border-gray-400"></div>
        <p className="text-gray-500 text-sm">
          All rights reserved. Copyright ©Edemy
        </p>
      </div>

      {/* Right Section: Social Icons */}
      <div className="flex space-x-3">
        <img
          src={assets.facebook_icon}
          alt="Facebook"
          className="w-8 h-8 p-1 border rounded-full hover:scale-110 transition-transform"
        />
        <img
          src={assets.twitter_icon}
          alt="Twitter"
          className="w-8 h-8 p-1 border rounded-full hover:scale-110 transition-transform"
        />
        <img
          src={assets.instagram_icon}
          alt="Instagram"
          className="w-8 h-8 p-1 border rounded-full hover:scale-110 transition-transform"
        />
      </div>
    </footer>
  );
}
