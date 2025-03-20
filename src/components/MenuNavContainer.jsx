import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem } from '@progress/kendo-react-layout';
import { motion } from 'motion/react';
import { Card } from '@progress/kendo-react-layout';
import { Chip } from '@progress/kendo-react-buttons';

import { pencilIcon, tellAFriendIcon, calendarIcon, heartIcon} from '@progress/kendo-svg-icons';

const MenuNavContainer = props => {
  const navigate = useNavigate();
  const onSelect = event => {
    navigate(event.item.data.route);
  };
  return <>
  <motion.div initial={{ 
      transform: "translateY(-20px)",
      opacity: 0
      

     }}
    animate={{ transform: "translateY(0px)", opacity: 1 }}
    transition={{ type: "spring", delay: 1 }}>
            <div className='mb-[50px] justify-center flex'><Menu onSelect={onSelect}>
               <MenuItem 
                  text="Paddles"
                  svgIcon={pencilIcon} 
                  cssClass='menu-chip'
                  data={{
                    route: '/paddles'
                     }} />
                <MenuItem 
                  text="Coaches" 
                  svgIcon={tellAFriendIcon}
                  cssClass='menu-chip'
                  data={{
                    route: '/coaches'
                     }} />
                <MenuItem 
                  text="Tournaments" 
                  svgIcon={calendarIcon}
                  cssClass='menu-chip'
                  data={{
                    route: '/tournaments'
                     }} />
                <MenuItem 
                  text="Reviews" 
                  svgIcon={heartIcon}
                  cssClass='menu-chip'
                  data={{
                    route: '/reviews'
                     }} />
            </Menu>
            </div>
           <motion.div><Card><div>{props.children}</div></Card> </motion.div>
            </motion.div>
        </>;
};
export default MenuNavContainer;