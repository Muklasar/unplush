import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUserCircle, faEllipsisH, faCamera, faGift, faThList, faTh } from '@fortawesome/free-solid-svg-icons'
import { Wrapper, Box1, Box2, TopNav, LeftSide, MiddleSide, RightSide,
        Li, Link, NavButton, Banner, TextArea,Created, H1, P, Gift, Form,
        Input, SearchButton, Container, Nav, Gallery, Photos, Img, Footer, Box3} from './LayoutStyle'
 
function Layout({setSelectedImg, setShow, setItem}){
    const [results, setResults] = useState([])
    const [value, setValue] = useState('wallpaper')
    const [navLink, setNavLink] = useState('home')
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
                        <Link alt={navLink==='camera-icon'} onClick={()=>setNavLink('camera-icon')}><FontAwesomeIcon icon={faCamera} size="2x"/></Link>
                    </LeftSide>
                    <div></div>
                    <MiddleSide>
                        <Li>
                            <Link alt={navLink==='home'} onClick={()=>setNavLink('home')}>Home</Link>
                        </Li>
                        <Li>
                            <Link alt={navLink==='collection'} onClick={()=>setNavLink('collection')}>Colleciton</Link>
                        </Li>
                        <Li>
                            <Link alt={navLink==='export'} onClick={()=>setNavLink('Export')}>Export</Link>
                        </Li>
                        <Li>
                            <Link alt={navLink==='dot-icon'} onClick={()=>setNavLink('dot-icon')}><FontAwesomeIcon icon={faEllipsisH} size="lg"/></Link>
                        </Li>
                    </MiddleSide>
                    <RightSide>
                        <Li>
                            <Link>
                                <NavButton>Submit a photo</NavButton>
                            </Link>
                        </Li>
                        <Li>
                            <Link alt={navLink==='bell-icon'} onClick={()=>setNavLink('bell-icon')}>
                                <FontAwesomeIcon icon={faBell} size="lg"/>
                            </Link>
                        </Li>
                        <Li>
                            <Link alt={navLink==='profile-icon'} onClick={()=>setNavLink('profile-icon')}>
                                <FontAwesomeIcon icon={faUserCircle} size="2x"/>
                            </Link>
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
                            <SearchButton onClick={()=>search !=='' && setValue(search)}>Search</SearchButton>
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
                            <Li>
                                <Link alt={search  === value}
                                    onClick={()=>setValue(search)}>{search.substr(0,1).toUpperCase()+search.substr(1).toLowerCase()}
                                </Link>
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
            <Footer>
                <Li>
                    <Link><FontAwesomeIcon icon={faTh} size="lg"/></Link>
                </Li>
            </Footer>
        </Wrapper>
    )
}

export default Layout;

