import {Flex} from "@chakra-ui/react";

const SectionContainer = ({children}) => (
  <Flex className={'mt-1 flex-col'}>
    {children}
  </Flex>
)

export default SectionContainer;