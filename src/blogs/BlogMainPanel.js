
export default function BlogMainPanel() {
  return (
    <div className='container border border-primary ps-3 pe-3 pt-2'>
      <div row className='m-3'>
        <div className='row'>
          <div className='col-auto'>
            <h2 className='fs-4'>
              Around the World - Part 2.
            </h2>
          </div>
          <div className='col-auto'>
            {/* TODO: shift down to baseline of title */}
            <p className='ms-2'>
              15/12/2024.
            </p>
          </div>
        </div>
        <div className='row'>
          <p>Here is some blog text about my trip around the world in December 2024. I could talk about this for a while. Matter of fact, I will be talking about this for a while...</p>
        </div>
      </div>
    </div>
  )
}
