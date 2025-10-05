export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl floating" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl floating-delayed" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl floating" />
      <div className="absolute bottom-40 right-1/3 w-72 h-72 bg-accent/6 rounded-full blur-3xl floating-delayed" />
    </div>
  )
}
