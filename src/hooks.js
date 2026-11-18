import { useEffect } from 'react'

/* Define <title> e meta description da página atual */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}
