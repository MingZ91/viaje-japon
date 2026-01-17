import '../styles/kyoto.css'

interface Activity {
  name: string
  description: string
  link?: string
}

const activities: Activity[] = [
  {
    name: 'Kinkaku-ji (Pabellón Dorado)',
    description: 'Templo zen cubierto de pan de oro, uno de los iconos de Kyoto.',
    link: 'https://japonismo.com/blog/viajar-japon-el-templo-kinkakuji-de-kioto',
  },
  {
    name: 'Fushimi Inari Taisha',
    description: 'Santuario famoso por sus miles de torii rojos que forman senderos por la montaña.',
    link: 'https://japonismo.com/blog/viaje-a-japon-el-santuario-fushimi-inari-en-kioto',
  },
  {
    name: 'Gion',
    description: 'Barrio tradicional donde se pueden ver geishas y casas de té históricas.',
    link: 'https://japonismo.com/blog/recorrido-a-pie-por-el-barrio-de-geishas-de-gion-en-kioto',
  },
  {
    name: 'Arashiyama y Bosque de Bambú',
    description: 'Zona pintoresca con puentes, templos y un famoso bosque de bambú.',
    link: 'https://japonismo.com/blog/que-ver-hacer-arashiyama-kioto',
  },
  {
    name: 'Castillo de Nijo',
    description: 'Castillo histórico con hermosos jardines y arquitectura samurái.',
    link: 'https://japonismo.com/blog/viajar-japon-el-castillo-nijo-nijo-jo-en-kioto',
  },
  {
    name: 'Mercado Nishiki',
    description: 'Mercado tradicional donde probar comidas locales y souvenirs.',
    link: 'https://japonismo.com/blog/mercado-nishiki-kioto-comida-callejera',
  },
  {
    name: 'Templo Kiyomizu-dera',
    description: 'Templo famoso por su terraza de madera y vistas panorámicas de Kyoto.',
    link: 'https://japonismo.com/blog/viajar-kioto-templo-kiyomizudera',
  },
    {
    name: 'Pokémon Center Kyoto',
    description: 'Tienda oficial de Pokémon con figuras, ropa y merchandising exclusivo.',
    link: 'https://www.pokemon.co.jp/shop/pokecen/kyoto/',
  },
    {
    name: 'Kyoto International Manga Museum',
    description: 'Museo de manga con colecciones históricas y exposiciones interactivas.',
    link: 'https://www.kyotomm.jp/en/',
  },
  {
    name: 'Animate Kyoto',
    description: 'Tienda especializada en anime, manga y merchandising de series populares.',
    link: 'https://www.animate.co.jp/',
  },
  {
    name: 'Toei Kyoto Studio Park',
    description: 'Parque temático con sets de películas de samuráis y ocasionalmente actividades de anime.',
    link: 'https://www.toei-eigamura.com/en/',
  },
    {
    name: 'Nara',
    description: 'ciervos',
    link: 'https://japonismo.com/blog/que-ver-y-hacer-en-nara-guia-basica-de-viaje',
  },
]

export default function KyotoList() {
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
