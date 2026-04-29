import Link from "next/link";

import img1 from "@/assets/pseudobooleanoptimization/training_triangle_bpso_current_occupancy.webp";
import img2 from "@/assets/pseudobooleanoptimization/training_triangle_bpso_remembered_occupancy.webp";
import img3 from "@/assets/pseudobooleanoptimization/training_triangle_ga_current_occupancy.webp";
import img4 from "@/assets/pseudobooleanoptimization/training_triangle_landscape.webp";
import img5 from "@/assets/pseudobooleanoptimization/training_triangle_nsga2_current_occupancy.webp";
import Image from "next/image";

export default function PseudoBooleanOptimization() {
  return (
    <div className="container min-h-[calc(100vh-80px)] mx-auto sm:py-12">
      <h1 className="my-16 text-4xl font-bold text-center">Pseudo-Boolean Optimization</h1>
      <div className="mx-6 sm:mx-0">
        <h3 className="text-lg">
          In this project, the task was to visualize the search space of various pseudo-boolean optimization problems, and to describe the algorithm behavior of various bio-inspired algorithms on these search spaces. The three implemented algorithms (an evolutionary algorithm, a multi objective evolutionary algorithm, and a swarm intelligence algorithm) were compared on the various landscapes, and tested against a set of more difficult landscapes.
        </h3>
        <h3 className="text-lg mt-8">
          If you would like to learn about the implemented algorithms, and their behavior on the various landscapes, you can find the report for the project {" "}
          <Link
            href="/pseudobooleanoptimization/IT3708_Project_3.pdf"
            target="_blank"
            className="text-blue-500"
          >
            here
          </Link>
          .
        </h3>
        <h3 className="text-lg mt-8">
          This project was created as part of the course &quot;Bio-inspired AI&quot; at the Norwegian University of Science and Technology (NTNU) in spring 2026, where it received full marks.
        </h3>
        <h3 className="text-lg mt-8">
            Below are various visualizations of algorithm behavior, further described in the <Link
            href="/pseudobooleanoptimization/IT3708_Project_3.pdf"
            target="_blank"
            className="text-blue-500"
          >
            report
          </Link>.
        </h3>
                <div className="flex justify-center items-center mt-8">
          <Image
          src={img4}
          alt="calibration game"
          width={1000}
          height={800}
          className=""
          />
      </div>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img1}
          alt="apple game"
          width={1000}
          height={800}
          className=""
          />
        </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img2}
          alt="calibration start"
          width={1000}
          height={800}
          className=""
          />
        </div>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img3}
          alt="calibration start"
          width={1000}
          height={800}
          className=""
          />
        </div>
        <div className="flex justify-center items-center mt-8">
          <Image
          src={img5}
          alt="calibration start"
          width={1000}
          height={800}
          className=""
          />
        </div>
    </div>
  );
}
