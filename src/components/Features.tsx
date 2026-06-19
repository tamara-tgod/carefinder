import Container from "./Container";

export default function Features() {
  const features = [
    {
      id: 1,
      icon: "search",
      title: "Find Near You",
      description:
        "Real time geolocation mapping connects you to the nearest verified medical facility instantly, even in low bandwidth areas",
    },
    {
      id: 2,
      icon: "file_download",
      title: "Export Records",
      description:
        "Generate CSV directories for local clinics and hospitals. Ideal or community health organizers and emergency teams.",
    },
    {
      id: 3,
      icon: "ios_share",
      title: "Share Knowledge",
      description:
        "Broadcast hospital locations directly via WhatsApp or Email to family and friends in critical moments",
    },
  ];

  return (
    <div className="bg-outline-variant py-10 px-4">
      <Container>
        <div className="flex flex-col justify-between gap-10">
          <div id="section header" className="text-center flex flex-col gap-3">
            <h1 className="text-xl font-semibold">
              Engineered for Public Health Efficiency
            </h1>
            <p className=" m-auto text-sm text-on-surface-variant">
              Our platform provides the tools necessary for citizens and
              administrators to coordinate care effectively.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-2">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-md px-6 py-4 w-full md:w-2/4 flex flex-col gap-2 hover:border hover:border-primary"
              >
                <span className="material-symbols-outlined p-2 w-fit h-fit bg-primary/40 text-primary rounded-full hover:bg-primary hover:text-black cursor-pointer">
                  {feature.icon}
                </span>
                <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                <p className="flex-1">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
