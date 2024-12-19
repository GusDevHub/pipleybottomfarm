'use client'

import { useState, useEffect, useRef, TouchEvent, MouseEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from './ui/card'

interface Banner {
    id: number
    imageUrl: string
    link: string
    target?: string
}

interface BannerProps {
    banners: Banner[]
    autoPlayInterval?: number
}

export default function Banner({ banners, autoPlayInterval = 5000 }: BannerProps) {
    const [currentBanner, setCurrentBanner] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [translateX, setTranslateX] = useState(0)
    const bannerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isDragging) {
                setCurrentBanner((prev) => (prev + 1) % banners.length)
                setTranslateX(0)
            }
        }, autoPlayInterval)

        return () => clearInterval(interval)
    }, [banners.length, autoPlayInterval, isDragging])

    const handleDragStart = (e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => {
        setIsDragging(true)
        setStartX('touches' in e ? e.touches[0].clientX : e.clientX)
    }

    const handleDragMove = (e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return
        const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX
        const diff = currentX - startX
        setTranslateX(diff)
    }

    const handleDragEnd = () => {
        setIsDragging(false)
        if (Math.abs(translateX) > 50) {
            if (translateX > 0) {
                setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
            } else {
                setCurrentBanner((prev) => (prev + 1) % banners.length)
            }
        }
        setTranslateX(0)
    }

    return (
        <Card
            className="w-full h-40 md:h-60 rounded-2xl overflow-hidden relative cursor-grab active:cursor-grabbing"
            ref={bannerRef}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
        >
            <div
                className="flex transition-transform duration-300 ease-out h-full"
                style={{
                    transform: `translateX(${translateX}px)`,
                    width: `${banners.length * 100}%`
                }}
            >
                {banners.map((banner) => (
                    <Link
                        key={banner.id}
                        href={banner.link}
                        target={banner.target}
                        className="w-full h-full flex-shrink-0"
                        style={{ transform: `translateX(-${currentBanner * 100}%)` }}
                        onClick={(e) => isDragging && e.preventDefault()}
                    >
                        <Image
                            src={banner.imageUrl}
                            alt={`${banner.id}`}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </Link>
                ))}
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        className={`w-8 h-2 rounded-full transition-colors duration-300 ${index === currentBanner ? 'bg-yellow-300' : 'bg-white/50'
                            }`}
                        onClick={() => {
                            setCurrentBanner(index)
                            setTranslateX(0)
                        }}
                    />
                ))}
            </div>
        </Card>
    )
}