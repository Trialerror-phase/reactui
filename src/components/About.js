
// src/components/About.js
import React from 'react';
import Header from './Header';
import './Header.css';
import './About.css'; // Import the CSS file for additional styling
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <Header title="About" />

      <h1>About the founder</h1>
      <div className="founder-section">
        <div className="founder-text">
          <p>
            Dr. Anja van’t Hoog was born on March 21, 1964, in Schipluiden (NL). She studied medicine at the University of Utrecht and reached her medical degree in 1993. After her training as a Dutch Tropical Doctor she went to Kenya in 1996. Unfortunately, she passed away on August 11, 2023. Ya Juu Foundation is her legacy.
            <br /><br />
            “With my foundation, I want to support young people in Kenya, who cannot afford fees for secondary school or higher education. Completing education and being able to create your own income is very important in life.
            <br /><br />
            In the eighties and nineties, I was lucky to be able to study medicine. I come from a farmer’s family and was the first who wanted to go to university. I reaped the benefits of the social democratic governments we had in the Netherlands, which very much supported anyone who wanted to get higher education.
            <br /><br />
            I was an adventurous young woman and after becoming a doctor, I specialized in tropical medicine which gave me the opportunity to go and work abroad. In 1996 I arrived in Kenya, more precisely in the western part of the country. I worked first as a doctor and later focused on research in the medical field.
            <br /><br />
            Ya Juu Foundation is set up with the money I saved for my pension. This is the best way of making good use of it.”
            <br /><br />
            Dr. Anja van’t Hoog
          </p>
        </div>
        <img
          src="Anja-21-maart-2023-scaled.jpg" // Replace with the correct URL or path to the image
          alt="Dr. Anja van’t Hoog"
          className="founder-image"
        />
      </div>

      <h1>Mission and Vision</h1>
      
      <p>The mission of Ya Juu Foundation is to contribute to increasing numbers of educated adolescents and self- reliant young adults in (Western) Kenya by providing access to secondary and higher education and/or supporting them in other ways to increase their employability for work so they will be able to earn an income for themselves. Our vision is that all adolescents and young adults have the right to education and to develop themselves to their full potential so they can look after themselves and play a contributing role in their society. This is in the continuation in spirit of the founder of the organisation, dr. Anja van ‘t Hoog, who supported several adolescents and young adults in Kenya with this purpose.</p>
      <h1>Philosophy</h1>
      <p>Ya Juu Foundation sees education as key to self-development and self-reliance. Ensuring that all children  can obtain an education is an universal right and a shared responsibility between the government and parents and caregivers. However, sometimes these stakeholders are not able to fulfill their obligation 100%.Ya Juu Foundation also recognises that young adults may lack opportunities for work, either in the formal or informal sector, to generate an income. When adolescents’ education or young adults’ financial security are at risk, external support can offer a solution. With opportunities for educational support and support to bridge the gap to the labour market, Ya Juu Foundation provides this solution to adolescents and young adults who otherwise may miss out.  These options for support will hopefully lead to more secure steps on the path these young people walk towards independence.</p>
      <h1>About the board</h1>
      <p>The board members work on a voluntary basis. The Board of the Foundation consists of four voluntary members, who are not paid for their services. Declaration of costs is possible if they are necessary for the tasks performed by the board members. Our regulations stipulate the roles of the board members and how things are organized within the Foundation.</p>
      

      <h1>About the board</h1>
      <div className="board-members">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="board-card">
            <img
              src={`board-member-${index + 1}.jpg`} // Replace with actual image paths
              alt={`Board Member ${index + 1}`}
              className="board-image"
            />
            <h3>Board Member {index + 1}</h3>
            <p>Brief description of the board member and their role.</p>
            <p>board</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
