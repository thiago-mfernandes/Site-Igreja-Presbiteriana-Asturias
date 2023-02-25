import { PageHeader } from "../../components/PageHeader";
import { UpComingEvents } from "../../components/UpComingEvents";
import { motion } from "framer-motion"

export function Schedule() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <PageHeader />
      <UpComingEvents />
    </motion.div>
  );
}