import React, { Component } from 'react'

import "./Home.css";
import Header from './Header/Header'
import Post from './Post/Post';
import avatar_img from '../../oven.svg';
import default_img from '../../cool1.jpg';
import cool2 from '../../cool2.jpg';

class Home extends  Component
{
    render()
    {
        return(
            <div className="App">
                <nav className="Nav">
                    <Header/>
                </nav>

                <section className="App-main">
                    <Post nickname="Mandy" avatar={avatar_img} caption="Moving the community!" image={cool2} />
                    <Post nickname="OG" avatar={avatar_img} caption="Holding a mic" image={default_img} />
                    <Post nickname="OG" avatar={avatar_img} caption="Holding a mic" image={default_img} />
                    <Post nickname="OG" avatar={avatar_img} caption="Holding a mic" image={default_img} />
                    <Post nickname="OG" avatar={avatar_img} caption="Holding a mic" image={default_img} />
                </section>

            </div>
            
        );
    }
}

export default Home;