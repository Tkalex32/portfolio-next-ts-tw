import { languages, tools } from "../data";
import Bar from "../components/Bar";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      <div className="grid md:grid-cols-2 gap-6 dark:text-slate-400">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              George Hill University, Bellmont, TX
            </h5>
            <p className="font-semibold">
              Bechelor of Science in Computer Science
            </p>
            <p className="my-3">May, 2011</p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              TTSS Technology Corp, New York, NY
            </h5>
            <p className="font-semibold">Front End Developer</p>
            <p className="my-3">September 2016 - Present</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="my-3 text-2xl font-bold dark:text-slate-400">
            Languages & Framework
          </h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold dark:text-slate-400">
            Tools & Softwares
          </h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
