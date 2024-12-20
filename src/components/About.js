// src/components/About.js
import React from 'react';
import Header from './Header';
import './Header.css';
import './About.css'; // Import the CSS file for additional styling
import { useTranslation } from 'react-i18next';
import  { useState } from 'react'

const About = () => {
 



  const { t } = useTranslation();
  const [showFullText, setShowFullText] = useState(false); // State to toggle text

  // Function to handle "Read More" click
  const toggleText = () => setShowFullText((prev) => !prev);

  const founderText = `
    Dr. Anja van’t Hoog was born on March 21, 1964, in Schipluiden (NL). She studied medicine at the University of Utrecht and reached her medical degree in 1993. After her training as a Dutch Tropical Doctor she went to Kenya in 1996. Unfortunately, she passed away on August 11, 2023. Ya Juu Foundation is her legacy.

    “With my foundation, I want to support young people in Kenya, who cannot afford fees for secondary school or higher education. Completing education and being able to create your own income is very important in life.

    In the eighties and nineties, I was lucky to be able to study medicine. I come from a farmer’s family and was the first who wanted to go to university. I reaped the benefits of the social democratic governments we had in the Netherlands, which very much supported anyone who wanted to get higher education.

    I was an adventurous young woman and after becoming a doctor, I specialized in tropical medicine which gave me the opportunity to go and work abroad. In 1996 I arrived in Kenya, more precisely in the western part of the country. I worked first as a doctor and later focused on research in the medical field.

    Ya Juu Foundation is set up with the money I saved for my pension. This is the best way of making good use of it.”

    Dr. Anja van’t Hoog
  `;

  const boardMembers = [
    {
      name: "John Doe",
      role: "Chairperson",
      image: "john-doe.jpg",
      description: "Oversees the strategic direction of the foundation.",
    },
    {
      name: "Jane Smith",
      role: "Secretary",
      image: "jane-smith.jpg",
      description: "Ensures compliance and manages documentation.",
    },
    {
      name: "Alice Johnson",
      role: "Treasurer",
      image: "alice-johnson.jpg",
      description: "Manages financial records and oversees budgets.",
    },
    {
      name: "Bob Brown",
      role: "Member",
      image: "bob-brown.jpg",
      description: "Supports various projects and initiatives.",
    },
    {
      name: "Emma Wilson",
      role: "Member",
      image: "emma-wilson.jpg",
      description: "Focuses on youth mentorship programs.",
    },
   
  ];
  
  return (
    <div className="about">
      <Header title="About" />

      <h1 className='about-h'>About the Founder</h1>
      <div className="founder-section">
        
      <img
          src="\assets\Anja-21-maart-2023-768x1024.jpg"
          alt="Dr. Anja van’t Hoog"
          className="founder-image"
        />
        <div className="founder-text">
          <p>
            {showFullText
              ? founderText
              : `${founderText.substring(0, 1000)}...`} {/* Show truncated text */}
          </p>
          <button onClick={toggleText} className="read-more-btn">
            {showFullText ? 'Read Less' : 'Read More'}
          </button>
        </div>
       
        <img
      src="\assets\Anja-daktari-768x1024.jpg" // Replace with the actual path
      alt="Additional Image"
      className="founder-image"
    />
      </div>

      <h1 className='mis'>Mission, Vision, and Philosophy</h1>
      <div className="mission-vision-philosophy">
        <div className="section">
          <h2>Mission</h2>
          <p>
            The mission of Ya Juu Foundation is to contribute to increasing numbers of educated adolescents and self-reliant young adults in (Western) Kenya by providing access to secondary and higher education and/or supporting them in other ways to increase their employability for work so they will be able to earn an income for themselves.
          </p>
        </div>
        <div className="section">
          <h2>Vision</h2>
          <p>
            Our vision is that all adolescents and young adults have the right to education and to develop themselves to their full potential so they can look after themselves and play a contributing role in their society. This is in the continuation in spirit of the founder of the organization, Dr. Anja van ‘t Hoog.
          </p>
        </div>
        <div className="section">
          <h2>Philosophy</h2>
          <p>
            Ya Juu Foundation sees education as key to self-development and self-reliance. Ensuring that all children can obtain an education is a universal right and a shared responsibility between the government and parents and caregivers.
          </p>
        </div>
      </div>

      <h1 className='bo'>About the board</h1>
      <p className='bo'>The board members work on a voluntary basis. The Board of the Foundation consists of four voluntary members, who are not paid for their services. Declaration of costs is possible if they are necessary for the tasks performed by the board members. Our regulations stipulate the roles of the board members and how things are organized within the Foundation.</p>
<div className="board-members">
  {boardMembers.map((member, index) => (
    <div key={index} className="board-card">
      <img
        src={member.image} // Actual image path
        alt={member.name}
        className="board-image"
      />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <p>{member.description}</p>
    </div>
  ))}
</div>

      
    </div>
  );
};

export default About;
