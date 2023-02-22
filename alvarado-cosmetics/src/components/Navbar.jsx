import { Flex, Image, InputGroup, InputRightAddon, InputRightElement, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import { BsPersonCircle } from 'react-icons/bs'
import { FaRegHeart } from "react-icons/fa"
import { MdOutlineShoppingBag } from "react-icons/md"
import { TbDiscount2 } from "react-icons/tb"
import styles from "./Header.module.css";


const Navbar = () => {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    return (
        <>
            <div style={{ backgroundColor: "black", color: "white", borderBottom: "1px solid gray", padding: "5px" }}>
                <h1>FREE Base Of Glory Pore Minimizing Primer on a spend of Rs.999</h1>
            </div>
            <Flex minWidth='max-content' alignItems='center' gap='2' bg="black" height="120px" justifyContent="space-around">
                <Link to="/">

                    <Image src={logo} width="300px" />

                </Link>

                <div>
                    <InputGroup>

                        <InputRightElement
                            pointerEvents="none"
                        // children={<SearchIcon color='black' marginLeft="20px"/> }

                        />



                        <Input type="text" placeholder="Search AlVARADO COSMETICS" width="500px" style={{ backgroundColor: 'white' }} />
                        <InputRightAddon children='Search' style={{ cursor: "pointer" }} />
                    </InputGroup>
                </div>

                <div style={{ display: "flex", alignItems: "center", columnGap: "2px", color: "white" }}>


                    <Link to="/login">
                        <div style={{ display: 'flex', alignItems: "center", columnGap: '5px' }}>
                            <BsPersonCircle />
                            <h1>Login</h1>
                        </div>
                    </Link> {"  "} / {"  "}


                    <Link to="/register">
                        <h1>Register</h1>
                    </Link>

                    <div style={{ display: "flex", alignItems: "center", columnGap: "10px", marginLeft: "80px" }}>

                        <Link to="/wishlist">

                            <FaRegHeart style={{ fontSize: "22px" }} />

                        </Link>

                        <Link to="/cart">
                            <MdOutlineShoppingBag style={{ fontSize: "26px" }} />
                        </Link>

                        <Link to="/discount">
                            <TbDiscount2 style={{ fontSize: "25px" }} />
                        </Link>
                    </div>

                </div>
            </Flex>

            <div className={styles.div3} style={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                padding: "30px",
                alignItems: "center",

            }}>
                <div className={styles.makeup}>
                    <Link
                        to="/makeup"
                        style={{ fontSize: "17px", fontFamily: "Quicksand" }}
                        id={styles.link}
                    >
                        LIPS
                    </Link>

                    <div className={styles.dropdown1}>
                        <Link to="/lips">LIPS</Link>
                        <Link to="/face">FACE</Link>
                        <Link to="/eyes">EYES</Link>
                    </div>
                </div>

                <div className={styles.makeup}>
                    <Link
                        to="/brushes"
                        style={{ fontSize: "17px", fontFamily: "Quicksand" }}
                        id={styles.link}
                    >
                        EYES
                    </Link>
                    <div className={styles.dropdown1}>
                        <Link to="/facebrushes">FACE BRUSHES</Link>
                        <Link to="/eyebrushes">EYE BRUSHES</Link>
                    </div>
                </div>
                <div className={styles.makeup}>
                    <Link
                        to="/skincare"
                        style={{ fontSize: "17px", fontFamily: "Quicksand" }}
                        id={styles.link}
                    >
                        FACE
                    </Link>
                    <div className={styles.dropdown1}>
                        <Link to="/moisturisers">MOISTURISERS</Link>
                        <Link to="/masks">MASKS</Link>
                        <Link to="/settingmists">SETTING MISTS</Link>
                        <Link to="/coffeculturerange">COFFEE CULTURE RANGE</Link>
                        <Link to="/sheetmustcombo">SHEET MUSK COMBO</Link>
                        <Link to="/citrusgoatrealrange">CITRUS GOAT REAL RANGE</Link>
                        <Link to="/aquaholicrange">AQUAHOLIC RANGE</Link>
                    </div>
                </div>
                <div className={styles.makeup}>
                    <Link
                        to="/trending"
                        style={{ fontSize: "17px", fontFamily: "Quicksand" }}
                        id={styles.link}
                    >
                        SKINCARE
                    </Link>
                    <div className={styles.dropdown1}>
                        <Link to="/sugarmerchstation">SUGAR MERCH STATION</Link>
                        <Link to="/makeupkits">MAKE UP KITS</Link>
                        <Link to="/bestsellers">BESTSELLERS</Link>
                    </div>
                </div>

                {/* <div className='textdecorat' ><Link to="/blog" id= {styles.link}>BLOG</Link></div>
          <div><Link className='textdec' to="/offers" id= {styles.link}>OFFERS</Link></div>
        </div> */}

                <div>
                    <Link
                        to="/blog"
                        style={{ fontSize: "17px", fontFamily: "Quicksand" }}
                        id={styles.link}
                    >
                        ACCESSORIES
                    </Link>
                </div>
                <div>
                    <Link
                        to="/offers"
                        style={{ fontSize: "17px", fontFamily: "Quicksand" }}
                        id={styles.link}
                    >
                        GIFTS & KITS
                    </Link>
                </div>

                <div>
                    <Link
                        to="/offers"
                        style={{ fontSize: "17px", fontFamily: "Quicksand" }}
                        id={styles.link}
                    >
                        BESTSELLERS
                    </Link>
                </div>

                <div>
                    <Link
                        to="/offers"
                        style={{ fontSize: "17px", fontFamily: "Quicksand" }}
                        id={styles.link}
                    >
                        NEW LAUNCHES
                    </Link>
                </div>

                <div>
                    <Link
                        to="/offers"
                        style={{ fontSize: "17px", fontFamily: "Quicksand" }}
                        id={styles.link}
                    >
                        OFFERS
                    </Link>
                </div>

                <div>
                    <Link
                        to="/offers"
                        style={{ fontSize: "17px", fontFamily: "Quicksand" }}
                        id={styles.link}
                    >
                        BLOG
                    </Link>
                </div>

                <div>
                    <Link
                        to="/offers"
                        style={{ fontSize: "17px", fontFamily: "Quicksand" }}
                        id={styles.link}
                    >
                        STORES
                    </Link>
                </div>
            </div>

            {show && (
                <>
                    <div className={styles.bgmodal}>
                        <div className={styles.modalcontents}>
                            <div id={styles.slide}>
                                <img
                                    id={styles.bg}
                                    src="https://in.sugarcosmetics.com/Login_bg.svg"
                                    alt=""
                                />
                            </div>

                            <div id={styles.form}>
                                <p id={styles.head}>
                                    <span
                                        style={{ marginRight: "50px", cursor: "pointer" }}
                                        onClick={() => setShow(false)}
                                    >
                                        <i class="fa-solid fa-xmark"></i>
                                    </span>
                                    Login/Sign Up Using Phone
                                </p>
                                <div id={styles.numHold}>
                                    <p id={styles.code}>+91</p>
                                    <input type="text" id={styles.number} maxlength="1" />
                                    <input type="text" id={styles.number} maxlength="1" />
                                    <input type="text" id={styles.number} maxlength="1" />
                                    <input type="text" id={styles.number} maxlength="1" />
                                    <input type="text" id={styles.number} maxlength="1" />
                                    <input type="text" id={styles.number} maxlength="1" />
                                    <input type="text" id={styles.number} maxlength="1" />
                                    <input type="text" id={styles.number} maxlength="1" />
                                    <input type="text" id={styles.number} maxlength="1" />
                                    <input type="text" id={styles.number} maxlength="1" />
                                    <button id={styles.request}>Request OTP</button>
                                </div>

                                <p id={styles.enter}>
                                    Enter your phone number to request an OTP
                                </p>
                                <hr id={styles.hr} />
                                <p id={styles.digit}>
                                    Enter the 4 digit OTP received on your phone.
                                </p>

                                <div id={styles.otpHold}>
                                    <input type="text" id={styles.otp} maxlength="1" />
                                    <input type="text" id={styles.otp} maxlength="1" />
                                    <input type="text" id={styles.otp} maxlength="1" />
                                    <input type="text" id={styles.otp} maxlength="1" />
                                </div>
                                <button id={styles.verify}>Verify OTP</button>

                                <div id={styles.condition}>
                                    <input type="checkbox" id={styles.check} />
                                    <p id={styles.whatsapp}>
                                        Get Important Updates on Whatsapp.{" "}
                                    </p>
                                    <a id={styles.terms} href="">
                                        Terms and Conditions
                                    </a>
                                </div>

                                <div id={styles.extra}>
                                    <p id={styles.p1}>
                                        Registering for this site allows you to access your order
                                        status and history. Just fill in the fields below, and we'll
                                        get a new account set up for you in no time. We will only
                                        ask you for information necessary to make the purchase
                                        process faster and easier.
                                    </p>

                                    <div id={styles.extraInfo}>
                                        <p id={styles.p2}>
                                            By Signing up or logging in, you agree to our{" "}
                                        </p>
                                        <a href="" id={styles.terms2}>
                                            Terms and Conditions
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Navbar
