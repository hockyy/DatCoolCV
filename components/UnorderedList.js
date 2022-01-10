const UnorderedList = ({children}) => {
  return (
    <ul className={"list-disc mt-2 ml-10"}>
      {children}
    </ul>
  )
}

export default UnorderedList;