# DriveMax Spares Private Limited - website

React + Vite + Tailwind CSS v4 + Lucide icons.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```

Requires Node.js 18 or newer.

## Edit content

- All text, phone numbers, address, products, values: `src/data/content.js`
- Brand colours and fonts: `src/index.css` (`@theme` block)
- Real product photos: put images in `public/images/` and set `image: "/images/name.jpg"` on a product in `content.js`

## Make the contact form send messages

The form validates input but sends nothing until you connect a service.

1. Create a form at https://formspree.io (or any service that accepts a JSON POST).
2. Copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT=<your endpoint URL>`.
3. Restart `npm run dev`.

Until then, the site tells visitors their message was not sent and shows the phone numbers.
