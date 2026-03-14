import Link from "next/link";

import img1 from "@/assets/vehicleroutingproblem/multi_start_ils_metrics.webp";
import img2 from "@/assets/vehicleroutingproblem/nurse_route_network.webp";
import img3 from "@/assets/vehicleroutingproblem/refinement_best_candidate_by_run.webp";
import Image from "next/image";

export default function VehicleRoutingProblem() {
  return (
    <div className="container min-h-[calc(100vh-80px)] mx-auto sm:py-12">
      <h1 className="my-16 text-4xl font-bold text-center">Vehicle Routing Problem</h1>
      <div className="mx-6 sm:mx-0">
        <h3 className="text-lg">
          For this project, I implemented a bio AI inspired solution to a vehicle routing problem, programmed in Rust. More specifically, the task was to find nurse routes for patient care that minimized total travel time, while still taking various constraints into account, such as time windows, nurse capacity, and patient demand. The solution I implemented was a memetic algorithm, which is a type of genetic algorithm that incorporates local search.
        </h3>
        <h3 className="text-lg mt-8">
          The algorithm performed very well on the provided dataset, beating the benchmark on multiple of the test instances. The algorithm is also quite fast, averaging about 2 minutes per run.
        </h3>
        <h3 className="text-lg mt-8">
          This project was created as part of the course &quot;Bio-inspired AI&quot; at the Norwegian University of Science and Technology (NTNU) in winter 2026, where it received full marks.
        </h3>
        <h3 className="text-lg mt-8">
            If you want to learn more about the algorithm, you can find the report for the project {" "}
            <Link
            href="/vehicleroutingproblem/IT3708_Project_2.pdf"
            target="_blank"
            className="text-blue-500"
          >
            here
          </Link>
          . Also, if you want to see the code, you can find the Git repository {" "}
          <Link
            href="https://github.com/MagnusG03/vehicleRoutingProblem"
            target="_blank"
            className="text-blue-500"
          >
            here
          </Link>
          .
        </h3>
        <h3 className="text-lg mt-8">
            Below is a visualization of the route network for one of the runs, as well as the convergence plot for the genetic algorithm and local search.
        </h3>
                <div className="flex justify-center items-center mt-8">
          <Image
          src={img2}
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
          src={img3}
          alt="calibration start"
          width={1000}
          height={800}
          className=""
          />
        </div>
    </div>
  );
}
