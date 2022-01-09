const AchievementItem = ({children, achievementItem}) => {
  return (
    <li>
      {achievementItem.name}
      <span className={'italic'}>
      {', ' + achievementItem.date}
    </span>
      {', ' + achievementItem.issuer}
    </li>
  )
}

export default AchievementItem;