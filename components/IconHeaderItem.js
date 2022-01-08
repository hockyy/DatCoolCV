import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const IconHeaderItem = ({children, icon}) => {
  return (
    <div className={'w-5'}>
      <FontAwesomeIcon icon={icon}/>
    </div>
  );
};

export default IconHeaderItem;