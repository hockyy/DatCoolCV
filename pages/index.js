import data from "../components/data";
import {Container, Flex, Link} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons/faCoffee";
import {faGlobeAsia} from "@fortawesome/free-solid-svg-icons/faGlobeAsia";
import HeaderItem from "../components/HeaderItem";
import {faMapMarked} from "@fortawesome/free-solid-svg-icons/faMapMarked";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import IconHeaderItem from "../components/IconHeaderItem";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpenText";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons/faEnvelope";

export default function Home() {
  console.log(data)
  return (
    <Container maxW='container.lg' className={'mt-5 justify-center'}>
      <Flex className={'justify-between'}>
        <Flex className={'flex-col justify-evenly ml-3'}>
          <div className={'text-lg'}>
            <h1 className={'text-5xl mb-3'}>
              {data.info.first_name}
              <span className={'font-bold'}>
              {data.info.bolded_name}
            </span>
              {data.info.last_name}
            </h1>
            <h1 className={'text-3xl'}>
              {data.info.caption}
            </h1>
          </div>
        </Flex>
        <Flex className={'flex-col mr-5 text-lg'}>
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
    </Container>
  )
}
