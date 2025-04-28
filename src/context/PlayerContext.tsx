import React, { createContext, useState, ReactNode } from "react";

interface PlayerContextType {
  currentTrack: string | null;
  setCurrentTrack: React.Dispatch<React.SetStateAction<string | null>>;
}

const Player = createContext<PlayerContextType | undefined>(undefined);

interface PlayerContextProps {
  children: ReactNode;
}

const PlayerContext = ({ children }: PlayerContextProps) => {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);

  return (
    <Player.Provider value={{ currentTrack, setCurrentTrack }}>
      {children}
    </Player.Provider>
  );
};

export { PlayerContext, Player };
