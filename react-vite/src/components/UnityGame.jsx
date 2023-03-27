import React from 'react';
import { SectionWrapper } from "../hoc";
import { styles } from '../styles';

const UnityGame = () => {
  return (
    <div>
      
      <p className={styles.sectionSubText}>
        Interacting with a Solidity NFT <br className='sm:block hidden' />
        smart contract in a Unity Game
      </p>
      
      <iframe frameborder="0" src="https://itch.io/embed/1987632?bg_color=cfd39d&amp;fg_color=222222&amp;link_color=e28833&amp;border_color=828b52" width="552" height="167"><a href="https://manuerob.itch.io/mvp">[In progress] Ghost Land by manuerob</a></iframe>

    </div>
  );
};

export default SectionWrapper(UnityGame, "unity_game");