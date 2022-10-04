import { FaNode, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiWebflow, SiMaterialui } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function TechSection() {
  return (
    <div className="mt-20">
      <h1 className="text-4xl text-blue-800 font-bold text-center my-8">
        Some of the technologies I use
      </h1>
      <div className="grid md:grid-cols-1 grid-cols-4">
        <FaReact
          size={180}
          color="cyan"
          className="w-full mt-20 animate-bounce"
        />
        <FaNode size={180} color="#3c873a" className="w-full mt-20" />
        <SiMongodb
          size={180}
          color="#3FA037"
          className="w-full mt-20 animate-bounce"
        />
        <TbBrandNextjs size={180} color="black" className="w-full mt-20" />
        <SiWebflow size={180} color="#4353ff" className="w-full mt-20 " />
        <FaHtml5
          size={180}
          color="orange"
          className="w-full mt-20 animate-bounce"
        />
        <FaCss3Alt size={180} color="blue" className="w-full mt-20 " />
        <SiMaterialui
          size={180}
          color="#00beff"
          className="w-full mt-20 animate-bounce"
        />
      </div>
    </div>
  );
}

export default TechSection;
