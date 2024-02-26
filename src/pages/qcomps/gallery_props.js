function Avatar({person, size=100}) {
  return (
    <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageId + '.jpg'}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

function Detail({profileDetail}) {
  return(
      <ul>
          <li><b>Profession: </b>{profileDetail.profession}</li>
          <li><b>Awards: {profileDetail.awards.length}</b> {profileDetail.awards.join(', ')}</li>
          <li><b>Discovered: </b>{profileDetail.discovered}</li>
      </ul>
  )
}

const persons =[ 
  {
  name: 'Maria Skłodowska-Curie',
  imageId: 'szV5sdGs',
  imageSize: 's',
  profileDetail: {
    profession: 'physicist and chemist',
    awards: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
    discovered: 'polonium (element)'
  }
},
{
  name: 'Katsuko Saruhashi',
  imageId: 'YfeOqp2s',
  imageSize: 's',
  profileDetail: {
    profession: 'geochemist',
    awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
    discovered: 'a method for measuring carbon dioxide in seawater'
  }
},
{
  name: 'Katsuko Saruhashi 2',
  imageId: 'YfeOqp2s',
  imageSize: 's',
  profileDetail: {
    profession: 'geochemist 2',
    awards: ['Miyake Prize for geochemist'],
    discovered: 'a method for measuring carbon dioxide in seawater'
  }
}
];

function Profile({person}){
  return (
    <section>
      <h2>{person.name}</h2>
      <Avatar person={person} size="70"/>
      <Detail profileDetail={person.profileDetail}/>
    </section>
    )
}

export default function Gallery() {

  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile person={persons[0]}/>
      <Profile person={persons[1]}/>
      <Profile person={persons[2]}/>
    </div>
  )
}
