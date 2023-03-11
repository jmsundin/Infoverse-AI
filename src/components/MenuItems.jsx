import React from "react";

import "../assets/MenuItems.css";
import "../assets/MenuModal.css";

function MenuItems(props) {
  const routes = props.routes;
  const windowWidthIsLessThan500 = props.windowWidthIsLessThan500;

  const smallScreenListItemStyle = {
    listContainer: "menu-modal__container",
    listItem: "menu-modal__menu-item",
  };

  const largeScreenListStyles = {
    listContainer: "main-nav__items",
    listItem: "main-nav__item",
  };

  const styles = {};
  styles.listContainer = windowWidthIsLessThan500
    ? smallScreenListItemStyle.listContainer
    : largeScreenListStyles.listContainer;
  styles.listItem = windowWidthIsLessThan500
    ? smallScreenListItemStyle.listItem
    : largeScreenListStyles.listItem;

  const listItems = routes.map((route) => {
    return (
      <li key={route.page} className={styles.listItem}>
        <a href={route.path} alt={route.page}>
          {route.page.charAt(0).toUpperCase() + route.page.slice(1)}
        </a>
      </li>
    );
  });

  return <ul className={styles.listContainer}>{listItems}</ul>;
}

export default MenuItems;
