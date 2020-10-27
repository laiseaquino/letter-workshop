import React from "react";
import "./styles.css";

const App = () => {

    const apiKey = "your API key";
    const [videos, setVideos] = React.useState([]);

    React.useEffect(() => {
        fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&part=" +
                "contentDetails&maxResults=5&playlistId=PLwWyDK8eZvNPzz53-Uz_DFXDJwoQb6c7W&key=" + apiKey)
            .then(response => response.json())
            .then(data => {
                console.log(data.items);
                setVideos(data.items);
            });
    }, []);

    return (
        <>
            {videos.map(video => (
                <VideoCard
                    thumbnail={video.snippet.thumbnails.medium.url}
                    name={video.snippet.title}
                    date={video.snippet.publishedAt} 
                />                   
            ))}
        </>
    );
};

const VideoCard = props => {
    return (
        <div className="video-card">
            <img src={props.thumbnail} alt="profile" />
            <div className="video-details">
                <p>Nome: {props.name}</p>
                <p>Data: {props.date}</p>
            </div>
        </div>
    );
};

export default App;