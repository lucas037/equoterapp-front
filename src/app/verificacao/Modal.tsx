import React from 'react';
import { motion } from 'framer-motion';

type ModalProps = {
  handleClose: () => void;
  text: string;
};

const Modal: React.FC<ModalProps> = ({ handleClose, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md w-full"
      >
        <p className="text-lg font-semibold mb-4">Documento aprovado</p>
        <p className="text-sm text-gray-600 mb-6">
          {text}
        </p>
        <button
          onClick={handleClose}
          className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Fechar
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
