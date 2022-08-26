import React, {useContext} from 'react';
import { taskContext } from '../context/taskContext'


const Home = () => {
  const { hello } = useContext(taskContext);
  console.log(hello);
  return (
    <div>Hello word</div>
  )
}

export default Home;