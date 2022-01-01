import Link from "next/link";

interface Props {
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  route: string;
}

const NavItem: React.FC<Props> = ({
  activeItem,
  setActiveItem,
  name,
  route,
}) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a className="hover:text-green-500">
        <span onClick={() => setActiveItem(name)}>{name}</span>
      </a>
    </Link>
  ) : null;
};

export default NavItem;
