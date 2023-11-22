import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        <meta name="viewport" content="viewport-fit=cover" />
      </head>
      <body >{children}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous" defer></Script>
      </body>
    </html>
  )
}