import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUserCircle, faEllipsisH, faCamera, faGift, faThList, faTh } from '@fortawesome/free-solid-svg-icons'
import {
    Wrapper, Box1, Box2, TopNav, LeftSide, MiddleSide, RightSide,
    Li, Link, NavButton, Banner, TextArea, Created, H1, P, Gift, SearchForm,
    Input, SearchButton, Container, Nav, Gallery, Photos, Img, NoResultText
} from './LayoutStyle'


function Layout({ setSelectedImg, setShow, setItem }) {
    const [results, setResults] = useState([])
    const [value, setValue] = useState('Nature')
    const [search, setSearch] = useState(null)
    const [tab, setTab] = useState('Home')

    useEffect(() => {
        fetch(`https://api.unsplash.com/search/collections?query=${value}&client_id=0gVQbU32JNryxIsF2El6Jcxr8u98EPz8E4SGjkfUPAY`)
            .then(res => res.json())
            .then(data => {
                setResults(data.results)
            })
    }, [value])
    
    const submitHandler = (e) => {
        e.preventDefault()
        if(search){
        setValue(search)
    }
    }
    const photos = <div>{results.length ?
        <Photos>

            {
                results.map((item) => {
                    return <Img src={item.cover_photo.urls.small}
                        key={item.id}
                        onClick={() => {
                            setSelectedImg(item.cover_photo.urls.small);
                            setShow(true); setItem(item)
                        }} alt="img.jpg" />
                })
            }

        </Photos> : <NoResultText>{value} : No Image Found</NoResultText>}</div>

    return (
        <Wrapper>
            <Box1 />
            <Box2>
                <TopNav>
                    <LeftSide>
                        <Link><FontAwesomeIcon icon={faCamera} size="2x" /></Link>
                    </LeftSide>
                    <div></div>
                    <MiddleSide>
                        <Li>
                            <Link onClick={()=>setTab('Home')} alt={tab==="Home"}>Home</Link>
                        </Li>
                        <Li>
                            <Link onClick={()=>setTab('Collection')} alt={tab==="Collection"}>Colleciton</Link>
                        </Li>
                        <Li>
                            <Link onClick={()=>setTab('Export')} alt={tab==="Export"}>Export</Link>
                        </Li>
                        <Li>
                            <Link><FontAwesomeIcon icon={faEllipsisH} size="lg" /></Link>
                        </Li>
                    </MiddleSide>
                    <RightSide>
                        <Li>
                            <Link alt={value}>
                                <NavButton>Submit a photo</NavButton>
                            </Link>
                        </Li>
                        <Li>
                            <Link><FontAwesomeIcon icon={faBell} size="lg" /></Link>
                        </Li>
                        <Li>
                            <Link><FontAwesomeIcon icon={faUserCircle} size="2x" /></Link>
                        </Li>
                    </RightSide>
                </TopNav>
                <Banner>
                    <TextArea>
                        <H1>Unplash</H1>
                        <P>Beautiful, free photo</P>
                        <P>Gifted by world most geneous commounity of photographers.
                            <Gift><FontAwesomeIcon icon={faGift} size="lg" /></Gift></P>
                        <SearchForm onSubmit={submitHandler}>
                            <Input placeholder="Search..." onChange={e => setSearch(e.target.value)} />
                            <SearchButton>Search</SearchButton>
                        </SearchForm>
                    </TextArea>
                    <Created href="https://www.instagram.com/iamuklasar/" target="blank">@Created by Muklasar Rahaman</Created>
                </Banner>
                <Container>
                    <Nav>
                        <LeftSide>
                            <Li>
                                <Link onClick={()=>setValue("Nature")} alt={value==="Nature"}>Nature</Link>
                            </Li>
                            <Li>
                                <Link onClick={()=>setValue("Car")} alt={value==="Car"}>Car</Link>
                            </Li>
                            <Li>
                                <Link onClick={()=>setValue("Bike")} alt={value==="Bike"}>Bike</Link>
                            </Li>
                            <Li>
                                <Link onClick={() => { setValue(search) }} alt={value===search}>{search}</Link>
                            </Li>
                        </LeftSide>
                        <RightSide>
                            <Li>
                                <Link><FontAwesomeIcon icon={faThList} size="lg" /></Link>
                            </Li>
                            <Li>
                                <Link><FontAwesomeIcon icon={faTh} size="lg" /></Link>
                            </Li>
                        </RightSide>
                    </Nav>
                    <Gallery>
                        {photos}
                    </Gallery>
                </Container>

            </Box2>
        </Wrapper>
    )
}

export default Layout;

