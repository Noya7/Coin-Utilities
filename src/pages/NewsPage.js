import NewsContainer from "../components/News/NewsContainer";

function NewsPage() {
  return (
    <NewsContainer />
  );
}

export default NewsPage;

export const loader = async () => {
  const clarinResponse = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.clarin.com%2Frss%2Feconomia%2F');
  const clarinObj = await clarinResponse.json()
  const ambitoResponse = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.ambito.com%2Frss%2Fpages%2Feconomia.xml')
  const ambitoObj = await ambitoResponse.json()
  const telamResponse = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.telam.com.ar%2Frss2%2Feconomia.xml')
  const telamObj = await telamResponse.json()
  const feed = {
    clarin: clarinObj.items,
    ambito: ambitoObj.items,
    telam: telamObj.items
  }
  return feed
}