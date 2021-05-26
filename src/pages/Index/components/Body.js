import React from 'react'
import PostsList from './PostsList'
import Alert from'./Alert'
import Jumbotron from './Jumbotron'
import Subscribe from './Subscribe'

import './Body.css'

const posts = [
    {
        id:1,
        img:'https://images.unsplash.com/photo-1542309174-26c691a6d0b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80',
        title:'Grand Canyon National Park Public Health Update',
        details: 'he health and safety of our visitors, employees, volunteers, and partners continues to be paramount. At Grand Canyon National Park, our operational approach will be to examine each facility function and service provided to ensure those operations comply with current public health guidance and will be regularly monitored. We continue to work closely with the NPS Office of Public Health using CDC guidance to ensure public and workspaces are safe and clean for visitors, employees, partners and volunteers.',
    },
    {
        id:2,
        img:'https://images.unsplash.com/photo-1597162873023-952298ddb03f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80',
        title:'Climbing guide says coronavirus outbreak on Mount Everest has infected at least 100 people',
        details: 'A total of 408 foreign climbers were issued permits to climb Everest this season, aided by several hundred Sherpa guides and support staff who’ve been stationed at base camp since April. In late April, a Norwegian climber became the first to test positive at the Everest base camp.The climbing season closes at the end of the month. Mountaineering was closed last year due to the pandemic.',
    },
    {
        id:3,
        img:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        title:'Great Wall of China is destination of champion fundraiser and Padiham mum of twins',
        details: "She said: 'I signed up to take part because this is such a fantastic opportunity and a once in a lifetime chance to visit an iconic place and also raise money for such a good cause.'Julie, whose husband Jonathan runs his own butcher's shop in Padiham, has already raised £1,500 for the hospice through donations and raffles and in July she will host a fund raising dinner at The Lawrence Hotel in Padiham.",
    },
    {
        id:4,
        img:'https://images.unsplash.com/photo-1617763613787-3e5486ac26ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1833&q=80',
        title:"Egypt’s Great Pyramid built with incredible mortar technique that ‘set like concrete'",
        details: 'A total of 408 foreign climbers were issued permits to climb Everest this season, aided by several hundred Sherpa guides and support staff who’ve been stationed at base camp since April. In late April, a Norwegian climber became the first to test positive at the Everest base camp.The climbing season closes at the end of the month. Mountaineering was closed last year due to the pandemic.',
    },
    {
        id:5,
        img:'https://images.unsplash.com/photo-1542654071-7ded22488685?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80',
        title:'Eiffel Tower to Reopen in Mid-July After Suffering Heavy Losses',
        details: 'The news comes as the terraces of cafes, restaurants and bars in Paris and throughout France reopened this week. The country’s curfew was pushed back to 9 p.m. and French citizens can now shop for shoes and visit museums, albeit with restrictions on the number of people who can enter.',
    }
]
const Body = () => {
    return (
        <div className='container'>
            <Jumbotron />
            <PostsList key={posts.id} postlist={posts} /> 
            <Alert />
            <Subscribe />
        </div>
    )
}
export default Body
