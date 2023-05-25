import type { PageLoad } from './$types';

export const load = (async ({params}) => {
    const url = `https://pokeapi.co/api/v2/pokemon/1`;
    const res = await fetch(url);
    const data = await res.json();
    return data;

}) satisfies PageLoad;