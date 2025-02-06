import {useContext, useState} from "react";
import { UserContext } from "../UserContext.jsx";
import {  Link, Navigate, useParams} from "react-router-dom";
import axios from "axios";
import BooksPage from "./BooksPage.jsx";
import AccountNav from "../AccountNav.jsx";
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';


export default function ProfilePage() {
    const {redirect,setRedirect,} = useState(false);       
    const {ready,user,setUser} = useContext(UserContext);
    let {subpage} = useParams();
    if (subpage === undefined) {
        subpage = 'profile'; 
    }
    
    async function logout() {
        await axios.post('/logout')
        .then(() => location.href = '/login')
        setRedirect('/');
        setUser(false);
    }
    
    if (!ready) {
        return 'Loading...';
    }

    if (ready && !user && !redirect) {
        return <Navigate to= {'/login'} />
    }


    if (redirect) {
        return <Navigate to={redirect} />
    }

    return (
        <div className="bg-black rounded-3xl mt-12 ml-24">
            <AccountNav />
            <section className="flex-c justify-around bg-lightblack">
                <MDBContainer className="flex-c h-86">
                    <MDBRow className="flex-c justify-content-center align-items-center p-1">
                        <MDBCol lg="6" className="mb-4 mb-lg-0">
                            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                                <MDBRow className="g-5">
                                    <MDBCol md="4" className="gradient-custom text-center text-primary"
                                        style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                            alt="Avatar" className="my-20  ml-4" style={{ width: '150px' }} fluid />
                                        <MDBTypography tag="h5" className="text-3xl">{user.name}</MDBTypography>
                                        <MDBCardText className="text-2xl">Bookshelf Client</MDBCardText>
                                        <MDBIcon far icon="edit mb-5" />
                                    </MDBCol>
                                    <MDBCol md="8">
                                        <MDBCardBody className="p-4 text-3xl font-bold">
                                            <MDBTypography tag="h9">User Information</MDBTypography>
                                            <hr className="mt-2 mb-4" />
                                            <MDBRow className="pt-1">
                                                <MDBCol size="6" className="mb-3">
                                                    <MDBTypography tag="h6">{user.email}</MDBTypography>
                                                    <MDBCardText className="text-muted text-sm gap-4">Registered Identity</MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="6" className="mb-3">
                                                    <MDBTypography tag="h6">Connection</MDBTypography>
                                                    <MDBCardText className="text-muted text-sm">ASIA</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBTypography tag="h6" className="flex mt-22 p-3 text-center text-2xl font-bold mr-9">PROPER IDENTIFICATION</MDBTypography>
                                            <hr className="mt-9 mb-4" />
                                            <MDBRow className="pt-1">
                                                <MDBCol size="6" className="mb-3">
                                                    <MDBTypography tag="h6">Feedback for users</MDBTypography>
                                                    <MDBCardText className="text-muted text-sm">We Provide The Best Quality For Our Client and Ensure The Maximum Satisfaction.</MDBCardText>
                                                </MDBCol>
                                                <MDBCol size="6" className="mb-3">
                                                    <MDBTypography tag="h6">@Bookshelf-2K24</MDBTypography>
                                                    <MDBCardText className="flex text-muted text-center text-sm mr-9 mt-4">User Experience Professional</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>

                                            <div className="d-flex justify-content-start">
                                                <a href="#"><MDBIcon fab icon="facebook me-5" size="lg" /></a>
                                                <a href="#"><MDBIcon fab icon="twitter me-5" size="lg" /></a>
                                                <a href="#"><MDBIcon fab icon="instagram me-5" size="lg" /></a>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <br/>
            <div className=" flex-c text-2xl items-center bg-black font-bold p-2">
                <Link to={'/login'} className="flex items-center gap-1">
                    {subpage === 'profile' && (
                        <div className="text-center flex-c max-w-lg mx-auto text-iv text-2xl underline p-8">
                            Logged in as {user.name} ({user.email})<br />
                            <button onClick={logout} className="primary text-2xl max-w-sm mt-8">Logout</button>
                        </div>
                    )}
                    {subpage === 'books' && (
                        <BooksPage />
                    )}
                </Link>
    
            </div>    
        </div>
    );
}
