"use client";

import { useEffect, useRef, useState } from "react";
import Map, { MapRef } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

// Dublin coordinates
const DUBLIN_COORDS = {
    longitude: -6.2603,
    latitude: 53.3498,
};

export default function MapBackground() {
    const mapRef = useRef<MapRef>(null);
    const [viewState, setViewState] = useState({
        longitude: DUBLIN_COORDS.longitude,
        latitude: DUBLIN_COORDS.latitude,
        zoom: 3, // Start zoomed out
    });

    useEffect(() => {
        // Animation: Zoom in to Dublin after mount
        const timer = setTimeout(() => {
            mapRef.current?.flyTo({
                center: [DUBLIN_COORDS.longitude, DUBLIN_COORDS.latitude],
                zoom: 13,
                duration: 6000, // 6 seconds duration
                essential: true,
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full h-full relative opacity-60">
            {/* Gradient Mask for "Fading Away" effect */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-l from-transparent via-transparent to-[#0B1026]" />
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#0B1026] via-transparent to-[#0B1026]" />

            <Map
                ref={mapRef}
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
                style={{ width: "100%", height: "100%" }}
                // Dark Matter style from Carto (free, no API key needed for basic usage)
                mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
                attributionControl={false}
                scrollZoom={false}
                dragPan={false}
                dragRotate={false}
                doubleClickZoom={false}
                touchZoomRotate={false}
                keyboard={false}
            />
        </div>
    );
}
