import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home Page', () => {
  it('renders the Next.js logo', () => {
    render(<Home />)
    const logo = screen.getByAltText('Next.js logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders the getting started text', () => {
    render(<Home />)
    const text = screen.getByText(/Get started by editing/i)
    expect(text).toBeInTheDocument()
  })

  it('renders the code snippet for page.tsx', () => {
    render(<Home />)
    const code = screen.getByText('src/app/page.tsx')
    expect(code).toBeInTheDocument()
  })

  it('renders the Deploy now link', () => {
    render(<Home />)
    const deployLink = screen.getByRole('link', { name: /Deploy now/i })
    expect(deployLink).toBeInTheDocument()
    expect(deployLink).toHaveAttribute('href', expect.stringContaining('vercel.com'))
  })

  it('renders the Read our docs link', () => {
    render(<Home />)
    const docsLink = screen.getByRole('link', { name: /Read our docs/i })
    expect(docsLink).toBeInTheDocument()
    expect(docsLink).toHaveAttribute('href', expect.stringContaining('nextjs.org/docs'))
  })

  it('has correct target and rel attributes for external links', () => {
    render(<Home />)
    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
