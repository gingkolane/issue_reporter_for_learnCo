import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'

export default class TopNav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item>Logo</Menu.Item>
        <Dropdown text='Curriculum' pointing className='link item'>
          <Dropdown.Menu>
            <Dropdown.Item>Schedule</Dropdown.Item>
            <Dropdown.Item>Discussion Questions</Dropdown.Item>
            <Dropdown.Item>
              <Dropdown text='React Labs'>
                <Dropdown.Menu>
                  <Dropdown.Item>Shirts</Dropdown.Item>
                  <Dropdown.Item>Pants</Dropdown.Item>
                  <Dropdown.Item>Jeans</Dropdown.Item>
                  <Dropdown.Item>Shoes</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Practice Challenges</Dropdown.Item>
            <Dropdown.Item>Project Mode</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item>Assignments</Menu.Item>
        <Menu.Item>Help</Menu.Item>

        <Menu.Menu position='right'>

          <Menu.Item name='search'>
            Search
          </Menu.Item>

          <Menu.Item name='friends'>
            Friends
          </Menu.Item>

          <Menu.Item name='dm'>
            DM
          </Menu.Item>

          <Menu.Item name='karma' active={activeItem === 'karma'} onClick={this.handleItemClick}>
            Karma
          </Menu.Item>

          <Menu.Item name='user' active={activeItem === 'user'} onClick={this.handleItemClick}>
            User
          </Menu.Item>
        </Menu.Menu>

      </Menu>
    )
  }
}