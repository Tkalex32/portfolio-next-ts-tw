import { FunctionComponent } from "react";
import { Category } from "../types";

interface NavbarProps {
  handleFilterCategory: (category: Category | "all") => void;
  active: string;
}

interface NavitemProps extends NavbarProps {
  value: Category | "all";
}

export const NavItem: React.FC<NavitemProps> = ({
  value,
  handleFilterCategory,
  active,
}) => {
  return (
    <li
      className={`cursor-pointer hover:text-green-500 capitalize ${
        active === value ? " text-green-500" : ""
      }`}
      onClick={() => handleFilterCategory(value)}
    >
      {value}
    </li>
  );
};

const ProjectsNavbar: React.FC<NavbarProps> = (props) => {
  return (
    <div className="flex space-x-3 px-3 list-none overflow-x-auto">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="django" {...props} />
      <NavItem value="node" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
