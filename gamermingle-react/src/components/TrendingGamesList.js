import React from 'react';
import './styles/TrendingGamesStyle.css';

const TrendingGamesList = () => {
  // Static data for the games with dummy URLs
  const games = [
    { id: 1, name: "League of Legends", imageUrl: "https://brand.riotgames.com/static/a91000434ed683358004b85c95d43ce0/3591c/lol-logo.webp", url: "https://www.leagueoflegends.com/" },
    { id: 2, name: "Counter Strike 2", imageUrl: "https://cdn.cloudflare.steamstatic.com/apps/csgo/images/csgo_react/global/logo_cs_sm_blk.svg", url: "https://www.counter-strike.net/" },
    { id: 3, name: "Lethal Company", imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1966720/header.jpg?t=1700231592", url: "https://store.steampowered.com/app/1966720/Lethal_Company/" },
    { id: 4, name: "Fortnite", imageUrl: "https://cdn2.unrealengine.com/blade-2560x1440-2560x1440-6b1174ff6f66.jpg", url: "https://www.fortnite.com/" },
    { id: 5, name: "Apex Legends", imageUrl: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg", url: "https://www.ea.com/games/apex-legends" }
  ];

  return (
    <div className="trending-games-section">
        <h2 className="games-list-title">Explore Trending Games</h2>
        <div className="trending-games-list">
        {games.map(game => (
            <a key={game.id} href={game.url} className="list-item" target="_blank" rel="noopener noreferrer">
            <img src={game.imageUrl} alt={game.name} />
            <h3>{game.name}</h3>
            </a>
        ))}
        </div>
    </div>
  );
};

export default TrendingGamesList;
