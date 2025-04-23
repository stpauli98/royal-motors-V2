import Image from "next/image";

interface VehicleDetailsProps {
  vehicle: {
    id: number;
    brand: string;
    model: string;
    year: number;
    price: number;
    discount: number;
    discount_type: string;
    mileage: number;
    fuel: string;
    transmission: string;
    power: number;
    color: string;
    description: string;
    status: string;
    images: string[];
    views: number;
    created_at: string;
    category: string;
  };
}

export default function VehicleDetails({ vehicle }: VehicleDetailsProps) {
  const images = typeof vehicle.images === "string" ? JSON.parse(vehicle.images) : vehicle.images;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Gallery */}
        <div className="md:w-1/2 w-full flex flex-col gap-2">
          <div className="relative w-full h-64 rounded overflow-hidden border">
            <Image
              src={images[0]}
              alt={`${vehicle.brand} ${vehicle.model}`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {images.slice(1).map((img: string, idx: number) => (
              <div key={idx} className="relative w-24 h-16 rounded overflow-hidden border">
                <Image src={img} alt="thumbnail" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        {/* Info */}
        <div className="md:w-1/2 w-full flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-blue-900">{vehicle.brand} {vehicle.model}</h2>
          <div className="flex flex-wrap gap-4 text-gray-700">
            <span><b>Status:</b> {vehicle.status}</span>
            <span><b>Kategorija:</b> {vehicle.category}</span>
            <span><b>Godina:</b> {vehicle.year}</span>
            <span><b>Boja:</b> {vehicle.color}</span>
            <span><b>Gorivo:</b> {vehicle.fuel}</span>
            <span><b>Mjenjač:</b> {vehicle.transmission}</span>
            <span><b>Snaga:</b> {vehicle.power} KS</span>
            <span><b>Kilometraža:</b> {vehicle.mileage} km</span>
            <span><b>Cijena:</b> {vehicle.price} BAM</span>
            {vehicle.discount > 0 && (
              <span className="text-green-600 font-semibold">
                Popust: {vehicle.discount} {vehicle.discount_type === "percent" ? "%" : "BAM"}
              </span>
            )}
            <span><b>Pregleda:</b> {vehicle.views}</span>
            <span><b>Datum dodavanja:</b> {new Date(vehicle.created_at).toLocaleDateString()}</span>
          </div>
          <p className="mt-2 text-gray-800 whitespace-pre-line">{vehicle.description}</p>
        </div>
      </div>
    </div>
  );
}
