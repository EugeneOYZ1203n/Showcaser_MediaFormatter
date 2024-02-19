import './Sidebar.css'
import './Navigation.css'
import MenuIcon from './MenuIcon'
import NavigationBubble from './Bubble'
import { useState }from 'react';

function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState('Clipping');
  // Pages: Clipping, Formatting
  const menuClick =():void =>{
      setToggle(!toggle);
      console.log("Herer");
  }
  return (
    <>
      <div className='Sidebar highlightBorder'>
      <MenuIcon toggle={toggle} menuClick={menuClick} />
      <NavigationBubble toggle={toggle} currentPage={currentPage} setCurrentPage={setCurrentPage} page='Clipping'/>
      <NavigationBubble toggle={toggle} currentPage={currentPage} setCurrentPage={setCurrentPage} page='Format'/>
      <NavigationBubble toggle={toggle} currentPage={currentPage} setCurrentPage={setCurrentPage} page='Jobs'/>
      </div>
    </>
  );
}

export default Sidebar;
