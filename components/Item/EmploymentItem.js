import {Flex} from "@chakra-ui/react";
import UnorderedList from "../UnorderedList";

const EducationItem = ({employmentItem}) => {
  return (
    <Flex className={'flex-col mt-2 mb-2'}>
      <h3 className={'text-lg'}>
        <span className={'font-bold'}>{employmentItem.name}</span>
        {', ' + employmentItem.location}
      </h3>
      <h2 className={'text-md mb-1 '}>
        {employmentItem.position}
        <span className={'italic'}>
        {', ' + employmentItem.startPeriod + ' – ' + employmentItem.endPeriod}
        </span>
      </h2>
      <p>
        {employmentItem.description}
      </p>
      <UnorderedList>
        {
          employmentItem.items.map((item, idx)=>(<li key={idx.toString()}>{item}</li>))
        }
      </UnorderedList>
    </Flex>
  );
};

export default EducationItem;