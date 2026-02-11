import DefaultImage from "../../public/default.jpg";
import HoverImage from "../../public/hover.jpg";
import "../App.css";
import { File, FileText, Mail, MapPin } from "lucide-react";
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
        <div className="mx-4 flex-1">
          <div className="flex justify-between">
            <p className="text-2xl font-bold">Charles Amiel Marquez</p>
            <ModeToggle />
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={15} />
            <p className="text-sm">Pampanga, Philippines</p>
          </div>
          <div className="py-2 text-start space-y-2">
              <p className="text-sm">Fullstack React Developer / Mobile</p>
            <div className="flex gap-2">
              <Button variant={"default"} className="text-sm">
                <FileText /> Resume
              </Button>
              <Button variant={"outline"} className="text-sm">
                <Mail /> Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
