import { Variants } from "framer-motion";

export const tabVariants: Variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delay: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      when: "afterChildren",
    },
  },
};

export const formVariants: Variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delay: 0.7,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      when: "afterChildren",
      duration: 2,
    },
  },
};

export const inputVariants = (customAnimation: number): Variants => {
  return {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: customAnimation && customAnimation * 0.15,
        ease: "easeInOut",
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };
};

export const navItemVariants = (customAnimation: number): Variants => {
  return {
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: customAnimation && customAnimation * 0.2,
        ease: "easeInOut",
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
    },
  };
};
