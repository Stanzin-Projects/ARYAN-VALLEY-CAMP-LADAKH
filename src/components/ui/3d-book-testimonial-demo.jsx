import React from 'react';
import { Component } from './3d-book-testimonial';

const DemoOne = () => {
  const testimonials = [
    {
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop',
      text: 'This component library is incredibly versatile. It saved me hours of development time.',
      name: 'Ethan Smith',
      jobtitle: 'Software Engineer',
      rating: 5,
    },
    {
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1780&auto=format&fit=crop',
      text: 'The seamless integration and intuitive design of these components are truly impressive.',
      name: 'Olivia Chen',
      jobtitle: 'Product Manager',
      rating: 4,
    },
    {
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop',
      text: 'As a UX designer, I appreciate the attention to detail. The components are well-crafted.',
      name: 'Liam Johnson',
      jobtitle: 'UX Designer',
      rating: 5,
    },
    {
      image: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1780&auto=format&fit=crop',
      text: 'This library is a game-changer for our marketing efforts. It has significantly boosted our conversion rates!',
      name: 'Ava Martinez',
      jobtitle: 'Marketing Specialist',
      rating: 5,
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a6dd7228f2d?q=80&w=1780&auto=format&fit=crop',
      text: 'Developing with these components is a breeze. The documentation is clear and helpful.',
      name: 'Noah Williams',
      jobtitle: 'Full Stack Developer',
      rating: 4,
    },
    {
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1780&auto=format&fit=crop',
      text: 'The components are fantastic! They make our content more dynamic and engaging. Highly recommend it.',
      name: 'Sophia Brown',
      jobtitle: 'Content Creator',
      rating: 5,
    },
    {
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1780&auto=format&fit=crop',
      text: 'As a startup, efficiency is key. This component library provides high-quality, ready-to-use solutions.',
      name: 'James Davis',
      jobtitle: 'Startup Founder',
      rating: 5,
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1780&auto=format&fit=crop',
      text: 'Solid components and excellent performance. They integrate smoothly and provide a rich user experience.',
      name: 'Benjamin Miller',
      jobtitle: 'Backend Engineer',
      rating: 4,
    },
    {
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1780&auto=format&fit=crop',
      text: 'The professionalism and polish of this component set helped elevate our release.',
      name: 'Emily Turner',
      jobtitle: 'Creative Director',
      rating: 5,
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1780&auto=format&fit=crop',
      text: 'Clear UI patterns and flexible layouts make this a great choice for fast prototypes.',
      name: 'Mia Patel',
      jobtitle: 'Product Designer',
      rating: 5,
    },
    {
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1780&auto=format&fit=crop',
      text: 'It was easy to integrate and the results look very polished.',
      name: 'Oliver King',
      jobtitle: 'Frontend Developer',
      rating: 4,
    },
    {
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1780&auto=format&fit=crop',
      text: 'The UI kit saved us huge amounts of time while keeping our product consistent.',
      name: 'Isabella Garcia',
      jobtitle: 'Design Lead',
      rating: 5,
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1780&auto=format&fit=crop',
      text: 'A reliable and attractive toolkit with clean component structure.',
      name: 'Lucas Wright',
      jobtitle: 'Engineering Manager',
      rating: 5,
    },
    {
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1780&auto=format&fit=crop',
      text: 'Excellent support for responsive layouts and an overall smooth experience.',
      name: 'Sophie Lee',
      jobtitle: 'UX Researcher',
      rating: 4,
    },
    {
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1780&auto=format&fit=crop',
      text: 'This component has become a key part of our landing page design system.',
      name: 'Henry Scott',
      jobtitle: 'Growth Marketer',
      rating: 5,
    },
  ];

  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-off-white p-8">
      <Component testimonials={testimonials} />
    </div>
  );
};

export default DemoOne;
