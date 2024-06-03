

async function  Page() {
  return (
    <div>
      <ul>
        {data.map((el)=> <li key={el.id}>{el.name}</li>)}
      </ul>
    </div>
    )
}

export default Page
