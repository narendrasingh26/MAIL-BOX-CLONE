import React from 'react'
import '../component/EmailList.css'
import EmailListSetting from './EmailListSetting'
import EmailType from './EmailType'
import EmailBody from './EmailBody'

const EmailList = () => {
  return (
    <div className='emaillist'>
        <EmailListSetting/>
        <EmailType/>
        <EmailBody/>
        

    </div>
  )
}

export default EmailList