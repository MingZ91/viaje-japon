// components/OsakaList.tsx
import '../styles/kyoto.css' // Reutilizamos el mismo estilo que KyotoList

interface Activity {
  name: string
  description: string
  link?: string
}

const activities: Activity[] = [
  // Lugares culturales
  {
    name: 'Castillo de Osaka',
    description: 'Castillo histórico con jardines y museo sobre la historia de Osaka.',
    link: 'https://www.osakacastle.net/',
  },
  {
    name: 'Dotonbori',
    description: 'Zona famosa por sus luces de neón, restaurantes y ambiente vibrante.',
    link: 'https://www.osaka-info.jp/en/areas/dotonbori/',
  },
  {
    name: 'Shitenno-ji',
    description: 'Uno de los templos budistas más antiguos de Japón.',
    link: 'https://www.osaka-info.jp/en/places/shitennoji/',
  },
  {
    name: 'Umeda Sky Building',
    description: 'Edificio con plataforma de observación y vistas panorámicas de Osaka.',
    link: 'https://www.skybldg.co.jp/en/',
  },
  // Sitios frikis / anime / manga
  {
    name: 'Pokémon Center Osaka',
    description: 'Tienda oficial de Pokémon con merchandising exclusivo y figuras.',
    link: 'https://www.pokemon.co.jp/shop/pokecen/osaka/',
  },
  {
    name: 'Animate Osaka Nipponbashi',
    description: 'Tienda de anime y manga con colecciones de series populares.',
    link: 'https://www.animate.co.jp/',
  },
  {
    name: 'Nipponbashi Den Den Town',
    description: 'Barrio otaku con tiendas de anime, manga, figuras y electrónica.',
    link: 'https://www.osaka-info.jp/en/areas/den-den-town/',
  },
  {
    name: 'Universal Studios Japan – Zona de Anime',
    description: 'Parque temático con atracciones de anime y series populares.',
    link: 'https://www.usj.co.jp/e/',
  },
    {
    name: 'Den den Town',
    description: 'el «Akihabara de Osaka»',
    link: 'https://japonismo.com/blog/viajar-a-osaka-den-den-town',
  },
]

export default function OsakaList() {
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
