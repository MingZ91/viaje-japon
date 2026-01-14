import { useState } from 'react'

function HotelSelector() {
  const [showHotels, setShowHotels] = useState(false)

  const hotels = [
    {
      name: 'Tokyo 1 - Shinjuku YC Hostel-SJ0399',
      url: 'https://www.booking.com/hotel/jp/shinjuku-yc-hostel.es.html?aid=318615&label=New_Spanish_ES_ES_21463012705-MdTXWB4HpKUSCKFdbQ0nigS640874830729%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-64415224945%3Alp9214585%3Ali%3Adec%3Adm%3Aag21463012705%3Acmp340207705&sid=ac3f1e2b72097c0af634be875509ca28&dest_id=-246227&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1768413212&srpvid=7c9c7dcced2206c9&type=total&ucfs=1&',
    },
    {
      name: 'Osaka',
      url: 'https://www.airbnb.es/rooms/1170709361090052403?viralityEntryPoint=1&s=76&source_impression_id=p3_1768412867_P3OEvRKQghN_kftl',
    },
    {
      name: 'Kyoto',
      url: 'https://www.booking.com/hotel/jp/ms-est-shijo-karasuma.es.html?aid=311090&label=ms-est-shijo-karasuma-bgaos_Dy5ick_GfQYMghNQSM475931557355%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-297908995621%3Alp1005545%3Ali%3Adem%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfOICo1LOVmedtQq00Co34c-Share-OSZdEXB%401768398435-Share-IKCqj2%401768402607&sid=ac3f1e2b72097c0af634be875509ca28&dest_id=-235402&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1768402637&srpvid=694a6924f15702b6&type=total&ucfs=1&',
    },
    {
      name: 'Tokyo 2',
      url: 'https://www.airbnb.es/rooms/1399764565783175882?viralityEntryPoint=1&s=76&source_impression_id=p3_1768412806_P3LzFGSHOG9hzVqM',
    },
  ]

  const handleHotelClick = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div className="hotel-selector">
      <button
        onClick={() => setShowHotels((s) => !s)}
        aria-expanded={showHotels}
        aria-controls="hotels-list"
      >
        Hoteles
      </button>

      {showHotels && (
        <div id="hotels-list" className="dropdown" role="menu">
          {hotels.map((hotel) => (
            <button
              key={hotel.name}
              role="menuitem"
              onClick={() => handleHotelClick(hotel.url)}
              className="hotel-button"
            >
              {hotel.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default HotelSelector
