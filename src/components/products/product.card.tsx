import Card from "./card";

export default function ProductCard() {
    return (
      <div className="px-4 sm:px-10 lg:px-20 py-3">
        <h1 className="font-semibold text-md md:text-2xl text-teal-900 mb-4">Recommended For You</h1>
  
        <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-6">
        
           <Card productname="Gaming Headphone"></Card>
           <Card productname="Headphone"></Card>
           <Card productname="Watch"></Card>
           <Card productname="Keyboard"></Card>
           <Card productname="Headphone"></Card>
           <Card productname="Gaming Headphone"></Card>
           <Card productname="Dell Laaptop"></Card>
           <Card productname="MacBook Pro m4"></Card>
           <Card productname="Headphone"></Card>

        </div>
      </div>
    );
  }
  