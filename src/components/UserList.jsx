
// import { useStore } from 'zustand'
import {useStore} from "../stores/fristStore"
import {useStore2} from "../stores/store2"


function Counter() {
  
  const { count, inc } = useStore()
  const { count2, inc2 } = useStore2()
  return (
    <div>
      <span>{count} va {count2}</span>
      <button onClick={inc}>one up</button>
      <button onClick={inc2}>one difuidufoidsuf</button>
    </div>
  )
}

export default Counter