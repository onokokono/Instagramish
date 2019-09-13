import React from 'react'
import { Component } from 'react'
import {BrowserRouter as Router, Redirect, NavLink} from 'react-router-dom'

import './Profile.css'

class Profile extends Component
{
    render()
    {
        return(
            <Router>
                <div class="ProfileMainFrame">
                    <div class="ProfileMainFrameHeader">

                        <div class="ProfileMainFrameHeaderLeft">
                            <div className="ProfilePhotoContainer">
                                <img class="ProfilePhoto"
                                    src="https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/20190705_maggielindemann.png?itok=DUb8jQkw">
                                </img>
                            </div>
                        </div>

                        <div class="ProfileMainFrameHeaderRight">
                            <div className="ProfileInformationHolder">
                                <div className="ProfileInformationColumn">
                                    <div className="ProfileInformationRow">
                                        <p className="ProfileInformationNameP">rilaccoco</p>
                                    </div>
                                    <div className="ProfileInformationRow">
                                        <button>Follow</button>
                                    </div>
                                    <div className="ProfileInformationRow">
                                        
                                    </div>
                                </div>
                                <div className="ProfileInformationColumn">
                                    <div className="ProfileInformationRow">
                                        <div className="fuck-the-world">
                                            <span className="cash-rules-everything">408</span> 
                                            &nbsp;posts
                                        </div>
                                    </div>
                                    <div className="ProfileInformationRow">   
                                        <p className="ProfileInformationFollowP"><strong>169k</strong>&nbsp;</p>
                                        <p className="ProfileInformationFollowP">followers</p>
                                    </div>
                                    <div className="ProfileInformationRow">
                                        <p className="ProfileInformationFollowP"><strong>351</strong>&nbsp;</p>
                                        <p className="ProfileInformationFollowP">following</p>
                                    </div>
                                </div>
                                <div className="ProfileInformationColumn">
                                    <div className="ProfileInformationRow">
                                    <p className="ProfileInformationUsernameP">Coco Lee</p>
                                    </div>
                                </div>
                                <div className="ProfileInformationColumnBio">
                                    <div className="ProfileInformationRowBio">
                                        <p className="ProfileInformationBioP">🇺🇸🇰🇷
                                            𝚜𝚎𝚘𝚞𝚕, 𝚔𝚘𝚛𝚎𝚊📍
                                            𝚋𝚞𝚜𝚒𝚗𝚎𝚜𝚜👉🏻 𝚍𝚖
                                            ↓ 𝚢𝚘𝚞𝚝𝚞𝚋𝚎
                                            → 𝚌𝚎𝚘 𝚘𝚏 @zhzh_official
                                            m.youtube.com/watch?v=G_IG2sdF4vE
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="ProfileSecondFrame">

                        <div className="ProfileSecondFrameMenu">
                            <Router>
                                <div className="PageSwitcherProfile">
                                    <NavLink exact to="/Profile" activeClassName="PageSwitcher_ItemProfile--Active" className="PageSwitcherProfile_Item PageSwitcherProfile_Item--Active">POSTS</NavLink>
                                    <NavLink exact to="/Profile" activeClassName= "PageSwitcher_ItemProfile--Active" className="PageSwitcherProfile_Item">SAVED</NavLink>
                                    <NavLink exact to="/Profile" activeClassName= "PageSwitcher_ItemProfile--Active" className="PageSwitcherProfile_Item">IGTV</NavLink>
                                    <NavLink exact to="/Profile" activeClassName= "PageSwitcher_ItemProfile--Active" className="PageSwitcherProfile_Item">TAGGED</NavLink>
                                </div>



                            </Router>
                        </div>

                    </div>
                </div>
            </Router>
        );
    }
}

export default Profile;