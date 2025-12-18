import React from 'react'
import Child from './Child'
import reactLogo from './assets/react.svg';

const CharacterProfile = () => {
  return (
    <div>
        <Child name="Alpha" level="5" skill="Killing" image={reactLogo}/>
    </div>
  )
}

export default CharacterProfile