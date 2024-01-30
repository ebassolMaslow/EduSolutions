import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

export const getMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FzYWthYm9uZSIsImEiOiJjbHJweWgzZjIwMng1MmxvNjAxbmtnd3hjIn0.lsP5dAArAUsePHvWo7FGQA'

    const longitude = 37.476842
    const latitude = 55.712477

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-day-v1',
        center: [longitude, latitude],
        zoom: 15,
        attributionControl: false,
    })

    const marker = new mapboxgl.Marker({
        color: 'red',
    })
        .setLngLat([longitude, latitude])
        .addTo(map)

    return map
};