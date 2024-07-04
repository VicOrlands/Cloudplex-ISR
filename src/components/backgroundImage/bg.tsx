"use client"

import { StaticImageData } from "next/image";
import React, { useState, useRef, useEffect } from "react";

export const LazyBackgroundImage = ({ src, className, children }: {
    src: StaticImageData, className: string, children: React.ReactNode
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsLoaded(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: "100px",
            },
        );

        if (bgRef.current) {
            observer.observe(bgRef.current);
        }

        return () => {
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div
            ref={bgRef}
            className={className}
            style={{
                backgroundImage: isLoaded ? `url(${src.src})` : "none",
            }}
        >
            {children}
        </div>
    );
};