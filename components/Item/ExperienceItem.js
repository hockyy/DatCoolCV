import {Link} from "@chakra-ui/react";
import IconHeaderItem from "../IconHeaderItem";
import {faCode} from "@fortawesome/free-solid-svg-icons/faCode";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ExperienceItem = ({children, experienceItem}) => (
  <li>
    <Link href={experienceItem.name.url} className={'font-bold'}><FontAwesomeIcon icon={faCode}/> {' '}{experienceItem.name.name}</Link>{' — '}{experienceItem.desc}
  </li>
)

export default ExperienceItem;