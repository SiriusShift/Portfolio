import DefaultImage from "@/assets/default.jpg";
import HoverImage from "@/assets/hover.jpg";
import "../App.css";
import { FileText, Mail, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { ModeToggle } from "../components/mode-toggle";
import useScreenWidth from "@/hooks/useScreenWidth";
import { useState } from "react";
const Resume = "/Marquez_Fullstack Developer.pdf"

const Header = () => {
  const width = useScreenWidth();
  const [isImageHovered, setIsImageHovered] = useState(false);

  const handleEmailClick = () => {
    window.location.href = "mailto:lagmanmarquez@gmail.com";
  };

  return (
    <header className="flex">
      <div className="flex w-full gap-2 sm:gap-4">
        <img
          src={isImageHovered ? HoverImage : DefaultImage}
          alt="Charles Amiel Marquez - Profile Photo"
          className="w-36 h-36 rounded-lg object-cover object-[25%_25%] transition-transform hover:scale-105"
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        />
        
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between text-start items-start">
            <h1 className="text-lg sm:text-2xl font-bold">
              Charles Amiel Marquez
            </h1>
            <ModeToggle className="hidden sm:inline-flex" />
          </div>

          <div className="flex items-center text-start gap-2 mt-1">
            <MapPin size={15} className="shrink-0" aria-hidden="true" />
            <p className="text-xs sm:text-sm text-muted-foreground">
              Pampanga, Philippines
            </p>
          </div>

          <div className="mt-2 sm:mt-3 space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm font-medium text-start text-muted-foreground">
              Fullstack Developer
            </p>
            
            <div className="flex gap-2">
              <a href={Resume} download="Marquez_Fullstack Developer" target="_blank">   <Button
                variant="default"
                size={width > 639 ? "sm" : "icon"}
                aria-label="View Resume"
              >
                <FileText className="sm:mr-2" size={16} />
                <span className="hidden sm:inline">Resume</span>
              </Button></a>
           
              
              <Button
                variant="outline"
                size={width > 639 ? "sm" : "icon"}
                onClick={handleEmailClick}
                aria-label="Send Email"
              >
                <Mail className="sm:mr-2" size={16} />
                <span className="hidden sm:inline">Email</span>
              </Button>
              
              <ModeToggle className="flex sm:hidden" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;