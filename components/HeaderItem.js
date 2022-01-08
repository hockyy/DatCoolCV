import {Flex} from "@chakra-ui/react";

const HeaderItem = ({children}) => {
  return (
    <Flex className={'flex-row content-center justify-items-center text-center space-x-1'}>
      {children}
    </Flex>
  )
};

export default HeaderItem;