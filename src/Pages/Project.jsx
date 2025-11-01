
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import ProjectData from '../Models/Project'
import { useSelector } from 'react-redux'

const Project = () => {

    const projetVis=useSelector((state)=> state.visibilty.project)


    const [activeTab, setActiveTab] = useState('website')
    const [currentIndex, setCurrentIndex] = useState(0)
    
    // Responsive cards per page based on screen size
    const getCardsPerPage = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 768) return 1 // mobile
            if (window.innerWidth < 1024) return 2 // tablet
            return 4 // desktop
        }
        return 4
    }
    
    const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage())
    const totalPages = Math.ceil(ProjectData.length / cardsPerPage)

    // Update cards per page on window resize
    React.useEffect(() => {
        const handleResize = () => {
            const newCardsPerPage = getCardsPerPage()
            if (newCardsPerPage !== cardsPerPage) {
                setCardsPerPage(newCardsPerPage)
                setCurrentIndex(0) // Reset to first page on resize
            }
        }
        
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [cardsPerPage])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    const visibleProjects = ProjectData.slice(
        currentIndex * cardsPerPage,
        (currentIndex + 1) * cardsPerPage
    )

    return (
        <div className={`w-full mt-10 h-11/12 lg:h-screen bg-transparent  p-4 sm:p-6 md:p-12 lg:p-20 xl:p-28 py-20 fixed top-0  ${projetVis ? "translate-x-0": "-translate-x-650" } transition-all duration-700`}>
            <div className='w-full min-h-[80vh] border border-white/90 rounded-2xl flex flex-col items-center p-4 sm:p-6 md:p-8 bg-transparent backdrop-blur-lg'>
                {/* Tab Buttons */}
                <div className='w-full max-w-xs sm:max-w-sm h-10 sm:h-12 border border-white/90 flex rounded-2xl mb-6 sm:mb-8'>
                    <button
                        className={`w-1/2 h-full border-r border-white/90 cursor-pointer rounded-l-2xl transition-colors text-sm sm:text-base ${
                            activeTab === 'website' ? 'bg-white/20 text-white' : 'text-white/90'
                        }`}
                        onClick={() => setActiveTab('website')}
                    >
                        Website
                    </button>
                    <button
                        className={`w-1/2 h-full border-l border-white/90 cursor-pointer rounded-r-2xl transition-colors text-sm sm:text-base ${
                            activeTab === 'apps' ? 'bg-white/20 text-white' : 'text-white/90'
                        }`}
                        onClick={() => setActiveTab('apps')}
                    >
                        Apps
                    </button>
                </div>

                {/* Carousel Container */}
                <div className='relative w-full flex-1 flex items-center'>
                    {/* Left Arrow - Hidden on mobile when only 1 card per page */}
                    {totalPages > 1 && (
                        <button
                            onClick={prevSlide}
                            className='absolute left-0 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full transition-all'
                            aria-label="Previous"
                        >
                            <ChevronLeft size={20} className='sm:w-6 sm:h-6' />
                        </button>
                    )}

                    {/* Cards Container */}
                    <div className='w-full px-8 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-6 md:py-8'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
                            {visibleProjects.map((e) => (
                                <button
                                    onClick={() => window.open("https://bazm.netlify.app/", "_blank")}
                                    key={e.id}
                                    className='w-full max-w-[340px] mx-auto aspect-[3/4] cursor-pointer border border-white/90 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col'
                                >
                                    <div className='w-full h-3/5 overflow-hidden'>
                                        <img
                                            className='w-full h-full object-cover'
                                            src={e.imagePath}
                                            alt={e.name}
                                        />
                                    </div>
                                    <div className='w-full h-2/5 p-3 sm:p-4 flex flex-col justify-center'>
                                        <h1 className='text-white font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 truncate'>
                                            {e.name}
                                        </h1>
                                        <p className='text-gray-300 text-xs sm:text-sm line-clamp-2'>
                                            {e.description}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow - Hidden on mobile when only 1 card per page */}
                    {totalPages > 1 && (
                        <button
                            onClick={nextSlide}
                            className='absolute right-0 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full transition-all'
                            aria-label="Next"
                        >
                            <ChevronRight size={20} className='sm:w-6 sm:h-6' />
                        </button>
                    )}
                </div>

                {/* Dots Navigation */}
                {totalPages > 1 && (
                    <div className='flex gap-2 mt-4 sm:mt-6 md:mt-8 pb-4'>
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 sm:h-3 rounded-full transition-all ${
                                    currentIndex === index
                                        ? 'bg-white w-6 sm:w-8'
                                        : 'bg-white/40 hover:bg-white/60 w-2 sm:w-3'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Project