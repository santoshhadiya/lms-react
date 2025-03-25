import assets from "../../assets/assets";

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center py-4 bg-white border-t border-gray-200 px-4 sm:px-8 lg:px-20">
      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
        <img src={assets.logo} alt="Edemy Logo" className="w-24" />
        <div className="h-6 border-l border-gray-400"></div>
        <p className="text-gray-500 text-sm text-center sm:text-left">
          All rights reserved. Copyright ©Edemy
        </p>
      </div>

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
