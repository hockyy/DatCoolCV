const AchievementItem = ({children, achievementItem}) => (
  <li>
    {achievementItem.name}
    <span className={'italic'}>
      {', ' + achievementItem.date}
    </span>
    {', ' + achievementItem.issuer}
  </li>
)

export default AchievementItem;