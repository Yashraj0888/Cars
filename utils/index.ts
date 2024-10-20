import { CarProps, FilterProps } from "@/types";

export async function fetchCars( filters:FilterProps) {
    const {manufacturer,year,model,limit,fuel}=filters
    const headers={
        
            'x-rapidapi-key': 'ac8ff12e81msha3593b516ef9637p11afbdjsn1e9e946a1a94',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'

    }
    const response=await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel=${fuel}`,{
        headers:headers,
    })
    const result=await response.json();
    return result;
}

export const calculateRent = (car: CarProps): string => {
    const baseRate = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Convert city_mpg to kmpl
    const milesToKm = 1.60934;
    const gallonToLiters = 3.78541;
    const cityKmpl = car.city_mpg * (milesToKm / gallonToLiters); // Convert to kmpl
    const age = new Date().getFullYear() - car.year;

    // Calculate additional rates
    const mileageRate = cityKmpl * mileageFactor;
    const ageRate = age * ageFactor;

    // Calculate total rental rate per day
    let rentalRatePerDay = baseRate + mileageRate + ageRate;

    // Adjust for car class
    if (car.class.toLowerCase() === 'suv') rentalRatePerDay *= 1.3;
    else if (car.class.toLowerCase() === 'truck') rentalRatePerDay *= 1.4;

    // Luxury multiplier based on the make of the car
    const luxuryBrands = [
        'mercedes', 'bmw', 'audi', 'tesla', 'jaguar', 'porsche',
        'lexus', 'ferrari', 'bentley', 'rolls-royce', 'maserati',
        'land rover', 'aston martin', 'lamborghini', 'bugatti', 
        'maybach', 'mclaren', 'cadillac', 'infiniti'
    ];

    const midTierBrands = [
        'toyota', 'honda', 'ford', 'chevrolet', 'nissan', 
        'mazda', 'subaru', 'volkswagen', 'hyundai', 'kia', 
        'jeep', 'gmc', 'volvo', 'acura', 'buick', 'mini', 'lincoln'
    ];

    const economyBrands = [
        'fiat', 'mitsubishi', 'renault', 'peugeot', 'dacia', 
        'suzuki', 'skoda', 'tata', 'mahindra'
    ];

    let luxuryMultiplier = 1.1; // Default for unknown brands
    if (luxuryBrands.includes(car.make.toLowerCase())) {
        luxuryMultiplier = 10.5;
    } else if (midTierBrands.includes(car.make.toLowerCase())) {
        luxuryMultiplier = 10.2;
    } else if (economyBrands.includes(car.make.toLowerCase())) {
        luxuryMultiplier = 1.0;
    }

    rentalRatePerDay *= luxuryMultiplier;

    // Convert rent to INR (assuming 1 USD = 83 INR)
    const exchangeRate = 83;
    const rentINR = (rentalRatePerDay * exchangeRate).toFixed(2);

    return rentINR;
};
export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);
  
    // Set the specified search parameter to the given value
    searchParams.set(type, value);
  
    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };

