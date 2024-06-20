// TODO PROD rewrite the get-1 as a server route and call that directly

import getWritingData from "./fetchAllWritingData";

export default async function fetchData(siteSection, slug) {
  try {
    let data = await getWritingData(siteSection);
    if (data) {
      console.log('Data retrieved')
    }
    if (data.length === 1) data = data[0]; // Hack fix for weird bug where the data is doubly listed on the return, while the Blogs data is singly
    // console.log('swag data: ', data) // TODO debug - for some reaosn this is doubly list-nested and the blogs reutrn is singly?
    return data.find(item => item.post.metadata.slug === slug);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
