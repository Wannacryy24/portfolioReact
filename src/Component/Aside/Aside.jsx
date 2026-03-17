import React, { useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CodeOutlined,
  ControlOutlined,
  CopyOutlined,
  EditOutlined,
  GithubOutlined,
  MailOutlined,
  SettingOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { ButtonContext } from '../../ButtonContext';
import './Aside.css';

const NAV_ITEMS = [
  {
    value: 'home',
    icon: <CopyOutlined />,
    className: 'copy-div custom-icon',
    color: "#f30000"
  },
  {
    value: 'about',
    icon: <CodeOutlined />,
    className: 'fragmented-div custom-icon',
    color: "#f30000" // Red color
  },
  {
    value: 'contact',
    icon: <MailOutlined />,
    className: 'mail-div custom-icon',
    color: "#f30000"
  },
  {
    value: 'project',
    icon: <EditOutlined />,
    className: 'pen-div custom-icon',
    color: "#f30000"
  },
  {
    value: 'articles',
    icon: <ControlOutlined />,
    className: 'explorer-div custom-icon',
    color: "#f30000"
  },
  {
    value: 'github',
    icon: <GithubOutlined />,
    className: 'github-div custom-icon',
    color: "#f30000"
  },
];

export default function Aside() {
  const navigate = useNavigate();
  const { activeComponent, setActiveComponent } = useContext(ButtonContext);

  const handleClickbtn = useCallback((e) => {
    const selectedComponent = e.currentTarget.getAttribute('data-value');

    if (!selectedComponent) return;

    if (selectedComponent === activeComponent) {
      // 🔥 SAME CLICK → CLOSE
      setActiveComponent(null);
    } else {
      // 🔥 DIFFERENT CLICK → OPEN
      setActiveComponent(selectedComponent);
      navigate(selectedComponent);
    }
  }, [navigate, setActiveComponent, activeComponent]);

  return (
    <aside>
      <div className='top-aside-Div'>
        {NAV_ITEMS.map(({ value, icon, className, color }) => {
          // Split the classes
          const baseClasses = className.split(' ');

          // Determine the final className
          let finalClassName = className;
          if (activeComponent === value) {
            // Replace the div-specific class with its active version, keep custom-icon
            finalClassName = baseClasses.map(c =>
              c === 'custom-icon' ? c : `${c}-active`
            ).join(' ');
          }

          return (
            <div
              key={value}
              className={finalClassName}
              onClick={handleClickbtn}
              data-value={value}
              role="button"
              tabIndex={0}
              aria-current={activeComponent === value ? 'page' : undefined}
            >
              {React.cloneElement(icon, {
                style: {
                  fontSize: "1.8rem",
                  ...(color && { color })
                }
              })}
            </div>
          );
        })}
      </div>

      <div className='bottom-aside-Div'>
        <div className='user-aside-div custom-icon' role="button" tabIndex={0}>
          <TeamOutlined style={{ fontSize: "2.2rem" }} />
        </div>

        <div className='setting-aside-div custom-icon' role="button" tabIndex={0}>
          <SettingOutlined style={{ fontSize: "2.2rem" }} />
        </div>
      </div>
    </aside>
  );
}