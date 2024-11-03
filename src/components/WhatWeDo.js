// src/components/WhatWeDo.js
import React from 'react';
import Header from './Header';
import { useTranslation } from 'react-i18next';

const WhatWeDo = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header title="What we Do" />
      <h1>Where we work</h1>
      <p>Our focus is on children and young adults from a poor background who are living in the Kenyan provinces Western Kenya and Nyanza which are embracing Lake Victoria. Our founder has lived and worked in both.

        Dr Anja has been working and living in Kenya for over 14 years from 1997 to 2011. She started as a mission doctor of the Dutch development organisation Memisa Medicus Mundi for the Catholic Diocese of Kakamega, Western Kenya. Her first station was St. Mary’s Hospital in Mukumu. Later on she was posted at St. Elizabeth Mission Hospital in Mumias. These first three years working in both hospitals formed Dr Anja in many ways, on a personal and professional level. She thoroughly enjoyed her work in these rural hospitals and absorbed herself in the Kenyan way of life.
        Nevertheless when the Kenya Medical Research Institute (KEMRI) offered her a job, she took it up to pursue her passion in research. In 2000 Dr Anja moved to Kisumu, where she became the coordinator of the PMTCT program and other HIV/AIDS activities.
        From 2004 till 2010, Dr Anja was the principal investigator of the KEMRI/CDC tuberculosis prevalence survey and other studies on tuberculosis case finding and mortality in Western Kenya.Read More</p>
        <img
          src="src\assets\secondary-1170x536.jpg" // Replace with the URL or path to your image
          alt="Our mission"
          className="home-image"
        />
      <h1>
        What we support
      </h1>
      <p>Ya Juu Foundation has the intention to support 5 adolescents and young adults in 2024. In the first year(s) we intend to identify adolescents and young adults for support through the network of Dr. van ‘t Hoog. By the end of 2025 we will evaluate the activities and decide if adjustments are needed in this Policy Plan. Ya Juu Foundation has the intention to support at least 10  adolescents and young adults in the period 2024 – 2025. </p>
         <h2>Secondary Education</h2>
         <p>The foundation aims to achieve its goal by, among other things, providing financial support to underprivileged adolescents and young adults to enable them to attend secondary education by paying school fees, school supplies, transportation and/or other means. We support adolescents and young adults directly, through their parent(s)/guardian(s), or through an organization that has a similar vision to increase access to secondary education in Kenya. See Apply – Ya Juu Foundation for the eligibility criteria.</p>
         <img
          src="src\assets\secondary-1170x536.jpg" // Replace with the URL or path to your image
          alt="Our mission"
          className="home-image"
        />
         <h2>Higher education</h2>
         <p>The foundation also provides financial support to underprivileged adolescents and young adults to enable them to attend higher education, such as colleges and universities. This support ranges from financing tuition fees, needed supplies, accommodation, transportation and/or other means. We support adolescents and young adults directly, through their parent(s)/guardian(s), or through an organization that has a similar vision to increase access to higher education in Kenya. See Apply – Ya Juu Foundation for the eligibility criteria.</p>
         <img
          src="src\assets\secondary-1170x536.jpg" // Replace with the URL or path to your image
          alt="Our mission"
          className="home-image"
        />
         <h2>Income generation</h2>
         <p>The foundation aims to provide resources for support to underprivileged young adults with training and means to start up a small business after school or when education is not an option, and/ or support development of skills for internships, job hunting and networking to improve their employability. We support them directly or through an organization that has a similar vision to increase opportunities for increased employability in Kenya. See Apply – Ya Juu Foundation  for the eligibility criteria.</p>
         <img
          src="src\assets\secondary-1170x536.jpg" // Replace with the URL or path to your image
          alt="Our mission"
          className="home-image"
        />
      <h1>What we don't support</h1>
      <p>Secondary education: Ya Juu Foundation will NOT pay for those costs that are provided for by Free Secondary Education by the Government of Kenya or support adolescents or young adults who receive a full scholarship for Secondary Education. We will also not not pay for attending private schools nor fund applications received from a school directly.
Higher education: Ya Juu Foundation will NOT support adolescents or young adults who receive a full bursary from the government, pay for attending private colleges or universities nor fund applications received from an institute directly.
Income generation: Ya Juu Foundation will NOT support young adults with direct income, provide nor find jobs</p>
      <p>We provide financial assistance for school fees to ensure children in Kisumu have access to education.</p>
    </div>
  );
};

export default WhatWeDo;
