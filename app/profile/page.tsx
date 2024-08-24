import Image from "next/image";

const Home = () => {
    return (
        <main className="flex flex-col items-center bg-black min-h-screen">
            <div className="flex items-center justify-center min-h-screen">
                <div className="relative w-full bg-white p-6 rounded-lg flex flex-row items-center">
                    <div className="flex flex-col items-center">
                        {/* Profile Image */}         
                        <Image
                            src="/verification.jpg" 
                            alt="Uploaded Image"
                            width="150"
                            height="150"
                            className="rounded-full mr-4"
                        />

                        {/* Button to Hyperlink to Edit Profile */}
                        <a href="/profile/edit" className="mx-auto">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-4 mt-4 rounded">
                                Edit Profile    
                            </button>
                        </a>
                    </div>

                    {/* User's Data */}
                    <div className="flex flex-col justify-start items-start ml-4">
                        <p className="text-2xl font-bold"> (Username) </p>
                        <p className="text-xl"> (Pekerjaan) </p>

                        <p className="text-2xl font-bold mt-12"> (Minat/Tags) </p>
                        <p className="text-xl"> /favorite tags </p>

                        <p className="text-2xl font-bold mt-12"> (Deskripsi Diri) </p>
                        <p className="text-xl"> (Lorem ipsum) </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
