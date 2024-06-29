import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: {
    template: '%s / Login-page',
    default: "Login"
  },
  description: "Responsive page."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 flex min-h-screen relative flex-col">
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full text-dark-emphasis font-family-sans-serif">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
