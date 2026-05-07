import { useMemo, useState } from 'react'

export default function App() {
  const [title, setTitle] = useState('Cahaya di Ujung Malam')
  const [theme, setTheme] = useState('lagu tentang bangkit dari patah hati')
  const [genre, setGenre] = useState('Pop Indonesia')

  const prompt = useMemo(() => {
    return `Create a cinematic emotional song for Suno AI.\nTitle: ${title}\nGenre: ${genre}\nTheme: ${theme}\nInclude emotional chorus and modern production.`
  }, [title, genre, theme])

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(prompt)
    alert('Prompt copied!')
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Suno AI Song Generator</h1>
        <p>Create powerful prompts for Suno AI music generation.</p>

        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Song title" />
        <input value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" />
        <textarea value={theme} onChange={(e) => setTheme(e.target.value)} rows="5" placeholder="Song theme" />

        <button onClick={copyPrompt}>Copy Prompt</button>

        <pre>{prompt}</pre>
      </div>
    </div>
  )
}
