import React from 'react'

const page = ({ params }) => {
console.log(params)
  return (
    <div>Blog Post {params.id}</div>
  )
}

export default page