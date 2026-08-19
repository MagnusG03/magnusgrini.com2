import Link from "next/link";

export default function About() {
  return (
    <div className="container min-h-[calc(100vh-80px)] mx-auto sm:py-12">
      <h1 className="my-16 text-4xl font-bold text-center">About</h1>

      <div className="flex flex-col gap-6 sm:mx-0 mx-6 mb-4 text-lg">

        <div>
          <h3 className="text-2xl my-2">Profile</h3>
          <p>
            Master’s student in Artificial Intelligence at the Norwegian University of Science and Technology
            (NTNU), currently on exchange at UC Berkeley, with a B.Sc. in Computer Science. My work centers on
            machine learning, bio-inspired optimization, and decision-making under uncertainty, with a particular
            interest in finance. I spent the summer of 2026 as the sole machine learning developer on a data-quality
            product at Aize, and I built an{" "}
            <Link
              href="/projects/tradingalgorithm"
              className="text-blue-500 underline hover:text-blue-600"
            >
              equity selection system
            </Link>{" "}
            that has been trading live since June 2026. My master’s thesis explores bio-inspired artificial
            intelligence for portfolio optimization under uncertainty. Having lived 13 years in Canada, the United
            States, and the United Arab Emirates, I have developed strong cross-cultural communication skills and
            native fluency in English and Norwegian.
          </p>
        </div>

        <div>
          <h3 className="text-2xl my-2">Education</h3>
          <p>M.Sc. in Artificial Intelligence 2025–2027</p>
          <p>Norwegian University of Science and Technology (NTNU)</p>
          <p>Exchange semester at the University of California, Berkeley, fall 2026</p>
          <p>Prospective thesis: bio-inspired artificial intelligence for portfolio optimization under uncertainty</p>
          <p className="mt-2">B.Sc. in Computer Science 2022–2025</p>
          <p>Norwegian University of Science and Technology (NTNU)</p>
          <p>Thesis: real-time motion capture and calibration for adaptive Parkinson’s disease gameplay</p>
        </div>

        <div>
          <h3 className="text-2xl my-2">Experience</h3>
          <p>Software Engineer Summer Intern, June 2026 – August 2026</p>
          <p>Aize, Oslo</p>
          <p className="mt-2">
            Sole machine learning developer on a data-quality application built over large-scale oil and gas asset
            data. I built a semi-supervised datatype classifier using teacher-student self-training, and an
            unsupervised model that infers which attributes an asset should have from its metadata. Both were
            integrated into existing Databricks pipelines. The datasets contained very few usable labels, which
            shaped the architectural choices throughout.
          </p>
        </div>

        <div>
          <h3 className="text-2xl my-2">Selected Coursework</h3>
          <p>
            <strong>Master’s:</strong> Introduction to Machine Learning, Bio-Inspired Artificial Intelligence,
            Artificial Intelligence Methods, Introduction to Artificial Intelligence
          </p>
          <p className="mt-2">
            <strong>Bachelor’s:</strong> Statistics, Mathematical Methods 1–3, Applied Machine Learning,
            Algorithms and Data Structures
          </p>
        </div>

        <div>
          <h3 className="text-2xl my-2">Technical Skills</h3>
          <p><strong>Programming:</strong> Python, Rust, Java, C#, SQL</p>
          <p>
            <strong>Machine Learning:</strong> supervised regression and classification, semi-supervised learning,
            teacher-student self-training, clustering and mixture models, neural networks, feature engineering,
            walk-forward and cross-validation
          </p>
          <p>
            <strong>Mathematics and Optimization:</strong> probability and statistical inference, linear algebra,
            numerical methods, constrained, combinatorial, and multi-objective optimization, evolutionary, memetic,
            and swarm algorithms
          </p>
          <p>
            <strong>Infrastructure:</strong> Git, Linux, AWS, Databricks, Alpaca API, self-hosted deployment
          </p>
        </div>

        <div>
          <h3 className="text-2xl my-2">Languages</h3>
          <p>Norwegian Native</p>
          <p>English Native</p>
          <p>Spanish A2</p>
          <p>German A2</p>
        </div>

        <div>
          <h3 className="text-2xl my-2">Full CV</h3>
          <p>
            You can view the full CV{" "}
            <Link
              href="/cv/CV_Magnus_Grini.pdf"
              target="_blank"
              className="text-blue-500 underline hover:text-blue-600"
            >
              here
            </Link>.
          </p>
        </div>

      </div>
    </div>
  )
}
