// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { CheckCircle, AlertCircle, Send } from 'lucide-react';
// import { validateEmail, getWhatsAppLink } from '../utils/helpers';

// export default function EnquiryForm() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     phone: '',
//     email: '',
//     guests: '',
//     dates: '',
//     message: '',
//   });

//   const [status, setStatus] = useState('idle'); // idle, loading, success, error
//   const [errorMsg, setErrorMsg] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMsg('');

//     // Validation
//     if (!formData.fullName.trim()) {
//       setErrorMsg('Please enter your name');
//       return;
//     }
//     if (!formData.phone.trim()) {
//       setErrorMsg('Please enter your phone number');
//       return;
//     }
//     if (!validateEmail(formData.email)) {
//       setErrorMsg('Please enter a valid email address');
//       return;
//     }
//     if (!formData.guests) {
//       setErrorMsg('Please select number of guests');
//       return;
//     }
//     if (!formData.dates.trim()) {
//       setErrorMsg('Please enter your travel dates');
//       return;
//     }

//     setStatus('loading');

//     // Simulate form submission
//     setTimeout(() => {
//       setStatus('success');
//       // Optionally send to WhatsApp
//       const message = `Hello! I'd like to enquire about Aryan Valley Camp.\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nGuests: ${formData.guests}\nDates: ${formData.dates}\n\nMessage: ${formData.message}`;
//       // window.open(getWhatsAppLink(message));

//       // Reset form
//       setTimeout(() => {
//         setFormData({
//           fullName: '',
//           phone: '',
//           email: '',
//           guests: '',
//           dates: '',
//           message: '',
//         });
//         setStatus('idle');
//       }, 3000);
//     }, 1500);
//   };

//   return (
//     <div className="w-full max-w-md mx-auto">
//       <motion.form
//         onSubmit={handleSubmit}
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="bg-off-white rounded-lg shadow-lg p-8"
//       >
//         <h3 className="text-2xl font-bold text-warm-brown mb-6 font-serif">Send Enquiry</h3>

//         {/* Name */}
//         <div className="mb-5">
//           <label className="block text-sm font-medium text-warm-brown mb-2">Full Name *</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             placeholder="Your name"
//             className="w-full px-4 py-3 rounded-lg border border-light-taupe focus:border-warm-brown focus:outline-none transition-colors"
//             disabled={status === 'loading'}
//           />
//         </div>

//         {/* Phone */}
//         <div className="mb-5">
//           <label className="block text-sm font-medium text-warm-brown mb-2">Phone Number *</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="+91 98765 43210"
//             className="w-full px-4 py-3 rounded-lg border border-light-taupe focus:border-warm-brown focus:outline-none transition-colors"
//             disabled={status === 'loading'}
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-5">
//           <label className="block text-sm font-medium text-warm-brown mb-2">Email Address *</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="your@email.com"
//             className="w-full px-4 py-3 rounded-lg border border-light-taupe focus:border-warm-brown focus:outline-none transition-colors"
//             disabled={status === 'loading'}
//           />
//         </div>

//         {/* Guests */}
//         <div className="mb-5">
//           <label className="block text-sm font-medium text-warm-brown mb-2">Number of Guests *</label>
//           <select
//             name="guests"
//             value={formData.guests}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg border border-light-taupe focus:border-warm-brown focus:outline-none transition-colors"
//             disabled={status === 'loading'}
//           >
//             <option value="">Select...</option>
//             <option value="1">1 Guest</option>
//             <option value="2">2 Guests</option>
//             <option value="3-4">3-4 Guests</option>
//             <option value="5-6">5-6 Guests</option>
//             <option value="6+">6+ Guests</option>
//           </select>
//         </div>

//         {/* Dates */}
//         <div className="mb-5">
//           <label className="block text-sm font-medium text-warm-brown mb-2">Travel Dates *</label>
//           <input
//             type="text"
//             name="dates"
//             value={formData.dates}
//             onChange={handleChange}
//             placeholder="e.g., May 15-22, 2026"
//             className="w-full px-4 py-3 rounded-lg border border-light-taupe focus:border-warm-brown focus:outline-none transition-colors"
//             disabled={status === 'loading'}
//           />
//         </div>

//         {/* Message */}
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-warm-brown mb-2">Message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Tell us about your travel interests..."
//             rows="3"
//             className="w-full px-4 py-3 rounded-lg border border-light-taupe focus:border-warm-brown focus:outline-none transition-colors resize-none"
//             disabled={status === 'loading'}
//           />
//         </div>

//         {/* Error Message */}
//         {status === 'error' && errorMsg && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-4 flex gap-3 text-red-600 bg-red-50 p-3 rounded-lg text-sm"
//           >
//             <AlertCircle size={18} className="flex-shrink-0" />
//             <p>{errorMsg}</p>
//           </motion.div>
//         )}

//         {/* Success Message */}
//         {status === 'success' && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-4 flex gap-3 text-green-600 bg-green-50 p-3 rounded-lg text-sm"
//           >
//             <CheckCircle size={18} className="flex-shrink-0" />
//             <p>Thank you! We'll be in touch shortly.</p>
//           </motion.div>
//         )}

//         {/* Submit Button */}
//         <motion.button
//           type="submit"
//           disabled={status === 'loading' || status === 'success'}
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           className="w-full bg-warm-brown text-off-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-deep-brown transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {status === 'loading' ? (
//             <>
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
//                 className="w-5 h-5 border-2 border-off-white border-t-transparent rounded-full"
//               />
//               Sending...
//             </>
//           ) : (
//             <>
//               <Send size={18} />
//               Send Enquiry
//             </>
//           )}
//         </motion.button>

//         <p className="text-xs text-stone-grey mt-4 text-center">
//           We respect your privacy. Your information is secure with us.
//         </p>
//       </motion.form>
//     </div>
//   );
// }






import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import {
  CheckCircle,
  AlertCircle,
  Send,
} from 'lucide-react';

import {
  validateEmail,
} from '../utils/helpers';

export default function EnquiryForm() {

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    guests: '',
    dates: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  /* Initialize EmailJS */
  useEffect(() => {
    emailjs.init('9q0tWj-Lh1TcVwJfI');
  }, []);

  /* Handle Input */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* Submit Form */
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMsg('');

    /* Validation */
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your name');
      return;
    }

    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your phone number');
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMsg('Please enter a valid email address');
      return;
    }

    if (!formData.guests) {
      setErrorMsg('Please select number of guests');
      return;
    }

    if (!formData.dates.trim()) {
      setErrorMsg('Please enter your travel dates');
      return;
    }

    try {

      setStatus('loading');

      /* EmailJS Send */
      await emailjs.send(
        'service_r5cgwlf',
        'template_ot4fcxx',
        {
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          guests: formData.guests,
          dates: formData.dates,
          message: formData.message,
        },
        '9q0tWj-Lh1TcVwJfI'
      );

      setStatus('success');

      /* Reset Form */
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        guests: '',
        dates: '',
        message: '',
      });

      setTimeout(() => {
        setStatus('idle');
      }, 3000);

    } catch (error) {

      console.error(error);

      setStatus('error');

      setErrorMsg(
        'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          bg-off-white
          rounded-2xl
          shadow-xl
          p-8
          border
          border-light-taupe/40
        "
      >

        {/* Heading */}
        <div className="text-center mb-8">

          <h3
            className="
              text-3xl
              font-semibold
              text-warm-brown
              font-serif
              mb-3
            "
          >
            Send Enquiry
          </h3>

          <p className="text-sm text-stone-grey">
            Plan your unforgettable stay at Aryan Valley Camp
          </p>

        </div>

        {/* Name */}
        <div className="mb-5">

          <label className="block text-sm font-medium text-warm-brown mb-2">
            Full Name *
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            disabled={status === 'loading'}
            className="
              w-full
              px-4
              py-3
              rounded-xl
              border
              border-light-taupe
              focus:border-warm-brown
              focus:outline-none
              transition-all
            "
          />

        </div>

        {/* Phone */}
        <div className="mb-5">

          <label className="block text-sm font-medium text-warm-brown mb-2">
            Phone Number *
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            disabled={status === 'loading'}
            className="
              w-full
              px-4
              py-3
              rounded-xl
              border
              border-light-taupe
              focus:border-warm-brown
              focus:outline-none
              transition-all
            "
          />

        </div>

        {/* Email */}
        <div className="mb-5">

          <label className="block text-sm font-medium text-warm-brown mb-2">
            Email Address *
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            disabled={status === 'loading'}
            className="
              w-full
              px-4
              py-3
              rounded-xl
              border
              border-light-taupe
              focus:border-warm-brown
              focus:outline-none
              transition-all
            "
          />

        </div>

        {/* Guests */}
        <div className="mb-5">

          <label className="block text-sm font-medium text-warm-brown mb-2">
            Number of Guests *
          </label>

          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="
              w-full
              px-4
              py-3
              rounded-xl
              border
              border-light-taupe
              focus:border-warm-brown
              focus:outline-none
              transition-all
            "
          >
            <option value="">Select Guests</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3-4">3-4 Guests</option>
            <option value="5-6">5-6 Guests</option>
            <option value="6+">6+ Guests</option>
          </select>

        </div>

        {/* Dates */}
        <div className="mb-5">

          <label className="block text-sm font-medium text-warm-brown mb-2">
            Travel Dates *
          </label>

          <input
            type="text"
            name="dates"
            value={formData.dates}
            onChange={handleChange}
            placeholder="May 15 - May 22, 2026"
            disabled={status === 'loading'}
            className="
              w-full
              px-4
              py-3
              rounded-xl
              border
              border-light-taupe
              focus:border-warm-brown
              focus:outline-none
              transition-all
            "
          />

        </div>

        {/* Message */}
        <div className="mb-6">

          <label className="block text-sm font-medium text-warm-brown mb-2">
            Message
          </label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Tell us about your trip..."
            disabled={status === 'loading'}
            className="
              w-full
              px-4
              py-3
              rounded-xl
              border
              border-light-taupe
              focus:border-warm-brown
              focus:outline-none
              transition-all
              resize-none
            "
          />

        </div>

        {/* Error */}
        {status === 'error' && errorMsg && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              mb-4
              flex
              gap-2
              items-start
              bg-red-50
              text-red-600
              p-4
              rounded-xl
              text-sm
            "
          >

            <AlertCircle size={18} />

            <p>{errorMsg}</p>

          </motion.div>

        )}

        {/* Success */}
        {status === 'success' && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              mb-4
              flex
              gap-2
              items-start
              bg-green-50
              text-green-600
              p-4
              rounded-xl
              text-sm
            "
          >

            <CheckCircle size={18} />

            <p>
              Thank you! Your enquiry has been submitted.
            </p>

          </motion.div>

        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={
            status === 'loading' ||
            status === 'success'
          }
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="
            w-full
            bg-warm-brown
            text-off-white
            py-3
            rounded-xl
            font-semibold
            flex
            items-center
            justify-center
            gap-2
            hover:bg-deep-brown
            transition-all
            disabled:opacity-50
          "
        >

          {status === 'loading' ? (

            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  w-5
                  h-5
                  border-2
                  border-off-white
                  border-t-transparent
                  rounded-full
                "
              />

              Sending...
            </>

          ) : (

            <>
              <Send size={18} />
              Send Enquiry
            </>

          )}

        </motion.button>

        {/* Privacy */}
        <p className="text-xs text-stone-grey mt-4 text-center">
          Your information is safe and secure with us.
        </p>

      </motion.form>

    </div>
  );
}





