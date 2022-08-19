import BaseLayout from "@/layouts/BaseLayout";
import "@/styles/globals.scss";
import "@/styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default MyApp;
