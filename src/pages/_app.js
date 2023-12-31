import '@/styles/globals.css'
import Nav from '@/components/Nav'
import localFont from 'next/font/local'
import Footer from '@/components/Footer'
import axios from 'axios'
import Head from 'next/head'
axios.defaults.baseURL = process.env.SERVER;
const poppins = localFont({
    src: [
        {
            path: './fonts/Cairo-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/Cairo-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: './fonts/Cairo-ExtraBold.ttf',
            weight: '900',
            style: 'normal'
        },
        {
            path: './fonts/Cairo-ExtraLight.ttf',
            weight: '200',
            style: 'normal'
        },
    ]
})

export default ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>IMGN</title>
                <link rel="shortcut icon" href="/images/favi.png" type="image/x-icon" />
            </Head>
            <main className={`${poppins.className} main-imgn`}>
                <div>
                    <Nav />
                    <Component {...pageProps} />
                </div>
                <Footer />
            </main>
        </>
    )
}
