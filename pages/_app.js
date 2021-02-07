import Head from "next/head";
import { Header, Footer } from "components";

import "../styles/plugins.css";
import "../styles/style.css";
import "../styles/green-style.css";

function CommonScripts() {
  return (
    <>
      <script type="text/javascript" src="/plugins/jquery.min.js"></script>
      <script type="text/javascript" src="/plugins/viewportchecker.js"></script>
      <script type="text/javascript" src="/plugins/bootstrap.min.js"></script>
      <script type="text/javascript" src="/plugins/bootsnav.js"></script>
      <script type="text/javascript" src="/plugins/select2.min.js"></script>
      <script type="text/javascript" src="/plugins/wysihtml5-0.3.0.js"></script>
      <script
        type="text/javascript"
        src="/plugins/bootstrap-wysihtml5.js"
      ></script>
      <script type="text/javascript" src="/plugins/datedropper.min.js"></script>
      <script type="text/javascript" src="/plugins/dropzone.js"></script>
      <script type="text/javascript" src="/plugins/loader.js"></script>
      <script
        type="text/javascript"
        src="/plugins/owl.carousel.min.js"
      ></script>
      <script type="text/javascript" src="/plugins/slick.min.js"></script>
      <script type="text/javascript" src="/plugins/gmap3.min.js"></script>
      <script
        type="text/javascript"
        src="/plugins/jquery.easy-autocomplete.min.js"
      ></script>
      <script src="/plugins/custom.js"></script>
      <script type="text/javascript" src="/plugins/counterup.min.js"></script>
    </>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <div className="wrapper">
        <Header />
        <Component {...pageProps} />
        <CommonScripts />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
