export default function SplineModel() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-accent/10 to-purple-600/10 rounded-2xl flex items-center justify-center border border-accent/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-600/30 rounded-full animate-bounce"></div>
      </div>
      
      {/* Content */}
      <div className="text-center p-6 relative z-10">
        <div className="text-4xl font-bold text-accent mb-3 animate-pulse">RAGSPRO</div>
        <div className="w-12 h-1 bg-accent mx-auto mb-3"></div>
        <p className="text-white text-sm font-medium mb-1">AI Product Development</p>
        <p className="text-gray-400 text-xs">Fast • Reliable • Innovative</p>
      </div>
    </div>
  )
}