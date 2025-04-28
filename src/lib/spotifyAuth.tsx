import * as AuthSession from 'expo-auth-session';

type SpotifyAuthResult = string | null; 

export const spotifyAuth = async (): Promise<SpotifyAuthResult> => {
    const config = {
    issuer: "https://accounts.spotify.com",
    clientId: process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID as string,
    scopes: [
      "user-read-email",
      "user-library-read",
      "user-read-recently-played",
      "user-top-read",
      "playlist-read-private",
      "playlist-read-collaborative",
      "playlist-modify-public",
    ],
    redirectUri: AuthSession.makeRedirectUri(),
  };

  const discovery: AuthSession.DiscoveryDocument = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  };

  const authRequest = new AuthSession.AuthRequest({
    clientId: config.clientId,
    scopes: config.scopes,
    redirectUri: config.redirectUri,
    responseType: AuthSession.ResponseType.Token,
  });

  const result = await authRequest.promptAsync(discovery);

  if (result.type === 'success' && result.authentication?.accessToken) {
    console.log('Access Token:', result.authentication.accessToken);
    return result.authentication.accessToken;
  } else {
    console.log('Authentication failed or canceled');
    return null;
  }
};
