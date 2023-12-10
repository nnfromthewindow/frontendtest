import { useEffect, useState  } from "react"

const mountains = [{
  name: 'MOUNTAIN 1',
  isSelected: true,
  schedule:[{
    date:'25 Nov 2016',
    info: 'Vestibulum viberra'
  },
  {
    date:'28 Nov 2016',
    info: 'Vestibulum viberra'
  },
  {
    date:'18 Dec 2016',
    info: 'Vestibulum viberra'
  },
  {
    date:'7 Jan 2016',
    info: 'Vestibulum viberra'
  }]
},
{
  name: 'MOUNTAIN 2',
  isSelected: false,
  schedule:[{
    date:'22 Nov 2016',
    info: 'Vestibulum viberra'
  },
  {
    date:'21 Nov 2016',
    info: 'Vestibulum viberra'
  },
  {
    date:'15 Dec 2016',
    info: 'Vestibulum viberra'
  },
  {
    date:'2 Jan 2016',
    info: 'Vestibulum viberra'
  }]
}]

const Team = () => {

  const [schedule, setSchedule] = useState()

  useEffect(()=>{
    setSchedule(mountains[0].schedule)
    selectTab(mountains[0])
  },[])
   
  
  const selectTab = (mountain) =>{
    mountains.forEach((moun)=>{
      moun.isSelected=false
    })
    mountain.isSelected=true
  }  

  return (
    <div className="team">
      <div className="team-title">
        <div className="number-container">
          <h1 className="number">02.</h1>
          <h2 className="title">CLIMB</h2>
          <h3 className="textclimb-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ducimus, repudiandae possimus tenetur architecto quo at molestias eius asperiores hic! Tenetur mollitia sint iure libero dolore dignissimos consequuntur maiores cumque?
          </h3>
        </div>
      </div>
      <div className="tabs-container">
        <div className="tabs-flexbox">
          {mountains.map((mountain,i)=>{return <h3 onClick={()=>{
            setSchedule(mountain.schedule)
            selectTab(mountain)
            }} key={i} className={mountain.isSelected ? 'team-tab__selected' :'team-tab'}>{mountain.name}</h3>})}
        </div>
      </div>
      <div className="schedule">
        <div className="schedule-box">
          <div className="schedule-box__container">
          <h2 className="schedule-title">SCHEDULE</h2>
          <ul className="schedule-table">
            {schedule && schedule.map((sch,i)=>{
              return <li key={i} className="schedule-table__row">
                <span className="schedule-date">{sch.date}</span>
                <span className="schedule-info">{sch.info}</span>
                 </li>
            })}
          </ul>
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default Team