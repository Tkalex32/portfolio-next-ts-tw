//import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { motion } from "framer-motion";
import { fadeInUp, routeFade, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const index: React.FC = () => {
  //console.log("Client", services);
  return (
    <motion.div
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col px-6 pt-1 "
    >
      <h5 className="my-3 font-medium dark:text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        veritatis quos consequatur quaerat, dolore provident, voluptatibus dicta
        tenetur molestias ipsum error voluptas exercitationem commodi sapiente.
      </h5>
      <div className="p-4 mt-5 -mx-6 bg-gray-200 dark:bg-gray-800 rounded-b-2xl">
        <h4 className="my-3 text-xl font-bold tracking-wide dark:text-slate-400">
          What I Offer
        </h4>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              key={service.title}
              className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-lg"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

/* export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  //calc
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  //console.log("Server:", data);

  return {
    props: {
      services: data.services,
    },
  };
}; */

/* export const getStaticProps = async (context: GetStaticPropsContext) => {
  //calc
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  //console.log("Server:", data);

  return {
    props: {
      services: data.services,
    },
  };
}; */
