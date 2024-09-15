
import './App.css';
import React, { useState, useEffect, useRef } from 'react';

//IMPROVED HIGH
const faststartUrl =
	'https://test-webm.s3.ap-southeast-2.amazonaws.com/improved_high.webm?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkgwRgIhAO3lxMXktNubw0nOnK%2F80os9LvCkBe3r0Gq71pu9lY9YAiEAlxqYDlUA53Ya4iPq1oytcMnTe14wKF7k7d2DyGT8Qfkq7QII5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1OTAxODM5MDEzMjYiDMELL9HwB%2BCv28FhOCrBAotdwoJK0%2B8a4EGak1pHbQTawKUmEl8YiWKTPC6vkTMPOehNbtEFRVEv2Oga10VM6QsAejV5BNssi8mDy2cCr1wpA5zAsZKOLi2Axkf01bN1pPkV4enbfbkK6GKlaIyJhz5U169rV3AaaNcgkrwKqAC00KLDHb0mjmOe0lPlvu8U0xIAFN0rKZmYOGaxNTRT3iJnEbE1euoRZkbhebkjQVIfZdefMi8uQp9HFfZvYG04PC7a0KWODC6loR3L2rXgdUi%2BxrTSZ5UNJRsYT%2BlDiVImSRGT0CAr10ww3%2FgiLndGXt1LO16%2F9%2BHwW4ejm4ALp35RzqfEKX4Hc1cO9tiJynwclggjJVjJvsGYJLRlbtjqXEVWAm4L23hnx8gtAzZ%2FywPnyCb2%2F%2BOGn%2BqSlox9wY%2F%2FvASFHMSuruTQgvV9vD871zCszJm3BjqyAvWqShna4RZaAO%2B%2BKjvJDknDd%2BMLn9QKFnmMRBxgPIQj3RPg8QkaIifujp2xlhaPVRywexS7uVUsiVSE2Aq27N9abZxGRu1pD8NFgsMhLxev4cpGClab4r2D5edF0Quc25LHocOIXhyCTw%2BWGltgGgjnCp82Wk6OXj960qE5syWwPcdCeehFLs2EDE9F2h7KEqfh62OA4y%2FVfaloXmO4xOk04FOxXA9dyVQC6K%2FcHtOdaDZhYF2gq%2Fkizf4vRbTHwQT%2FWFsu1vu0nDJczrNvF85HG9QfSWgeVXkLnVcC8MQnbIA%2FkjzcM%2FWKRSMt9A4BDfhAeCTISEg34kSv9ZlCEP8NS4F%2BhaqvHMPBNqR5oWz%2Bmf%2B6ucymCj4xVGR0IhjJK8cqhgbklgSb%2FvraZJ%2BwzvpGrQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240915T044817Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAYS2NTVCHOMBR4R2G%2F20240915%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=e1f5a2a952dd4dfc0504b74f58e18664cf753732e41ec2bdac8d44dda97124bf';

//BASE_MAX
  const normalUrl =
	'https://test-webm.s3.ap-southeast-2.amazonaws.com/base_max.webm?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkgwRgIhAO3lxMXktNubw0nOnK%2F80os9LvCkBe3r0Gq71pu9lY9YAiEAlxqYDlUA53Ya4iPq1oytcMnTe14wKF7k7d2DyGT8Qfkq7QII5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1OTAxODM5MDEzMjYiDMELL9HwB%2BCv28FhOCrBAotdwoJK0%2B8a4EGak1pHbQTawKUmEl8YiWKTPC6vkTMPOehNbtEFRVEv2Oga10VM6QsAejV5BNssi8mDy2cCr1wpA5zAsZKOLi2Axkf01bN1pPkV4enbfbkK6GKlaIyJhz5U169rV3AaaNcgkrwKqAC00KLDHb0mjmOe0lPlvu8U0xIAFN0rKZmYOGaxNTRT3iJnEbE1euoRZkbhebkjQVIfZdefMi8uQp9HFfZvYG04PC7a0KWODC6loR3L2rXgdUi%2BxrTSZ5UNJRsYT%2BlDiVImSRGT0CAr10ww3%2FgiLndGXt1LO16%2F9%2BHwW4ejm4ALp35RzqfEKX4Hc1cO9tiJynwclggjJVjJvsGYJLRlbtjqXEVWAm4L23hnx8gtAzZ%2FywPnyCb2%2F%2BOGn%2BqSlox9wY%2F%2FvASFHMSuruTQgvV9vD871zCszJm3BjqyAvWqShna4RZaAO%2B%2BKjvJDknDd%2BMLn9QKFnmMRBxgPIQj3RPg8QkaIifujp2xlhaPVRywexS7uVUsiVSE2Aq27N9abZxGRu1pD8NFgsMhLxev4cpGClab4r2D5edF0Quc25LHocOIXhyCTw%2BWGltgGgjnCp82Wk6OXj960qE5syWwPcdCeehFLs2EDE9F2h7KEqfh62OA4y%2FVfaloXmO4xOk04FOxXA9dyVQC6K%2FcHtOdaDZhYF2gq%2Fkizf4vRbTHwQT%2FWFsu1vu0nDJczrNvF85HG9QfSWgeVXkLnVcC8MQnbIA%2FkjzcM%2FWKRSMt9A4BDfhAeCTISEg34kSv9ZlCEP8NS4F%2BhaqvHMPBNqR5oWz%2Bmf%2B6ucymCj4xVGR0IhjJK8cqhgbklgSb%2FvraZJ%2BwzvpGrQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240915T044734Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAYS2NTVCHOMBR4R2G%2F20240915%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=acb5090af85e79a7136b4e21b13c7e41fcd21e7ee9fd1e84ed0792f9a96587fb';

function App() {
	return (
		<div className="App">
			<h1>Video Comparison</h1>

			<VideoPlayer src={faststartUrl} label="Faststart" />
			<p>Improved High</p>

			<VideoPlayer src={normalUrl} label="Normal" />
			<p>Base Max</p>
		</div>
	);
}

export default App;



function VideoPlayer({ src, label }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackDelay, setPlaybackDelay] = useState(null);
  const [bufferedData, setBufferedData] = useState(null);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play().catch(err => {
      setError('Error playing video: ' + err.message);
    });
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    const video = videoRef.current;
    let canPlayStartTime = null;

    const updateBufferedData = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        setBufferedData(bufferedEnd);
      }
    };

    const handleError = (event) => {
      setError('Playback error: ' + event.target.error.message);
    };

    if (!video.canPlayType('video/webm')) {
      setError('WebM is not supported in this browser.');
    } else {
      video.addEventListener('error', handleError);

      video.addEventListener('canplay', () => {
        canPlayStartTime = performance.now();
      });

      video.addEventListener('playing', () => {
        if (canPlayStartTime) {
          const canPlayEndTime = performance.now();
          setPlaybackDelay(canPlayEndTime - canPlayStartTime);
        }
      });

      video.addEventListener('progress', updateBufferedData);
    }

    return () => {
      video.removeEventListener('error', handleError);
      video.removeEventListener('progress', updateBufferedData);
    };
  }, [src]);

  return (
    <div>
      <h2>{label}</h2>
      <video
        ref={videoRef}
        autoPlay
        muted
        controls
        aria-label={`Video player for ${label}`}
        style={{ width: '100%', maxWidth: '600px' }}
      >
        <source src={src} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <button onClick={isPlaying ? handlePause : handlePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {playbackDelay !== null && <p>Playback delay: {playbackDelay.toFixed(2)} ms</p>}
      {bufferedData !== null && <p>Buffered data: {bufferedData.toFixed(2)} seconds</p>}
    </div>
  );
}




function WebmPlayer({ src, label }) {
	const [ isPlaying, setIsPlaying ] = useState(false);
	const [ playbackDelay, setPlaybackDelay ] = useState(null);
	const [ bufferedData, setBufferedData ] = useState(null);
	const videoRef = useRef(null);

	const handlePlay = () => {
		videoRef.current.play();
		setIsPlaying(true);
	};

	const handlePause = () => {
		videoRef.current.pause();
		setIsPlaying(false);
	};

	useEffect(
		() => {
			const video = videoRef.current;

			const updateBufferedData = () => {
				if (video.buffered.length > 0) {
					const bufferedEnd = video.buffered.end(video.buffered.length - 1);
					setBufferedData(bufferedEnd);
				}
			};

			// Check for browser support and handle errors
			if (!video.canPlayType('video/webm')) {
				console.error('WebM is not supported in this browser.');
			} else {
				video.addEventListener('error', (event) => {
					console.error('Playback error:', event.target.error);
				});

				// Measure playback delay
				const startTime = performance.now();
				video.addEventListener('loadeddata', () => {
					const endTime = performance.now();
					setPlaybackDelay(endTime - startTime);
				});

				// Update buffered data
				video.addEventListener('progress', updateBufferedData);
			}

			return () => {
				// Clean up event listeners
				video.removeEventListener('progress', updateBufferedData);
			};
		},
		[ src ]
	);

	return (
		<div>
			<video ref={videoRef} autoPlay muted controls>
				<source src={src} type="video/webm" />
			</video>
			<button onClick={isPlaying ? handlePause : handlePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
			{playbackDelay !== null && <p>Playback delay: {playbackDelay.toFixed(2)} ms</p>}
			{bufferedData !== null && <p>Buffered data: {bufferedData.toFixed(2)} seconds</p>}
		</div>
	);
}

// function WebmPlayer({ src }) {
// 	const [ isPlaying, setIsPlaying ] = useState(false);
// 	const [ playbackDelay, setPlaybackDelay ] = useState(null);
// 	const videoRef = useRef(null);

// 	const handlePlay = () => {
// 		videoRef.current.play();
// 		setIsPlaying(true);
// 	};

// 	const handlePause = () => {
// 		videoRef.current.pause();
// 		setIsPlaying(false);
// 	};

// 	useEffect(() => {
// 		// Check for browser support and handle errors
// 		const video = videoRef.current;
// 		if (!video.canPlayType('video/webm')) {
// 			console.error('WebM is not supported in this browser.');
// 		} else {
// 			video.addEventListener('error', (event) => {
// 				console.error('Playback error:', event.target.error);
// 			});

// 			// Measure playback delay
// 			const startTime = performance.now();
// 			video.addEventListener('loadeddata', () => {
// 				const endTime = performance.now();
// 				setPlaybackDelay(endTime - startTime);
// 			});
// 		}
// 	}, []);

// 	return (
// 		<div>
// 			<video ref={videoRef} controls>
// 				<source src={src} type="video/webm" />
// 			</video>
// 			<button onClick={isPlaying ? handlePause : handlePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
// 			{playbackDelay && <p>Playback delay: {playbackDelay} ms</p>}
// 		</div>
// 	);
// }

// function WebmPlayer({ src, label }) {
// 	const [ isPlaying, setIsPlaying ] = useState(false);
// 	const [ playbackDelay, setPlaybackDelay ] = useState(null);
// 	const [ bufferingTime, setBufferingTime ] = useState(null);
// 	const [ isReady, setIsReady ] = useState(false);
// 	const videoRef = useRef(null);

// 	useEffect(
// 		() => {
// 			const video = videoRef.current;

// 			// Ensure browser support
// 			if (!video.canPlayType('video/webm')) {
// 				console.error('WebM is not supported in this browser.');
// 				return;
// 			}

// 			// Measure buffering and start times
// 			const handleLoadedData = () => {
// 				if (isReady) return;

// 				const startTime = performance.now();
// 				video.addEventListener(
// 					'playing',
// 					() => {
// 						const endTime = performance.now();
// 						setPlaybackDelay(endTime - startTime);
// 						setIsReady(true);
// 					},
// 					{ once: true }
// 				);
// 			};

// 			const handleWaiting = () => {
// 				const startBufferingTime = performance.now();
// 				video.addEventListener(
// 					'playing',
// 					() => {
// 						const endBufferingTime = performance.now();
// 						setBufferingTime(endBufferingTime - startBufferingTime);
// 					},
// 					{ once: true }
// 				);
// 			};

// 			video.addEventListener('loadeddata', handleLoadedData);
// 			video.addEventListener('waiting', handleWaiting);

// 			return () => {
// 				video.removeEventListener('loadeddata', handleLoadedData);
// 				video.removeEventListener('waiting', handleWaiting);
// 			};
// 		},
// 		[ isReady ]
// 	);

// 	const handlePlay = () => {
// 		videoRef.current.play();
// 		setIsPlaying(true);
// 	};

// 	const handlePause = () => {
// 		videoRef.current.pause();
// 		setIsPlaying(false);
// 	};

// 	return (
// 		<div>
// 			<video ref={videoRef} controls>
// 				<source src={src} type="video/webm" />
// 			</video>
// 			<button onClick={isPlaying ? handlePause : handlePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
// 			{playbackDelay && (
// 				<p>
// 					{label} Playback delay: {playbackDelay.toFixed(2)} ms
// 				</p>
// 			)}
// 			{bufferingTime && (
// 				<p>
// 					{label} Buffering time: {bufferingTime.toFixed(2)} ms
// 				</p>
// 			)}
// 		</div>
// 	);
// }

// function VideoComparison() {
//   const [faststartLoadingTime, setFaststartLoadingTime] = useState(null);
//   const [normalLoadingTime, setNormalLoadingTime] = useState(null);

//   useEffect(() => {
//     const fetchPresignedUrls = async () => {
//       try {
//         // Your logic to fetch pre-signed URLs can go here
//         // ...

//         // Update video sources with pre-signed URLs
//         const faststartVideo = document.getElementById('faststart-video');
//         faststartVideo.src =
//         "https://test-webm.s3.ap-southeast-2.amazonaws.com/improved_high.webm?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkgwRgIhAO3lxMXktNubw0nOnK%2F80os9LvCkBe3r0Gq71pu9lY9YAiEAlxqYDlUA53Ya4iPq1oytcMnTe14wKF7k7d2DyGT8Qfkq7QII5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1OTAxODM5MDEzMjYiDMELL9HwB%2BCv28FhOCrBAotdwoJK0%2B8a4EGak1pHbQTawKUmEl8YiWKTPC6vkTMPOehNbtEFRVEv2Oga10VM6QsAejV5BNssi8mDy2cCr1wpA5zAsZKOLi2Axkf01bN1pPkV4enbfbkK6GKlaIyJhz5U169rV3AaaNcgkrwKqAC00KLDHb0mjmOe0lPlvu8U0xIAFN0rKZmYOGaxNTRT3iJnEbE1euoRZkbhebkjQVIfZdefMi8uQp9HFfZvYG04PC7a0KWODC6loR3L2rXgdUi%2BxrTSZ5UNJRsYT%2BlDiVImSRGT0CAr10ww3%2FgiLndGXt1LO16%2F9%2BHwW4ejm4ALp35RzqfEKX4Hc1cO9tiJynwclggjJVjJvsGYJLRlbtjqXEVWAm4L23hnx8gtAzZ%2FywPnyCb2%2F%2BOGn%2BqSlox9wY%2F%2FvASFHMSuruTQgvV9vD871zCszJm3BjqyAvWqShna4RZaAO%2B%2BKjvJDknDd%2BMLn9QKFnmMRBxgPIQj3RPg8QkaIifujp2xlhaPVRywexS7uVUsiVSE2Aq27N9abZxGRu1pD8NFgsMhLxev4cpGClab4r2D5edF0Quc25LHocOIXhyCTw%2BWGltgGgjnCp82Wk6OXj960qE5syWwPcdCeehFLs2EDE9F2h7KEqfh62OA4y%2FVfaloXmO4xOk04FOxXA9dyVQC6K%2FcHtOdaDZhYF2gq%2Fkizf4vRbTHwQT%2FWFsu1vu0nDJczrNvF85HG9QfSWgeVXkLnVcC8MQnbIA%2FkjzcM%2FWKRSMt9A4BDfhAeCTISEg34kSv9ZlCEP8NS4F%2BhaqvHMPBNqR5oWz%2Bmf%2B6ucymCj4xVGR0IhjJK8cqhgbklgSb%2FvraZJ%2BwzvpGrQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240915T044817Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAYS2NTVCHOMBR4R2G%2F20240915%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=e1f5a2a952dd4dfc0504b74f58e18664cf753732e41ec2bdac8d44dda97124bf"

//         const normalVideo = document.getElementById('normal-video');
//         normalVideo.src =
//         "https://test-webm.s3.ap-southeast-2.amazonaws.com/base_max.webm?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkgwRgIhAO3lxMXktNubw0nOnK%2F80os9LvCkBe3r0Gq71pu9lY9YAiEAlxqYDlUA53Ya4iPq1oytcMnTe14wKF7k7d2DyGT8Qfkq7QII5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1OTAxODM5MDEzMjYiDMELL9HwB%2BCv28FhOCrBAotdwoJK0%2B8a4EGak1pHbQTawKUmEl8YiWKTPC6vkTMPOehNbtEFRVEv2Oga10VM6QsAejV5BNssi8mDy2cCr1wpA5zAsZKOLi2Axkf01bN1pPkV4enbfbkK6GKlaIyJhz5U169rV3AaaNcgkrwKqAC00KLDHb0mjmOe0lPlvu8U0xIAFN0rKZmYOGaxNTRT3iJnEbE1euoRZkbhebkjQVIfZdefMi8uQp9HFfZvYG04PC7a0KWODC6loR3L2rXgdUi%2BxrTSZ5UNJRsYT%2BlDiVImSRGT0CAr10ww3%2FgiLndGXt1LO16%2F9%2BHwW4ejm4ALp35RzqfEKX4Hc1cO9tiJynwclggjJVjJvsGYJLRlbtjqXEVWAm4L23hnx8gtAzZ%2FywPnyCb2%2F%2BOGn%2BqSlox9wY%2F%2FvASFHMSuruTQgvV9vD871zCszJm3BjqyAvWqShna4RZaAO%2B%2BKjvJDknDd%2BMLn9QKFnmMRBxgPIQj3RPg8QkaIifujp2xlhaPVRywexS7uVUsiVSE2Aq27N9abZxGRu1pD8NFgsMhLxev4cpGClab4r2D5edF0Quc25LHocOIXhyCTw%2BWGltgGgjnCp82Wk6OXj960qE5syWwPcdCeehFLs2EDE9F2h7KEqfh62OA4y%2FVfaloXmO4xOk04FOxXA9dyVQC6K%2FcHtOdaDZhYF2gq%2Fkizf4vRbTHwQT%2FWFsu1vu0nDJczrNvF85HG9QfSWgeVXkLnVcC8MQnbIA%2FkjzcM%2FWKRSMt9A4BDfhAeCTISEg34kSv9ZlCEP8NS4F%2BhaqvHMPBNqR5oWz%2Bmf%2B6ucymCj4xVGR0IhjJK8cqhgbklgSb%2FvraZJ%2BwzvpGrQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240915T044734Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAYS2NTVCHOMBR4R2G%2F20240915%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=acb5090af85e79a7136b4e21b13c7e41fcd21e7ee9fd1e84ed0792f9a96587fb"
//       } catch (error) {
//         console.error('Error fetching pre-signed URLs:', error);
//       }
//     };

//     fetchPresignedUrls();

//     // Measure loading time for WebM Faststart
//     const faststartVideo = document.getElementById('faststart-video');
//     faststartVideo.addEventListener('loadeddata', () => {
//       const loadingTime = Date.now() - faststartVideo.startTime;
//       setFaststartLoadingTime(loadingTime);
//     });

//     // Measure loading time for WebM Normal
//     const normalVideo = document.getElementById('normal-video');
//     normalVideo.addEventListener('loadeddata', () => {
//       const loadingTime = Date.now() - normalVideo.startTime;
//       setNormalLoadingTime(loadingTime);
//     });
//   }, []);

//   return (
//     <div>
//       <video id="faststart-video" width="320" height="240">
//         <source /> {/* Placeholder source tag */}
//       </video>
//       <p>WebM Faststart Loading Time: {faststartLoadingTime !== null ? `${faststartLoadingTime} ms` : 'Loading...'}</p>
//       <video id="normal-video" width="320" height="240">
//         <source /> {/* Placeholder source tag */}
//       </video>
//       <p>WebM Normal Loading Time: {normalLoadingTime !== null ? `${normalLoadingTime} ms` : 'Loading...'}</p>
//     </div>
//   );
// }

// function VideoComparison() {
//   const [faststartLoadingTime, setFaststartLoadingTime] = useState(null);
//   const [normalLoadingTime, setNormalLoadingTime] = useState(null);

//   useEffect(() => {
//     const fetchPresignedUrls = async () => {
//       try {
//         // Replace with your actual API endpoint if needed
// const faststartUrl =
// "https://test-webm.s3.ap-southeast-2.amazonaws.com/improved_high.webm?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkgwRgIhAO3lxMXktNubw0nOnK%2F80os9LvCkBe3r0Gq71pu9lY9YAiEAlxqYDlUA53Ya4iPq1oytcMnTe14wKF7k7d2DyGT8Qfkq7QII5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1OTAxODM5MDEzMjYiDMELL9HwB%2BCv28FhOCrBAotdwoJK0%2B8a4EGak1pHbQTawKUmEl8YiWKTPC6vkTMPOehNbtEFRVEv2Oga10VM6QsAejV5BNssi8mDy2cCr1wpA5zAsZKOLi2Axkf01bN1pPkV4enbfbkK6GKlaIyJhz5U169rV3AaaNcgkrwKqAC00KLDHb0mjmOe0lPlvu8U0xIAFN0rKZmYOGaxNTRT3iJnEbE1euoRZkbhebkjQVIfZdefMi8uQp9HFfZvYG04PC7a0KWODC6loR3L2rXgdUi%2BxrTSZ5UNJRsYT%2BlDiVImSRGT0CAr10ww3%2FgiLndGXt1LO16%2F9%2BHwW4ejm4ALp35RzqfEKX4Hc1cO9tiJynwclggjJVjJvsGYJLRlbtjqXEVWAm4L23hnx8gtAzZ%2FywPnyCb2%2F%2BOGn%2BqSlox9wY%2F%2FvASFHMSuruTQgvV9vD871zCszJm3BjqyAvWqShna4RZaAO%2B%2BKjvJDknDd%2BMLn9QKFnmMRBxgPIQj3RPg8QkaIifujp2xlhaPVRywexS7uVUsiVSE2Aq27N9abZxGRu1pD8NFgsMhLxev4cpGClab4r2D5edF0Quc25LHocOIXhyCTw%2BWGltgGgjnCp82Wk6OXj960qE5syWwPcdCeehFLs2EDE9F2h7KEqfh62OA4y%2FVfaloXmO4xOk04FOxXA9dyVQC6K%2FcHtOdaDZhYF2gq%2Fkizf4vRbTHwQT%2FWFsu1vu0nDJczrNvF85HG9QfSWgeVXkLnVcC8MQnbIA%2FkjzcM%2FWKRSMt9A4BDfhAeCTISEg34kSv9ZlCEP8NS4F%2BhaqvHMPBNqR5oWz%2Bmf%2B6ucymCj4xVGR0IhjJK8cqhgbklgSb%2FvraZJ%2BwzvpGrQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240915T044817Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAYS2NTVCHOMBR4R2G%2F20240915%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=e1f5a2a952dd4dfc0504b74f58e18664cf753732e41ec2bdac8d44dda97124bf"
// const normalUrl =
// "https://test-webm.s3.ap-southeast-2.amazonaws.com/base_max.webm?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0yIkgwRgIhAO3lxMXktNubw0nOnK%2F80os9LvCkBe3r0Gq71pu9lY9YAiEAlxqYDlUA53Ya4iPq1oytcMnTe14wKF7k7d2DyGT8Qfkq7QII5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1OTAxODM5MDEzMjYiDMELL9HwB%2BCv28FhOCrBAotdwoJK0%2B8a4EGak1pHbQTawKUmEl8YiWKTPC6vkTMPOehNbtEFRVEv2Oga10VM6QsAejV5BNssi8mDy2cCr1wpA5zAsZKOLi2Axkf01bN1pPkV4enbfbkK6GKlaIyJhz5U169rV3AaaNcgkrwKqAC00KLDHb0mjmOe0lPlvu8U0xIAFN0rKZmYOGaxNTRT3iJnEbE1euoRZkbhebkjQVIfZdefMi8uQp9HFfZvYG04PC7a0KWODC6loR3L2rXgdUi%2BxrTSZ5UNJRsYT%2BlDiVImSRGT0CAr10ww3%2FgiLndGXt1LO16%2F9%2BHwW4ejm4ALp35RzqfEKX4Hc1cO9tiJynwclggjJVjJvsGYJLRlbtjqXEVWAm4L23hnx8gtAzZ%2FywPnyCb2%2F%2BOGn%2BqSlox9wY%2F%2FvASFHMSuruTQgvV9vD871zCszJm3BjqyAvWqShna4RZaAO%2B%2BKjvJDknDd%2BMLn9QKFnmMRBxgPIQj3RPg8QkaIifujp2xlhaPVRywexS7uVUsiVSE2Aq27N9abZxGRu1pD8NFgsMhLxev4cpGClab4r2D5edF0Quc25LHocOIXhyCTw%2BWGltgGgjnCp82Wk6OXj960qE5syWwPcdCeehFLs2EDE9F2h7KEqfh62OA4y%2FVfaloXmO4xOk04FOxXA9dyVQC6K%2FcHtOdaDZhYF2gq%2Fkizf4vRbTHwQT%2FWFsu1vu0nDJczrNvF85HG9QfSWgeVXkLnVcC8MQnbIA%2FkjzcM%2FWKRSMt9A4BDfhAeCTISEg34kSv9ZlCEP8NS4F%2BhaqvHMPBNqR5oWz%2Bmf%2B6ucymCj4xVGR0IhjJK8cqhgbklgSb%2FvraZJ%2BwzvpGrQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240915T044734Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAYS2NTVCHOMBR4R2G%2F20240915%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=acb5090af85e79a7136b4e21b13c7e41fcd21e7ee9fd1e84ed0792f9a96587fb"

//         const faststartVideo = document.getElementById('faststart-video');
//         faststartVideo.src = faststartUrl;

//         const normalVideo = document.getElementById('normal-video');
//         normalVideo.src = normalUrl;
//       } catch (error) {
//         console.error('Error fetching video URLs:', error);
//       }
//     };

//     fetchPresignedUrls();

//     // Measure loading time for WebM Faststart
//     const faststartVideo = document.getElementById('faststart-video');
//     faststartVideo.addEventListener('canplay', () => {
//       const startTime = faststartVideo.startTime; // Use startTime for accurate measurement
//       faststartVideo.addEventListener('loadedmetadata', () => {
//         const endTime = Date.now();
//         setFaststartLoadingTime(endTime - startTime);
//       });
//     });

//     // Measure loading time for WebM Normal
//     const normalVideo = document.getElementById('normal-video');
//     normalVideo.addEventListener('canplay', () => {
//       const startTime = normalVideo.startTime;
//       normalVideo.addEventListener('loadedmetadata', () => {
//         const endTime = Date.now();
//         setNormalLoadingTime(endTime - startTime);
//       });
//     });
//   }, []); // Empty dependency array to run only once

//   return (
//     <div>
//       <video id="faststart-video" width="320" height="240" controls>
//         <source src="" type="video/webm" /> {/* Default source tag */}
//       </video>
//       <p>
//         WebM Faststart Loading Time: {faststartLoadingTime !== null ? `${faststartLoadingTime} ms` : 'Loading...'}
//       </p>
//       <video id="normal-video" width="320" height="240" controls>
//         <source src="" type="video/webm" /> {/* Default source tag */}
//       </video>
//       <p>
//         WebM Normal Loading Time: {normalLoadingTime !== null ? `${normalLoadingTime} ms` : 'Loading...'}
//       </p>
//     </div>
//   );
// }

// // export default VideoComparison;

// import React, { useState, useRef, useEffect } from 'react';
