async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/AndreiDaSilva/DIO/master/formacao-javascript-developer/04%20-%20modulo/portifolio/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}