"use client";

import PortfolioElement from '@/components/PortfolioElement'
import TasksterImage from "@/assets/taskster/taskster.png";
import PathsImage from "@/assets/paths/paths.png";
import SparestiImage from "@/assets/sparesti/sparesti.png";
import WeightTrackerImage from "@/assets/weighttracker/weighttracker.png";
import MagnusGriniImage from "@/assets/magnusgrini.com/magnusgrini.png";
import TradingAIImage from "@/assets/tradingai/LSTMandPPO.webp";
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Projects() {
  const projects = [
    { title: 'TradingAI', imageSrc: TradingAIImage, projectUrl: '/projects/tradingai' },
    { title: 'Taskster', imageSrc: TasksterImage, projectUrl: '/projects/taskster' },
    { title: 'Sparesti', imageSrc: SparestiImage, projectUrl: '/projects/sparesti' },
    { title: 'Paths', imageSrc: PathsImage, projectUrl: '/projects/paths' },
    { title: 'Weight Tracker', imageSrc: WeightTrackerImage, projectUrl: '/projects/weighttracker' },
    { title: 'magnusgrini.com', imageSrc: MagnusGriniImage, projectUrl: '/projects/magnusgrini' },
  ]

  const [secretClicks, setSecretClicks] = useState(0)
  const router = useRouter()

  const secretClick = () => {
    if (secretClicks >= 5) {
      setSecretClicks(0)
      router.push('/netscape')
    } else {
      setSecretClicks(secretClicks + 1)
    }
  }

  return (
    <div className="container min-h-[calc(100vh-80px)] mx-auto sm:py-12">
      <h1 onClick={secretClick} className="my-16 text-4xl font-bold text-center">Projects</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:mx-0 mx-8 mb-4">
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

