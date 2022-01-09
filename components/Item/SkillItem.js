const SkillItem = ({children, skillItem, key}) => (
  <li key={key}>
    <span className={'font-bold'}>
    {skillItem.name}
    </span> {skillItem.desc ? ('(' + skillItem.desc + ')') : ''}
  </li>
)

export default SkillItem;