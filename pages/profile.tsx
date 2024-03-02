import type { NextPage } from 'next';
import { Play } from 'react-feather';

import Body from '../components/content/body';
import Section, { SectionTitle } from '../components/content/section';
import Main from '../components/layouts/main';
import { ProfileHero } from '../components/hero';
import ControlPanel from '../components/control-panel';

const Profile: NextPage = () => {
  const technologies = ['Machine Learning and Data Science', 'Web Development', 'Intro to Web programming', 'Introduction to packet Tracer- Cisco', 'Digital Marketing Certificate','UI/UX Design','Data Analytics with Python','Cisco Introduction to Data Science'];

  return (
    <Main pageBackground="gray" pageTitle="Profile">
      <ProfileHero />
      <Body>
        <ControlPanel />
        <Section>
          <SectionTitle title="About me" />
          <p className="text-base">
          A creative coder with a deep passion for both art and technology. With a background in painting and a love for crafting webpages, I thrive at the intersection of creativity and technical prowess. My curiosity extends beyond just coding – I'm also intrigued by the insights data analysis can unveil. During my university years, I combined these interests to create Symphony Spot, a web application where users can discover new music, curated playlists, and even purchase vinyl records. Music has always been a significant part of my life; from learning Indian classical Carnatic music to curating playlists on Spotify, it's a constant source of inspiration. My dream is to curate a vast vinyl collection, showcasing the favorite artists of both myself and my friends. Beyond my technical skills, I'm known for being friendly and outgoing, valuing collaboration and strong relationships within a team. I'm eager to bring my unique blend of creativity, technical expertise, and love for music to the Spotify team, and I'm excited to gain more experience and knowledge.
          <br />
          <br />
          <hr />

            <div className="mt-4">
            <a href="https://rikii30.github.io/project-1/home.html" style={{ color: 'green' }} target="_blank">Click here to view my project inspired by Spotify</a>

            </div>
            <div className="mt-4">Certifications:</div>
            <ul className="lg:w-1/2 mt-4 text-sm grid grid-cols-2 grid-flow-col grid-rows-3">
              {technologies.map((tech: string, i: number) => (
                <li key={i} className="flex items-center mb-1">
                  <Play className="w-2 h-2 text-green-spotify" />
                  <span className="ml-2">{tech}</span>
                </li>
              ))}
            </ul>
          </p>
        </Section>
      </Body>
    </Main>
  );
};

export default Profile;
