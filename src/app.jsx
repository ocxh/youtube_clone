
import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
    const [videos, setvideos] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCvy1wJYY6bxPb0AxdcbTmk7bWn1L0TKnY", 
        requestOptions)
            .then(response => response.json())
            .then(result => setvideos(result.items))
            .catch(error => console.log('error', error));
    }, [])
    return <VideoList videos={videos} />;
}

export default App;
