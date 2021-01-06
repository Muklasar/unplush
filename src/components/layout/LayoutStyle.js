import styled from 'styled-components'

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(30, 1fr);  
    background-color: #ddd;
    height: 100%;
`

export const Box1 = styled.div`
    grid-column: 1/-1;   
    grid-row: 1/-1;
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
    height: 100%;
    margin-top:60px;
    margin-bottom: 50px;
    // @media (max-width: 360px) {
    //     margin-right:5px;
    //   }
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
    @media(max-width: 360px) {
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
    color: ${props=>props.alt ? 'seagreen' : '#ccc'};
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
      @media (max-aspect-ratio: 1/1) and (max-width: 460px) {
        position: absolute;
        top:100px;
        left: 50px;
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
export const Form = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
`
export const Input = styled.input`
    width: 100%;
    padding: 10px;
    outline: none;
    border: 1px solid white;
    font-family: verdana;
    font-weight: 600;
    color: seagreen;
    &:focus{
        border: 2px solid seagreen; 
        font-family: verdana;
        font-weight: 500;
    }
`
export const SearchButton = styled.button`
    border: 1px solid white;
    padding:10px;
    background-color: whitesmoke;
    color: #cccc;
    outline: none; 
    font-family: sans-serif;
    &:hover{
        border: 1px solid seagreen;
        background-color: seagreen;
        color: white;
        padding:10px;
        transition: .5s;
        outline: none; 
    }
    &:focus{
        outline: none;
        color: white;
        background-color: seagreen;
        border: 1px solid yellow;
        padding: 11px;
        transition: .1s;
        
    }


`

// galary 

export const Container = styled.div`
    background-color: white;
    padding: 40px 30px 20px 30px;
`

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width:460px){
        flex-direction: column;
    }
`

export const Gallery = styled.div`
    background-color: white;
    height: 700px auto;
    margin-top: 25px;
    margin-bottom: 20px;
    @media (max-aspect-ratio: 1/1) and (max-width: 460px) {
        margin-top: 5px;
      }
`
export const Photos = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    @media (max-aspect-ratio: 1/1) and (max-width: 460px) {
        flex-direction: row;
        img {
          width: 100%;
          max-height: 75vh;
          min-width: 0;
        }
      }
`

export const Img = styled.img`
    background-repeat: none;
    background-size: cover;
    height: 300px;
    box-sizing: border-box;
    flex-basis: 350px auto;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover{
        padding: 5px;
        transition: 0.2s;
    }  
    @media(max-width:360px){
        padding-left:10px;
       
    } 
`

export const SpinnerStyle = styled.div`
    margin: 250px 0px 0px 750px;
      @media (max-width: 800px) {
        margin: 200px 0px 0px 230px;
      }
      @media (max-aspect-ratio: 1/1) and (max-width: 460px){
        margin: 250px 0px 0px 170px;
      }
`

