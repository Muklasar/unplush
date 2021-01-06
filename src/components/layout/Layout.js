import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUserCircle, faEllipsisH, faCamera, faGift, faThList, faTh } from '@fortawesome/free-solid-svg-icons'
import { Wrapper, Box1, Box2, TopNav, LeftSide, MiddleSide, RightSide,
        Li, Link, NavButton, Banner, TextArea,Created, H1, P, Gift, Form,
        Input, SearchButton, Container, Nav, Gallery, Photos, Img} from './LayoutStyle'
 
function Layout({setSelectedImg, setShow, setItem}){
    const [results, setResults] = useState([])
    const [value, setValue] = useState('roads')
    const [search, setSearch] = useState('')

    useEffect(() =>{
        fetch(`https://api.unsplash.com/search/collections?query=${value}&client_id=0gVQbU32JNryxIsF2El6Jcxr8u98EPz8E4SGjkfUPAY`)
        .then(res=>res.json())
        .then(data=>{
            setResults(data.results)
            console.log(data.results)
            
        })
    }, [value]) 

    let photos = null;
    if(results){
        photos = (
            <Photos>
                {
                    results.map((item)=>{
                        return <Img src={item.cover_photo.urls.small}
                                key={item.id}
                                onClick={()=>{setSelectedImg(item.cover_photo.urls.small);
                                        setShow(true); setItem(item.id)}}
                                />
                    })
                }
            </Photos>
        )
    }
    

    return(
        <Wrapper>
            <Box1 />
            <Box2>
                <TopNav>
                    <LeftSide>
                        <Link><FontAwesomeIcon icon={faCamera} size="2x"/></Link>
                    </LeftSide>
                    <div></div>
                    <MiddleSide>
                        <Li>
                            <Link>Home</Link>
                        </Li>
                        <Li>
                            <Link>Colleciton</Link>
                        </Li>
                        <Li>
                            <Link>Export</Link>
                        </Li>
                        <Li>
                            <Link><FontAwesomeIcon icon={faEllipsisH} size="lg"/></Link>
                        </Li>
                    </MiddleSide>
                    <RightSide>
                        <Li>
                            <Link>
                                <NavButton>Submit a photo</NavButton>
                            </Link>
                        </Li>
                        <Li>
                            <Link><FontAwesomeIcon icon={faBell} size="lg"/></Link>
                        </Li>
                        <Li>
                            <Link><FontAwesomeIcon icon={faUserCircle} size="2x"/></Link>
                        </Li>
                    </RightSide>
                </TopNav>
                <Banner>
                    <TextArea>
                        <H1>Unplash</H1>
                        <P>Beautiful, free photo</P>
                        <P>Gifted by world most geneous commounity of photographers.
                            <Gift><FontAwesomeIcon icon={faGift} size="lg"/></Gift></P>
                        <Form>
                            <Input onChange={(e)=>setSearch(e.target.value)} placeholder="Search..."/>
                            <SearchButton onClick={()=>{setValue(search); setSearch('')}}>Search</SearchButton>
                        </Form>
                    </TextArea>
                    <Created>@Created by Muklasar Rahaman</Created>
                </Banner>
                <Container>
                    <Nav>
                        <LeftSide>
                            <Li>
                                <Link alt={value === 'wallpaper'}
                                    onClick={()=>setValue('wallpaper')}>Wallpaper</Link>
                            </Li>
                            <Li>
                                <Link alt={value  === 'car'} onClick={()=>setValue('car')}>Car</Link>
                            </Li>
                            <Li>
                                <Link alt={value  === 'bike'} onClick={()=>setValue('bike')}>Bike</Link>
                            </Li>
                        </LeftSide>
                        <RightSide>
                            <Li>
                                <Link><FontAwesomeIcon icon={faThList} size="lg"/></Link>
                            </Li>
                            <Li>
                                <Link><FontAwesomeIcon icon={faTh} size="lg"/></Link>
                            </Li>
                        </RightSide>
                    </Nav>
                    <Gallery>
                        {photos ? photos : 'loading...' }
                    </Gallery>
                </Container>

            </Box2>
        </Wrapper>
    )
}

export default Layout;

