const LanguageItem = ({children, languageItem, key}) => (
  <li key={key}>
    <span className={'font-bold'}>
    {languageItem.name}
    </span> {languageItem.desc ? ('(' + languageItem.desc + ')') : ''}
  </li>
)

export default LanguageItem;