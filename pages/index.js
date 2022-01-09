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
import EducationItem from "../components/EducationItem";
import EmploymentItem from "../components/EmploymentItem";
import SkillItem from "../components/SkillItem";
import UnorderedList from "../components/UnorderedList";
import LanguageItem from "../components/LanguageItem";
import SectionContainer from "../components/SectionContainer";
import AchievementItem from "../components/AchievementItem";
import ExperienceItem from "../components/ExperienceItem";

export default function Home() {
  console.log(data)
  return (
    <Container maxW='container.lg' className={'mt-5 justify-center'}>
      <Flex className={'justify-between'}>
        <Flex className={'flex-col justify-evenly pl-3'}>
          <div className={'text-lg'}>
            <h1 className={'text-5xl mb-3'}>
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
        <Flex className={'flex-col pr-5 text-lg'}>
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
      <Flex className={'flex-col lg:flex-row'}>
        <Flex className={'p-2 flex-col'}>
          <SectionContainer>
            <h2 className={'text-2xl'}>Education</h2>
            {
              data.education.map(educationItem => (<EducationItem educationItem={educationItem}/>))
            }
          </SectionContainer>

          <SectionContainer>
            <h2 className={'text-2xl'}>Employment History</h2>
            {
              data.employment.map(employmentItem => (<EmploymentItem employmentItem={employmentItem}/>))
            }
          </SectionContainer>
        </Flex>
        <Flex className={'p-2 flex-col'}>

          <SectionContainer>
            <h2 className={'text-2xl'}>Professional Skills</h2>
            <UnorderedList>
              {
                data.skills.map(skillItem => (<SkillItem skillItem={skillItem}/>))
              }
            </UnorderedList>
          </SectionContainer>

          <SectionContainer>
            <h2 className={'text-2xl'}>Languages</h2>
            <UnorderedList>
              {
                data.languages.map(languageItem => (<LanguageItem languageItem={languageItem}/>))
              }
            </UnorderedList>
          </SectionContainer>


          <SectionContainer>
            <h2 className={'text-2xl'}>Achievements</h2>
            <UnorderedList>
              {
                data.achievements.map(achievementItem => (<AchievementItem achievementItem={achievementItem}/>))
              }
            </UnorderedList>
          </SectionContainer>


          <SectionContainer>
            <h2 className={'text-2xl'}>Relevant Experiences</h2>
            <UnorderedList>
              {
                data.others.map(experienceItem => (<ExperienceItem experienceItem={experienceItem}/>))
              }
            </UnorderedList>
          </SectionContainer>
        </Flex>
      </Flex>
    </Container>
  )
}
