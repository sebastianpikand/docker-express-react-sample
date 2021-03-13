import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  guiMenuWrapper,
  guiMenuWrapper__menuElement,
  guiMenuWrapper__menuElement__active,
} from './_guiMenu.module.scss';

const menuItems = [
  'typography',
  'colors',
  'gradients',
  'buttons',
  'text-inputs',
  'contained-text-inputs',
  'selects',
  'checkboxes',
  'radiogroups',
  'icons',
  'highlights',
  'icon-backgrounds',
  'tables',
];

const GUIMenu = () => {
  return (
    <div className={guiMenuWrapper}>
      {menuItems.map((menuItem, index) => (
        <NavLink
          key={index}
          activeClassName={`${guiMenuWrapper__menuElement__active} highlight-active`}
          className={guiMenuWrapper__menuElement}
          to={`/gui/${menuItem}`}
        >
          {menuItem}
        </NavLink>
      ))}
    </div>
  );
};

export default GUIMenu;
