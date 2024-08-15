import React from 'react'
import './brand.css'
import { google, atlassian, dropbox, slack, shopify } from './imports'


const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className='img'>
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atlassian} alt="atlassian" />
        <img src={shopify} alt="shopify" />
        <img src={dropbox} alt="dropbox" />
      </div>
    </div>
  )
}

export default Brand
