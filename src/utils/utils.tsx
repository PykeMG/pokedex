export function formatPokemonName(name: string): string {
    if (name.includes("♀")) {
        return name.replace("♀", "-f");
    } else if (name.includes("♂")) {
        return name.replace("♂", "-m");
    } else if (name.includes(". ")) {
        return name.replace(". ", "-");
    } else if (name.includes("'")) {
        return name.replace("'", "");
    } else {return name;}
}

export function waitFor(time: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, time));
}
export function convertGramsToKilograms(weight:number): number{
    return weight/10;
}
export function convertCentimeterstoMeters(height:number): number{
    return height/10;
}