'use client';

// import store from 'libs/helper/src/lib/store';
// import { Provider } from 'react-redux';
import Footer from '../footer/footer';
import Header from '../header/header';


export interface PublicLayoutProps {
  children?: React.ReactNode;
}

function PublicLayout(props: PublicLayoutProps) {
  return (
    <div>
      {/* <Provider store={store}> */}
        <Header />
        <div className='main'>
          <main className='buyer-main'>
            <section className='container'>
              {props.children}
            </section>
          </main>
        </div>
        <Footer />
      {/* </Provider> */}
    </div>
  );
}

export default PublicLayout;