import 'nextra-theme-blog/style.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/main.css'
import MailchimpSubscribe from "react-mailchimp-subscribe"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
     Subscribe <MailchimpSubscribe className="mailbox" url={process.env.REACT_APP_MAILCHIMP_URL} />
      <Component {...pageProps} />
     
    </>
  )
}
