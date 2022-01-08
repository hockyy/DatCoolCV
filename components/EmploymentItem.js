import {Flex} from "@chakra-ui/react";

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
      <ul className={"list-disc ml-4 mt-2"}>
        {
          employmentItem.items.map((item)=>(<li>{item}</li>))
        }
      </ul>
    </Flex>
  );
};

export default EducationItem;