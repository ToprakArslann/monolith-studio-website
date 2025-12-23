import Image from "next/image";

export default function Clients() {
    const clients = [
        {
            name: "Marcus Blackwell",
            company: "Obsidian Hospitality Group",
            image: "/client1.png",
        },
        {
            name: "Harrison Wright",
            company: "Wright Global Logistics",
            image: "/client2.png",
        },
        {
            name: "Johnathan Bennett",
            company: "Bennett Urban Dynamics",
            image: "/client3.png",
        },
        {
            name: "Johnathan Bennett",
            company: "Bennett Urban Dynamics",
            image: "/client3.png",
        },
        {
            name: "Johnathan Bennett",
            company: "Bennett Urban Dynamics",
            image: "/client3.png",
        },
        {
            name: "Johnathan Bennett",
            company: "Bennett Urban Dynamics",
            image: "/client3.png",
        },
        {
            name: "Johnathan Bennett",
            company: "Bennett Urban Dynamics",
            image: "/client3.png",
        },
    ];
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center p-4 gap-4 relative">
            <div className="w-full h-full flex flex-col gap-4">
                <h2 className="text-4xl font-monument-bold text-center">Our Clients</h2>
                <div className="w-full h-full flex flex-row items-center justify-between gap-4">
                    <div className="w-1/4 aspect-3/4 relative flex items-center justify-center">
                        <Image src="/client1.png" alt="client1" fill className="object-cover" />
                    </div>
                    <div className="w-3/4 flex flex-col items-center justify-center overflow-hidden relative">
                        {clients.map((client, index) => (
                            <div key={index} className={`w-full h-20 flex flex-row items-center justify-between p-2 border-b-3 ${index === 0 ? "border-t-3" : ""} z-1`}>
                                <h3 className="text-2xl font-medium">{client.name}</h3>
                                <p className="text-2xl">{client.company}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}