import React from "react";
import "./styles.css";

const App = () => {

    const [videos, setVideos] = React.useState([]);

    React.useEffect(() => {
        fetch("https://randomuser.me/api/?results=3")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setVideos(data.results);
            });
    }, []);

    return (
        <>
            {videos.map(video => (
                <VideoCard
                    thumbnail={video.picture.large}
                    name={video.name.first + " " + video.name.last}
                    desc={video.email}
                    date={video.dob.date} 
                />                   
            ))}
        </>
    );
};

const VideoCard = props => {
    const [showDate, setShowDate] = React.useState(true);

    return (
        <div className="video-card">
            <img src={props.thumbnail} alt="profile" />
            <div className="video-details">
                <p>Nome: {props.name}</p>
                <p>Tópico: {props.desc}</p>
                <button onClick={() => setShowDate(!showDate)}>Exibir Data </button>
                {showDate && <p>Data: {props.date}</p>}
            </div>
        </div>
    );
};

export default App;