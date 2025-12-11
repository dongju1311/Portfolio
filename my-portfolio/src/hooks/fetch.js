export async function getData(){
    const response = await fetch('./data/skills.json');
    return await response.json();
}