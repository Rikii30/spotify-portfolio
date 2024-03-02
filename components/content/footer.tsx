import { memo } from 'react';
import { PlayCircle, SkipBack, SkipForward, Shuffle, Volume2 } from 'react-feather'; // Example SVG icons, you can replace them with suitable icons/components

import socials from '../../data/socials';

const Footer: React.FC = memo(() => {
  return (
     <footer className="w-full p-4 md:p-6 bg-gray-400 text-gray-100 fixed bottom-0 border-t border-gray-300 h-16 md:h-24 flex justify-between items-center z-50">
      <div className="hidden md:block flex-1"></div>
      <div className="flex md:justify-center flex-1">
        <div className="flex items-center">
          <div
            className="transform hover:scale-105 hover:text-green-spotify transition duration-200 mx-2 md:mx-3"
          >
            <Shuffle strokeWidth={1.5} size={18} />
          </div>
          <div
            className="transform hover:scale-105 hover:text-green-spotify transition duration-200 mx-2 md:mx-3"
          >
        
            <SkipBack strokeWidth={1.5} size={18} />
          </div>
          <div
            className="transform hover:scale-105 hover:text-green-spotify transition duration-200 mx-2 md:mx-3"
          >
          
            <PlayCircle strokeWidth={1.5} size={18} />
          </div>
          <div
            className="transform hover:scale-105 hover:text-green-spotify transition duration-200 mx-2 md:mx-3"
          >
            <SkipForward strokeWidth={1.5} size={18} />
          </div>
          <div
            className="transform hover:scale-105 hover:text-green-spotify transition duration-200 mx-2 md:mx-3"
          >
            <Volume2 strokeWidth={1.5} size={18} />
          </div>
          {socials.map(({ id, icon: Icon, url }) => (
            <div
              key={id}
              className="transform hover:scale-105 hover:text-green-spotify transition duration-200 mx-2 md:mx-3"
            >
              <a href={url} target="_blank" rel="noreferrer">
                <Icon strokeWidth={1.5} size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="text-xs text-right flex-1">
        <div>Rikshitha's Portfolio</div>
        
      </div>
    </footer>
  );
});

export default Footer;
