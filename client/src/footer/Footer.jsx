import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="bg-white border-t border-blue-100 text-blue-800 mt-10">
                <div class="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
                    <p class="text-sm">&copy; 2025 Navnetram. All rights reserved.</p>
                    <p class="text-sm mt-2 sm:mt-0">
                        Developed & Managed by <span class="font-semibold text-blue-600"> <a href="https://www.karanpal.in" target='_blank'> Karan Pal </a></span>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer