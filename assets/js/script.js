async function getdata(){
    try {
        let response = await fetch ("https://randomuser.me/api/?results=5000");
        let data = await response.json();
        
        let content = '';
        data.results.forEach(user => {
            content += `
                <p><img src="${user.picture.thumbnail}"></p>
                <p>${user.name.first} ${user.name.last}</p>
                <p>${user.email}</p>
                <p>${user.cell}</p>
                <hr>
            `;
        });
        document.body.innerHTML += content;
    } catch (error) {
        console.log(error);
        
    }  
}
getdata();