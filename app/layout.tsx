import { ClientHeader } from '../libs/shared/ui/src/lib/client-header/client-header';
import { Amplify } from 'aws-amplify';
import awsExports from '@/aws-exports';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Menu from '../components/menu/menu';
import { Toaster } from 'react-hot-toast';
import '@aws-amplify/ui-react/styles.css';
import 'react-phone-number-input/style.css';
import 'react-toastify/dist/ReactToastify.css';

awsExports.oauth.domain = 'auth.worldtradex.com';
awsExports.oauth.redirectSignIn = process.env.NX_AUTH_SIGN_IN_REDIRECT || 'http://localhost:4200/sso';
awsExports.oauth.redirectSignOut = process.env.NX_AUTH_SIGN_OUT_REDIRECT || 'http://localhost:4200/logout';
Amplify.configure(awsExports);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='https://cdn.worldtradex.com/css/theme.min.css' />
        <link rel='stylesheet' href='https://cdn.worldtradex.com/css/custom.css' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css' />
        {/* <link rel='stylesheet' href='https://cdn.worldtradex.com/css/feather-icons.css' /> */}
        <link rel='stylesheet' href='https://wtx-cdn.s3.amazonaws.com/css/feather-icons.css' />
        <link rel="stylesheet" href="https://wtx-cdn.s3.amazonaws.com/css/custom.css" />

        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous"></script>
        <script async src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossOrigin="anonymous"></script>
      </head>
      <body>
        <Header />
        <ClientHeader />
        <Menu />
        <main>
          {children}
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}