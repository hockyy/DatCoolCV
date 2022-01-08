import {Flex} from "@chakra-ui/react";

const EducationItem = ({educationItem}) => {
  return (
    <Flex className={'flex-col mt-2 mb-2'}>
      <h3 className={'text-lg'}>
        <span className={'font-bold'}>{educationItem.name}</span>
        {', ' + educationItem.gpa.toFixed(2) + '/' + educationItem.maxGpa.toFixed(2) + ' GPA'}
      </h3>
      <h2 className={'text-md mb-1 italic'}>
        {educationItem.startPeriod + ' – ' + educationItem.endPeriod}
      </h2>
      <p>
        {educationItem.description}
      </p>
      <ul className={"list-disc ml-4 mt-2"}>
        {
          educationItem.items.map((item)=>(<li>{item}</li>))
        }
      </ul>
    </Flex>
  );
};

export default EducationItem;