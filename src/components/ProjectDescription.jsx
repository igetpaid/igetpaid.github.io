export default function ProjectDescription({ description, className = 'text-[var(--section-text-secondary)] leading-relaxed' }) {
  if (!description) return null
  return (
    <>
      {description.split('\n').filter(Boolean).map((paragraph, i) => (
        <p key={i} className={className}>{paragraph}</p>
      ))}
    </>
  )
}
