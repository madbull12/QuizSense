import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { LoaderCircle } from 'lucide-react';

interface Props extends ButtonProps {
  isPending: boolean;
  text: string;
}
const StatefulButton = ({ isPending, text, ...props }: Props) => {
  return (
    <Button {...props} disabled={isPending}>
      <AnimatePresence mode="wait">
        {/* //------------------------------IDLE */}
        {!isPending && (
          <motion.span
            key={'idle'}
            exit={{
              opacity: 0,
              y: -15,
              transition: { duration: 0.3, type: 'spring' },
            }}
          >
            {text}
          </motion.span>
        )}
        {/* //------------------------------LOADING */}
        {isPending && (
          <motion.span
            key={'pending'}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 100, y: 0, transition: { delay: 0 } }}
            exit={{ opacity: 0, y: -15, transition: { duration: 0.3 } }}
          >
            <LoaderCircle className="animate-spin" />
          </motion.span>
        )}

        {/* //------------------------------RESOLVED */}
        {/* {['success', 'error'].includes(status) && (
          <motion.span
            key={status}
            initial={{ opacity: 0, y: 15, scale: 0 }}
            animate={{
              opacity: 100,
              y: 0,
              scale: 1,
              transition: { delay: 0.1, duration: 0.4 },
            }}
            exit={{ opacity: 0, y: -15, transition: { duration: 0.3 } }}
          >
            {status === 'success' && <FaCircleCheck size="20" />}
            {status === 'error' && <FaCircleXmark size="20" />}
          </motion.span>
        )} */}
      </AnimatePresence>
    </Button>
  );
};

export default StatefulButton;
