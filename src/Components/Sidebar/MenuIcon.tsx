// import { ReactComponent as Logo } from '../../../assets/menu.svg';
// import { useState }from 'react';
import React from 'react';

interface Props {
    toggle: boolean;
    menuClick: () => void;
  }

const MenuIcon: React.FC<Props> = ({ toggle, menuClick }) => {
    // const [toggle, setToggle] = useState(false);
    // const menuClick =():void =>{
    //     setToggle(!toggle);
    //     console.log(toggle);
        
    // }
    return (
        <>
            <div className={`SidebarMenuIconWrap ${toggle ? 'SidebarMenuIconWrap--toggled' : ''}`} onClick={menuClick}>
                {/*@ts-ignore */}
                <svg fill='white' className={`SidebarMenuIcon ${toggle ? 'SidebarMenuIcon--toggled' : ''}`} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 56 56" xml:space="preserve">
                <path d="M28,0C12.561,0,0,12.561,0,28s12.561,28,28,28s28-12.561,28-28S43.439,0,28,0z M40,41H16c-1.104,0-2-0.896-2-2s0.896-2,2-2
                    h24c1.104,0,2,0.896,2,2S41.104,41,40,41z M40,30H16c-1.104,0-2-0.896-2-2s0.896-2,2-2h24c1.104,0,2,0.896,2,2S41.104,30,40,30z
                    M40,19H16c-1.104,0-2-0.896-2-2s0.896-2,2-2h24c1.104,0,2,0.896,2,2S41.104,19,40,19z"/>
                </svg>
            
                <h2 className={`iconText ${toggle ? 'iconText--toggled' : ''}`}>MENU</h2>
            </div>
            
        </>
    )
}
  
export default MenuIcon
