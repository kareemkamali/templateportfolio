import React from 'react'
import { NavLink } from 'react-router-dom'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const ExperienceNavbar = () => {
  return (
    <Tabs>
    <TabList className='experience_nav_item'>
      <Tab ><h1>GMS</h1></Tab>
      <Tab><h1>Magma</h1></Tab>
      <Tab><h1>Magma</h1></Tab>
      <Tab><h1>Magma</h1></Tab>
    </TabList>
    <TabPanel>
<div className='panel_container'>
    <div className='job_title'>
    <p>Mobile Developer @ GMS</p>
    <p>May 2020-2022</p>
    </div>

    <div className='job_desc'>
        <p>Write modern, performant, maintainable code for a diverse array of client and internal projects</p>
<p>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript,
   TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</p><p>
Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</p>
    </div>
</div>
</TabPanel>
<TabPanel>
 <h2>Any content 2</h2>
</TabPanel>
<TabPanel>
 <h2>Any content 2</h2>
</TabPanel>
<TabPanel>
 <h2>Any content 2</h2>
</TabPanel>
  </Tabs>

  )
}

export default ExperienceNavbar