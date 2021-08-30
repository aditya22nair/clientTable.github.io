fetch("https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6")
.then((response)=> {return response.json()} ).then((data) => {show(data)})




show = ({clients}) => {
    console.log(clients)
    
    let value = 1;
    clients.map(({name,company})=>{
        
        document.getElementById(`name${value}`).innerHTML=name;
        document.getElementById(`company${value}`).innerHTML=company;
        value=value+1;
    })

   
    // // document.getElementById('name1').innerHTML=`${clients[0].name} `
    // document.getElementById('company1').innerHTML=`${clients[0].company} `
   
    // document.getElementById('name2').innerHTML=`${clients[1].name} `
    // document.getElementById('company2').innerHTML=`${clients[1].company} `

    // document.getElementById('name3').innerHTML=`${clients[2].name} `
    // document.getElementById('company3').innerHTML=` ${clients[2].company} `
}


