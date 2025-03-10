// src/pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="id">
        <Head>
          {/* Preconnect to Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          {/* Google Fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lexend:wght@400;500;600;700&display=swap" rel="stylesheet" />
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          
          {/* Meta Tags */}
          <meta name="description" content="Platform e-learning untuk persiapan SNBT bagi siswa SMA" />
          <meta name="keywords" content="SNBT, e-learning, persiapan SNBT, SNBP, ujian" />
          <meta name="author" content="Tim SNBTIn" />
          
          {/* Open Graph */}
          <meta property="og:title" content="SNBTIn - Platform E-Learning Persiapan SNBT" />
          <meta property="og:description" content="Platform belajar online yang dirancang khusus untuk membantu siswa SMA menghadapi SNBT dengan percaya diri." />
          <meta property="og:image" content="/images/og-image.jpg" />
          <meta property="og:url" content="https://snbtin.id" />
          <meta property="og:type" content="website" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="SNBTIn - Platform E-Learning Persiapan SNBT" />
          <meta name="twitter:description" content="Platform belajar online yang dirancang khusus untuk membantu siswa SMA menghadapi SNBT dengan percaya diri." />
          <meta name="twitter:image" content="/images/og-image.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;