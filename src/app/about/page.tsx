import Link from "next/link";

export default function About() {
  return (
    <div className="container min-h-[calc(100vh-80px)] mx-auto sm:py-12">
      <h1 className="my-16 text-4xl font-bold text-center">About</h1>

      <div className="flex flex-col gap-6 sm:mx-0 mx-6 mb-4 text-lg">

        <div>
          <p className="font-semibold">Magnus Grini</p>
          <p>Trondheim / Bekkestua, Norway | +47 949 77 151 | mgrini2003@gmail.com | magnusgrini.com</p>
        </div>

        <div>
          <h3 className="text-2xl my-2">Profile</h3>
          <p>
            Master’s student in Artificial Intelligence at the Norwegian University of Science and Technology
            (NTNU) with a B.Sc. in Computer Science and strong interests in deep learning, evolutionary computation,
            optimization, and computational finance. My academic background includes both theoretical and applied AI,
            with experience in machine learning, probabilistic reasoning, bio-inspired methods, and visual computing.
            My upcoming master’s thesis explores bio-inspired artificial intelligence for portfolio optimization in
            finance. Having lived 13 years in Canada, the United States, and the United Arab Emirates, I have developed
            strong cross-cultural communication skills and native fluency in English and Norwegian.
          </p>
        </div>

        <div>
          <h3 className="text-2xl my-2">Education</h3>
          <p>M.Sc. in Artificial Intelligence 2025–2027</p>
          <p>Norwegian University of Science and Technology (NTNU)</p>
          <p className="mt-2">B.Sc. in Computer Science 2022–2025</p>
          <p>Norwegian University of Science and Technology (NTNU)</p>
        </div>

        <div>
          <h3 className="text-2xl my-2">Selected Coursework</h3>
          <p>
            Introduction to Machine Learning, Artificial Intelligence Methods, Bio-Inspired Artificial Intelligence,
            Introduction to Artificial Intelligence, Visual Computing Fundamentals, Programming Languages
          </p>
        </div>

        <div>
          <h3 className="text-2xl my-2">Technical Skills</h3>
          <p><strong>Programming:</strong> Python, Rust, Java, JavaScript, C#, SQL</p>
          <p>
            <strong>Machine Learning / AI:</strong> Neural Networks, LSTMs, Transformers, Supervised Learning,
            Unsupervised Learning, Gradient-Based Optimization, Dimensionality Reduction, Model Training and Evaluation
          </p>
          <p>
            <strong>Probabilistic / Symbolic AI:</strong> Probabilistic Reasoning, Bayesian Networks, Rule-Based Reasoning,
            Case-Based Reasoning
          </p>
          <p>
            <strong>Evolutionary Computation / Optimization:</strong> Evolutionary Algorithms, Genetic Algorithms,
            Memetic Algorithms, Bio-Inspired Optimization, Constrained Optimization, Combinatorial Optimization
          </p>
          <p>
            <strong>Applied Areas:</strong> Financial Time-Series Analysis, Computational Finance, Computer Vision,
            Image Analysis, Augmented Reality Systems, Routing and Scheduling Problems
          </p>
          <p><strong>Tools:</strong> Unity, Git</p>
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