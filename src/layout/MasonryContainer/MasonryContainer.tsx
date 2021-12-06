import React from 'react'
import Masonry from 'react-masonry-css'

var items = [
  {id: 1, name: 'My First Item'},
  {id: 2, name: 'Another item'},
  {id: 3, name: 'Third Item'},
  {id: 4, name: 'Here is the Fourth'},
  {id: 5, name: 'High Five'},
]

export default function MasonryContainer() {
  return (
    //...

    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items.map(function (item) {
        return <div key={item.id}>{item.name}</div>
      })}
    </Masonry>
  )
}
