import React from 'react'
import Personal from './Contents/Personal.js'
import Account from './Contents/Account.js'
import Password from './Contents/Password.js'
import Hobbies from './Contents/Hobbies.js'

function ProfileSetting(index) {
  if(index === "") return <Personal />
  else if(index === "account") return <Account />
  else if(index === "password") return <Password />
  else if(index === "hobbies") return <Hobbies />
}

export default ProfileSetting