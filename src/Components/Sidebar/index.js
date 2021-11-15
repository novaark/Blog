import React from 'react'
import {
    BarContainer,
    HomeLink,
    PostLink,
    PostLinks
} from './SideBarElements'

const SideBar = (props) => {
    return (
        <BarContainer>
            <PostLinks>
                <HomeLink to='/'>Home</HomeLink>
                {props.posts.map(post=>{
                    return(
                        <PostLink to={`/post/${post._id}`}>{post.title}</PostLink>
                    )
                })}
            </PostLinks>
        </BarContainer>
    )
}

export default SideBar
