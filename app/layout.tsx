import { siteConfig } from '@/config/site';
import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import Provider from '@/components/provider';
import { RobotoFont, MontserratFont } from "@/components/fonts/fonts";


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: '/logo.svg',
      href: '/logo.svg',
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider>
        <body style={MontserratFont.style}>
          {children}
        </body>
        <Toaster />
      </Provider>
      </html>
  )
}
