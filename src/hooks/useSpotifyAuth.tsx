import React, { useEffect } from 'react';
import * as AuthSession from 'expo-auth-session';
import { useAuth } from '../context/AuthContext';
import * as SecureStore from 'expo-secure-store';


const CLIENT_ID = process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID as string;

const REDIRECT_URI = AuthSession.makeRedirectUri({
  scheme: 'myapp',
  path: 'login',
});

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export const useSpotifyAuth = () => {
  const { setUser } = useAuth();

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: CLIENT_ID,
      scopes: [
        'user-read-email',
        'user-library-read',
        'user-read-recently-played',
        'user-top-read',
        'playlist-read-private',
        'playlist-read-collaborative',
        'playlist-modify-public',
      ],
      redirectUri: REDIRECT_URI,
      responseType: 'code',
      usePKCE: true,
    },
    discovery
  );

  useEffect(() => {
    const exchangeToken = async () => {
      if (response?.type === 'success' && request?.codeVerifier) {
        const code = response.params.code;

        const body = new URLSearchParams();
        body.append('client_id', CLIENT_ID);
        body.append('grant_type', 'authorization_code');
        body.append('code', code);
        body.append('redirect_uri', REDIRECT_URI);
        body.append('code_verifier', request.codeVerifier);

        try {
          const res = await fetch(discovery.tokenEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: body.toString(), 
          });

          const tokenResult = await res.json();
          if (tokenResult.access_token) {
            await SecureStore.setItemAsync('spotify_access_token', tokenResult.access_token);
            setUser(tokenResult);
          } else {
            console.error('Token error:', tokenResult);
          }
        } catch (err) {
          console.error('Fetch error:', err);
        }
      }
    };

    exchangeToken();
  }, [response]);

  return { request, promptAsync };
};
