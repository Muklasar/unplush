import styled from 'styled-components'

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(30, 1fr);  
    background-color: #ddd;
    @media(max-width:800px){
        background-color: #fff;
    }
`

export const Box1 = styled.div`
    grid-column: 1/-1;   
    grid-row: 1;
    background-image: url('./images/background4.jpg'); 
    height: 660px;
    background-repeat: none;
    background-size: cover;
`
export const Box2 = styled.div`
    grid-column: 2/-2;
    grid-row: 1;
    background-repeat: none;
    background-size: cover;
    background-color: white;
    height: 1500px;
    margin-top:60px;
    margin-bottom: 50px;
`

export const TopNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    font-weight: bold; 
    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
      }
`
export const LeftSide = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    @media (max-width: 800px) {
        margin-left: 0px;
        margin-bottom: 5px;
        
      }
`

export const MiddleSide = styled.ul`
    display: flex;
    align-items: center;
    margin-left: 300px;
    @media (max-width: 800px) {
        margin-left: 0;
      }

`
export const Li = styled.li`
    margin-left: 20px;
    list-style: none;
    text-decoration: none;
`
export const RightSide = styled.ul`
    display: flex;
    align-items: center;
    margin-right: 10px;
    @media (max-width: 800px) {
        margin-right: 0px;
        
      }
`

export const Link = styled.a`
    text-decoration: none;
    color: #ccc;
    cursor: pointer;
    font-weight: 600;
    &:hover{
        color: seagreen;
        transition: .5s;
        text-decoration: none;
    }

`

export const NavButton = styled.button`
    border:1px solid #fff;
    padding: 10px;
    box-shadow: 1px, 2px #ddd;
    background-color: whitesmoke;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    color: #ccc;
    font-weight: 600;
    &:hover{
        color: white;
        background-color: green;
        transition: .5s;

    }

`


// banner area

export const Banner = styled.div`
    position: relative;
    background-image: url('./images/background4.jpg');
    height: 500px;
    box-shadow: 0px 1px 1px 0px white;
    width: 100%;
    background-repeat: none;
    background-size: cover;

`
export const TextArea = styled.div`
    position: absolute;
    top:100px;
    left: 250px;
    display: flex;
    flex-direction: column;
    width:65%;
    @media (max-width: 800px) {
        position: absolute;
        top:100px;
        left: 80px;
      }
`
export const H1 = styled.h1`
    font-size: 50px;
    color: whitesmoke;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-bottom: 10px;
    margin-left: 5px;
`

export const P = styled.p`
    color: white;
    font-family: Verdana;
    margin-bottom: 5px;
    margin-left: 10px;

`

export const Created = styled.a`
      position: absolute;
      top:450px;
      left:20px;
      color:#fff
`
export const Gift = styled.a`
    color: yellow;
    margin-left: 10px;

`
export const SearchArea = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
`
export const Input = styled.input`
    width: 100%;
    padding: 10px;
    outline: none;
    border: 1px solid transparent;
    font-family: verdana;
    font-weight: 500;
    &:focus{
        border: 5px solid seagreen;
    }
`
export const SearchButton = styled.button`
    border: 1px solid white;
    padding:10px;
    background-color: whitesmoke;
    color: #cccc;
    box-sizing: 0px 1px 1px 0px #eeee;
    outline: none; 
    &:hover{
        border: 1px solid seagreen;
        background-color: seagreen;
        color: white;
        transition: .5s;
        
    }
    @media(max-width:800px){
        padding:10px;   
    }
`
export const Container = styled.div`
    background-color: white;
    padding: 40px 30px 20px 30px;
`

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Gallery = styled.div`
    background-color: white;
    height: 700px;
    margin-top: 25px;
`
export const Photos = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;


`
export const Img = styled.img`
    background-repeat: none;
    background-size: cover;
    height: 250px;
    box-sizing: border-box;
    flex-basis: 250px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover{
        padding: 5px;
        transition: 0.2s;
    }
    


`
export const SpinnerStyle = styled.div`
      margin: 250px 0px 0px 650px;
      @media (max-width: 800px) {
        margin: 200px 0px 0px 230px;
      }

`

