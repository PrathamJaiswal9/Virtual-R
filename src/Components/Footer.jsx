import {
    resourcesLinks,
    platformLinks,
    communityLinks,
  } from "../constants/index";
  import logo from "../assets/logo.png";
  
  const Footer = () => {
    return (
      <footer className="mt-20 border-t py-10 border-neutral-700 px-5">
        {/* Wrapper: Column on mobile, Row on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div
            className="flex items-center hover:scale-110 transition duration-150 cursor-pointer mb-6 md:mb-0"
          >
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-2xl tracking-tight">Virtual R.</span>
          </div>
  
          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
            <div>
              <h3 className="text-md font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {resourcesLinks.map((resource, index) => (
                  <li key={index}>
                    <a
                      className="text-neutral-400 hover:text-neutral-200 transition duration-200"
                      href={resource.href}
                    >
                      {resource.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div>
              <h3 className="text-md font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                {platformLinks.map((platform, index) => (
                  <li key={index}>
                    <a
                      className="text-neutral-400 hover:text-neutral-200 transition duration-200"
                      href={platform.href}
                    >
                      {platform.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div>
              <h3 className="text-md font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                {communityLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      className="text-neutral-400 hover:text-neutral-200 transition duration-200"
                      href={link.href}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  