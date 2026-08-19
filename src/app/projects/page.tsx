import PortfolioElement from "@/components/PortfolioElement";
import ProjectsHeading from "@/components/ProjectsHeading";
import TasksterImage from "@/assets/taskster/taskster.webp";
import PathsImage from "@/assets/paths/paths.webp";
import SparestiImage from "@/assets/sparesti/sparesti.webp";
import WeightTrackerImage from "@/assets/weighttracker/weighttracker.webp";
import MagnusGriniImage from "@/assets/magnusgrini.com/magnusgrini.webp";
import TradingAIImage from "@/assets/tradingai/thumbnail.webp";
import TrainingGameImage from "@/assets/traininggame/applegame.webp";
import DinosaurGameImage from "@/assets/dinosaurgame/dinosaurgame.webp";
import VehicleRoutingProblem from "@/assets/vehicleroutingproblem/thumbnail.webp";
import PseudoBooleanOptimization from "@/assets/pseudobooleanoptimization/thumbnail.webp";
import TradingAlgorithmImage from "@/assets/tradingalgorithm/thumbnail.webp";

const projects = [
  {
    title: "ML Equity Selection System",
    imageSrc: TradingAlgorithmImage,
    projectUrl: "/projects/tradingalgorithm",
  },
  {
    title: "Pseudo-Boolean Optimization",
    imageSrc: PseudoBooleanOptimization,
    projectUrl: "/projects/pseudobooleanoptimization",
  },
  {
    title: "Vehicle Routing Problem",
    imageSrc: VehicleRoutingProblem,
    projectUrl: "/projects/vehicleroutingproblem",
  },
  {
    title: "Dinosaur Game",
    imageSrc: DinosaurGameImage,
    projectUrl: "/projects/dinosaurgame",
  },
  {
    title: "TrainingGame",
    imageSrc: TrainingGameImage,
    projectUrl: "/projects/traininggame",
  },
  {
    title: "TradingAI (DEPRECATED)",
    imageSrc: TradingAIImage,
    projectUrl: "/projects/tradingai",
  },
  {
    title: "Taskster",
    imageSrc: TasksterImage,
    projectUrl: "/projects/taskster",
  },
  {
    title: "Sparesti",
    imageSrc: SparestiImage,
    projectUrl: "/projects/sparesti",
  },
  {
    title: "Paths",
    imageSrc: PathsImage,
    projectUrl: "/projects/paths",
  },
  {
    title: "Weight Tracker",
    imageSrc: WeightTrackerImage,
    projectUrl: "/projects/weighttracker",
  },
  {
    title: "magnusgrini.com",
    imageSrc: MagnusGriniImage,
    projectUrl: "/projects/magnusgrini",
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto min-h-[calc(100vh-80px)] sm:py-12">
      <ProjectsHeading />
      <div className="mx-8 mb-4 grid grid-cols-1 gap-6 sm:mx-0 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <PortfolioElement
            key={project.projectUrl}
            title={project.title}
            imageSrc={project.imageSrc}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  );
}
