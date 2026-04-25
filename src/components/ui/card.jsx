import { motion } from 'framer-motion';

export function Card({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-lg shadow-md p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }) {
  return (
    <h2 className={`text-xl font-bold text-gray-800 ${className}`}>
      {children}
    </h2>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`text-gray-600 ${className}`}>
      {children}
    </div>
  );
}
