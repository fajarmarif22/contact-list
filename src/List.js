import React from 'react'
import data from './data'

const List = () => {
  const [people, setPeople] = React.useState(data)

  const RemoveItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
    // console.log(newPeople)
  }

  return (
    <>
      <h3 className='list'>{people.length} List Contact</h3>
      {people.map((person) => {
        const { id, name, age, image } = person
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div className='contact'>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button onClick={() => RemoveItem(id)} className='rmv'>
                Delete
              </button>
            </div>
          </article>
        )
      })}
      <button className='tombol' onClick={() => setPeople([])}>
        Clear Contact
      </button>
      <button className='tombol' onClick={() => setPeople(data)}>
        Reset
      </button>
    </>
  )
}

export default List
