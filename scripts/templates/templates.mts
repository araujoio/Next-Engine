
/**
 * Default page template
*/
export const pageTemplate = (name: string) => `\

export default function ${name}Page() {
  return (
    <main>
      <h1>${name}</h1>
    </main>
  )
}
`

/**
 * Default public layout template
*/
export const publicLayoutTemplate = () => `\

export default function PublicLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  )
}
`

/**
 * Default private layout template for authenticated routes
*/
export const privateLayoutTemplate = () => `\

export default function PrivateLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  )
}
`