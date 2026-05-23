// import React from 'react';
// import { motion } from 'framer-motion';

// export default function Button({ children, variant = 'primary', size = 'md', className = '', onClick, href, ...props }) {
//   const baseStyles = 'font-medium rounded-lg transition-all duration-300 text-center';

//   const variants = {
//     primary: 'bg-warm-brown text-off-white hover:bg-deep-brown hover:shadow-lg',
//     secondary: 'border-2 border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-off-white',
//     ghost: 'text-warm-brown hover:bg-beige',
//   };

//   const sizes = {
//     sm: 'px-4 py-2 text-sm',
//     md: 'px-6 py-3 text-base',
//     lg: 'px-8 py-4 text-lg',
//   };

//   const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

//   if (href) {
//     return (
//       <motion.a
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         className={buttonClasses}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         {...props}
//       >
//         {children}
//       </motion.a>
//     );
//   }

//   return (
//     <motion.button
//       onClick={onClick}
//       className={buttonClasses}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       {...props}
//     >
//       {children}
//     </motion.button>
//   );
// }





import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', size = 'md', className = '', onClick, href, ...props }) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 text-center';

  const variants = {
    primary: 'backdrop-blur-md bg-white/10 border border-white/20 text-off-white hover:bg-white/20 hover:border-white/30 hover:shadow-lg',
    secondary: 'backdrop-blur-md bg-white/10 border border-white/20 text-off-white hover:bg-white/20 hover:border-white/30 hover:shadow-lg',
    ghost: 'text-warm-brown hover:bg-beige',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}