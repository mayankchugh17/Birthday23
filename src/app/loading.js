export default function Loading() {

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-600">
                    <h1 className="text-center mt-40 text-purple-600 sm:text-3xl mt-10 text-4xl">Loading...</h1>
                    <h1 className="text-center mt-2 text-purple-600 sm:text-2xl mt-10 text-3xl">Please wait a moment</h1>
                    <h1 className="text-center mt-2 text-purple-600 sm:text-4xl mt-10 text-6xl">Darpan's site is being Loaded...💜💜💜</h1>
                </div>
            </div>
        </>
    );
}