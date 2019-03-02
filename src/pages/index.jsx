import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsmobile from '../aws-exports';

// Components
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

// Elements
import Inner from '../elements/Inner';
import { Title, BigTitle, Subtitle } from '../elements/Titles';

// Views
import Hero from '../views/Hero';
import Projects from '../views/Projects';
import About from '../views/About';
import Contact from '../views/Contact';

import avatar from '../images/avatar.jpg';

Amplify.configure(awsmobile);

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Schmitty.
        </BigTitle>
        <Subtitle>Here are the instructions for how to best serve me.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>The Basics</Title>
        <ProjectsWrapper>
          <ProjectCard title="Food" bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)">
            I will need a spoonful of wet food (about 1/6 of a can) + 1/4 cup of dry food twice a day. I usually eat
            around 7:30am and 7pm.
          </ProjectCard>
          <ProjectCard title="Potty" bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)">
            I will leave a mess for you to clean up in the bathroom box. Please scoop it out. It is flushable.
          </ProjectCard>
          <ProjectCard title="Love" bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)">
            I need to love one someone for a bit each day. I would like to sit on a blanket on your lap. The white fuzzy
            side up please.
          </ProjectCard>
          <ProjectCard title="Play" bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)">
            Sitting around all day isn't necessarily a dream. I like to chase the rainbow string and the one with the
            mouse on the end. But my true favorite is chasing a hair tie when it is snapped like a rubber band.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            I was adopted on August 19th, 2017 when I was about 2 years old from a cafe called the Seattle
            Meowtrapolitan.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I generally enjoy sleeping. But when I am not sleeping, I like to eat. If I find some time before or after
          eating and sleeping, then I like to chase hair ties, watch birds, and sit on everyone's lap. Loud noises tend
          to scare me quite a bit, but I am always friendly with new people.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            You can contact my vet at <a href="https://www.mygreenwoodvet.com/">Greenwood Animal Hospital</a> during
            normal business hours at <a href="tel:206-528-3838">(206) 528-3838</a>. The address is
            <ul style={{ listStyle: 'none' }}>
              <li>10000 Aurora Ave. N.</li>
              <li>Unit # 8</li>
              <li>Seattle, WA 98133</li>
            </ul>
          </ContactText>
          <ContactText>
            An emergency vet is available at <a href="https://bluepearlvet.com/seattle-wa/">BluePearl Pet Hospital</a>{' '}
            24/7. You can reach them at <a href="tel:206-364-1660">(206) 364-1660</a>. The address is
            <ul style={{ listStyle: 'none' }}>
              <li>13240 Aurora Ave. N.</li>
              <li>Seattle, WA 98133</li>
            </ul>
          </ContactText>
          <ContactText>
            If you need to get a hold of me, you can contact me by{' '}
            <ul>
              <li>
                <a href="mailto:andy.w.garcia@gmail.com">Email</a>: andy.w.garcia@gmail.com
              </li>
              <li>
                <a href="tel:111-111-1111">Phone</a>: (111) 111-1111
              </li>
            </ul>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default withAuthenticator(Index, true);
