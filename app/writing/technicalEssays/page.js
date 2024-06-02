import EssaySidebar from "./essaySidebar"

export const metadata = {
  title: 'Technical Essays',
  description: '...',
}

export default function Blog() {
  // Import the data
  const essayData = require('./essayData.json');

  return (
    <EssaySidebar data={essayData} />
  )
}
