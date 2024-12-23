import PortfolioElement from '@/components/PortfolioElement'
import TasksterImage from "@/assets/taskster/taskster.png";
import PathsImage from "@/assets/paths/paths.png";
import SparestiImage from "@/assets/sparesti/sparesti.png";
import WeightTrackerImage from "@/assets/weighttracker/weighttracker.png";
import MagnusGriniImage from "@/assets/magnusgrini.com/magnusgrini.png";

export default function Projects() {
  const projects = [
    { title: 'Taskster', imageSrc: TasksterImage, projectUrl: '/projects/taskster' },
    { title: 'Sparesti', imageSrc: SparestiImage, projectUrl: '/projects/sparesti' },
    { title: 'Paths', imageSrc: PathsImage, projectUrl: '/projects/paths' },
    { title: 'Weight Tracker', imageSrc: WeightTrackerImage, projectUrl: '/projects/weighttracker' },
    { title: 'magnusgrini.com', imageSrc: MagnusGriniImage, projectUrl: '/projects/magnusgrini' },
  ]

  return (
    <div className="container min-h-screen mx-auto py-12">
      <h1 className="mb-8 text-4xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <PortfolioElement
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  )
}

