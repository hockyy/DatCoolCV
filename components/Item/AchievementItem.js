import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMedal} from "@fortawesome/free-solid-svg-icons/faMedal";

const AchievementItem = ({children, achievementItem}) => {
  const color = {
    'bronze':'text-yellow-700',
    'gold':'text-yellow-400',
    'silver':'text-gray-300',
    'honor':'text-blue-500'
  }
  return (
    <li className={'list-none'}>
      <FontAwesomeIcon className={color[achievementItem.medal] + ' mr-2'}  icon={faMedal}/>
      {achievementItem.name}
      <span className={'italic'}>
      {', ' + achievementItem.date}
    </span>
      {', ' + achievementItem.issuer}
    </li>
  )
}

export default AchievementItem;