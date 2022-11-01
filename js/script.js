const divPai = document.getElementById('lista')
//

const getDbz = async () => {
    const url = `https://dragon-ball-super-api.herokuapp.com/api/characters`

    const reponse = await fetch(url)
    return  reponse.json() 

    
}


const adcDbz = async (id) =>{
    const data = await getDbz()
    console.log(data)

    for (let i = 0; i < 129; i++) {
        const id = i


        const div = document.createElement('div')
        const h3 = document.createElement('h3')
        const img = document.createElement('img')
        const p = document.createElement('p')


        div.classList.add('card')
        h3.classList.add('h3')
        img.classList.add('img')
        p.classList.add('p')

        h3.innerHTML = data[i].name
        img.src = data[i].imageUrl
        p.innerHTML = 'Universo '+data[i].universe
        

        div.appendChild(h3)
        div.appendChild(img)
        div.appendChild(p)

        divPai.appendChild(div)
        
   
    }

        //const person = data[i].name
        //const image = data[i].imageUrl
        //const universo= data[i].role

        //console.log(person)
        //console.log(image)
        //console.log(universo)
 
} 



adcDbz()






  







