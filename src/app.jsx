
import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Search_header from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
    const [videos, setvideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectVideo = (video) =>{
        setSelectedVideo(video);
    }
    const search = query => {
            youtube
            .search(query)
            .then(videos => {
            setvideos(videos)
            setSelectedVideo(null);
            });
    };
    
    useEffect(() => {
            youtube
            .mostPopular()
            .then(videos => setvideos(videos));
    }, [youtube])
    return (
        <div className={styles.app}>
            <Search_header onSearch={search}/>
            <section className={styles.content}>
            { selectedVideo && (
                <div className={styles.detail}>
                    <VideoDetail video={selectedVideo} /> 
                </div>
            )}   
                <div className={styles.list}>
                    <VideoList 
                    videos={videos} 
                    onVideoClick={selectVideo} 
                    display={selectedVideo ? 'list' : 'grid'}
                    />
                </div> 
            </section>          
        </div>

    )
}

export default App;
