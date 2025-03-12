export default function Footer() {
    return (
        <footer className="py-8 bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <a href="#" className="text-2xl font-bold text-indigo-400">Tassadaq Hussain</a>
                        <p className="mt-2 text-gray-400">Creating amazing web experiences.</p>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <p className="text-gray-400">© {new Date().getFullYear()} Tassadaq Hussain. All rights reserved.</p>
                        <p className="text-gray-500 text-sm mt-1">Made with Next.js and Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}