export default function Cta() {
  return (
    <div className="py-10 px-4 w-full">
        <div className="bg-primary text-white flex flex-col md:flex-row gap-4 md:gap-2 justify-between items-center py-10 px-6 rounded-md  m-auto">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold">Ready to explore care?</h1>
        <p className="text-gray-400 text-sm">
          Start your search today and find the best medical services Nigeria has to offer.
        </p>
        </div>

        <div className="flex justify-between gap-3">
          <button className="bg-white text-primary px-4 py-1 text-sm font-semibold rounded-md  lg:py-3">Create Account</button>
          <button className="bg-primary text-white border  px-4 py-1 text-sm font-semibold rounded-md lg:py-3">Contact Support</button>
        </div>
      </div>
    </div>
  );
}
