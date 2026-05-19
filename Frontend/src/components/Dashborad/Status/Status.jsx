import React from 'react'
import CardStatus from '../../ui/CardStatus/CardStatus';

function Status() {
  return (
   <section>
    <div className="container">
    <div className="row">
     <div className="col-12 col-md-3">
      <CardStatus counter="120" title="Projects" icon='fa-solid fa-building'/>
     </div>
    <div className="col-12  col-md-3">
      <CardStatus counter="150" title="Users"  icon='fa-solid fa-users'/>
      </div>
    <div className="col-12  col-md-3">
      <CardStatus counter="200" title="Developer"  icon='fa-solid fa-building'/>
      </div>
    <div className="col-12  col-md-3">
      <CardStatus counter="50" title="Blogs"  icon=""/>
      </div>
        </div>
    </div> 
   </section>
  )
}

export default Status;