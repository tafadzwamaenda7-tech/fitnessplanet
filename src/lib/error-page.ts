export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { --canvas: #F5F5F7; --surface: #FFFFFF; --text: #08090B; --muted: #6E6E73; --signal: #FFF200; }
      body { font: 16px/1.7 "Open Sans", ui-sans-serif, system-ui, sans-serif; background: var(--canvas); color: var(--text); min-height: 100vh; margin: 0; padding: 1.5rem; box-sizing: border-box; }
      main { max-width: 44rem; margin: 4rem auto; padding: 2rem; background: var(--surface); }
      .label { font-size: .6875rem; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; color: var(--muted); }
      h1 { font: 800 clamp(2rem, 6vw, 3rem)/1.05 "Montserrat", ui-sans-serif, system-ui, sans-serif; letter-spacing: -.035em; margin: 1.25rem 0 0; }
      p { color: var(--muted); margin: 1rem 0 0; }
      .actions { display: flex; gap: .75rem; flex-wrap: wrap; margin-top: 2rem; }
      a, button { padding: .8rem 1.25rem; border: 0; border-radius: 4px; font: 700 .875rem/1 "Open Sans", ui-sans-serif, system-ui, sans-serif; cursor: pointer; text-decoration: none; }
      .primary { background: var(--signal); color: var(--text); }
      .secondary { background: transparent; color: var(--text); }
      .meta { margin-top: 3rem; font-size: .75rem; color: var(--muted); }
    </style>
  </head>
  <body>
    <main>
      <span class="label">Load error</span>
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
      <div class="meta">Fitnessplanet Harare · Harare Show Grounds, Stand 126, Harare, Zimbabwe</div>
    </main>
  </body>
</html>`;
}
