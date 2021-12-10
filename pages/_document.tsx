import Document, {Head, Html, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render() {
    const titlePrefix = process.env.NEXT_PUBLIC_AMBIENTE != 'PRODUCAO' ? `${process.env.NEXT_PUBLIC_AMBIENTE} - ` : '';
    return (
      <Html>
        <Head>
          <title>{titlePrefix}Ilooks</title>
          <link rel="icon" type="image/png" href={require("../images/favicon.png")}></link>
          {process.env.NEXT_PUBLIC_AMBIENTE == 'PRODUCAO' && <script async src="https://www.googletagmanager.com/gtag/js?id=G-X46E81RTF1"></script>}
          {process.env.NEXT_PUBLIC_AMBIENTE == 'PRODUCAO' && <script
						dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X46E81RTF1', {
              page_path: window.location.pathname,
            });
          `,
            }}
					/>
          }
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument;
