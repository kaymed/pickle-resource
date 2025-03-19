import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, DrawerContent, DrawerItem } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';

import { pencilIcon, heartIcon, thumbUpIcon, menuIcon, calendarIcon, chevronDownIcon, chevronRightIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-react-common';
import { motion } from "motion/react"


const CustomItem = props => {
  const {
    visible,
    dataExpanded,
    ...others
  } = props;
  const arrowDir = dataExpanded ? chevronDownIcon : chevronRightIcon;
  return visible === false ? null : <DrawerItem {...others}>
            <SvgIcon icon={props.svgIcon} />
            <span className={'k-item-text'}>{props.text}</span>
            {dataExpanded !== undefined && <SvgIcon icon={arrowDir} style={{
      marginLeft: 'auto'
    }} />}
        </DrawerItem>;
};
const DrawerContainer = props => {
  const navigate = useNavigate();
  const [drawerExpanded, setDrawerExpanded] = React.useState(true);
  const [items, setItems] = React.useState([{
    text: 'Paddles',
    svgIcon: heartIcon,
    id: 1,
    selected: true,
    route: '/'
  }, {
    separator: true
  }, {
    text: 'Coaches',
    svgIcon: thumbUpIcon,
    id: 2,
    route: './Coaches.jsx'
  }, {
    separator: true
  }, {
    text: 'Tournaments',
    svgIcon: calendarIcon,
    id: 3,
    route: './Tournaments.jsx'
  }, {
    separator: true
  }, {
    text: 'Help Us Improve',
    svgIcon: pencilIcon,
    id: 4,
    route: './Reviews.jsx'
  }]);
  const handleClick = () => {
    setDrawerExpanded(!drawerExpanded);
  };
  const onSelect = ev => {
    const currentItem = ev.itemTarget.props;
    const isParent = currentItem.dataExpanded !== undefined;
    const nextExpanded = !currentItem.dataExpanded;
    const newData = items.map(item => {
      const {
        selected,
        dataExpanded: currentExpanded,
        id,
        ...others
      } = item;
      const isCurrentItem = currentItem.id === id;
      return {
        selected: isCurrentItem,
        dataExpanded: isCurrentItem && isParent ? nextExpanded : currentExpanded,
        id,
        ...others
      };
    });
    navigate(ev.itemTarget.props.route);
    setItems(newData);
  };
  const data = items.map(item => {
    const {
      parentId,
      ...others
    } = item;
    if (parentId !== undefined) {
      const parentEl = items.find(parent => parent.id === parentId);
      return {
        ...others,
        visible: parentEl && parentEl.dataExpanded
      };
    }
    return item;
  });
  return <div> 
    <motion.div 
        initial={{ 
          transform: "translateY(-20px)",
          opacity: 0
          
    
         }}
        animate={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ type: "spring", delay: .75 }}>
  
  <div className='draw-wrapper'>
            <div className="custom-toolbar">
                <Button svgIcon={menuIcon} fillMode="flat" onClick={handleClick} />
                <span className="title">Make your selection</span>
            </div>
            <Drawer 
            expanded={drawerExpanded} 
            mode="push" width={250} 
            items={data} 
            item={CustomItem} 
            onSelect={onSelect}
            >
                <DrawerContent>{props.children}</DrawerContent>
            </Drawer>
            </div></motion.div></div>;
};
export default DrawerContainer;