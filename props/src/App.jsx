import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CustomCard from './components/CustomCard';

function App() {
 
  return (
    <div className='bg-black  w-screen h-screen '>
      {/* <h1 className='text-black bg-green-500 p-2 rounded-lg'>Hello Rita</h1> */}
      <CustomCard userName= 'chai aur code' btnText = 'View More' />
      <CustomCard userName= 'Hii Rita' btnText = 'View More' />
      <CustomCard userName= 'Hii Amrita' btnText = 'View More' />
      <CustomCard userName= 'Hii Rita' btnText = 'View More' />
      </div>
   
  );
}
export default App;
