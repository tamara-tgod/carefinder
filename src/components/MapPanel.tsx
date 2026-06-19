'use client'

import { useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!

export default function MapPanel() {
    const mapContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!mapContainer.current) return

        const map = new mapboxgl.Map ({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [3.3792, 6.5244],
            zoom: 11
        })

        return () => map.remove()
    }, [])

    return (
            <div ref={mapContainer} className="w-full h-full"/>
       
    )
}