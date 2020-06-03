import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 400px;
    background: #F5F7FA;
    border-radius: 30px;
  
`;


export const ContainerCreate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 100%;
    background: #F5F7FA;
    border-radius: 30px;
    flex-direction: column
  
`;

export const ContainerList = styled.div`
    display: flex;
    width: 800px;
    height: 500px;
    background: #fff;
    border-radius: 30px;
    flex-direction: column;
    margin-left: 50px;
    margin-top: 80px;
  
`;


export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
   
`;

export const ButtonCreate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 20px;
    background: #326FFF;
    color: #fff;
    font-weight: bold;
    font-size:20px;
    text-align: center;
    flex-direction: column;
    margin: 30px;
`;

export const ButtonUpload = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 20px;
    background: #E3F8FA;
    color: #326FFF;
    font-weight: bold;
    font-size:20px;
    text-align: center;
    flex-direction: column
`;

export const Input = styled.input`
    width: 270px;
    height: 45px;
    border: none;
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    max-width: 70%;
`;

export const Button = styled.button`
    width: 270px;
    height: 45px;
    max-width: 70%;
    border: none;
    background: #326FFF;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
`;

export const Text = styled.h1`
   font-size: 17px;
   font-weight: bold;
   color: #A6A6AC;
   margin: 20px;
   text-align: center
`;

export const CardContent = styled.div`
    width: 100%;
    height: 60px;
    background: #fff;
    box-shadow: 20px 20px 20px rgba(226, 226, 226, 0.25);
    border-radius: 10px;
    display: flex;
   margin-top: 20px;
    align-items: center;
`;

export const BtnExcluir = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: #ff7979;
    border: none;

`;

export const BtnEdit = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: #ffbe76;
    border: none;

`;

export const Error = styled.div`
border-radius: 8px;
    width: 240px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff7979;
    color: #fff;
    font-weight: bold
   
`;