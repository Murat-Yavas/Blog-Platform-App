import { FaBoxesStacked } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";
import { MdEmojiNature } from "react-icons/md";
import { SiPcgamingwiki } from "react-icons/si";
import { IoMdPlanet } from "react-icons/io";
import { BiTrip } from "react-icons/bi";
import { FaGear } from "react-icons/fa6";

export const SidebarData: { topic: string; icon: any }[] = [
  {
    topic: "all",
    icon: <FaBoxesStacked className="bg-white mr-2 text-xl" />,
  },
  {
    topic: "science",
    icon: <FaRobot className="bg-white mr-2 text-xl" />,
  },
  {
    topic: "nature",
    icon: <MdEmojiNature className="bg-white mr-2 text-xl" />,
  },
  {
    topic: "gaming",
    icon: <SiPcgamingwiki className="bg-white mr-2 text-xl" />,
  },
  {
    topic: "techonology",
    icon: <IoMdPlanet className="bg-white mr-2 text-xl" />,
  },
  {
    topic: "trip",
    icon: <BiTrip className="bg-white mr-2 text-xl" />,
  },
  {
    topic: "engineering",
    icon: <FaGear className="bg-white mr-2 text-xl" />,
  },
];
