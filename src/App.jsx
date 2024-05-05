import { useState } from 'react'
import './App.css'
import JobFilter from './components/JobFilter/JobFilter'
import JobCard from './components/JobCard/JobCard'

function App() {
  const data = [
    {
      "jdUid": "cfff359f-053c-11ef-83d3-06301d0a7178-92008",
      "jdLink": "https://weekday.works",
      "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      "maxJdSalary": null,
      "minJdSalary": 44,
      "salaryCurrencyCode": "USD",
      "location": "chennai",
      "minExp": 7,
      "maxExp": 14,
      "jobRole": "tech lead",
      "companyName": "Olympus",
      "logoUrl": "https://logo.clearbit.com/olympus.com"
    },
    {
      "jdUid": "cfff3d31-053c-11ef-83d3-06301d0a7178-92052",
      "jdLink": "https://weekday.works",
      "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      "maxJdSalary": 78,
      "minJdSalary": 48,
      "salaryCurrencyCode": "USD",
      "location": "mumbai",
      "minExp": 4,
      "maxExp": 8,
      "jobRole": "ios",
      "companyName": "Alibaba",
      "logoUrl": "https://logo.clearbit.com/alibaba.com"
    },
    {
      "jdUid": "cfff3d3e-053c-11ef-83d3-06301d0a7178-92054",
      "jdLink": "https://weekday.works",
      "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      "maxJdSalary": 102,
      "minJdSalary": 76,
      "salaryCurrencyCode": "USD",
      "location": "bangalore",
      "minExp": 8,
      "maxExp": 8,
      "jobRole": "backend",
      "companyName": "GoPro",
      "logoUrl": "https://logo.clearbit.com/gopro.com"
    }]

  return (
    <>
      <JobFilter />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
        {data.map((val) => (
          <JobCard key={val.jdUid} data={val} />

        ))}
      </div>

    </>
  )
}

export default App
