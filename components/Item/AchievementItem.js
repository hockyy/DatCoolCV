const AchievementItem = ({children, achievementItem, key}) => (
  <li key={key}>
    {achievementItem.name}
    <span className={'italic'}>
      {', ' + achievementItem.date}
    </span>
    {', ' + achievementItem.issuer}
  </li>
)

export default AchievementItem;