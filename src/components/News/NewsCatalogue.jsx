import { useLoaderData } from 'react-router-dom';
import NewsItem from './NewsItem';
import classes from './NewsCatalogue.module.css'

const NewsCatalogue = ({source}) => {
  const sources = useLoaderData();
  let currentSource = Object.values(sources)[source]

  const mappedNews = currentSource.map((item, index)=><NewsItem object={item} key={index} />)

  return(
    <div className={classes.newsContainer}>
      <ul>
        {mappedNews}
      </ul>
    </div>
  )
}

export default NewsCatalogue;