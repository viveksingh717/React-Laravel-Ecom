import React from 'react'

import Header from './Header';
import PublicComponents from '../../Components/PublicComponents';
// import Home from '../../Components/Home';

function MainPage() {
  return (
    <div>
        <Header />
        <section>
            <PublicComponents />
        </section>
    </div>
  )
}

export default MainPage;
