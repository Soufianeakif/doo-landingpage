import Image from "next/image";

const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-20 px-5 bg-background">
            <div className="text-center mb-8">
                <div className="flex justify-center items-center">
                    <Image src="https://cdn-icons-png.flaticon.com/512/5372/5372851.png" alt="Morocco flag" width={50} height={50} />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-center mb-3">
                    <span className="text-[#FA5F0E]">Available now</span> in Rabat, Salé, Témara & Harhoura
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    More cities coming soon across Morocco 🇲🇦
                </p>
            </div>


        </section>
    )
}

export default Logos