import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from './../Components/Icons/HouseIcon';
import { ElementIcon } from './../Components/Icons/ElementIcon';
import { EditIcon } from './../Components/Icons/EditIcon';
import { FAQIcon } from '../Components/Icons/FaqIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink className="aside-row" to="dashboard">
              <HouseIcon className="menu-icon" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blocks">
              <ElementIcon className="menu-icon" />
              Bloki
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="exercises">
              <EditIcon className="menu-icon" />
              Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blog">
              <EditIcon className="menu-icon" />
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="cv">
              <EditIcon className="menu-icon" />
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="faq">
              <FAQIcon className="menu-icon" />
              FAQ
            </NavLink>
          </li>
        </ul>
      </nav>

    </aside>
  );
}
