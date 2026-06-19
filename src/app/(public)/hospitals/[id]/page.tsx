/* eslint-disable @next/next/no-img-element */
import HospitalMap from "@/components/HospitalMap";
import { getHospitalById } from "@/services/hospitalService";
import Container from "@/components/Container";

export default async function HospitalDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hospital = await getHospitalById(id);

  return (
    <div className="bg-surface">
      <Container>
        <div id="section hero" className="flex flex-col items-start gap-6 md:flex-row md:justify-between py-5">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl">{hospital.name}</h1>
            <div className="w-52 flex justify-between items-center">
              <span>
                
                reviews</span>
              <span className="text-xs bg-gray-400/70 px-4 rounded-full uppercase">
                {hospital.ownership_type}
              </span>
            </div>
          </div>
          <div>
            <button className="bg-primary text-white px-4 py-2 rounded-md flex items-center">
              <span className="material-symbols-outlined">picture_as_pdf</span>
              Export Details as PDF
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-5 py-6">
          {/* main bar */}
          <main className="col-span-2">
            <img
              src={hospital.image_url ?? "https://placehold.co/800x400?text=No+Image"}
              width={1000}
              height={500}
              alt={hospital.name}
              className="mb-10 rounded-md"
            />
            <section className="bg-white py-6 px-4 rounded-md lg:w-full">
              <h2 className="text-xl text-primary">About The Institution</h2>
              <p>{hospital.description}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, in quos. Vel perspiciatis, iusto, saepe est accusantium nulla cumque consequuntur eius explicabo laboriosam repellendus quaerat. Dicta iste sunt quo debitis expedita, corrupti vitae laborum omnis, ipsa molestias cumque. Fugiat molestiae at, optio assumenda cumque voluptatum sequi quae, dignissimos est eos nisi nesciunt voluptatem, tempore reiciendis? Ad veniam consequatur quos ipsa? Necessitatibus at nisi nihil! Unde animi eveniet voluptatum illum fugit vitae suscipit exercitationem soluta ducimus ex alias molestias obcaecati est laboriosam, voluptates esse pariatur deserunt veritatis neque quia deleniti. Non ipsum illum corrupti, laboriosam magni modi error distinctio eum expedita!</p>
            </section>
            <section className="px-5 py-4 rounded-md">
              <h2 className="text-xl pb-2">Specialized Services</h2>
              <div>
                <ul className="flex flex-wrap gap-2">
                  {hospital.specialties.map((specialty) => (
                    <li
                      key={specialty}
                      className="bg-gray-200/70 border border-primary rounded-md p-3 tracking-wide text-black"
                    >
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section className="bg-gray-200/70 px-5 py-4 rounded-md lg:w-[90%]">
              <h2 className="text-xl pb-2">Contact & Hours</h2>
              <div className="grid grid-cols-2 items-start justify-items-start gap-2">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined">location_on</span>
                  {hospital.address}
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">phone</span>
                  {hospital.phone}
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">
                    nest_clock_farsight_analog
                  </span>
                  {hospital.visiting_hours}
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">email</span>
                  {hospital.email}
                </div>
              </div>
            </section>
          </main>

          {/* aside bar */}
          <aside className=" lg:justify-items-center py-10">
            <HospitalMap
                latitude={hospital.latitude}
                longitude={hospital.longitude}
              />
            <div className="bg-white mb-5 rounded-b-md overflow-hidden lg:w-full">
              <div className="lg:w-full bg-white px-2 py-4  flex flex-col gap-3 items-center">
                <button className="bg-primary text-white flex items-center justify-center gap-2 w-[90%] lg:w-full px-2 py-2 rounded-lg">
                  <span className="material-symbols-outlined">
                    assistant_direction
                  </span>
                  Get Directions
                </button>
                <button className="bg-white border border-gray-500 flex justify-center items-center gap-2 w-[90%] lg:w-full px-2 py-2 rounded-lg" >
                  <span className="material-symbols-outlined">
                    share
                  </span>
                 Share Hospital
                </button>
              </div>
            </div>
            <div className="lg:w-full bg-red-200 text-error font-semibold px-5 py-4 rounded-md">
              <h2 className="text-xl flex gap-2 items-center">
                <span className="material-symbols-outlined">asterisk</span>
                Emergency Hotline
              </h2>
              <a href="tel" className="text-2xl">{hospital.phone}</a>
              <p>Click to call immediately for urgent dispatch</p>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
