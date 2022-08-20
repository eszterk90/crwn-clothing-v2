import React from 'react'
import {FormInputLabel, Input, Group} from './form-input-styles'

function FormInput({label, ...otherProps}) {
  return (
    <Group>
    <Input {...otherProps}/>
    {label && (
        <FormInputLabel shrink={otherProps.defaultValue.length}>
          {label}
        </FormInputLabel>
    )}
    </Group>

  )
}

export default FormInput