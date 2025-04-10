export function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return [...array]
}


export const users = ['John', 'Peter', 'Stefanie', 'Marta', 'Klaus', 'Anna']