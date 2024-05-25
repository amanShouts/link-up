import Navbar from "@/components/Navbar/Navbar";
import HomePage from "@/components/home-page.tsx";

export default function Home() {

  const test = useSelector(( state : any ) => state.counter.value )
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar/>
      <HomePage />
    </div>
  )
}
