// components/TokyoList.tsx
import '../styles/kyoto.css'

interface Activity {
  name: string
  description: string
  link?: string
}

const activities: Activity[] = [
  // Lugares culturales
  {
    name: 'Templo Senso-ji',
    description: 'Templo budista más antiguo de Tokyo, en el barrio de Asakusa.',
    link: 'https://japonismo.com/blog/viajar-a-tokio-senso-ji-el-templo-de-asakusa',
  },
  {
    name: 'Palacio Imperial de Tokyo',
    description: 'Residencia principal de la familia imperial japonesa.',
    link: 'https://japonismo.com/blog/viajar-a-tokio-el-palacio-imperial-de-tokio',
  },
  {
    name: 'Meiji Jingu',
    description: 'Santuario sintoísta rodeado de bosque urbano en Shibuya.',
    link: 'https://japonismo.com/blog/viajar-a-tokio-el-santuario-de-meiji',
  },

  // Lugares de anime/manga
  {
    name: 'Akihabara',
    description: 'Barrio famoso por tiendas de anime, manga, figuras y videojuegos.',
    link: 'https://japonismo.com/blog/viaje-a-tokio-akihabara',
  },
  {
    name: 'Pokémon Center Tokyo',
    description: 'Tienda oficial de Pokémon con merchandising y eventos.',
    link: 'https://www.pokemoncenter-online.com/',
  },
  {
    name: 'Ghibli Museum',
    description: 'Museo dedicado a Studio Ghibli y sus películas.',
    link: 'https://www.ghibli-museum.jp/en/',
  },
  {
    name: 'Ikebukuro - Sunshine City',
    description: 'Zona con tiendas de anime y Pokémon Center Mega Tokyo.',
    link: 'https://japon-secreto.com/ikebukuro-tokio-que-ver-y-hacer-tiendas-otaku-friki/',
  },
  {
    name: 'Odaiba',
    description: 'Isla artificial con atracciones de anime, videojuegos y la estatua de Gundam.',
    link: 'https://japonismo.com/blog/viaje-a-japon-odaiba-la-isla-artificial-de-tokio',
  },
    {
    name: 'Your name',
    description: 'sitios de your name',
    link: 'https://en.japantravel.com/tokyo/your-name-real-life-locations/45058',
  },
      {
    name: 'Narita',
    description: '',
    link: 'https://japonismo.com/blog/guia-narita',
  },
]

export default function TokyoList() {
  return (
     <div className="kyoto-list">
      <h2>Cosas que hacer en Kyoto</h2>
      <div className="kyoto-list-cards">
        {activities.map((activity) => (
          <div key={activity.name} className="kyoto-list-card">
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
            {activity.link && (
              <a href={activity.link} target="_blank" rel="noopener noreferrer">
                Más info
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
