import { Button } from "@/components/ui/button"
import { decrement, increment } from "@/store/slice/counterSlice"
import { useDispatch, useSelector } from "react-redux"

export default function Home() {

  const test = useSelector(( state : any ) => state.counter.value )
  const dispatch = useDispatch();

  return (
    <div>
      sample redux test { test }
      <Button onClick={()=>{ dispatch(increment()) }}>+</Button>
      <Button onClick={()=>{ dispatch(decrement()) }}>-</Button>
    </div>
  )
}
