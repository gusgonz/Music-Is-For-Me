import React, { useState, useEffect } from "react";
import API from "../../utils/API";


const authEndpoint = 'https://accounts.spotify.com/authorize?';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "93f3e7a8e86a42458d76a49b88d88648";
const redirectUri = "http://localhost:3000/";
const scopes = ["user-read-private", "user-read-email"];

// Get the hash of the url
const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function (initial, item) {
        if (item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
    }, {});
window.location.hash = "";

function ConnectToSpotify(props) {

    const [spotifyToken, setSpotifyToken] = useState();

    useEffect(() => {
        // Set token
        console.log(spotifyToken);
        let _token = hash.access_token;
        console.log(_token);
        if (_token) {
            API.getSpotifyData(_token)
                .then(response => {
                    console.log(response);
                    API.saveSpotifyData(props.userID, response.data)
                        .then(resp => console.log(resp));
                })
                .catch(err => console.log(err));
            // Set token
            setSpotifyToken({
                token: _token
            });
        }
        // need an if to check if the user is connected to spotify
        if (spotifyToken) {

        }

    }, []);

    return (
        <div>
            {!spotifyToken && (
                <a
                    className="btn btn--loginApp-link"
                    href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
                >
                    Connect to Spotify
                </a>
            )
            }
            {
                spotifyToken && (
                    <p>Connected To Spotify</p>
                )
            }

        </div>
    )
}

export default ConnectToSpotify;