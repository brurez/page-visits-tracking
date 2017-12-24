import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const TopMenu = () => {
  return (
    <Menu stackable className="App-top" as="header">
      <div className="ui container">
        <Menu.Item as={NavLink} exact to="/">
          <h1 className="App-top-title"><i className="line chart icon"/> Desafio RD</h1>
        </Menu.Item>
        <Menu.Item as={NavLink} to="/howto">
          <i className="icon info circle" /> Como Usar
        </Menu.Item>
      </div>
    </Menu>
  );
};

export default TopMenu;