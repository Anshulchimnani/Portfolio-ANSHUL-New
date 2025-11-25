"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Dublin coordinates
const DUBLIN_COORDS: [number, number] = [53.3498, -6.2603];

function MapController() {
    const map = useMap();

    useEffect(() => {
        // Initial view: Zoomed out
        map.setView(DUBLIN_COORDS, 3, { animate: false });

        // Animation: Zoom in to Dublin
        const timer = setTimeout(() => {
            map.flyTo(DUBLIN_COORDS, 12, {
                duration: 4, // 4 seconds duration
                easeLinearity: 0.25,
            });
        }, 1000); // Start after 1 second

        return () => clearTimeout(timer);
    }, [map]);

    return null;
}

export default function MapBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="w-full h-full relative opacity-60">
            {/* Gradient Mask for "Fading Away" effect */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-l from-transparent via-transparent to-[#0B1026]" />
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#0B1026] via-transparent to-[#0B1026]" />

            <MapContainer
                center={DUBLIN_COORDS}
                zoom={3}
                scrollWheelZoom={false}
                zoomControl={false}
                dragging={false}
                doubleClickZoom={false}
                attributionControl={false}
                className="w-full h-full grayscale invert contrast-125 brightness-75" // Dark mode map style
                style={{ background: "#0B1026" }}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                <MapController />
            </MapContainer>
        </div>
    );
}
