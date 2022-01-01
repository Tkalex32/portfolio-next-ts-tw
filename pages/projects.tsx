import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category, IProject } from "../types";

const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>(projectsData);
  const [active, setActive] = useState<string>("all");

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newData = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newData);
    setActive(category);
  };

  return (
    <div className="px-5 py-2 dark:text-slate-400">
      <ProjectsNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
      <div className="overflow-y-auto" style={{ height: "75vh" }}>
        <div className="grid grid-cols-12 gap-4 my-3 relative">
          {projects.map((project) => (
            <div
              key={project.name}
              className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 "
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
