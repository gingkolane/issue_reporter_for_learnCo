import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'
import logo from '../assets/logo.svg'
import search from '../assets/search.png'
import friends from '../assets/friends.png'

export default class TopNavContainer extends Component {

  handleTopNavRepoClick = (e, data) => {
    this.props.handleTopNavRepoClick(data.id);
  }

  render() {
    const displayOneRepoTitle = this.props.repos.slice(0,10).map(repo => 
      <Dropdown.Item id={repo.id} key={repo.github_repo_id} onClick={this.handleTopNavRepoClick}> {repo.name} </Dropdown.Item>
    )

    return (
      <Menu>
        <Menu.Item>
          <img src={logo} alt="logo" />
        </Menu.Item>
        <Dropdown text='Curriculum' pointing className='link item'>
          <Dropdown.Menu>
            <Dropdown.Item>Schedule</Dropdown.Item>
            <Dropdown.Item>Discussion Questions</Dropdown.Item>
            <Dropdown.Item>
              <Dropdown text='React Labs'>
                <Dropdown.Menu>
                  {displayOneRepoTitle}
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Practice Challenges</Dropdown.Item>
            <Dropdown.Item>Project Mode</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item>Assignments</Menu.Item>
        {/* <Menu.Item as={ Link } to='tableau'>Analysis</Menu.Item> */}
        {/* { as: Link, content: "About Us", key: "about", path:"/about"},
        <Menu.Item as={ Link } name='profile' to='profile'></Menu.Item> */}
        <Menu.Item>Help</Menu.Item>
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