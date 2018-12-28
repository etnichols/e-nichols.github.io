webpackJsonp([0x85e59aa1ba01],{465:function(e,t){e.exports={data:{markdownRemark:{html:'<h3 id="introduction"><a href="#introduction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction</h3>\n<p>Americans spend an average of 4 hours and 5 minutes listening to music each day. [6] Music can have both positive and negative effects on the human body and mind. Athletes listen to pump-up music to prepare for games. Yoga instructors play Kirtan or Tibetan chants to enhance the focus of their participants. Music therapy programs seek to address physical, emotional, cognitive, and social needs of individuals. Different sounds provide different sensations to a human listener.</p>\n<p>The same type of effects can be said for light: soft candle lighting sets an intimate, relaxing environment, while the harsh fluorescent lighting of a classroom at 8:00 a.m. can be a rude awak- ening for bleary-eyed students. Red lighting puts us in a heightened state of alertness or awareness, while blue tends to relax us.</p>\n<p>We experience these two mediums so constantly that our physiological reactions to their stim- ulus are very much subconscious. Our project, LED Soundsystem, will gauge user’s physiological response to different music and light combinations. In particular, we will analyze different light- ing environments and their effects on listener’s heart rate. These findings will be paired with key acoustic attributes of each song – danceability, energy and valance – to see which attribute has the most impact on changes in heart rate. Additionally, the system will runs the above tests under three separate lighting environments to measure how much it affects physiological response as well.</p>\n<h3 id="problem-statement"><a href="#problem-statement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Problem Statement</h3>\n<p>Many people use music as a means of escape from stress or to alter their mood. Numerous studies, some of which are mentioned below, address this behavior and its effectiveness. However, very few address the influence of other environmental factors that could affect results substantially. LED Soundsystem provides a tool to test the influence of one of these environmental factors: lighting. By measuring physiological influence of combining music and different shades of light, LEDSoundSystem generates meaningful data that can be analyzed. Conclusions drawn from this analysis lead to assertions of correlation between light, music and physiological response. Our application will be able to identify which music and light combinations provide positive reactions, and which ones do not. This increased awareness could potentially improve the overall well-being of users. On a broader scale, aggregated data from this application could be incredibly valuable to Music Therapy researchers seeking to find the most therapeutic combinations of music and light.</p>\n<h3 id="system-design"><a href="#system-design" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>System Design</h3>\n<p>The final system design consists of 4 primary components: the iOS application, the Apple Watch application, the NodeJS/Express Raspberry Pi Server, and the Phillips HueTM LED lights. Each component and its purpose are described briefly below.</p>\n<h5 id="ios-application"><a href="#ios-application" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>iOS Application</h5>\n<p>The iOS Application handles authenticating the user’s Spotify account (to allow access to their API) and allows users to select a song for which to take heart rate measurements. The app utilizes Apple’s HealthKit framework to query the heart rate sensors embedded in the Apple Watch. After the user selects a song, the app takes measurable song data provided by the Spotify API, attaches the measured heart rate (queried every five seconds) and makes a POST call to a RESTful API built with Node.JS on the Pi.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/blockdiagram-b7ceed7ea3ade9b96aadb2a54b1b63ec-8b4cb.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 740px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 43.472409152086136%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAAAy0lEQVQoz4WR2Q6CMBBFS8uqIi6gRg1xS3zw///PW3KITYM6yQm0s3DnYswnEtGJh7iJljsrZmIuMu674LkXlShFYaKBC3ERR4aMkdKQUrMMaEQO6VicBM0WpsJGAixPhzo/1GxYJ0GVX2WLooycf6/FSTyp8Wvu6G9RvjL4VZNYBgNrivx5zce8X68g30FFzs8YDhUNCbIr1MUej+vFtji2KL9YNShrIm+nfPwZFmVncRgNDiJnvSs2/B3s+AF30TM8jAIve7xyU0Pew5gGOPixdMoAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="blockdiagram"\n        title=""\n        src="/static/blockdiagram-b7ceed7ea3ade9b96aadb2a54b1b63ec-87ff5.png"\n        srcset="/static/blockdiagram-b7ceed7ea3ade9b96aadb2a54b1b63ec-6d00f.png 185w,\n/static/blockdiagram-b7ceed7ea3ade9b96aadb2a54b1b63ec-24b81.png 370w,\n/static/blockdiagram-b7ceed7ea3ade9b96aadb2a54b1b63ec-87ff5.png 740w,\n/static/blockdiagram-b7ceed7ea3ade9b96aadb2a54b1b63ec-8b4cb.png 743w"\n        sizes="(max-width: 740px) 100vw, 740px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h5 id="apple-watch-application"><a href="#apple-watch-application" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Apple Watch Application</h5>\n<p>The Apple Watch application’s only purpose is to accept the ”begin workout” request from the iOS app and stream heart rate data to the phone while the song plays.</p>\n<h5 id="raspberry-pi-nodejsexpress-server"><a href="#raspberry-pi-nodejsexpress-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Raspberry Pi NodeJS/Express Server</h5>\n<p>The server handles storing data from the iOS app and creating output graphs for the heart rate and song attributes. It uses an array to store song information, and an array within each song to keep track of heart rate as data points are received via POST calls. When a song is complete, the information is formatted and sent to Plotly to generate graphs depicting heart rate vs. time and acoustic attributes vs. percentage change in heart rate. These graphs show us which part of the songs and acoustic attributes have the greatest physiological effects.</p>\n<h5 id="phillips-huetm-led-lights"><a href="#phillips-huetm-led-lights" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Phillips HueTM LED Lights</h5>\n<p>The lights constitute our final experimental variable. They are implemented using the ZigBee communication protocol. They are controlled using a Dresden Elektronik RaspBee module. This hat has a Zigbee module and antenna built directly into it and connects to the Pi?s GPIO pins. Using a modified version of Raspian, an operating system designed for the Pi, the lights can be controlled using a laptop connected to the Pi?s broadcasted WiFi or through an Ethernet cable. With this system, there is more versatility for installation, as being able to install this system when there are multiple wired and wireless networks that aren?t interconnected is nearly impossible.</p>\n<h3 id="results-and-analysis"><a href="#results-and-analysis" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Results and Analysis</h3>\n<p>We gathered heart rate data using a playlist of 8 songs from Spotify, across a variety of acoustic attributes. We ran our tests using three different lighting environments: a control environment of plain white light, a strong red, and a cool blue. With all other factors held constant, this allowed us to gauge how much lights effect heart rate. The light color is taken into account in the Plotly graphs. Timestamped measurements were sent to and stored on the server. These measurements were then cleaned, removing all ”jumpy” data and misreads (i.e. any measurement showing a +/- 20 BPM drop within a span of 1-3 seconds was thrown out, as these would be characteristic of a heart attack, not a reaction to song or light). Graphs for the heart rate data across the three lighting environments were then created using Plot.ly. Time series plots of Bon Iver’s ”Skinny Love,” and Big Gigantic’s ”It’s Goin’ Down” are below.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/goodtimeseries-25f614bfd97a576e6207144a99b98119-5ee0a.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 740px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 48.827160493827165%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABL0lEQVQoz21Si27FIAjt/3/pkmW5t62KqHAGVju7jQRfHI68Npio6q3z7pJzRkoJMca+t9bwgwcumJ37er1vIoIpupC7uE2MpJoS18U22GYAhjv2N2qt2HxpoqildOdJXJqC7a3kCM6EEBO0pM7h+Kk6iN23RxhfnyAi0PuFsO9olqYbKUS0sFuUBjTtGEpIplwqUi62N3ATKH5kC18fVqxk+dkvlUHnjhwO8PGGUriBPYvMkMIWPlm0EeAA5tw/vGuYY4CkNEpipCo4z4QcCcIMtZKIl8PSFmuO+pldLyLyjEYfOmGrrRdV1+7am6ckDma+CGt9TMH0OfPzfXuOgv4doVX/wRxUbqyn2buMYfTQV/A6Un2EFvs8U2nPCG/24bQa/e7drSPd3x88SjD0G2YHFgLmp9XFAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="goodtimeseries"\n        title=""\n        src="/static/goodtimeseries-25f614bfd97a576e6207144a99b98119-87ff5.png"\n        srcset="/static/goodtimeseries-25f614bfd97a576e6207144a99b98119-6d00f.png 185w,\n/static/goodtimeseries-25f614bfd97a576e6207144a99b98119-24b81.png 370w,\n/static/goodtimeseries-25f614bfd97a576e6207144a99b98119-87ff5.png 740w,\n/static/goodtimeseries-25f614bfd97a576e6207144a99b98119-316f3.png 1110w,\n/static/goodtimeseries-25f614bfd97a576e6207144a99b98119-fb1ab.png 1480w,\n/static/goodtimeseries-25f614bfd97a576e6207144a99b98119-5ee0a.png 1620w"\n        sizes="(max-width: 740px) 100vw, 740px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/itsgoindown-c57f5d7b9191df227124172c708f031c-2555d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 740px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 51.53256704980843%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABc0lEQVQoz11S2W7DMAzL///hMAx72YauTdv4dnxxlNO46QwIPiSRlKyptYb/JivnDKUUtNbdlmUZ+7quPeaZg7Gmw3mAyaq1IqXUgXMuSDQ5y5v4evwzk7kVpVRMcvUhoK6+u/xamHCgqQkoEUhuQGzEDYXAIdAXPObfE4y1G+BNGajlCu8MbExwa+5mY0aLBi2RLAX2IXTI+uBy3uI839CcQ6Y6qX2yvFh1hzYOtRQm216SJFkfkOKmfGWpKbrer0YlovD98wfqfEN2biifNJ1+vgBGb4/OoukrZWRU9sUtdwIlGJZmGONcRDhdUKnu7eML8a7An+rKO2CMsfdQZAtzN8Myl5m986jcl98r28ifDRppPlORRTx9w5Oo8qPaUWEvh2PQ5OcETAK6UhKw2X1nuZD9QhJvAPYV8/zy0/uETHIQlftDYR+rnGVkOIf7iGTpq8wfXVliSh3zOsZoVzgGmibOAf64C2F5KN9JXwQcAP8AjA0RMq0zXbYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="itsgoindown"\n        title=""\n        src="/static/itsgoindown-c57f5d7b9191df227124172c708f031c-87ff5.png"\n        srcset="/static/itsgoindown-c57f5d7b9191df227124172c708f031c-6d00f.png 185w,\n/static/itsgoindown-c57f5d7b9191df227124172c708f031c-24b81.png 370w,\n/static/itsgoindown-c57f5d7b9191df227124172c708f031c-87ff5.png 740w,\n/static/itsgoindown-c57f5d7b9191df227124172c708f031c-2555d.png 1044w"\n        sizes="(max-width: 740px) 100vw, 740px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>We aggregated data from all 24 tests using R and Microsoft Excel. We examined initial, maximum, and average heart rates, as well as the max differential, all illustrated in the table below.</p>\n<p>The control lighting produced both the highest average heart rate, as well as the highest differ- ential of +10 BPM. This disproved our initial hypothesis of the red lighting producing the highest average heart rate and differential. In fact, the red lighting environment produced the lowest average heart rate across the three tests seven out of eight times, by an average margin of -5.4 BPM.</p>\n<p>It is worth noting some possible sources of errors in our measurements. As mentioned before, the Apple Watch has a tendency to send very inaccurate readings near the beginning and end of the sessions. While most of these instances were cleaned before graphing, there were a few readings in the middle of measurement sessions that displayed huge drops in heart rate. The test subject’s physiological response may have been less noticeable after the second and third exposure to the same song, even with different lighting environments. Lastly, there was little done in terms of mental and physical preparation before each tests, i.e. we did not try to have the test subject begin with the same resting heart rate at the beginning of each test.</p>\n<h3 id="related-work"><a href="#related-work" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Related Work</h3>\n<p>A UC Berkeley study revealed that connections between music and color was strongly influenced by emotion. [5] Participants were asked to match 18 different selections of classical music to a color. Faster music in a major mode was consistently matched with lighter, yellower color choices while slower music in a minor mode produced darker, more saturated blue colors. Participants from both the United States and Mexico were included in the study to take into account potential ”cultural dependencies;” however, the patterns and color choices were consistent across both cultures.</p>\n<p>Listening to classical and relaxing music after exposure to stressors can reduce anger and anxiety, and stimulate the sympathetic nervous system. [4] Similarly, light has distinct effects on mood and emotional response. Ambient brightness triggers the intensity of human’s affective response, while reducing lights can reduce the emotionality of everyday decisions. [2]</p>\n<p>A 1998 research paper from the Alternative Therapies journal studied the impacts that different music genres have upon tension and mood within listeners. Different age groups were tested using four different music genres: grunge rock, classical, new age, and designer. Mood indicators were measured before and after listening to the different genres. The study observed that every genre did affect mood in varying intensities [3].</p>\n<p>Other research shows links between ambient brightness and humans’ affective response. Bright sunny days have both positive and negative effects: they can fill the heart with joy, but they are also associated with heartbreak. [1] Similarly, sunny days cause depression-prone people to become more depressed. Suicides peak in late spring and summer, and reach their lowest point during the winter months. Bright light tends to amplify a person’s initial emotional response, whether that be positive or negative. [2]</p>\n<h3 id="notes-on-development"><a href="#notes-on-development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Notes on Development</h3>\n<p>Cole handled the bulk iOS and Apple Watch application, I did the Express server and data analysis, Ian handled controlling the lights via a Raspberry Pi.</p>\n<p>I got my feet wet with this <a href="http://blog.modulus.io/nodejs-and-express-create-rest-api">helpful tutorial</a>, and further modified it to suit my needs. The server needed to handle initial song POST request, followed by heartrate data POSTs specific to that song.</p>\n<p>I utilized <a href="https://www.getpostman.com/">Postman</a> to test the server – super easy to learn and quite helpful.</p>\n<p>Link to our <a href="https://github.com/LEDSoundsystem">Github Repo</a>.</p>\n<h3 id="references"><a href="#references" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>References</h3>\n<ol>\n<li>S. Kevan. <a href="http://www.sciencedirect.com/science/article/pii/0160800280900052">Perspectives on season of suicide: A review.</a> Social Science &#x26; Medicine, 14(4):369– 378, dec 1980.</li>\n<li>A. Jing Xu A. Labroo. Incandescent affect: <a href="http://www.sciencedirect.com/science/article/pii/S1057740813001174">Turning on the hot emotional system with bright light.</a> Journal of Consumer Psychology, 24(2):207–216, apr 2007.</li>\n<li>Rollin McCraty. <a href="http://www.hartfocus.nl/UserFiles/Image/Music_Mood_Effects.pdf">Effects of different types of music on mood, tension and mental clarity.</a> Alter- native Therapies, 4:75–84, 1998.</li>\n<li>E. Labbe N. Schmidt J. Babin M. Pharr. <a href="http://link.springer.com/article/10.1007/s10484-007-9043-9#/page-1">Coping with stress: the effectiveness of different types of music.</a> Applied Psychophysiology and Biofeedback, 32(3):132–168, dec 2007.</li>\n<li>S. Palmer K. Schloss Z. Xu L. Prado-Leon. <a href="http://www.pnas.org/content/110/22/8836">Music and Color associations are mediated by emotion.</a> Proceedings of the National Academy of Sciences of the United States of America, 110(22):8836– 8841, may 2013.</li>\n<li>Edison Research. <a href="http://www.edisonresearch.com/edison-research-conducts-first-ever-share-of-ear-measurement-for-all-forms-of-online-and-offline-audio/">Share of ear: Americans’ share of time spent listening to audio sources</a>, jun 2014.</li>\n</ol>\n<p><i>Completely unrelated to LED Soundsystem: I did a really cool lighting talk for this class regarding the potential security flaws found in the Zigbee protocol. Presentation slides are available <a href="https://docs.google.com/presentation/d/1LUWWX5FCqcx3Q958lidHzCkJW_FE08mY49uE6NfL3oQ/edit?usp=sharing">here</a>, along with the <a href="https://www.blackhat.com/docs/us-15/materials/us-15-Zillner-ZigBee-Exploited-The-Good-The-Bad-And-The-Ugly-wp.pdf">original paper off which I based the talk</a>.\n</i></p>',timeToRead:8,tableOfContents:'<ul>\n<li><a href="/projects/led-soundsystem/#introduction">Introduction</a></li>\n<li><a href="/projects/led-soundsystem/#problem-statement">Problem Statement</a></li>\n<li>\n<p><a href="/projects/led-soundsystem/#system-design">System Design</a></p>\n<ul>\n<li>\n<ul>\n<li><a href="/projects/led-soundsystem/#ios-application">iOS Application</a></li>\n<li><a href="/projects/led-soundsystem/#apple-watch-application">Apple Watch Application</a></li>\n<li><a href="/projects/led-soundsystem/#raspberry-pi-nodejsexpress-server">Raspberry Pi NodeJS/Express Server</a></li>\n<li><a href="/projects/led-soundsystem/#phillips-huetm-led-lights">Phillips HueTM LED Lights</a></li>\n</ul>\n</li>\n</ul>\n</li>\n<li><a href="/projects/led-soundsystem/#results-and-analysis">Results and Analysis</a></li>\n<li><a href="/projects/led-soundsystem/#related-work">Related Work</a></li>\n<li><a href="/projects/led-soundsystem/#notes-on-development">Notes on Development</a></li>\n<li><a href="/projects/led-soundsystem/#references">References</a></li>\n</ul>',fields:{tagSlugs:["/tags/i-os/","/tags/spotify-api/","/tags/project/"]},frontmatter:{title:"LED Soundsystem",tags:["iOS","Spotify API","project"],date:"April 28, 2015",author:{id:"Evan Nichols",bio:"Software Engineer out of NYC writing about programming, web development and more.",avatar:{children:[{__typename:"ImageSharp",responsiveResolution:{src:"/static/evan-9e6a6b67e58d77cd1bc023a71bd56378-c4f5a.jpg",srcSet:"/static/evan-9e6a6b67e58d77cd1bc023a71bd56378-c4f5a.jpg 1x,\n/static/evan-9e6a6b67e58d77cd1bc023a71bd56378-27112.jpg 1.5x,\n/static/evan-9e6a6b67e58d77cd1bc023a71bd56378-f5e46.jpg 2x,\n/static/evan-9e6a6b67e58d77cd1bc023a71bd56378-592c8.jpg 3x"}}]}}}}},pathContext:{slug:"/projects/led-soundsystem/"}}}});
//# sourceMappingURL=path---projects-led-soundsystem-f84aa8149a0b8646c1bc.js.map