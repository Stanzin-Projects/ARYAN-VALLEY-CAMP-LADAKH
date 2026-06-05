
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

import {
  CheckCircle,
  AlertCircle,
  Send,
  Calendar as CalendarIcon,
  X,
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
    message: '',
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarMode, setCalendarMode] = useState('start'); // 'start' or 'end'
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

  /* Format Date */
  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  /* Handle Calendar Date */
  const handleCalendarDate = (date) => {
    if (calendarMode === 'start') {
      setStartDate(date);
      setCalendarMode('end');
    } else {
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
      setShowCalendar(false);
    }
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

    if (!startDate || !endDate) {
      setErrorMsg('Please select your travel dates');
      return;
    }

    try {

      setStatus('loading');

      const formattedDates = `${formatDate(startDate)} - ${formatDate(endDate)}`;

      /* EmailJS Send */
      await emailjs.send(
        'service_r5cgwlf',
        'template_ot4fcxx',
        {
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          guests: formData.guests,
          dates: formattedDates,
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
        message: '',
      });
      setStartDate(null);
      setEndDate(null);
      setCalendarMode('start');

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
        <div className="mb-6">

          <label className="block text-sm font-medium text-warm-brown mb-2">
            Travel Dates *
          </label>

          <div className="relative">
            <motion.button
              type="button"
              onClick={() => setShowCalendar(!showCalendar)}
              disabled={status === 'loading'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
                bg-white
                text-left
                flex
                items-center
                justify-between
                disabled:opacity-50
              "
            >
              <span className={startDate && endDate ? 'text-warm-brown font-medium' : 'text-gray-400'}>
                {startDate && endDate
                  ? `${formatDate(startDate)} → ${formatDate(endDate)}`
                  : 'Select dates'}
              </span>
              <CalendarIcon size={18} className="text-warm-brown" />
            </motion.button>

            {/* Calendar Popup */}
            {showCalendar && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="
                  absolute
                  top-full
                  left-0
                  mt-2
                  bg-white
                  rounded-xl
                  shadow-xl
                  p-4
                  z-50
                  border
                  border-light-taupe
                "
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-warm-brown">
                    {calendarMode === 'start' ? 'Check-in Date' : 'Check-out Date'}
                  </h4>
                  <button
                    type="button"
                    onClick={() => {
                      setShowCalendar(false);
                      setCalendarMode('start');
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={18} />
                  </button>
                </div>

                <Calendar
                  value={calendarMode === 'start' ? startDate : endDate}
                  onChange={handleCalendarDate}
                  minDate={calendarMode === 'start' ? new Date() : startDate}
                  className="calendar-custom"
                />

                {startDate && endDate && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-center text-sm text-stone-grey"
                  >
                    <p className="font-medium text-warm-brown">
                      {Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))} nights
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Clear Dates Button */}
            {(startDate || endDate) && (
              <motion.button
                type="button"
                onClick={() => {
                  setStartDate(null);
                  setEndDate(null);
                  setCalendarMode('start');
                }}
                className="
                  mt-2
                  text-xs
                  text-warm-brown
                  hover:text-deep-brown
                  font-semibold
                  transition-colors
                "
              >
                Clear dates
              </motion.button>
            )}
          </div>

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
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="
              mb-6
              bg-gradient-to-br
              from-green-50
              to-emerald-50
              border
              border-green-200
              p-6
              rounded-2xl
              text-center
              overflow-hidden
              relative
            "
          >

            {/* Animated Background Glow */}
            <motion.div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-transparent
                via-white
                to-transparent
                opacity-0
              "
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Content Container */}
            <div className="relative z-10">

              {/* Checkmark Icon */}
              <motion.div
                className="flex justify-center mb-3"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle size={48} className="text-green-600" />
                </motion.div>
              </motion.div>

              {/* Main Message */}
              <motion.h3
                className="
                  text-lg
                  font-bold
                  text-green-700
                  mb-2
                  font-serif
                "
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Thank you for your enquiry!
              </motion.h3>

              {/* Secondary Message */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <p className="text-sm text-green-600">
                  We'll get back to you in
                </p>
                <motion.p
                  className="
                    text-xl
                    font-bold
                    text-green-700
                    font-serif
                  "
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  8 working hours
                </motion.p>
                <p className="text-xs text-green-600 mt-2">
                  Check your email for updates
                </p>
              </motion.div>

            </div>

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


