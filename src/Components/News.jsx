import { Component } from 'react'
import Newsitems from './Newsitems'

export default class News extends Component {

  articles = [
    {
        "source":{
            "id":"bbc-sport",
            "name":"BBC Sport"
        },
        "author":null,
        "title":"De Kock stars as South Africa thrash Bangladesh",
        "description":"Watch the highlights as South Africa trounce Bangladesh by 149 runs at the Cricket World Cup in Mumbai.","url":"http://www.bbc.co.uk/sport/av/cricket/67205375",
        "urlToImage":"https://ichef.bbci.co.uk/news/1024/cpsprodpb/5317/production/_131517212_p0gnjbqn.jpg","publishedAt":"2023-10-24T17:22:14.2871378Z",
        "content":"'You have one chance, be ready' - Xavi's advice to Guiu before debut. Video, 00:00:57'You have one chance, be ready' - Xavi's advice to Guiu before debut"
    },
    {
        "source":{
            "id":"espn-cric-info",
            "name":"ESPN Cric Info"
        },
        "author":null,
        "title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt":"2020-04-27T11:41:47Z",
        "content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source":{
                "id":"espn-cric-info",
                "name":"ESPN Cric Info"
            },
            "author":null,"title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt":"2020-03-30T15:26:05Z",
            "content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
            }]

  constructor(){
    super();
    // console.log("Hello I am a Constractor from News");
    this.state = {
      articles: this.articles,
      loading : false
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e9c5bc30bf9f416784636792d432827a";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles})
  }

  render() {
    return (
        <div className='container my-3 m-auto'>
          <h1>Top Headlines</h1>
          <div className='grid grid-cols-3 gap-4'>

          {this.state.articles.map((element) => {
            return  <Newsitems key={element.url} title = {element.title} discription = {element.description} imageurl = {element.urlToImage} newsurl={element.url} />
          })}
          </div>
        </div>
    )
  }
}
