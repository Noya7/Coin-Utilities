import classes from './NewsItem.module.css'

// const testObject = {
//     title: "Euro hoy: a cuánto cotiza este domingo 27 de agosto",
//     pubDate: "2023-08-27 10:00:02",
//     link: "https://www.clarin.com/economia/euro-hoy-cotiza-domingo-27-agosto_0_H8n9ha8W28.html",
//     guid: "https://www.clarin.com/economia/euro-hoy-cotiza-domingo-27-agosto_0_H8n9ha8W28.html",
//     author: "Clarin.com",
//     thumbnail: "",
//     description: "Mirá la cotización minuto a minuto para la compra y venta del euro oficial y del euro blue.",
//     content: "Mirá la cotización minuto a minuto para la compra y venta del euro oficial y del euro blue.",
//     enclosure: {
//         link: "https://www.clarin.com/img/2018/12/27/h_JN2Am_3_600x338__1.jpg",
//         type: "image/jpg"
//     },
//     categories: []
// }

function NewsItem ({object, id}) {
    return(
        <li id={id}>
            <a target='blank' href={object.link}>
                <h1>{object.title}</h1>
                {object.enclosure.link ? <img src={object.enclosure.link} alt={object.content} /> : ''}
            </a>
            <p className={classes.description}>{object.content}</p>
            <p className={classes.date}>Publicado: {object.pubDate}</p>
        </li>
    )
}

export default NewsItem;