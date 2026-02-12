import DefaultImage from "@/assets/default.jpg";
import HoverImage from "@/assets/hover.jpg";
import "../App.css";
import { FileText, Mail, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { ModeToggle } from "../components/mode-toggle";
const Header = () => {
  return (
    <div className="flex">
      <div className="flex w-full">
        <img
          src={DefaultImage}
          className="w-36 h-36 zoom-in-80 object-cover object-[25%_25%]"
          onMouseOut={(e) => (e.currentTarget.src = DefaultImage)}
          onMouseOver={(e) => (e.currentTarget.src = HoverImage)}
        />
        <div className="mx-2 sm:mx-4 flex-1">
          <div className="flex justify-between">
            <p className="text-lg sm:text-2xl text-start font-bold">Charles Amiel Marquez</p>
            {/* <ModeToggle /> */}
          </div>
          <div className="flex text-start items-center gap-2">
            <MapPin size={15} />
            <p className="text-xs sm:text-sm truncate">Pampanga, Philippines</p>
          </div>
          <div className="py-2 text-start space-y-2">
              <p className="text-xs sm:text-sm">Fullstack Developer</p>
            <div className="flex gap-2">
              <Button variant={"default"} size={"sm"} className="text-xs sm:text-sm">
                <FileText /> <span className="hidden sm:inline">Resume</span>
              </Button>
              <Button variant={"outline"} size={"sm"} className="text-xs sm:text-sm">
                <Mail /> <span className="hidden sm:inline">Email</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
