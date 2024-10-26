import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {}
        </Head>
        <body>
          {}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    const theme = localStorage.getItem('theme') || 'system';
                    const root = document.documentElement;
                    if (theme === 'dark') {
                      root.classList.add('dark');
                    } else if (theme === 'light') {
                      root.classList.add('light');
                    } else {
                      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                      root.classList.add(systemTheme);
                    }
                  } catch (e) {
                    console.error(e);
                  }
                })();
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
