const videos = [
  {
    id: "E_h5DjCnnss",
    title: "Reparação do Vidro Traseiro - iPhone 13 Pro",
    description: "Processo completo de substituição do vidro traseiro na LopesTech",
  },
  {
    id: "yJvd0Ruu8lk",
    title: "Substituição da Câmera Frontal - iPhone 15 Pro",
    description: "Substituição da câmera frontal com cuidado e precisão",
  },
  {
    id: "QjtyUNCyMd0",
    title: "Ecrã, Bateria e Chassis - iPhone 8",
    description: "Substituição completa de ecrã, bateria e chassis na LopesTech",
  },
  {
    id: "KoIj4a6GTwc",
    title: "iPhone XR - Antes e Depois",
    description: "Reparação completa de iPhone XR — chassis novo e ecrã novo",
  },
];

export default function VideoShowcase() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
            Veja o processo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Reparação ao Vivo
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Acompanhe o processo completo de uma reparação, do início ao fim.
            Transparência total no nosso trabalho.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
              <div className="aspect-[9/16]">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-sm">{video.title}</h3>
                <p className="text-gray-400 text-xs mt-1">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
