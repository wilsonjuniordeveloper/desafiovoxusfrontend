import React,{useEffect, useState} from 'react'
import {ContainerList ,BtnEdit,CardContent ,Error, BtnExcluir, Input ,Linput ,ContainerCreate ,Button , Text} from '../style'
import axios from 'axios'

const Create = ()=>{
    const [data, setData] = useState([])
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [date, setDate] = useState('');
    const [comment, setCommet] = useState(''); 
    const [erro, setErro]= useState(false); 
    const [editTela, setEdit]= useState(false); 
    const [identify, setId]= useState('')
    const [file, setFile] = useState(false)

    function List(list){
        let id = list.data._id

        function excluir(){
            async function fecth() {
                const resp = await axios.delete(`https://api-desafiovoxusbackend.herokuapp.com/api/payment/${id}`)
                document.location.reload(true);
             }  
             fecth()
        }

        function edit(ide){
            setEdit(true)
        }

        return (
            <>
            <CardContent>
                        <h4 style={{margin: 30, fontSize: 13}}>{list.data.title}</h4>
                        <h4 style={{margin: 30, fontSize: 13 }}>{list.data.value}</h4>
                        <h4 style={{margin: 30, fontSize: 13}}>{list.data.tax}</h4>
                        <h4 style={{margin: 30, fontSize: 13}}>{list.data.date}</h4>
                        <h4 style={{margin: 30, fontSize: 13}}>{list.data._id}</h4>
                        <h4 style={{margin: 30, fontSize: 13}}>{list.data.comment}</h4>
                  
                        <BtnExcluir style={{margin: 10}} onClick={()=>excluir(id)}>
                            <img style={{width: 18, height: 18}}src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABI0lEQVRoge2Yu07DQBBFz02BgPxPvo+SX0P8Ba8KCkAkiIKhSSQKY8+sJ2ukzKnXe8/VrLxxoCiKNMzsyqa5XtpzEKd8egmNCFlWSAaSBl1XvUWyqQJFUSzLn/fAATPbADcdXIbYSLodW+B5C90nybQwme2ZwArYAWcZRgG+gAtJ32OLJiew3+ApyyrA45Q8+C+yJY6RK7MKHJEq8Ju7GSKtuDJPZgL/tsDkRXbAzD6Ay2adGFtJa8/CyAfNQ6NMC+6JRwr0PEZVYNamCVSBWZsmUAWG6Plzwv3KdheQ9A68NenEeJXkzon+M9fjGIUyogV6HKNQxslNoApkZ1SBIxDKcH/QAJjZObCNPheJANaSdt4HQhOQ9Am8RK0CPEfki6KAH6y/pCx1DrrNAAAAAElFTkSuQmCC"/>
                        </BtnExcluir>
                        <BtnEdit onClick={()=>edit(id)}>
                            <img style={{width: 18, height: 18}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAByElEQVRYhe3WzUtUURjH8TMVk5biyk0vBiKFWK7CTbbpr5v+GwUJKYySUZAWtWtRhEkjFYG6qkXwaTHP4HUYmzP3cmc1z+Zyfzwv3/Oc59x7UprYxPoMTTzHsfLWQQvNMgCtCoX7rVUGoBPBT0YOPs+x3utEmWBQtvioea5kJCo1E30g+TMxIMF4Z2IAwHhn4pIW1jYTQ2egbpsAVAJAA1er5LhWJTh1F/AVH1NKeymldkppr9Fo/C6dcdRTgBd9Z/0PdnD7f3mLK6hq7XgeppQ+pG5Xn6WU3uBuwe8sK1uJDjwNl/fxPo+D0L7gXuhrOKkDYCra/hfzoc1hP0IPsRj64xyA3qd3PQcgfHbC7QBzoc2iHfoRloYWj8CBP58hMXfwOVz3MRv6DN6G/g33cwCaAdHJBYi4hdhzsfKZ0G/idejHWM7qRCFxFsAQiGm8DP0HHo0CcGEmMvwXY8/Fym8UILZD/4nVXIDcC8kp1iJmKfYcXmE69OvYCv0XVnIABs7EJXYijhoeOL/GbWOqkG8z9N2sLpQ1LON7FNsSd0LdWYHTWgGi2MPYc7HyBbyL943aAQJiNfa8aJ9waywAAbGCXZxho1f8H0O2TUiOMu1OAAAAAElFTkSuQmCC"/>
                        </BtnEdit>
            </CardContent>
            </>
        )
    }
    
    useEffect(()=>{

     async function fecth() {
        const resp = await axios.get('https://api-desafiovoxusbackend.herokuapp.com/api/payment')
        setData(resp.data.data)
     }  
     fecth()

    },[])


    const gravar = ()=>{
        let body = {
            "title": title, 
            "value": value,
            "date": date,
            "comment": comment
        }
          

        axios.post('https://api-desafiovoxusbackend.herokuapp.com/api/payment', body )
        .then(res => {
          console.log(res.data);
          document.location.reload(true);
        })
        .catch(error => {
            setErro(error.response.data)
        });
    }


    const upgrade = ()=>{

        if(identify === ''){
            setErro({error: 'informe o id para atualizar'})
        }else{
            let body = {
                "title": title, 
                "value": value,
                "date": date,
                "comment": comment
            }
              
            axios.put(`https://api-desafiovoxusbackend.herokuapp.com/api/payment/${identify}`, body )
            .then(res => {
              console.log(res.data);
              document.location.reload(true);
            })
            .catch(error => {
                setErro(error.response.data)
            });

        }
    }


    const handleUploadFile = (e) => {
        setFile(e.target.files[0]);
     
    }

    const click = ()=>{
        const data = new FormData()
        data.append('file', file)

        axios.post('https://api-desafiovoxusbackend.herokuapp.com/api/upload', data )
        .then(res => {
          console.log(res.data);
          document.location.reload(true);
        })
        .catch(error => {
            setErro(error.response.data)
        });
    }




return(
    <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
        { editTela ? 
                <ContainerCreate>
                    <>
                    <img style={{width: 50, height: 50}} src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkNhcGFfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTJweCI+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNTYiIHgyPSIyNTYiIHkxPSI1MTIiIHkyPSIwIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNhZGRjZmYiLz48c3RvcCBvZmZzZXQ9Ii41MDI4IiBzdG9wLWNvbG9yPSIjZWFmNmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWFmNmZmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI1NiIgeDI9IjI1NiIgeTE9IjQwNyIgeTI9IjEwNSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDBjMGZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTU1OGZmIi8+PC9saW5lYXJHcmFkaWVudD48Zz48Zz48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIGZpbGw9InVybCgjU1ZHSURfMV8pIiByPSIyNTYiLz48L2c+PGc+PGc+PHBhdGggZD0ibTEzMS44NjcgMzUzLjcwNmMtNC45NjYgMC04Ljg2NyAzLjkwOC04Ljg2NyA4Ljg4MnMzLjkwMSA4Ljg4MiA4Ljg2NyA4Ljg4Mmg4Ljg2N3YtMTcuNzY1aC04Ljg2N3ptMC01My4yOTRjLTQuOTY2IDAtOC44NjcgMy45MDgtOC44NjcgOC44ODJzMy45MDEgOC44ODIgOC44NjcgOC44ODJoOC44Njd2LTE3Ljc2NWgtOC44Njd6bTguODY2LTE4Ni41M3YyNi42NDdoMjYuNmM0Ljk2NiAwIDguODY3IDMuOTA4IDguODY3IDguODgycy0zLjkwMSA4Ljg4Mi04Ljg2NyA4Ljg4MmgtMjYuNnYzNS41MjloMjYuNmM0Ljk2NiAwIDguODY3IDMuOTA4IDguODY3IDguODgycy0zLjkwMSA4Ljg4Mi04Ljg2NyA4Ljg4MmgtMjYuNnYzNS41MjloMjYuNmM0Ljk2NiAwIDguODY3IDMuOTA4IDguODY3IDguODgycy0zLjkwMSA4Ljg4Mi04Ljg2NyA4Ljg4MmgtMjYuNnYzNS41MjloMjYuNmM0Ljk2NiAwIDguODY3IDMuOTA4IDguODY3IDguODgycy0zLjkwMSA4Ljg4Mi04Ljg2NyA4Ljg4MmgtMjYuNnYzNS41MjloMjYuNmM0Ljk2NiAwIDguODY3IDMuOTA4IDguODY3IDguODgycy0zLjkwMSA4Ljg4Mi04Ljg2NyA4Ljg4MmgtMjYuNnYyNi42NDdjMCA0Ljk3NCAzLjkwMSA4Ljg4MiA4Ljg2NyA4Ljg4Mmg0NC4zMzN2LTMwMS45OTRoLTQ0LjMzM2MtNC45NjYgMC04Ljg2NyAzLjkwOC04Ljg2NyA4Ljg4MnptLTguODY2IDc5Ljk0MWMtNC45NjYgMC04Ljg2NyAzLjkwOC04Ljg2NyA4Ljg4MnMzLjkwMSA4Ljg4MiA4Ljg2NyA4Ljg4Mmg4Ljg2N3YtMTcuNzY1aC04Ljg2N3ptMCA1My4yOTVjLTQuOTY2IDAtOC44NjcgMy45MDgtOC44NjcgOC44ODJzMy45MDEgOC44ODIgOC44NjcgOC44ODJoOC44Njd2LTE3Ljc2NWgtOC44Njd6bTAtMTA2LjU4OWMtNC45NjYgMC04Ljg2NyAzLjkwOC04Ljg2NyA4Ljg4MnMzLjkwMSA4Ljg4MiA4Ljg2NyA4Ljg4Mmg4Ljg2N3YtMTcuNzY1aC04Ljg2N3ptMTE1LjI2NiA3MS4wNTloODguNjY3di0zNS41MjloLTg4LjY2N3ptOTcuNTM0LTEwNi41ODhoLTEzM3YzMDJoMTMzYzI0LjQ1MiAwIDQ0LjMzMy0xOS45MjUgNDQuMzMzLTQ0LjQxMnYtMjEzLjE3NmMwLTI0LjQ4Ny0xOS44ODEtNDQuNDEyLTQ0LjMzMy00NC40MTJ6bTAgMTU5Ljg4MmgtMTA2LjRjLTQuOTAxIDAtOC44NjctMy45NzMtOC44NjctOC44ODIgMC00LjkxIDMuOTY2LTguODgyIDguODY3LTguODgyaDEwNi40YzQuOTAxIDAgOC44NjcgMy45NzMgOC44NjcgOC44ODItLjAwMSA0LjkxLTMuOTY2IDguODgyLTguODY3IDguODgyem04Ljg2Ni00NC40MTFjMCA0LjkxLTMuOTY2IDguODgyLTguODY3IDguODgyaC0xMDYuNGMtNC45MDEgMC04Ljg2Ny0zLjk3My04Ljg2Ny04Ljg4MnYtNTMuMjk0YzAtNC45MSAzLjk2Ni04Ljg4MiA4Ljg2Ny04Ljg4MmgxMDYuNGM0LjkwMSAwIDguODY3IDMuOTczIDguODY3IDguODgyeiIgZmlsbD0idXJsKCNTVkdJRF8yXykiLz48L2c+PC9nPjwvZz48L3N2Zz4K" />
                    <Text>Upgrade now</Text>
                    </>
                    {erro ? <Error> {erro.error} </Error> :<></>}
                    <Input type="text"   value={title}   onChange={e=> setTitle(e.target.value)}  placeholder="informe o titulo do payment"/>
                    <Input type="number" value={value}   onChange={e=> setValue(e.target.value)}  placeholder="informe o valor do payment"/>
                    <Input type="text"   value={date}    onChange={e=> setDate(e.target.value)}  placeholder="data do payment(YYYY-MM-DD)"/>
                    <Input type="text"   value={comment} onChange={e=> setCommet(e.target.value)}  placeholder="descrição (opcional)"/>
                    <Input type="text" required  value={identify} onChange={e=> setId(e.target.value)}  placeholder="iformar o id"/>
                    <Button onClick={upgrade} style={{background: '#ff7979'}}>Editar payments</Button> 
                    
                </ContainerCreate> 
                :
                <ContainerCreate>
                <>
                <img style={{width: 50, height: 50}} src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkNhcGFfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTJweCI+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNTYiIHgyPSIyNTYiIHkxPSI1MTIiIHkyPSIwIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNhZGRjZmYiLz48c3RvcCBvZmZzZXQ9Ii41MDI4IiBzdG9wLWNvbG9yPSIjZWFmNmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWFmNmZmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI1NiIgeDI9IjI1NiIgeTE9IjQwNyIgeTI9IjEwNSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDBjMGZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTU1OGZmIi8+PC9saW5lYXJHcmFkaWVudD48Zz48Zz48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIGZpbGw9InVybCgjU1ZHSURfMV8pIiByPSIyNTYiLz48L2c+PGc+PGc+PHBhdGggZD0ibTEzMS44NjcgMzUzLjcwNmMtNC45NjYgMC04Ljg2NyAzLjkwOC04Ljg2NyA4Ljg4MnMzLjkwMSA4Ljg4MiA4Ljg2NyA4Ljg4Mmg4Ljg2N3YtMTcuNzY1aC04Ljg2N3ptMC01My4yOTRjLTQuOTY2IDAtOC44NjcgMy45MDgtOC44NjcgOC44ODJzMy45MDEgOC44ODIgOC44NjcgOC44ODJoOC44Njd2LTE3Ljc2NWgtOC44Njd6bTguODY2LTE4Ni41M3YyNi42NDdoMjYuNmM0Ljk2NiAwIDguODY3IDMuOTA4IDguODY3IDguODgycy0zLjkwMSA4Ljg4Mi04Ljg2NyA4Ljg4MmgtMjYuNnYzNS41MjloMjYuNmM0Ljk2NiAwIDguODY3IDMuOTA4IDguODY3IDguODgycy0zLjkwMSA4Ljg4Mi04Ljg2NyA4Ljg4MmgtMjYuNnYzNS41MjloMjYuNmM0Ljk2NiAwIDguODY3IDMuOTA4IDguODY3IDguODgycy0zLjkwMSA4Ljg4Mi04Ljg2NyA4Ljg4MmgtMjYuNnYzNS41MjloMjYuNmM0Ljk2NiAwIDguODY3IDMuOTA4IDguODY3IDguODgycy0zLjkwMSA4Ljg4Mi04Ljg2NyA4Ljg4MmgtMjYuNnYzNS41MjloMjYuNmM0Ljk2NiAwIDguODY3IDMuOTA4IDguODY3IDguODgycy0zLjkwMSA4Ljg4Mi04Ljg2NyA4Ljg4MmgtMjYuNnYyNi42NDdjMCA0Ljk3NCAzLjkwMSA4Ljg4MiA4Ljg2NyA4Ljg4Mmg0NC4zMzN2LTMwMS45OTRoLTQ0LjMzM2MtNC45NjYgMC04Ljg2NyAzLjkwOC04Ljg2NyA4Ljg4MnptLTguODY2IDc5Ljk0MWMtNC45NjYgMC04Ljg2NyAzLjkwOC04Ljg2NyA4Ljg4MnMzLjkwMSA4Ljg4MiA4Ljg2NyA4Ljg4Mmg4Ljg2N3YtMTcuNzY1aC04Ljg2N3ptMCA1My4yOTVjLTQuOTY2IDAtOC44NjcgMy45MDgtOC44NjcgOC44ODJzMy45MDEgOC44ODIgOC44NjcgOC44ODJoOC44Njd2LTE3Ljc2NWgtOC44Njd6bTAtMTA2LjU4OWMtNC45NjYgMC04Ljg2NyAzLjkwOC04Ljg2NyA4Ljg4MnMzLjkwMSA4Ljg4MiA4Ljg2NyA4Ljg4Mmg4Ljg2N3YtMTcuNzY1aC04Ljg2N3ptMTE1LjI2NiA3MS4wNTloODguNjY3di0zNS41MjloLTg4LjY2N3ptOTcuNTM0LTEwNi41ODhoLTEzM3YzMDJoMTMzYzI0LjQ1MiAwIDQ0LjMzMy0xOS45MjUgNDQuMzMzLTQ0LjQxMnYtMjEzLjE3NmMwLTI0LjQ4Ny0xOS44ODEtNDQuNDEyLTQ0LjMzMy00NC40MTJ6bTAgMTU5Ljg4MmgtMTA2LjRjLTQuOTAxIDAtOC44NjctMy45NzMtOC44NjctOC44ODIgMC00LjkxIDMuOTY2LTguODgyIDguODY3LTguODgyaDEwNi40YzQuOTAxIDAgOC44NjcgMy45NzMgOC44NjcgOC44ODItLjAwMSA0LjkxLTMuOTY2IDguODgyLTguODY3IDguODgyem04Ljg2Ni00NC40MTFjMCA0LjkxLTMuOTY2IDguODgyLTguODY3IDguODgyaC0xMDYuNGMtNC45MDEgMC04Ljg2Ny0zLjk3My04Ljg2Ny04Ljg4MnYtNTMuMjk0YzAtNC45MSAzLjk2Ni04Ljg4MiA4Ljg2Ny04Ljg4MmgxMDYuNGM0LjkwMSAwIDguODY3IDMuOTczIDguODY3IDguODgyeiIgZmlsbD0idXJsKCNTVkdJRF8yXykiLz48L2c+PC9nPjwvZz48L3N2Zz4K" />
                <Text>New Payment</Text>
                </>
                {erro ? <Error> {erro.error} </Error> :<></>}
                <Input type="text"   value={title}   onChange={e=> setTitle(e.target.value)}  placeholder="informe o titulo do payment"/>
                <Input type="number" value={value}   onChange={e=> setValue(e.target.value)}  placeholder="informe o valor do payment"/>
                <Input type="text"   value={date}    onChange={e=> setDate(e.target.value)}  placeholder="informe a data do payment"/>
                <Input type="text"   value={comment} onChange={e=> setCommet(e.target.value)}  placeholder="descrição (opcional)"/>
                <Button onClick={gravar}>Adicionar payments</Button> 
                <h2>or</h2>


                {file ? 
                <Button onClick={click} style={{backgroud: '#16a085'}}> 
                    Enviar arquivo
                </Button>: 
                
                
                    <input 
                        type="file" 
                        onChange={handleUploadFile}
                    />
             
                
                }

                
            </ContainerCreate> 
}
                <ContainerList>

                    <header style={{margin:'10px', display: 'flex', flexDirection: 'row', height: '50px', width: '98%',color: '#fff' ,backgroundColor: '#326FFF', borderRadius: '20px', alignItems: 'center'}}>
                        <h3 style={{margin: 35, textAlign: 'center'}}>Titulo</h3>
                        <h3 style={{margin: 35, marginLeft:  5,textAlign: 'center'}}>Valor</h3>
                        <h3 style={{margin: 35, textAlign: 'center'}}>Taxa</h3>
                        <h3 style={{margin: 35, textAlign: 'center'}}>Data</h3>
                        <h3 style={{margin: 35, textAlign: 'center'}}>Id</h3>
                        <h3 style={{margin: 35}}>Descrição</h3>
                    </header>

                    {data.map(list => (<List key={list._id} data={list}/>))}
                    
                </ContainerList>
    </div>
        
      
    )
}



export default Create
