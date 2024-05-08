import "@/styles/globals.scss";

export default function App({ Component, pageProps }: any) {
  return <div className="min-h-screen">
    <Component {...pageProps} />
  </div>
}
