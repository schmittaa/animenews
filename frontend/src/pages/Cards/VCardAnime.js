import React  from 'react'
import { Card } from 'react-bootstrap'

function VCardAnime({ anime }) {
  const date = new Date(anime.date);
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();

  return (
    <div style={{ width: '60%', margin: 'auto' }}>
      <Card  className="CardNews">
        <Card.Header style={{ color: " rgb(28, 101, 150)" , fontSize :"14px"}}>{anime?.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <div className='animeDiv'>
              <img className='poster' alt="poster" src={anime?.poster} />
              <p style={{ marginTop: "10px" }}>
                {anime?.description}
              </p>

            </div>
            <footer className="footer" style={{ float: "right" }}>
                  Date : {y}-{m}-{d}  
                  </footer>
          </blockquote>
        </Card.Body>
      </Card>

    </div>
  )
}

export default VCardAnime