import React from "react"
import { graphql } from "gatsby"
import "../../static/style.css"

export default ({ data }) => {
  console.log(data.aqar.Web.find.listings)
  return (
      <div style={{direction:'rtl'}} className="ma10">
        <h1 style={{
          background: '#151515',
          color: '#fff',
          padding: 22
      }}>Aqar</h1>
        
       
          {data.aqar.Web.find.listings.map(({ title , content, location, imgs}, index) => (
            <div key={index} className="">
              <h1 className="purple-d3 unconditional-open-source">{title}</h1>
              <h4>{content}</h4>
              <h4>{location.lat}</h4>
              <h4>{location.lng}</h4>
              {imgs && imgs.map((image, index)=>(
              <img  style={{    display: 'inline-block',
                height: 150,
                margin: 20}}src={"https://s3-eu-west-1.amazonaws.com/aqar/props/"+image } key={index} />
              ))}
            </div>
          ))}
         
      </div>
  )
}

export const query = graphql`
  query {
  aqar {
    Web {
      find(size: 100) {
        total
        listings {
          imgs
          title
          address
          content
          location {
            lat
            lng
          }
        }
      }
    }
  }
}

`