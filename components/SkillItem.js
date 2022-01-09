const SkillItem = ({children, skillItem}) => (
  <li>
    <span className={'font-bold'}>
    {skillItem.name}
    </span> {skillItem.desc ? ('(' + skillItem.desc + ')') : ''}
  </li>
)

export default SkillItem;