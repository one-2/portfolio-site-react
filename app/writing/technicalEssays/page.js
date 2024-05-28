// TODO:
// 

import EssaySidebar from "./essaySidebar"

export default function Blog() {
  // Import the data
  const essayData = require('./essayData.json');

  return (
    <EssaySidebar data={essayData} />
  )
}
