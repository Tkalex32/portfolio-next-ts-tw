import { Service } from "../types";

interface Props {
  service: Service;
}

const ServiceCard: React.FC<Props> = ({ service: { Icon, about, title } }) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="p-3 flex items-center space-x-4 dark:text-slate-400 dark:bg-gray-900">
      <Icon className="w-12 h-12 text-green-500" />
      <div>
        <h4 className="font-bold">{title}</h4>
        {/* <p>{about}</p> */}
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
