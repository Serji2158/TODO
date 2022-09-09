// import React, {useState} from 'react'
import React, {useRef} from 'react'

interface TodoFormProps {
  onAdd(title:string): void
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = props => {
  // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // console.log(title)
      // setTitle('')
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
} 
  }

  return (
    <div className='input-field mt2'>
      <input
        ref={ref}
        // onChange={changeHandler}
        onKeyPress={keyPressHandler}
        // value={title}
        type='text'
        id='title'
        placeholder='PUT YOUR TASK' />
      <label htmlFor='title' className='active'>
        PUT YOUR TASK
      </label>
    </div>
  )
}

export default TodoForm