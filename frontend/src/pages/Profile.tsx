import { useEffect } from "react";

export default function Profile() {

  useEffect(() => {
    // console.log(process.env.REACT_APP_API_KEY)
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000'+ '/users');
        const responseData = await response.json();
        
        console.log('responseData',responseData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>Profile</div>
  )
}
