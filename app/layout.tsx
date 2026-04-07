import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { Merriweather } from 'next/font/google'
import Script from 'next/script'

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Vitória Marinho | Psiquiatria',
  description:
    'Vitoria Marinho | Psiquiatria | CRM/RN 12963 | CRM/PR 56010 | Reconquiste seu equilibro emocional com cuidado, e acolhimento',
}

const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG!

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GOOGLE_TAG_ID}');
        `}
      </Script>

      <body
        className={`${geistSans.variable} ${merriweather.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          {/* biome-ignore lint/a11y/useIframeTitle: <explanation> */}
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
