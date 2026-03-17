import Aside from './Component/Aside/Aside';
import './Layout.css';
import Explorer from './Component/Explorer/Explorer';
import TabNav from './TabNav';
import { ButtonContext } from './ButtonContext';
import { useLocation } from 'react-router-dom';
import { useEffect, useContext } from 'react';

export default function LayoutMainDiv() {
  const { activeComponent, setActiveComponent } = useContext(ButtonContext);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace('/', '') || 'home';
    setActiveComponent(path);
  }, [location.pathname, setActiveComponent]);

  return (
    <div className='layout-Main-Div'>
      <Aside />
      {activeComponent && <Explorer />}
      <TabNav />
    </div>
  );
}