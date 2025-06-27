import React ,{useEffect,useState}from 'react'
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
import "./YoutubeVideos.css"
import "../../assets/css/bootstrap.css"
function YoutubeVideos() {
const [YouTubeVideos,setYouTubeVideos]=useState([])
const [sortOption,setSortOption]=useState("date")
useEffect(()=>{
    const url =(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=${API_KEY}`)
fetch(url)
.then(response=>{
  return response.json()
})
.then(data=>{
  // console.log(data)
  setYouTubeVideos(data.items);
})
.catch(err=>{console.log(err.message)})
},[])
console.log(YouTubeVideos)


  return (
    <>
      <section className="youtubeVideosWrapper ">
        <div className="title-wraper">
           Latest videos 
        </div>
        <div className="allVideosWrapper container-fluid ">
          <div className="videosWrapper  row">
            {YouTubeVideos?.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div className="col-sm-12 col-md-4">
                  <div key={i} className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink}>
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt="thumbnails"
                        />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink}>{singleVideo.snippet.title}</a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default YoutubeVideos




//optional chaining 
//  is a feature in JavaScript (and some other languages) that allows you to safely access deeply nested properties of an object without having to check if each level exists. It prevents runtime errors that occur when you try to access a property of undefined or null.
// The optional chaining operator (?.) checks if the value before it (YouTubeVideos) is null or undefined. If YouTubeVideos is null or undefined, the expression short-circuits and returns undefined instead of throwing an error. If YouTubeVideos is defined (e.g., an array), the map method is called as usual.