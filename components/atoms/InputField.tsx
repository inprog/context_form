import React, { useReducer, useContext, createContext, useEffect } from 'react'
import { useText, useDispatchText } from '../InputProvider'
//import { theme } from '../../styles/theme'

const INPUT = 'input'

type InputFieldProps = {
  initial_text: string
}

export const InputField: React.FC<InputFieldProps> = ({
  initial_text,
}: InputFieldProps): JSX.Element => {
  const text = useText()
  const dispatch = useDispatchText()

  const updateText = (event) => {
    if (dispatch) {
      console.log(event.target.value)
      console.log(text)
      dispatch({ type: INPUT, value: event.target.value })
    }
    console.log(event.target.value)
    console.log(text)
  }
  useEffect(() => {
  },[])
  return (
    <div className="container">
      <input onChange={updateText}></input>
      {text}

      <style jsx>{``}</style>
    </div>
  )
}
