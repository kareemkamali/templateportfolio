import React from 'react'
import Input from '../../shared/FormElements/Input'
import Card from '../../shared/UiElement/Card'
import { VALIDATOR_REQUIRE } from '../../shared/util/validators'

const EditHero = () => {

    const inputHandler=()=>{}
  return (
   <Card className='card_hero'>
<form className='hero_content'>
 <Input
 element='input'
 type='text'
 label='Your Name'
 errorText='Please Enter a valid value'
 validators={[VALIDATOR_REQUIRE()]}
 />
</form>
   </Card>
  )
}

export default EditHero