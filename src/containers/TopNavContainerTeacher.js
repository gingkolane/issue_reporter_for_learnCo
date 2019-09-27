import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react'
import logo from '../assets/logo.svg'
import search from '../assets/search.png'
import friends from '../assets/friends.png'

export default class TopNavContainerTeacher extends Component {

  render() {

    return (
      <Menu>
        <Menu.Item>
          <img src={logo} alt="logo" />
        </Menu.Item>
        <Menu.Item>My cohorts</Menu.Item>
        <Menu.Item>Assignments</Menu.Item>
        <Menu.Item as={ Link } to='teacher'>Lab completion Analysis</Menu.Item>
        <Menu.Item as={ Link } to='student'>Student View</Menu.Item>
        <Menu.Menu position='right'>

          <Menu.Item name='search'>
            <img src={search} alt="search" />
          </Menu.Item>

          <Menu.Item name='friends'>
            <img src={friends} alt="friends" />
          </Menu.Item>

          <Menu.Item name='dm'>
            DM
          </Menu.Item>

          <Menu.Item name='karma'>
            Karma {this.props.currentUser.karma}
          </Menu.Item>

          <Menu.Item name='user'>
            <img src={this.props.currentUser.avatar_url} alt="avatar"/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}