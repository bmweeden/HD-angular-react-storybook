export const layout = (content) => `
  <iframe id="story-iframe" style="width: 100%; height: 100vh; border: none;"></iframe>
  <script>
    const iframe = document.getElementById('story-iframe');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(\`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Wakakaka</title>
      </head>
      <body ng-app="siteApp">
        <header>
          <h1>Your Header</h1>
        </header>
        <main>
          ${content}
        </main>
        <footer>
          <p>Your Footer</p>
        </footer>
      </body>
      </html>
    \`);
    iframeDoc.close();
  </script>
`;
