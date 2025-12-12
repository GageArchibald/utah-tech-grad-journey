const Confetti = () => {
  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${3 + Math.random() * 3}s`,
    color: ['bg-coral', 'bg-gold', 'bg-teal', 'bg-lavender', 'bg-mint'][Math.floor(Math.random() * 5)],
    size: Math.random() > 0.5 ? 'w-2 h-2' : 'w-3 h-3',
    shape: Math.random() > 0.5 ? 'rounded-full' : 'rounded-sm rotate-45',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className={`absolute ${piece.size} ${piece.color} ${piece.shape} opacity-80`}
          style={{
            left: piece.left,
            top: '-20px',
            animation: `confetti ${piece.duration} linear infinite`,
            animationDelay: piece.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
