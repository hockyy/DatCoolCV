import data from "../components/data";

import {Container, Flex, Link} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";

import HeaderItem from "../components/HeaderItem";
import IconHeaderItem from "../components/IconHeaderItem";

import {faGlobeAsia} from "@fortawesome/free-solid-svg-icons/faGlobeAsia";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faMapMarked} from "@fortawesome/free-solid-svg-icons/faMapMarked";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons/faEnvelope";
import EducationItem from "../components/Item/EducationItem";
import EmploymentItem from "../components/Item/EmploymentItem";
import SkillItem from "../components/Item/SkillItem";
import UnorderedList from "../components/UnorderedList";
import LanguageItem from "../components/Item/LanguageItem";
import SectionContainer from "../components/SectionContainer";
import AchievementItem from "../components/Item/AchievementItem";
import ExperienceItem from "../components/Item/ExperienceItem";
import Head from 'next/head'
import UnorderedListSmall from "../components/UnorderedListSmall";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hocky Yudhiono's CV</title>
        <meta charSet="UTF-8"/>
        <meta name="keywords" content="CV, Resume, Hocky, Yudhiono, About"/>
        <meta name="author" content="Hocky"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Container maxW='container.lg' className={'mt-5 justify-center'}>
        <Flex className={'justify-between flex-col md:flex-row'}>
          <Flex className={'flex-col md:justify-evenly md:pl-3 items-center md:items-start text-center md:text-left'}>
            <div className={'text-lg mb-3'}>
              <h1 className={'mb-3 text-4xl'}>
                {data.info.firstName}
                <span className={'font-bold'}>
              {data.info.boldedName}
            </span>
                {data.info.lastName}
              </h1>
              <h1 className={'text-3xl'}>
                {data.info.caption}
              </h1>
            </div>
          </Flex>
          <Flex className={'flex-col pr-5 text-lg content-center items-center md:items-start justify-center'}>
            <HeaderItem>
              <IconHeaderItem icon={faGlobeAsia}></IconHeaderItem>
              <Link href={data.info.website} isExternal>
                {data.info.website} <ExternalLinkIcon mx='1px'/>
              </Link>
            </HeaderItem>
            <HeaderItem>
              <IconHeaderItem icon={faMapMarked}></IconHeaderItem>
              <div>
                {data.info.location}
              </div>
            </HeaderItem>
            <HeaderItem>
              <IconHeaderItem icon={faPhone}></IconHeaderItem>
              <div>
                <Link href={'tel:' + data.info.phone.replace(/(\s|-)/g, '')} isExternal>
                  {data.info.phone}
                </Link>
              </div>
            </HeaderItem>
            <HeaderItem>
              <IconHeaderItem icon={faLinkedin}></IconHeaderItem>
              <Link href={'https://linkedin.com/in/' + data.info.linkedin} isExternal>
                {data.info.linkedin}
              </Link>
            </HeaderItem>
            <HeaderItem>
              <IconHeaderItem icon={faEnvelope}></IconHeaderItem>
              <Link href={'mailto:' + data.info.email} isExternal>
                {data.info.email}
              </Link>
            </HeaderItem>
          </Flex>
        </Flex>
        <hr className={'border-0 bg-black text-black h-1 mt-2 mb-2'}/>
        <Flex className={'flex-col md:flex-row'}>
          <Flex className={'p-2 flex-col md:w-6/12'} key ='left'>
            <SectionContainer key='education'>
              <h2 className={'text-2xl'}>Education</h2>
              {
                data.education.map((educationItem, idx) => (<EducationItem key={idx} educationItem={educationItem}/>))
              }
            </SectionContainer>

            <SectionContainer key={'employment'}>
              <h2 className={'text-2xl'}>Employment History</h2>
              {
                data.employment.map((employmentItem, idx) => (<EmploymentItem key={idx} employmentItem={employmentItem}/>))
              }
            </SectionContainer>
          </Flex>
          <Flex className={'p-2 flex-col md:w-6/12'} key={'right'}>

            <SectionContainer key={'skills'}>
              <h2 className={'text-2xl'}>Professional Skills</h2>
              <UnorderedList>
                {
                  data.skills.map((skillItem,idx) => (<SkillItem skillItem={skillItem} key={idx}/>))
                }
              </UnorderedList>
            </SectionContainer>

            <SectionContainer key={'languages'}>
              <h2 className={'text-2xl'}>Languages</h2>
              <UnorderedList>
                {
                  data.languages.map((languageItem, idx) => (<LanguageItem languageItem={languageItem}  key={idx}/>))
                }
              </UnorderedList>
            </SectionContainer>


            <SectionContainer key={'achievements'}>
              <h2 className={'text-2xl'}>Achievements</h2>
              <UnorderedListSmall>
                {
                  data.achievements.map((achievementItem, idx) => (<AchievementItem achievementItem={achievementItem} key={idx}/>))
                }
              </UnorderedListSmall>
            </SectionContainer>


            <SectionContainer key={'experiences'}>
              <h2 className={'text-2xl'}>Relevant Experiences</h2>
              <UnorderedList>
                {
                  data.others.map((experienceItem, idx) => (<ExperienceItem experienceItem={experienceItem} key={idx}/>))
                }
              </UnorderedList>
            </SectionContainer>
          </Flex>
        </Flex>
      </Container>
    </div>

  )
}
