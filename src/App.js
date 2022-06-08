import React from 'react';
import './output.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import NavMobile from './NavMobile';

function App() {
  const [menu, setMenu] = React.useState(false); // True State Mobile Navigasyon Açık
  const [search, setSearch] = React.useState(false); // True State Arama Çubuğu Açık
  return (
    <>
    <Header search={search} setMenu={setMenu}/>
    <NavMobile menu={menu} setSearch={setSearch}/>
    <div className='container-md p-xs-0'>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    </div>
    </>
  );
}

export default App;
