const LanguageItem = ({children, languageItem}) => (
  <li>
    <span className={'font-bold'}>
    {languageItem.name}
    </span> {languageItem.desc ? ('(' + languageItem.desc + ')') : ''}
  </li>
)

export default LanguageItem;