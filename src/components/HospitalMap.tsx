'use client'

import { useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!

interface HospitalMapProps {
    latitude: number
    longitude: number
}

export default function HospitalMap({latitude, longitude,}: HospitalMapProps) {
    const mapContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!mapContainer.current) return

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [longitude, latitude],
            zoom: 14,
        })

    map.on('load', () => {
        map.resize()
    })

        new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map)

        return () => map.remove()
    }, [latitude, longitude])

    return (
        <div
        ref={mapContainer}
        className="w-full h-64 rounded-t-lg overflow-hidden">
            
        </div>
    )
}