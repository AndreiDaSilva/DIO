function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const person = document.getElementById('profile.person')
    person.innerText = profileData.person

    const local = document.getElementById('profile.local')
    local.innerText = profileData.local

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const envelope = document.getElementById('profile.envelope')
    envelope.innerText = profileData.envelope
    envelope.href = `maito:${profileData.phone}`

    

}


(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()